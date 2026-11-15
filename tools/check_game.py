#!/usr/bin/env python3
"""乾杯！居酒屋 上線前自動檢查（headless Chrome，全部用真實點擊）。

用法：python3 tools/check_game.py [--only 名稱,名稱] [--quick]
結束碼 0 = 全部通過，1 = 有失敗。失敗時會列出是哪個情境、哪一步、什麼錯誤。

涵蓋（對應 CLAUDE.md 的「踩過的坑」）：
  boot      全新玩家開頁面不能有任何 JS 錯誤
  styles    三種畫風（舊畫風 / 新背景舊食物 / 全新畫風）各跑一次：繼續 → 開店 → 營業 → 暫停 → 回主頁
  replay    選日期重玩：選一天 → 開始重玩 → 營業 → 回主頁（放棄重玩）
  shops     每家店的商店：每個分頁、每個買／升級按鈕都真的點過，買到全部擁有後再逐頁重開
  layout    橫向手機、iOS 縮放（layout viewport 約螢幕 2 倍）、Android、平板、桌機：舞台不能縮成一小塊、不能被切掉
  pick      選店橫向卡片、說明預設收合、設定「進遊戲後先到哪」（店家選單／暖簾街）
  saves     玩完整條路徑後，玩家原本的存檔欄位一個都不能少、不認得的欄位原封不動
"""
import argparse, functools, http.server, json, os, shutil, socketserver, sys, threading, time, traceback
from playwright.sync_api import sync_playwright

ROOT = os.environ.get('CHECK_ROOT') or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # CHECK_ROOT：測試用，指到別的資料夾

UA_IOS = ('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 '
          '(KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1')
UA_ANDROID = ('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 '
              '(KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36')

# 有錢、有進度的存檔（key 與遊戲 fresh() 一致）。zz_ 開頭是遊戲不認得的欄位，用來驗證「不會被改掉或刪掉」
SAVE_KEY, REC_KEY = 'izakaya-cook-v1', 'izakaya-rec-v1'
SEED_SAVE = {
    'day': 5, 'coins': 900000000, 'debt': 0, 'loans': 0, 'dues': [], 'dec': {},
    'up': {'seats': 3, 'grill': 3, 'fryer': 2, 'warmN': 3, 'tap': False, 'warm': False, 'decor': False, 'cat': False},
    'stars': {}, 'zz_future_field': {'a': 1, 'b': [1, 2, 3]},
}
SEED_REC = {'zz_future_rec': {'keep': 'me'}, 'zz_counter': 42}


class Quiet(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=ROOT, **k)

    def log_message(self, *a):
        pass


def start_server():
    socketserver.TCPServer.allow_reuse_address = True
    srv = socketserver.TCPServer(('127.0.0.1', 0), Quiet)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, 'http://127.0.0.1:%d' % srv.server_address[1]


class Ctx:
    """一個獨立瀏覽器環境 + 一個頁面 + 錯誤收集。外部網路全部擋掉，只放行本機。"""

    def __init__(self, browser, base, seed=True, style=None, profile=None, locale='zh-TW'):
        self.base, self.errors = base, []
        prof = dict(viewport={'width': 844, 'height': 390})
        prof.update(profile or {})
        self.profile = prof
        self.ctx = browser.new_context(locale=locale, **prof)
        self.ctx.route('**/*', lambda r: r.continue_() if r.request.url.startswith(base) else r.abort())
        ls = {}
        if seed:
            ls[SAVE_KEY] = json.dumps(SEED_SAVE)
            ls[REC_KEY] = json.dumps(SEED_REC)
        if style:
            ls['izakaya-style'] = style
        # 只在第一次載入時種入，之後重新整理不能蓋掉遊戲自己存的進度
        self.ctx.add_init_script(
            "if(!localStorage.getItem('__seeded')){const d=%s;for(const k in d)localStorage.setItem(k,d[k]);"
            "localStorage.setItem('__seeded','1')}" % json.dumps(ls))
        self.page = self.ctx.new_page()
        self.page.on('pageerror', lambda e: self.errors.append('pageerror: %s' % e))
        self.page.on('console', self._console)
        self.page.on('dialog', lambda d: d.accept())

    def _console(self, m):
        if m.type != 'error':
            return
        t = m.text
        if 'Failed to load resource' in t or 'net::ERR' in t:  # 外部網路被擋造成的，不是遊戲的錯
            return
        self.errors.append('console.error: %s' % t[:300])

    def open(self, wait=2200):
        self.page.goto(self.base + '/index.html', wait_until='domcontentloaded', timeout=60000)
        self.page.wait_for_timeout(wait)
        return self

    def close(self):
        self.ctx.close()

    # ---- 真實點擊 ----
    def click(self, sel, timeout=8000, wait=500):
        try:
            self.page.click(sel, timeout=timeout)
        except Exception as e:
            raise AssertionError('點不到 %s\n%s' % (sel, self.diag(str(e).splitlines()[0][:140])))
        self.page.wait_for_timeout(wait)

    def diag(self, why=''):
        """失敗時印出當下畫面狀態，並存一張截圖到 /tmp/check-fail.png"""
        try:
            self.page.screenshot(path='/tmp/check-fail.png')
            acts = self.page.eval_on_selector_all('[data-act]', 'e=>[...new Set(e.map(x=>x.dataset.act+(x.dataset.id?":"+x.dataset.id:"")))]')
            modal = self.page.evaluate("(document.querySelector('.modal')||{innerText:''}).innerText.slice(0,90).replace(/\\n/g,' / ')")
            st = self.page.evaluate("typeof HOME==='undefined'?'?':('HOME='+HOME+' R='+(typeof R!=='undefined'&&!!R))")
        except Exception:
            return '  （連畫面狀態都讀不到）' + why
        return '  原因：%s\n  畫面狀態：%s\n  目前 modal：%s\n  畫面上的按鈕：%s\n  截圖：/tmp/check-fail.png' % (why, st, modal or '（無）', acts)

    def has(self, sel):
        return self.page.locator(sel).count() > 0

    def dismiss_modals(self, rounds=4):
        """真人看到公告會點空白處關掉；有 modal 就點它的背景。"""
        for _ in range(rounds):
            if not self.has('.modal'):
                return
            self.page.mouse.click(3, 3)
            self.page.wait_for_timeout(350)

    def expect_clean(self, where):
        if self.errors:
            raise AssertionError('%s 之後出現 JS 錯誤：\n  - %s' % (where, '\n  - '.join(self.errors[:6])))


# ------------------------------------------------------------------ 情境
def to_day(c, run_ms=4500):
    """主頁 → 繼續營業 → 開始營業 → 營業一小段時間（全部真實點擊）。"""
    c.dismiss_modals()
    c.click('[data-act=cont]', wait=900)
    c.expect_clean('按「繼續營業」')
    c.click('[data-act=start]', wait=run_ms)
    c.expect_clean('按「開始營業」並營業 %.1f 秒' % (run_ms / 1000))
    if not c.page.evaluate('typeof R!=="undefined"&&!!R&&!HOME'):
        raise AssertionError('按了開始營業，但遊戲沒有進入營業狀態')


def day_to_home(c):
    c.click('[data-act=pause]', wait=500)
    c.click('.modal [data-act=home]', wait=1000)
    c.expect_clean('暫停 → 回到主頁')
    c.dismiss_modals()


def sc_boot(b, base):
    c = Ctx(b, base, seed=False).open(3000)
    try:
        c.expect_clean('全新玩家開啟頁面')
        if not c.has('[data-act=newgame], [data-act=cont], [data-act=chopen]'):
            raise AssertionError('主畫面沒有出現任何開始按鈕')
    finally:
        c.close()


def sc_styles(b, base):
    for style, label in (('old', '舊畫風'), ('mix', '新背景舊食物'), ('new', '全新畫風')):
        c = Ctx(b, base, style=style).open()
        try:
            got = c.page.evaluate('ARTSTYLE')
            if got != style:
                raise AssertionError('%s：畫風設定沒有生效（ARTSTYLE=%s）' % (label, got))
            to_day(c)
            day_to_home(c)
            c.expect_clean('%s 完整一輪' % label)
        except AssertionError as e:
            raise AssertionError('[%s] %s' % (label, e))
        finally:
            c.close()


def sc_replay(b, base):
    for style in ('old', 'mix', 'new'):
        c = Ctx(b, base, style=style).open()
        try:
            c.dismiss_modals()
            c.click('[data-act=replay]', wait=800)
            c.expect_clean('開啟選日期重玩')
            opts = c.page.eval_on_selector_all('#rpday option', 'e=>e.map(x=>x.value)')
            if not opts:
                raise AssertionError('選日期重玩：下拉選單沒有任何日期')
            # 第一個與最後一個日期都要能開始
            for v in (opts[0], opts[-1]):
                c.page.select_option('#rpday', v)
                c.click('[data-act=replayok]', wait=900)
                c.expect_clean('選日期重玩（日期 %s）按下開始重玩' % v)
                if not c.page.evaluate('RP.on'):
                    raise AssertionError('按了開始重玩但 RP.on 不是 true（日期 %s）' % v)
                c.click('[data-act=start]', wait=4000)  # 重玩也要在選店畫面按「開始營業」
                c.expect_clean('選日期重玩（日期 %s）營業' % v)
                if not c.page.evaluate('typeof R!=="undefined"&&!!R&&!HOME'):
                    raise AssertionError('重玩按了開始營業，但遊戲沒有進入營業狀態（日期 %s）' % v)
                day_to_home(c)
                c.dismiss_modals()
                c.click('[data-act=replay]', wait=800)
        except AssertionError as e:
            raise AssertionError('[畫風 %s] %s' % (style, e))
        finally:
            c.close()


# 商店頁面中「不能亂點」的按鈕（會離開商店、重開存檔或需要外部登入）
SHOP_SKIP = {'back', 'shopback', 'closem', 'home', 'quit', 'asknew', 'newgame', 'restart', 'login', 'logout',
             'start', 'chat', 'fb', 'social', 'share', 'mp', 'town', 'branch', 'where', 'dayshop', 'preprops',
             # 各分店的「開店／教學」按鈕：點了會直接開始營業或進教學，不是商店本身
             'susopen', 'sugopen', 'baropen', 'okoopen', 'tpopen', 'chopen', 'gomatog', 'tstgrantgo', 'tstlookgo'}


def crawl_modal(c, label, per_key=2, cap=260):
    """在目前開著的 modal 裡，把每一種按鈕都真的點過（買／升級／切分頁…）。每種按鈕最多點 per_key 次。"""
    seen, steps = {}, 0
    while steps < cap:
        if not c.has('.modal'):
            return steps
        keys = c.page.eval_on_selector_all(
            '.modal [data-act]',
            "e=>e.filter(x=>!x.disabled).map(x=>x.dataset.act+'\\u0001'+(x.dataset.id||''))")
        todo = [k for k in keys if k.split('\u0001')[0] not in SHOP_SKIP and seen.get(k, 0) < per_key]
        if not todo:
            return steps
        k = todo[0]
        seen[k] = seen.get(k, 0) + 1
        act, _, ident = k.partition('\u0001')
        sel = '.modal [data-act="%s"]' % act + ('[data-id="%s"]' % ident if ident else '')
        try:
            c.page.locator(sel).first.click(timeout=4000)
        except Exception as e:
            raise AssertionError('%s：點不到 %s（%s）' % (label, k.replace('\u0001', ':'), str(e).splitlines()[0][:100]))
        c.page.wait_for_timeout(120)
        steps += 1
        c.expect_clean('%s：點了 %s' % (label, k.replace('\u0001', ':')))
        if c.page.evaluate('typeof R!=="undefined"&&!!R&&!HOME'):
            raise AssertionError('%s：點了「%s」之後遊戲直接開店了。這顆是「開店」類按鈕，'
                                 '請把它的 data-act 加進 tools/check_game.py 的 SHOP_SKIP' % (label, k.replace('\u0001', ':')))
    return steps


def shop_btn(c):
    """選店畫面上「進商店」的按鈕。居酒屋是 dayshop，壽司是 sushishop…：找名字以 shop 結尾的（不含 buyshop）。"""
    acts = c.page.eval_on_selector_all('.modal [data-act]', 'e=>e.map(x=>x.dataset.act)')
    for a in acts:
        if a.endswith('shop') and a != 'buyshop':
            return '[data-act=%s]' % a
    return None


def ensure_where(c):
    """回到「選店畫面」（有各分店 where 按鈕的那個）。買下分店後有的會直接跳進該店商店，要按返回才回得來。"""
    for _ in range(6):
        if c.has('[data-act=where]'):
            return
        if c.page.evaluate('typeof R!=="undefined"&&!!R&&!HOME'):  # 按「返回」有時會直接開店，跟真人一樣：暫停 → 回主頁
            day_to_home(c)
        elif c.has('.modal [data-act=back]'):
            c.click('.modal [data-act=back]', wait=600)
        elif c.has('[data-act=cont]'):
            c.click('[data-act=cont]', wait=800)
        else:
            c.dismiss_modals()
    if not c.has('[data-act=where]'):
        raise AssertionError('回不到選店畫面\n' + c.diag())


def sc_shops(b, base):
    c = Ctx(b, base).open()
    try:
        c.dismiss_modals()
        c.click('[data-act=cont]', wait=900)
        # 先把玩家看得到的分店都買下來（存檔有錢），之後每家店都是「已擁有」狀態
        for home_act, buy_act in (('rmhome', 'buyrm'), ('sushihome', 'buysushi'), ('tephome', 'buytep')):
            ensure_where(c)
            if c.has('[data-act=%s]' % home_act):
                c.click('[data-act=%s]' % home_act, wait=600)
                if c.has('.modal [data-act=%s]' % buy_act):
                    c.click('.modal [data-act=%s]' % buy_act, wait=900)
                elif c.has('.modal [data-act=back]'):
                    c.click('.modal [data-act=back]', wait=500)
                c.expect_clean('買下分店 %s' % home_act)
        ensure_where(c)
        # 首次進壽司／拉麵會自動播新手教學（那是「新手路徑」，不是商店檢查），所以先標成看過
        c.page.evaluate("if(ST){if(ST.sushi){ST.sushi.seen=true;ST.sushi.tutAsk=true}if(ST.rm)ST.rm.seen=true;save()}")
        shops = list(dict.fromkeys(c.page.eval_on_selector_all('[data-act=where]', 'e=>e.map(x=>x.dataset.id)')))
        if not shops:
            raise AssertionError('選店畫面找不到任何分店按鈕（where）\n' + c.diag())
        total, tested, skipped = 0, [], []
        for rnd in (1, 2):  # 第 1 輪：把東西買下；第 2 輪：全部「擁有」的狀態下每個分頁再開一次
            for sid in shops:
                ensure_where(c)
                c.click('[data-act=where][data-id="%s"]' % sid, wait=500)
                sb = shop_btn(c)
                if not sb:  # 未解鎖／需要作者權限才能買的分店（例如炎舞鐵板燒）：玩家看不到商店，略過
                    if sid not in skipped:
                        skipped.append(sid)
                    continue
                if sid not in tested:
                    tested.append(sid)
                c.click(sb, wait=800)
                total += crawl_modal(c, '第%d輪・%s 商店' % (rnd, sid), per_key=2 if rnd == 1 else 1)
        ensure_where(c)
        c.expect_clean('逛完全部商店')
        if total < 10:
            raise AssertionError('商店檢查只點了 %d 下，太少，可能是商店畫面改版導致找不到按鈕' % total)
        missing = [x for x in ('iz', 'rm', 'sushi') if x not in tested]
        if missing:
            raise AssertionError('這幾家主要商店沒有測到：%s（測到：%s）' % (missing, tested))
        print('      （商店共真實點擊 %d 次；測到：%s；略過：%s）' % (total, ', '.join(tested), ', '.join(skipped) or '無'))
    finally:
        c.close()


PROFILES = {
    'iPhone 橫向 844x390': dict(viewport={'width': 844, 'height': 390}, screen={'width': 844, 'height': 390},
                              has_touch=True, is_mobile=True, user_agent=UA_IOS, device_scale_factor=3),
    'iPhone 全螢幕 874x402': dict(viewport={'width': 874, 'height': 402}, screen={'width': 874, 'height': 402},
                                has_touch=True, is_mobile=True, user_agent=UA_IOS, device_scale_factor=3),
    'iOS 頁面縮放（layout viewport 約螢幕 2 倍）': dict(viewport={'width': 1748, 'height': 804},
                                      screen={'width': 874, 'height': 402}, has_touch=True, is_mobile=False,
                                      user_agent=UA_IOS, device_scale_factor=3),
    'Android 橫向 915x412': dict(viewport={'width': 915, 'height': 412}, screen={'width': 915, 'height': 412},
                               has_touch=True, is_mobile=True, user_agent=UA_ANDROID, device_scale_factor=2.6),
    '平板 1024x768': dict(viewport={'width': 1024, 'height': 768}, has_touch=True, is_mobile=False),
    '桌機 1366x768': dict(viewport={'width': 1366, 'height': 768}),
}


def stage_rect(c):
    return c.page.evaluate("""()=>{const e=document.getElementById('game');if(!e)return null;
      const r=e.getBoundingClientRect();return {l:r.left,t:r.top,r:r.right,b:r.bottom,w:r.width,h:r.height,
      vw:innerWidth,vh:innerHeight}}""")


def assert_stage(c, where, name):
    r = stage_rect(c)
    if not r:
        raise AssertionError('[%s] %s：找不到舞台元素 #game' % (name, where))
    small = r['w'] < 0.8 * r['vw'] and r['h'] < 0.8 * r['vh']
    clipped = r['r'] > r['vw'] + 2 or r['b'] > r['vh'] + 2 or r['l'] < -2 or r['t'] < -2
    desc = '舞台 %dx%d，視窗 %dx%d' % (r['w'], r['h'], r['vw'], r['vh'])
    if small:
        raise AssertionError('[%s] %s：舞台縮成一小塊（%s）' % (name, where, desc))
    if clipped:
        raise AssertionError('[%s] %s：舞台超出視窗被切掉（%s，位置 %d,%d → %d,%d）'
                             % (name, where, desc, r['l'], r['t'], r['r'], r['b']))


def sc_pick(b, base):
    """選店：橫向卡片（同一列、可橫向捲動）、說明文字預設收合、設定的「進遊戲後先到哪」兩種模式都要真的點過"""
    c = Ctx(b, base).open()
    try:
        c.dismiss_modals()
        c.click('[data-act=cont]', wait=900)
        cards = c.page.evaluate("[...document.querySelectorAll('.modal .shopcar .shopc')].map(e=>{const r=e.getBoundingClientRect();return [e.dataset.act,Math.round(r.top),Math.round(r.width),Math.round(r.height)]})")
        if len(cards) < 3:
            raise AssertionError('選店畫面的橫向卡片少於 3 張：%r' % cards)
        if max(x[1] for x in cards) - min(x[1] for x in cards) > 3:
            raise AssertionError('選店卡片沒有排成同一列（不是橫向）：%r' % cards)
        small = [x for x in cards if x[2] < 44 or x[3] < 44]
        if small:
            raise AssertionError('選店卡片實際大小小於 44px：%r' % small)
        if not c.has('.modal .shopcar [data-act=town]'):
            raise AssertionError('選店卡片最後面沒有暖簾街')
        if c.has('.modal .infowrap'):
            raise AssertionError('還沒選店就先出現了說明文字')
        c.click('[data-act=where][data-id=iz]', wait=700)
        if not c.has('.modal .infowrap'):
            raise AssertionError('選了店之後沒有「營業說明」區塊')
        if c.page.evaluate("document.querySelector('.modal .infowrap').open"):
            raise AssertionError('第 5 天的營業說明應該預設收合')
        c.click('.modal .infowrap > summary', wait=400)
        if '營業時間' not in c.page.evaluate("document.querySelector('.modal .infowrap').innerText"):
            raise AssertionError('展開營業說明後看不到營業時間')
        c.click('.modal [data-act=start]', wait=2500)  # 卡片選完之後照樣能開店
        if not c.page.evaluate('typeof R!=="undefined"&&!!R&&!HOME'):
            raise AssertionError('卡片選店後按開店營業，沒有進入營業')
        day_to_home(c)
        # 設定：進遊戲後先到哪 → 暖簾街，繼續就直接在街上
        c.click('[data-act=snd]', wait=600)
        c.click('.modal [data-act=entrymode][data-id=town]', wait=500)
        if c.page.evaluate("localStorage.getItem('izakaya-entry')") != 'town':
            raise AssertionError('設定選了暖簾街，但沒有存起來')
        c.dismiss_modals()
        c.click('[data-act=cont]', wait=1500)
        if not c.has('.modal .town'):
            raise AssertionError('設定成暖簾街模式，按繼續卻沒有直接進暖簾街')
        c.click('.modal .town [data-act=home]', wait=800)
        c.dismiss_modals()
        # 改回店家選單，繼續就看到卡片
        c.click('[data-act=snd]', wait=600)
        c.click('.modal [data-act=entrymode][data-id=list]', wait=500)
        c.dismiss_modals()
        c.click('[data-act=cont]', wait=900)
        if not c.has('.modal .shopcar .shopc'):
            raise AssertionError('改回店家選單後，按繼續沒有看到選店卡片')
        c.expect_clean('橫向選店與進入模式')
    finally:
        c.close()


def sc_layout(b, base):
    for name, prof in PROFILES.items():
        c = Ctx(b, base, profile=prof).open(2600)
        try:
            c.dismiss_modals()
            assert_stage(c, '主畫面', name)
            c.click('[data-act=cont]', wait=1200)
            assert_stage(c, '選店畫面', name)
            c.click('[data-act=dayshop]', wait=1000)
            assert_stage(c, '商店', name)
            c.click('.modal [data-act=back]', wait=600)
            c.click('[data-act=start]', wait=3500)
            assert_stage(c, '營業中', name)
            c.expect_clean('[%s] 版面檢查' % name)
        finally:
            c.close()


def sc_saves(b, base):
    c = Ctx(b, base, style='old').open()
    try:
        to_day(c, run_ms=3000)
        day_to_home(c)
        c.dismiss_modals()
        c.page.reload()
        c.page.wait_for_timeout(2200)
        save = json.loads(c.page.evaluate('localStorage.getItem(%r)' % SAVE_KEY) or 'null')
        rec = json.loads(c.page.evaluate('localStorage.getItem(%r)' % REC_KEY) or 'null')
        if not isinstance(save, dict):
            raise AssertionError('玩完後讀不到存檔（%s）' % SAVE_KEY)
        miss = [k for k in SEED_SAVE if k not in save]
        if miss:
            raise AssertionError('存檔欄位被刪掉了：%s' % miss)
        if save.get('zz_future_field') != SEED_SAVE['zz_future_field']:
            raise AssertionError('存檔裡遊戲不認得的欄位被改掉了：%r' % save.get('zz_future_field'))
        if save.get('day', 0) < SEED_SAVE['day']:
            raise AssertionError('天數倒退：%s → %s' % (SEED_SAVE['day'], save.get('day')))
        if isinstance(rec, dict):
            miss = [k for k in SEED_REC if k not in rec]
            if miss:
                raise AssertionError('個人紀錄欄位被刪掉了：%s' % miss)
            if rec.get('zz_future_rec') != SEED_REC['zz_future_rec']:
                raise AssertionError('個人紀錄裡不認得的欄位被改掉了')
            if rec.get('zz_counter', 0) < SEED_REC['zz_counter']:
                raise AssertionError('個人紀錄計數倒退：%s → %s' % (SEED_REC['zz_counter'], rec.get('zz_counter')))
        elif rec is None:
            raise AssertionError('個人紀錄（%s）整份消失了' % REC_KEY)
        c.expect_clean('存檔檢查')
    finally:
        c.close()


SCENARIOS = [('boot', sc_boot), ('styles', sc_styles), ('replay', sc_replay), ('shops', sc_shops),
             ('pick', sc_pick), ('layout', sc_layout), ('saves', sc_saves)]


def find_chrome():
    for p in (os.environ.get('CHROME'), shutil.which('google-chrome'), shutil.which('chromium'),
              shutil.which('chromium-browser'), '/usr/bin/google-chrome'):
        if p and os.path.exists(p):
            return p
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--only', default='')
    args = ap.parse_args()
    only = {x for x in args.only.split(',') if x}
    srv, base = start_server()
    fails = []
    with sync_playwright() as p:
        exe = find_chrome()
        kw = dict(args=['--no-sandbox', '--autoplay-policy=no-user-gesture-required'])
        b = p.chromium.launch(executable_path=exe, **kw) if exe else p.chromium.launch(**kw)
        for name, fn in SCENARIOS:
            if only and name not in only:
                continue
            t0 = time.time()
            try:
                fn(b, base)
                print('  ✓ %-7s (%.0fs)' % (name, time.time() - t0))
            except Exception as e:
                fails.append(name)
                msg = str(e) if isinstance(e, AssertionError) else ''.join(traceback.format_exception_only(type(e), e))
                print('  ✗ %-7s (%.0fs)\n      %s' % (name, time.time() - t0, msg.replace('\n', '\n      ')))
        b.close()
    srv.shutdown()
    if fails:
        print('\n❌ 檢查失敗：%s。修好之後整套重跑，不要只重跑失敗的那一項。' % ', '.join(fails))
        sys.exit(1)
    print('\n✅ 遊戲檢查全部通過')


if __name__ == '__main__':
    main()
