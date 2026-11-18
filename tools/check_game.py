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
  bar       月影酒吧：右邊卡片的步驟清單（不蓋到手邊酒瓶、做酒時標出目前這步）、教學三杯用真實按住／畫圈／來回滑做完（含轉身到酒櫃拿酒）、打烊結算；第二天在商店買酒和配料、
            故意做錯 → 重做、再做曼哈頓（抖苦精、馬丁尼杯、手邊滿三瓶要換）和瑪格麗特（配料 B 頁的鹽口）；第三天暫停回主頁
  tut       新手教學（小夜對話框）：居酒屋真實點擊進入並點完、上一步、海風壽司教學點完、製作教學跳過；立繪載入、對話框不超出、按鈕 44px
  oko       御好燒店（作者限定）：從麵糊開始真實點擊加料做完四道菜、順序錯加不進去、空手連點倒掉、放太久會焦、做好放保溫台、📖 做法暫停
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
        if c.page.evaluate("document.querySelector('.modal .shopcar .shopc').dataset.act")!='town':
            raise AssertionError('選店卡片第一張應該是暖簾街')
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


def sc_lyed(b, base):
    """📐 排版編輯（作者工具）：真實觸控點擊。選取不會觸發遊戲；👆進入才會真的按下去；進到成就／排行榜／設定等每個畫面都要能選、能移動；玩家端沒有按鈕。"""
    prof = dict(viewport={'width': 844, 'height': 390}, has_touch=True, is_mobile=True, device_scale_factor=2)
    pl = Ctx(b, base, profile=prof).open()          # 一般玩家：沒有排版按鈕，也不載入觀察器
    try:
        pl.dismiss_modals()
        if pl.has('[data-lyed]'):
            raise AssertionError('一般玩家不該看到排版工具')
    finally:
        pl.close()
    c = Ctx(b, base, profile=prof).open()
    pg = c.page
    try:
        c.dismiss_modals(8)
        pg.evaluate("CL.user={email:ADMIN_EMAIL,uid:'t',name:'t',photo:''};acctRefresh()")
        pg.wait_for_timeout(1800)
        for _ in range(6):   # 登入後公告會自己彈出來，先關乾淨
            if not pg.evaluate("!!document.querySelector('#homeModal .modal,#modalLayer .modal')"):
                break
            pg.evaluate("try{closeModal()}catch(e){}")
            pg.wait_for_timeout(400)
        pg.tap('[data-lyed]')
        pg.wait_for_timeout(300)
        pg.tap('#lyBar [data-ly="pos"]')   # 工具列換到上面，不要蓋住下方按鈕

        def center(sel):
            r = pg.locator(sel).first.bounding_box()
            return r['x'] + r['width'] / 2, r['y'] + r['height'] / 2

        def modal_open():
            return pg.evaluate("!!document.querySelector('#homeModal .modal,#modalLayer .modal')")

        for act in ('ach', 'lb', 'social', 'dex', 'snd', 'fb', 'acct', 'chat'):
            pg.evaluate("try{closeModal()}catch(e){}")
            pg.wait_for_timeout(250)
            if not pg.evaluate("!!document.querySelector('#lyBar [data-ly=\"go\"]')"):
                pg.tap('#lyBar [data-ly="max"]')
            x, y = center('[data-act="%s"]' % act)
            pg.touchscreen.tap(x, y)
            pg.wait_for_timeout(250)
            if modal_open():
                raise AssertionError('排版中點 %s 不該直接開畫面（只能選取）' % act)
            pg.tap('#lyBar [data-ly="go"]')
            pg.wait_for_timeout(900)
            if not modal_open():
                raise AssertionError('選了 %s 按 👆進入 沒有打開畫面' % act)
            tgt = pg.evaluate("""(()=>{const c=document.querySelector('#homeModal .card,#modalLayer .card');
              const bs=[...c.querySelectorAll('button,[data-act],h2,h3,img')].filter(e=>{const r=e.getBoundingClientRect();
              return r.width>10&&r.height>10&&r.top>60&&r.bottom<innerHeight-10&&r.left>0&&r.right<innerWidth});
              const e=bs[Math.min(2,bs.length-1)];if(!e)return null;const r=e.getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()""")
            if not tgt:
                raise AssertionError('%s 畫面裡找不到可選的東西' % act)
            pg.touchscreen.tap(*tgt)
            pg.wait_for_timeout(250)
            l0 = pg.evaluate('LY.el.getBoundingClientRect().left')
            for _ in range(3):
                pg.tap('#lyBar [data-ly="mv"][data-d="1,0"]')
            if pg.evaluate('LY.el.getBoundingClientRect().left') - l0 < 1:
                raise AssertionError('%s 畫面裡的東西移不動' % act)
        pg.evaluate("closeModal()")
        # 進遊戲：選開始營業 → 👆進入 → 選教學跳過/開店
        c.expect_clean('排版編輯')
        pg.evaluate("lyClose()")
        # 營業中從暫停選單／設定進入排版（不必先在首頁開）
        to_day(c, run_ms=1500)
        pg.evaluate("CL.user={email:ADMIN_EMAIL,uid:'t',name:'t',photo:''}")
        for how in ('pause', 'sndg'):
            c.click('[data-act=pause]', wait=500)
            if how == 'sndg':
                c.click('.modal [data-act=sndg]', wait=500)
            c.click('.modal [data-lyed]', wait=700)
            if not pg.evaluate("!!$('lyBar')&&LY.sel"):
                raise AssertionError('營業中從 %s 進排版，沒有出現工具列' % how)
            if pg.evaluate("!!document.querySelector('#modalLayer .modal')"):
                raise AssertionError('進排版後對話框沒關')
            if pg.evaluate("R.paused"):
                raise AssertionError('進排版後遊戲還停在暫停')
            saved0 = pg.evaluate("localStorage.getItem(LYKEY)")
            x, y = center('#st-edamame')
            pg.touchscreen.tap(x, y)
            pg.wait_for_timeout(250)
            l0 = pg.evaluate('LY.el.getBoundingClientRect().left')
            for _ in range(3):
                pg.tap('#lyBar [data-ly="mv"][data-d="1,0"]')
            if pg.evaluate('LY.el.getBoundingClientRect().left') - l0 < 1:
                raise AssertionError('營業中的排版移不動')
            # 2026/11/18：移動不能自動存；回去玩（⏸操作）或關掉（✕）時要問要不要儲存
            if pg.evaluate("localStorage.getItem(LYKEY)") != saved0:
                raise AssertionError('排版一移動就自動存了（應該等離開時問）')
            pg.tap('#lyBar [data-ly="%s"]' % ('close' if how == 'pause' else 'min'))
            pg.wait_for_timeout(300)
            if not c.has('#lyOut.lyask [data-lyo=save]') or not c.has('#lyOut.lyask [data-lyo=nosave]'):
                raise AssertionError('排版改過後按%s，沒有問要不要儲存' % ('✕' if how == 'pause' else '⏸操作'))
            bx_shot(c, 'ly-ask')
            pg.tap('#lyOut.lyask [data-lyo=stay]')
            pg.wait_for_timeout(200)
            if c.has('#lyOut.lyask') or not pg.evaluate("LY.on&&LY.sel"):
                raise AssertionError('按「繼續排版」沒有回到排版')
            pg.tap('#lyBar [data-ly="%s"]' % ('close' if how == 'pause' else 'min'))
            pg.wait_for_timeout(300)
            if how == 'pause':
                pg.tap('#lyOut.lyask [data-lyo=nosave]')
                pg.wait_for_timeout(300)
                if pg.evaluate("localStorage.getItem(LYKEY)") != saved0 or pg.evaluate("LY.on"):
                    raise AssertionError('選「不儲存」後還是存了，或排版沒關')
                if abs(pg.evaluate("$('st-edamame').getBoundingClientRect().left") - l0) > 1:
                    raise AssertionError('選「不儲存」後毛豆沒有回到原位')
            else:
                pg.tap('#lyOut.lyask [data-lyo=save]')
                pg.wait_for_timeout(300)
                if not pg.evaluate("(()=>{const v=JSON.parse(localStorage.getItem(LYKEY)||'null');return !!v&&v.r.some(r=>(r.x||0)>0)})()") or pg.evaluate("LY.sel"):
                    raise AssertionError('選「儲存」後沒有存到，或沒有回到遊戲')
                # 2026/11/18：⏸操作 收起後不能留左上角浮動的 📐 鈕（設定裡已有入口）
                if pg.evaluate("LY.on||!!$('lyBar')||!!document.querySelector('[data-ly=\"max\"]')"):
                    raise AssertionError('按 ⏸操作 後還留著浮動的 📐 排版鈕')
                # 從暫停選單重新打開；沒改東西時按 ✕ 不用問
                c.click('[data-act=pause]', wait=500)
                c.click('.modal [data-lyed]', wait=700)
                if not pg.evaluate("!!$('lyBar')&&LY.sel"):
                    raise AssertionError('收起後從暫停選單重開排版失敗')
                pg.tap('#lyBar [data-ly="close"]')
                pg.wait_for_timeout(300)
                if c.has('#lyOut.lyask') or pg.evaluate("LY.on"):
                    raise AssertionError('沒改東西按 ✕ 也跳出儲存詢問，或沒關掉')
            pg.evaluate("lyClose()")
        # 背景裡的獨立圖形（菜單木牌）要能選、能移動；畫在背景圖裡的燈籠不能選，要有提示
        c.click('[data-act=pause]', wait=500)
        c.click('.modal [data-lyed]', wait=700)
        pg.tap('#lyBar [data-ly="pos"]')   # 木牌在上方，工具列換到下面
        bb = pg.evaluate("(()=>{const r=document.querySelector('#bg > g:nth-of-type(4)').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()")
        pg.touchscreen.tap(*bb)
        pg.wait_for_timeout(250)
        if not pg.evaluate("!!LY.el&&!!LY.el.closest('#bg')&&LY.rule.st===ARTSTYLE"):
            raise AssertionError('點不到背景裡的菜單木牌')
        l0 = pg.evaluate('LY.el.getBoundingClientRect().left')
        for _ in range(3):
            pg.tap('#lyBar [data-ly="mv"][data-d="1,0"]')
        pg.tap('#lyBar [data-ly="sc"][data-d="1"]')
        if pg.evaluate('LY.el.getBoundingClientRect().left') - l0 < 1:
            raise AssertionError('背景裡的木牌移不動')
        cx0 = pg.evaluate("(()=>{const r=LY.el.getBoundingClientRect();return r.left+r.width/2})()")
        pg.tap('#lyBar [data-ly="sc"][data-d="1"]')
        if abs(pg.evaluate("(()=>{const r=LY.el.getBoundingClientRect();return r.left+r.width/2})()") - cx0) > 1.5:
            raise AssertionError('背景木牌縮放時中心飄走')
        r = pg.evaluate("(()=>{const r=document.getElementById('bg').getBoundingClientRect();return [r.left+r.width*0.676,r.top+r.height*0.21]})()")
        pg.evaluate("$('custLayer').style.visibility='hidden'")  # 客人走到那個位置時點單泡泡會蓋住燈籠（會偶發選到泡泡）
        pg.touchscreen.tap(*r)
        pg.wait_for_timeout(250)
        pg.evaluate("$('custLayer').style.visibility=''")
        if pg.evaluate("!!LY.el"):
            raise AssertionError('畫在背景圖裡的燈籠不該被選到（選到：%s）' % pg.evaluate("LY.el.outerHTML.slice(0,160)"))
        pg.evaluate("lyClose()")
        c.expect_clean('營業中進排版')
        # 草稿清掉後（玩家視角），營業畫面不該再有被排版移動過的元素
        pg.evaluate("localStorage.removeItem(LYKEY);lyApply()")
        if pg.evaluate("LY.styled.size") and pg.evaluate("[...LY.styled.keys()].some(e=>e.closest('#stations'))"):
            raise AssertionError('清掉草稿後營業畫面還有元素留著位移')
    finally:
        c.close()


def sc_ach_backfill(b, base):
    """舊存檔（成就還沒推出時就已經達成條件）：重新載入後，能從存檔推回來的成就要自動補記錄並通知，不能要玩家重玩。"""
    c = Ctx(b, base, style='old').open()
    try:
        c.page.evaluate("""(()=>{const k=%s;const r=JSON.parse(localStorage.getItem(k)||'{}');
            r.maxDay=50;r.gacha={c:{a:2,b:1}};r.ci={last:'2020-01-03',streak:2,hd:['2020-01-01','2020-01-02','2020-01-03']};
            r.frG={u1:'2020-01-03',u2:'2020-01-03'};delete r.eg;delete r.ax;delete r.ul;r.achV=1;localStorage.setItem(k,JSON.stringify(r))})()""" % json.dumps(REC_KEY))
        c.page.reload()
        c.page.wait_for_timeout(2500)
        rec = json.loads(c.page.evaluate('localStorage.getItem(%r)' % REC_KEY) or 'null') or {}
        ax, eg, ul = rec.get('ax') or {}, rec.get('eg') or {}, rec.get('ul') or {}
        want = {'gp': 3, 'ck': 3, 'cs': 2, 'fg': 2}
        bad = [k for k, v in want.items() if (ax.get(k) or 0) < v]
        if bad:
            raise AssertionError('舊存檔沒有補上成就計數：%s（ax=%s）' % (bad, ax))
        if not (eg.get('hl') or {}).get('valentine'):
            raise AssertionError('已經走過的情人節沒有補記錄（eg.hl=%s）' % eg.get('hl'))
        if not ul.get('hl1'):
            raise AssertionError('補上的「節日開張」沒有解鎖通知（ul=%s）' % ul)
        c.expect_clean('成就回溯補記錄')
    finally:
        c.close()


def sc_sponsor(b, base):
    """贊助頁（作者限定）：玩家看不到入口；作者視角下真實點擊進得去，價目表和退款內容都在，且文字不用句號。"""
    c = Ctx(b, base).open(3000)
    try:
        c.dismiss_modals()
        # 一般玩家：主畫面不能有測試按鈕，也不能開出贊助頁
        if c.has('[data-act=tstpanel]') or c.has('[data-act=tstspon]'):
            raise AssertionError('一般玩家的畫面上出現了作者專用的測試／贊助入口')
        c.page.evaluate("typeof sponPanel==='function'&&sponPanel()")
        c.page.wait_for_timeout(300)
        if 'NT$' in (c.page.evaluate("document.body.innerText") or ''):
            raise AssertionError('一般玩家也能開出贊助頁')
        c.dismiss_modals()
        # 作者：用作者信箱登入的狀態重畫主畫面，再真實點擊進去
        c.page.evaluate("CL.user={email:ADMIN_EMAIL,uid:'check-admin',name:'Author Check',photo:''};showHome()")
        c.page.wait_for_timeout(600)
        c.dismiss_modals()
        c.click('[data-act=tstpanel]')
        c.click('[data-act=tstspon]')
        txt = c.page.evaluate("(document.querySelector('.modal')||{innerText:''}).innerText")
        for need in ('贊助一串烤串', 'NT$50', '贊助一碗味增拉麵', 'NT$100', '贊助一份和牛', 'NT$300',
                     '自訂金額', 'NT$30 起', '付款前先知道', '想退款怎麼辦', '7 天內'):
            if need not in txt:
                raise AssertionError('贊助頁缺少內容：%s' % need)
        if '。' in txt:
            raise AssertionError('贊助頁出現句號「。」（遊戲文字規則：句末用～或！）')
        c.click('.modal [data-act=tstpanel]')   # 返回測試面板（要點 modal 裡的，主畫面那顆被蓋住）
        if not c.has('[data-act=tstspon]'):
            raise AssertionError('贊助頁的「返回測試面板」沒有回到測試面板')
        c.click('.modal [data-act=tstspon]')
        c.click('.modal [data-act=closem]')
        if c.has('.spon'):
            raise AssertionError('贊助頁的「關閉」沒有關掉')
        c.expect_clean('贊助頁')
    finally:
        c.close()


def sc_coopcpu(b, base):
    """多人模式「與電腦配對」：先選店家（居酒屋／屋台／壽司店）三顆按鈕，點進去才選廚房／外場；真實點擊。"""
    c = Ctx(b, base).open()
    try:
        c.dismiss_modals()
        c.page.evaluate("CL.user={email:'x@y.z',uid:'cpu-check',name:'cpu',photo:''};if(!FB_CONFIG)window.FB_CONFIG=true;const r=loadRec();r.nick='測試員';saveRec(r);FR.data={fl:{},on:{}};FR.t=Date.now();coopPanel()")
        c.page.wait_for_timeout(500)
        sel = '.modal [data-act=coopbotv]'
        if c.page.locator(sel).count() != 3:
            raise AssertionError('與電腦配對第一層應該只有三顆店家按鈕，實際 %d 顆\n%s' % (c.page.locator(sel).count(), c.diag()))
        if c.has('.modal [data-act=coopbot]'):
            raise AssertionError('第一層就出現廚房／外場按鈕（應該點進店家才出現）')
        txt = c.page.evaluate("document.querySelector('.modal').innerText")
        for need in ('居酒屋', '屋台', '壽司店'):
            if need not in txt:
                raise AssertionError('第一層缺少店家按鈕：%s' % need)
        for vid, suffix in (('iz', ''), ('ya', 'y'), ('su', 's')):
            c.click('.modal [data-act=coopbotv][data-id=%s]' % vid)
            ids = c.page.eval_on_selector_all('.modal [data-act=coopbot]', 'e=>e.map(x=>x.dataset.id)')
            if sorted(ids) != sorted(['k' + suffix, 'f' + suffix]):
                raise AssertionError('點進 %s 之後的廚房／外場按鈕不對：%s' % (vid, ids))
            for bt in c.page.locator('.modal [data-act=coopbot], .modal [data-act=coopbotv]').all():
                bb = bt.bounding_box()
                if not bb or bb['height'] < 28 or bb['width'] < 60:
                    raise AssertionError('二層按鈕太小或看不見：%s' % bb)
            c.click('.modal [data-act=coopbotv][data-id=""]')  # 返回
            if c.page.locator(sel).count() != 3:
                raise AssertionError('二層的「返回」沒有回到三顆店家按鈕')
        # 真的點「壽司店 → 我當外場」要進得了房間
        c.page.evaluate("if(!CL.api)CL.api={}")  # 檢查環境擋掉了 Firebase，電腦搭檔不需要連線
        c.click('.modal [data-act=coopbotv][data-id=su]')
        c.click('.modal [data-act=coopbot][data-id=fs]', wait=1500)
        ok = c.page.evaluate("!!(typeof CO!=='undefined'&&CO.bot)")
        if not ok:
            raise AssertionError('壽司店・我當外場 沒有開出電腦搭檔的房間\n' + c.diag())
        c.expect_clean('與電腦配對')
    finally:
        c.close()


def sc_homedog(b, base):
    """首頁的狗：遇過 3 位神祕訪客只有貓；全部遇過才出現狗狗；兩隻不能重疊；點狗狗真的有叫聲（真實點擊）。"""
    c = Ctx(b, base).open()
    try:
        c.dismiss_modals()
        ids = c.page.evaluate('SGUESTS.map(g=>g.id)')

        def set_sg(keys):
            c.page.evaluate("""(keys)=>{const k=%s;const r=JSON.parse(localStorage.getItem(k)||'{}');
                r.sg=Object.fromEntries(keys.map(x=>[x,1]));localStorage.setItem(k,JSON.stringify(r))}""" % json.dumps(REC_KEY), keys)
            c.page.reload()
            c.page.wait_for_timeout(2200)
            c.dismiss_modals()

        set_sg(ids[:3])
        if not c.has('.homecat.pl'):
            raise AssertionError('遇過 3 位神祕訪客，首頁的貓應該出現')
        if c.has('.homedog'):
            raise AssertionError('只遇過 3 位，首頁就出現狗狗了（應該要全部遇過）')
        set_sg(ids)
        if not c.has('.homedog.pl'):
            raise AssertionError('神祕訪客全部遇過，首頁沒有出現狗狗')
        cat, dog = c.page.evaluate("""['.homecat.pl','.homedog.pl'].map(s=>{const e=document.querySelector(s).getBoundingClientRect();return [e.left,e.top,e.right,e.bottom]})""")
        if cat[0] < dog[2] and dog[0] < cat[2] and cat[1] < dog[3] and dog[1] < cat[3]:
            raise AssertionError('狗狗和貓重疊了：貓 %r 狗 %r' % (cat, dog))
        c.click('.homedog', wait=400)
        if not c.has('.catsay.on'):
            raise AssertionError('點狗狗之後沒有出現叫聲的小對話框')
        if not c.page.evaluate("(document.querySelector('.catsay')||{}).textContent||''").strip():
            raise AssertionError('狗狗的小對話框是空的')
        c.expect_clean('首頁的狗')
    finally:
        c.close()


# ------------------------------------------------------------------ 月影酒吧（作者／管理員限定，用作者身分真實點擊、真實手勢）
HAND_CLICKED = []
BACK_TESTED = []
SPACE_TESTED = []
BAR_KEYS = ['brhigh', 'brume', 'brcha', 'brmizu', 'bryuzu', 'bratsu', 'brgimlet', 'brmatcha']


def bx_box(c, sel):
    b = c.page.locator(sel).first.bounding_box()
    if not b:
        raise AssertionError('月影酒吧：找不到 %s\n%s' % (sel, c.diag()))
    return b


def bx_hold_until(c, sel, js_done, at=(0.5, 0.5), limit=20000):
    """在元素上按住，邊看畫面數值邊等，到了就放開（跟真人看刻度一樣）。"""
    b = bx_box(c, sel)
    c.page.mouse.move(b['x'] + b['width'] * at[0], b['y'] + b['height'] * at[1])
    c.page.mouse.down()
    t0 = time.time()
    while not c.page.evaluate(js_done):
        if (time.time() - t0) * 1000 > limit:
            c.page.mouse.up()
            raise AssertionError('月影酒吧：按住 %s 超過 %d 秒還沒到 (%s)' % (sel, limit // 1000, js_done))
        c.page.wait_for_timeout(16)
    c.page.mouse.up()
    c.page.wait_for_timeout(250)


def bx_circles(c, n, release=True, ccw=False):
    import math
    b = bx_box(c, '#bxpad')
    cx, cy, r = b['x'] + b['width'] / 2, b['y'] + b['height'] / 2, b['width'] * 0.32
    c.page.mouse.move(cx + r, cy)
    c.page.mouse.down()
    steps = int(24 * n)
    for i in range(1, steps + 1):
        a = 2 * math.pi * i / 24 * (-1 if ccw else 1)
        c.page.mouse.move(cx + r * math.cos(a), cy + r * math.sin(a))
        c.page.wait_for_timeout(12)
    if release:
        c.page.mouse.up()
    c.page.wait_for_timeout(200)


def bx_shake(c, strokes):
    b = bx_box(c, '#bxpad')
    cx, cy, w = b['x'] + b['width'] / 2, b['y'] + b['height'] / 2, b['width'] * 0.3
    c.page.mouse.move(cx - w, cy)
    c.page.mouse.down()
    for i in range(strokes + 1):
        x0, x1 = (cx - w, cx + w) if i % 2 == 0 else (cx + w, cx - w)
        for k in range(1, 9):
            c.page.mouse.move(x0 + (x1 - x0) * k / 8, cy)
            c.page.wait_for_timeout(28)
    c.page.mouse.up()
    c.page.wait_for_timeout(200)


VN_CLICKS = [0]


def bx_vn(c, limit=12):
    """月影酒吧教學的小夜對話框：真實點擊對話框一句一句點完（對話框擋住時其他按鈕點不到）。"""
    c.page.wait_for_timeout(120)
    for _ in range(limit):
        if not c.has('#tut .vn'):
            return
        if not c.page.evaluate("(()=>{const i=document.querySelector('#tut .vn img');return !i||i.complete&&i.naturalWidth>0})()"):
            raise AssertionError('月影酒吧：教學對話框的立繪圖片載不出來')
        if SHOTS:
            c.page.screenshot(path=os.path.join(SHOTS, 'vn-%02d.png' % VN_CLICKS[0]))
        box = c.page.locator('#tut .vn-tx').bounding_box()
        c.page.mouse.click(box['x'] + box['width'] * 0.5, box['y'] + box['height'] * 0.5)
        VN_CLICKS[0] += 1
        c.page.wait_for_timeout(260)
    raise AssertionError('月影酒吧：教學對話框點了 %d 下還關不掉\n%s' % (limit, c.diag()))


def bx_stage(c):
    bx_vn(c)
    return c.page.evaluate("BX?(BX.stage==='make'?bxCur()[0]:BX.stage):'none'")


SHOTS = os.environ.get('BAR_SHOTS')


def bx_shot(c, name):
    if SHOTS:
        c.page.wait_for_timeout(400)
        c.page.screenshot(path=os.path.join(SHOTS, name + '.png'))


def bx_fetch(c, l):
    """轉身到酒櫃拿酒，再轉回吧台（拿到這一步要用的酒會自己轉回來）。"""
    bx_vn(c)
    c.click('[data-bx=turn]', wait=500)
    if c.page.evaluate("BX.view") != 'cab':
        raise AssertionError('月影酒吧：按了轉身沒有看到酒櫃\n%s' % c.diag())
    bx_vn(c)
    bx_shot(c, 'cab-' + l)
    c.click('[data-bx=take][data-v=%s]' % l, wait=1100)
    if l not in c.page.evaluate("BX.hand"):
        raise AssertionError('月影酒吧：在酒櫃點了 %s 但沒拿到手邊（手邊：%s）' % (l, c.page.evaluate("BX.hand")))
    if c.page.evaluate("BX.view") == 'cab':
        bx_vn(c)
        c.click('[data-bx=turn]', wait=500)
    if c.page.evaluate("BX.view") != 'bar':
        raise AssertionError('月影酒吧：拿完酒轉不回吧台\n%s' % c.diag())


def bx_pick_src(c, l):
    """量酒時換成材料 l：手邊的酒直接點酒瓶；吧台下的按「加料」再點（真實點擊）。"""
    if c.page.evaluate("BX.src") == l:
        return
    if c.page.evaluate("BXCABS.includes('%s')" % l):
        if l not in c.page.evaluate("BX.hand"):
            bx_fetch(c, l)
        if c.page.evaluate("BX.src") != l:
            bx_vn(c)
            c.click('#barx [data-bx=src][data-v=%s]' % l, wait=250)
    else:
        bx_vn(c)
        c.click('#barx [data-bx=under]', wait=300)
        if not c.has('#barx .bxc-free [data-bx=pick][data-v=%s]' % l):
            raise AssertionError('月影酒吧：按「加料」沒有看到吧台下的 %s\n%s' % (l, c.diag()))
        bx_shot(c, 'under-panel')
        if not SPACE_TESTED:
            # 按空白鍵要能關掉加料面板（不用往下滑找「關閉」）
            SPACE_TESTED.append(1)
            c.page.keyboard.press('Space')
            c.page.wait_for_timeout(300)
            if c.has('#barx .bxc-free') or c.page.evaluate("BX.free"):
                raise AssertionError('月影酒吧：加料面板開著時按空白鍵沒有關掉\n%s' % c.diag())
            c.click('#barx [data-bx=under]', wait=300)
            if not c.has('#barx .bxc-free [data-bx=pick][data-v=%s]' % l):
                raise AssertionError('月影酒吧：空白鍵關掉後再按「加料」打不開')
        small = c.page.evaluate("[...document.querySelectorAll('#barx .bxc-free button')].map(e=>e.getBoundingClientRect()).filter(r=>r.width&&(r.height<43.5||r.width<43.5)).length")
        if small:
            raise AssertionError('月影酒吧：加料面板有 %d 顆按鈕小於 44px' % small)
        c.click('#barx .bxc-free [data-bx=pick][data-v=%s]' % l, wait=300)
        if c.has('#barx .bxc-free'):
            raise AssertionError('月影酒吧：從吧台下拿了材料，面板沒有收起來')
    if c.page.evaluate("bxCur()[0]") in ('top', 'pour'):  # 加汽水這類步驟拿的料記在 BX.tsrc（bxPourSrc），不是 BX.src
        if c.page.evaluate("bxPourSrc()") != l:
            raise AssertionError('月影酒吧：加料拿 %s 失敗（現在是 %s）' % (l, c.page.evaluate("bxPourSrc()")))
        return
    if c.page.evaluate("BX.src") != l:
        raise AssertionError('月影酒吧：換成 %s 失敗（現在是 %s）' % (l, c.page.evaluate("BX.src")))


def bx_pour(c, l, goal):
    """把材料 l 倒到 goal（ml；苦精是下數）：一般按住倒、糖漿用湯匙挖、苦精抖。"""
    bx_pick_src(c, l)
    bx_vn(c)
    tool = c.page.evaluate("bxTool('%s')" % l)
    if tool == 'spoon':
        for _ in range(int(round(goal / 5))):
            c.click('#barx [data-bx=scoop]', wait=120)
    elif tool == 'dash':
        for _ in range(int(goal)):
            c.click('#barx [data-bx=dash]', wait=120)
    else:
        bx_hold_until(c, '#bxhold', "(BX.d.ml['%s']||0)>=%f" % (l, goal - 0.6))
        c.page.wait_for_timeout(300)
        # 倒了酒以後「倒掉」不能是灰的（2026/11/18 使用者說按不了：進這一步時是灰的、按住倒酒不會重畫，就一直灰）
        rb = c.page.evaluate("(()=>{const b=document.querySelector('#barx [data-bx=redo]');return b?{dis:b.disabled,t:b.innerText.trim()}:null})()")
        if not rb or rb['dis'] or rb['t'] != '倒掉':
            raise AssertionError('月影酒吧：倒完 %s 後「倒掉」鈕不能按或字不對（%s）' % (l, rb))


def bx_make(c, wrong=False, started=False, adds=None, swap=None):
    """照客人的單把這杯做完（wrong=True 故意選錯杯、量錯；adds=[(材料, 量)] 量酒時多加；swap=(酒譜的酒, 換成的酒)）。"""
    o = c.page.evaluate("(()=>{const o=bxOrder(),r=BXR[o.k];return {k:o.k,c:o.c,g:r.g,t:r.t,ice:r.ice}})()")
    if not started:
        bx_vn(c)
        c.click('[data-bx=start]', wait=300)
    for _ in range(22):
        st = bx_stage(c)
        bx_shot(c, 'st-%s-%s' % (o['k'], st))
        if not c.page.evaluate("BX.stage!=='make'||document.querySelectorAll('#barx .bxc-st li.on').length===1"):
            raise AssertionError('月影酒吧：做酒時右邊步驟清單沒有標出目前這一步（%s）' % st)
        say = c.page.evaluate("(()=>{const e=document.querySelector('#barx .bxc-say');return e?{t:e.innerText,small:!!e.querySelector('small')}:{t:'',small:false}})()")
        if any('\u3040' <= ch <= '\u30ff' for ch in say['t']):
            raise AssertionError('月影酒吧：客人說的話還有日文：%r' % say['t'])
        if say['small']:
            raise AssertionError('月影酒吧：客人說的框裡不該再顯示客人名字（佔空間）')
        if st == 'glass':
            if c.has('[data-bx=back]'):
                raise AssertionError('月影酒吧：第一步（選杯）不該有「返回上一步」')
            wg = 'coupe' if wrong and o['g'] != 'coupe' else 'high' if wrong else o['g']
            c.click('[data-bx=g][data-v=%s]' % wg, wait=150)
            c.click('[data-bx=t][data-v=%s]' % o['t'], wait=650)
            if wrong and not BACK_TESTED:
                # 測試員選錯杯：下一步一定要有「返回上一步」，按了回到選杯、杯子和溫度都清掉，可以重選
                BACK_TESTED.append(1)
                if bx_stage(c) == 'glass':
                    raise AssertionError('月影酒吧：選完杯子和溫度沒有進到下一步')
                bx_vn(c)
                if not c.has('#barx [data-bx=back]'):
                    raise AssertionError('月影酒吧：選錯杯後下一步沒有「返回上一步」按鈕\n%s' % c.diag())
                bx_shot(c, 'back-btn')
                c.click('#barx [data-bx=back]', wait=300)
                if bx_stage(c) != 'glass' or c.page.evaluate("BX.d.g") is not None or c.page.evaluate("BX.d.tp") is not None:
                    raise AssertionError('月影酒吧：按「返回上一步」沒有回到選杯（%s）\n%s' % (bx_stage(c), c.diag()))
                if c.has('#barx [data-bx=back]'):
                    raise AssertionError('月影酒吧：回到第一步後還有「返回上一步」')
                c.click('[data-bx=g][data-v=%s]' % wg, wait=150)
                c.click('[data-bx=t][data-v=%s]' % o['t'], wait=650)
        elif st == 'ice':
            c.click('[data-bx=i][data-v=%s]' % o['ice'], wait=350)
        elif st == 'mix':
            specs = c.page.evaluate("bxCur()[1].map(x=>[x[0],x[1],x[2]])")
            # 手邊有兩瓶以上時，每一瓶都要能真實點擊切換（手邊酒瓶曾經被 pointer-events:none 蓋住，只能靠轉身去酒櫃拿才換得了）
            hand = c.page.evaluate("BX.hand")
            if len(hand) >= 2 and not HAND_CLICKED:
                HAND_CLICKED.append(1)
                for i, hl in list(enumerate(hand))[::-1]:
                    bx_vn(c)
                    c.click('#barx [data-lyk=hand%d]' % i, wait=250)
                    if c.page.evaluate("BX.src") != hl:
                        raise AssertionError('月影酒吧：點手邊第 %d 瓶（%s）沒有換成那瓶（現在是 %s）' % (i + 1, hl, c.page.evaluate("BX.src")))
            for n, (kind, l, amt) in enumerate(specs):
                if swap and l == swap[0]:
                    l = swap[1]
                if kind == 'dash':
                    bx_pour(c, l, amt + (2 if wrong else 0))
                    continue
                sp = c.page.evaluate("(()=>{const sp=bxMSpec(bxOrder(),'%s',%s);return {lo:sp.lo,hi:sp.hi,plo:sp.plo,phi:sp.phi,cap:sp.cap}})()" % (specs[n][1], amt))
                goal = min(sp['hi'] * 1.6, sp['cap'] * 0.95) if (wrong and n == 0) else (sp['plo'] + sp['phi']) / 2
                if c.page.evaluate("bxTool('%s')" % l) == 'spoon':
                    goal = 5 * max(1, round(goal / 5))
                bx_pour(c, l, goal)
            for l, amt in (adds or []):
                bx_pour(c, l, amt)
            adds = None
            bx_shot(c, 'mixed-%s' % o['k'])
            ut = c.page.evaluate("(document.querySelector('#barx [data-lyk=under]')||{innerText:''}).innerText.trim()")
            if ut and ut != '加料':  # 加料鈕只在要加吧台下配料的步驟才出現（v847/v850），沒出現不算錯
                raise AssertionError('月影酒吧：加料按鈕上只能寫「加料」（現在是 %r）' % ut)
            # 「下一步」按鈕、加料按鈕不能蓋到吧台上的東西
            ov = c.page.evaluate("""(()=>{const out=[];['[data-lyk=under]','[data-lyk=turn]','.bxc-btn'].forEach(q=>{const f=document.querySelector('#barx '+q);if(!f)return;const r=f.getBoundingClientRect();
              [...document.querySelectorAll('#barx .bxs-hand,#barx .bxz button,#barx .bxz-gauge,#barx .bxs-src,#barx .bxs-mat,#barx .bxz-jig')].forEach(e=>{const p=e.getBoundingClientRect();if(p.width&&p.left<r.right-2&&p.right>r.left+2&&p.top<r.bottom-2&&p.bottom>r.top+2)out.push(q+'×'+(e.className||e.id))})});return out.join(',')})()""")
            if ov:
                raise AssertionError('月影酒吧：右邊按鈕蓋到吧台上的東西：%s' % ov)
            bx_vn(c)
            c.click('#barx [data-bx=next]', wait=350)
        elif st == 'stir':
            z = c.page.evaluate("bxCur()[1]")
            tot = ((z[0] + z[1]) / 2) / 3.6
            # 吧勺的匙要在攪拌杯裡（杯子圖片的中間、下半部），不能跑到杯子外面
            sp = c.page.evaluate("""(()=>{const g=document.querySelector('#bxpad .bxz-mg').getBoundingClientRect(),p=document.querySelector('#bxpad').getBoundingClientRect(),b=(document.querySelector('#bxspn').dataset.bowl||'').split(',').map(Number);
              if(b.length<2)return {ok:false,g:[],s:'沒有位置'};const x=p.left+p.width*b[0]/100,y=p.top+p.height*b[1]/100;
              return {ok:y>g.top+g.height*.55&&y<g.bottom-g.height*.08&&x>g.left+g.width*.15&&x<g.right-g.width*.15,g:[g.left,g.top,g.right,g.bottom].map(Math.round),s:[x,y].map(Math.round)}})()""")
            if not sp['ok']:
                raise AssertionError('月影酒吧：攪拌時吧勺的匙不在攪拌杯裡（杯 %s，匙 %s）\n%s' % (sp['g'], sp['s'], c.diag()))
            # 順時針畫一半、逆時針畫一半，兩個方向都要算圈數
            bx_circles(c, tot / 2)
            d1 = c.page.evaluate("BX.d.dil")
            bx_circles(c, tot / 2, release=False, ccw=True)
            bx_shot(c, 'stirring-%s' % o['k'])
            c.page.mouse.up()
            c.page.wait_for_timeout(200)
            d2 = c.page.evaluate("BX.d.dil")
            if not d1 > 0 or not d2 > d1 + (tot / 2) * 3.6 * 0.6:
                raise AssertionError('月影酒吧：逆時針畫圈沒有算進攪拌（順時針後 %.1f，逆時針後 %.1f）' % (d1, d2))
            c.click('[data-bx=done]', wait=300)
        elif st == 'lift':
            bx_circles(c, 1.05)
            c.page.wait_for_timeout(700)
            if bx_stage(c) == 'lift':
                c.click('[data-bx=done]', wait=300)
        elif st == 'shake':
            bx_shake(c, 18)
            c.click('[data-bx=done]', wait=300)
        elif st == 'heat':
            tg = c.page.evaluate("bxHeatT(bxOrder())")
            bx_hold_until(c, '#bxhold', "BX.d.temp>=%f" % (tg - 1.4))
            c.page.wait_for_timeout(700)
            c.click('[data-bx=done]', wait=300)
        elif st in ('top', 'pour'):
            tg = c.page.evaluate("(()=>{const s=bxCur();return s[0]==='pour'?s[1]:s[2]})()")
            # 倒酒長條旁邊要有刻度管（黃線＝滿），小杯子（熱燗）看不到液面也知道什麼時候滿
            gv = c.page.evaluate("(()=>{const g=document.querySelector('#bxv[data-lyk=pourgauge]');if(!g)return null;const r=g.getBoundingClientRect(),p=document.querySelector('#bxpad').getBoundingClientRect();return {h:r.height,w:r.width,line:!!g.querySelector('path[stroke=\"#ffd23a\"]'),side:r.left>=p.right-2}})()")
            if not gv or not gv['line'] or gv['h'] < 80 or not gv['side']:
                raise AssertionError('月影酒吧：倒酒時長條旁邊沒有看得到的刻度管和黃線（%s）\n%s' % (gv, c.diag()))
            if st == 'top' and not c.page.evaluate("!!bxPourSrc()"):
                # v851：吧台下的料（汽水、果汁等）要玩家自己按「加料」拿，沒拿就按住倒是不會倒的
                bx_pick_src(c, c.page.evaluate("bxCur()[1]"))
            bx_hold_until(c, '#bxpad', "BX.d.lv>=%f" % (tg - 0.012), at=(0.5, 0.78))
            # 杯子裡的酒要照「選的杯子」畫（選錯杯時曾照酒譜的杯型畫，看起來像杯子後面還有另一個杯子、酒沒倒進去）
            if not c.page.evaluate("(()=>{const p=document.querySelector('#bxmatl clipPath path'),r=document.querySelector('#bxmatl rect[fill-opacity=\".9\"]');return !!p&&!!r&&p.getAttribute('d')===BXG2[BX.d.g].p})()"):
                raise AssertionError('月影酒吧：倒酒時杯子裡的酒不是畫在選的杯子裡（杯型不對或沒有酒）\n%s' % c.diag())
            fy = c.page.evaluate("(()=>{const r=document.querySelector('#bxv rect[fill-opacity=\".9\"]');return r?+r.getAttribute('y'):-1})()")
            want = 262 - tg * 236
            if abs(fy - want) > 12:
                raise AssertionError('月影酒吧：倒到黃線了，刻度管的液面卻沒跟著到黃線（液面 %.0f，黃線 %.0f）' % (fy, want))
            bx_shot(c, 'poured-%s-%s' % (o['k'], st))
            c.click('[data-bx=done]', wait=300)
        elif st == 'gar':
            need = [x[2:] for x in o['c'] if x.startswith('g:')]
            for g in need:
                if not c.has('[data-bx=gar][data-v=%s]' % g):
                    c.click('[data-bx=garpg][data-v="%d"]' % (1 - c.page.evaluate("BX.d.garPg||0")), wait=200)
                c.click('[data-bx=gar][data-v=%s]' % g, wait=150)
            c.click('[data-bx=serve]', wait=500)
        elif st == 'res':
            return c.page.evaluate("BX.passed")
        else:
            raise AssertionError('月影酒吧：做酒時卡在奇怪的階段 %s\n%s' % (st, c.diag()))
        c.expect_clean('月影酒吧做 %s 的 %s 階段' % (o['k'], st))
    raise AssertionError('月影酒吧：%s 做了 22 步還沒出酒\n%s' % (o['k'], c.diag()))


def bx_finish_cust(c):
    """過關後：繼續 → 回應客人 → 下一位。"""
    bx_vn(c)
    c.click('[data-bx=totalk]', wait=300)
    bx_vn(c)
    v = c.page.evaluate("BXCH[bxOrder().who][0]")
    c.click('[data-bx=say][data-v=%s]' % v, wait=300)
    bx_vn(c)
    c.click('[data-bx=nextc]', wait=700)


def sc_bar(b, base):
    seed = dict(SEED_SAVE)
    seed.update({'bar': {'up': {}}, 'where': 'bar', 'menu': {k: 1 for k in BAR_KEYS}})
    c = Ctx(b, base, seed=False)
    c.ctx.add_init_script("if(!localStorage.getItem('__barseed')){localStorage.setItem('%s',%s);localStorage.setItem('%s',%s);localStorage.setItem('__barseed','1')}"
                          % (SAVE_KEY, json.dumps(json.dumps(seed)), REC_KEY, json.dumps(json.dumps(SEED_REC))))
    c.open()
    try:
        c.dismiss_modals()
        # 冰杯不能再畫一圈白色虛線（2026/11/18 使用者說杯子旁邊都有虛線）
        if 'dasharray' in c.page.evaluate("Object.keys(BXG).map(g=>bxTopArt(g,{cold:true})).join('')"):
            raise AssertionError('月影酒吧：冰杯旁邊還有虛線')
        # 碎冰要像一堆碎冰（2026/11/18 使用者說原本畫成斜線排列的菱形）：片數夠多、位置散開、不是整齊的斜線
        ci = c.page.evaluate("(()=>{const pts=[];for(const g of ['high','rock']){const m=[...bxLiq(g,{ice:'crush',lv:.5}).matchAll(/<polygon points=\"([^\"]+)\"/g)].map(x=>x[1].split(' ').slice(0,2).map(Number));pts.push(m)}return pts.map(m=>({n:m.length,xs:new Set(m.map(p=>Math.round(p[0]/4))).size,ys:new Set(m.map(p=>Math.round(p[1]/4))).size}))})()")
        for g, v in zip(['高球杯', '威士忌杯'], ci):
            if v['n'] < 30 or v['xs'] < 10 or v['ys'] < 8:
                raise AssertionError('月影酒吧：%s的碎冰不像一堆碎冰（%s）' % (g, v))
        if '配方手帳' in c.page.evaluate("String(bxBook)+String(bxRender)+String(bxServe)"):
            raise AssertionError('月影酒吧：還有「配方手帳」字樣，已改名為「酒譜」')
        # 隱藏配方的材料不能本來就在酒譜裡（不然永遠加不了）
        bad = c.page.evaluate("Object.entries(BXSURP).flatMap(([k,h])=>Object.keys(h).filter(l=>!BXR[k]||bxInRec(k,l)||!BXL[l]).map(l=>k+':'+l))")
        if bad:
            raise AssertionError('月影酒吧：隱藏配方的材料已經在酒譜裡或不存在：%s' % bad)
        c.page.evaluate("CL.user={email:ADMIN_EMAIL,uid:'check-admin',name:'Author Check',photo:''};showHome()")
        c.page.wait_for_timeout(500)
        c.dismiss_modals()
        c.click('[data-act=cont]', wait=900)
        if c.page.evaluate("CUR") != 'bar':
            raise AssertionError('月影酒吧：作者繼續營業後沒有進到酒吧（CUR=%s）' % c.page.evaluate("CUR"))
        c.click('[data-act=start]', wait=900)
        c.expect_clean('月影酒吧開店')
        if not c.has('#barx'):
            raise AssertionError('月影酒吧：開店後沒有出現調酒畫面\n%s' % c.diag())
        q = c.page.evaluate("BX.q.map(o=>o.k)")
        if q != ['brhigh', 'bratsu', 'brgimlet']:
            raise AssertionError('月影酒吧：第一天教學的客人不對：%s' % q)
        c.page.wait_for_timeout(300)
        if not c.has('#tut .vn img.vn-por') or '月影酒吧' not in c.page.evaluate("document.querySelector('#tut .vn').innerText"):
            raise AssertionError('月影酒吧：第一天教學一開始沒有出現小夜的對話框\n%s' % c.diag())
        bx_shot(c, 'vn-arr0')
        # 觸控目標：844x390 橫向手機實際大小至少 44px
        small = c.page.evaluate("[...document.querySelectorAll('#barx button')].map(e=>e.getBoundingClientRect()).filter(r=>r.width&&r.height<43.5).length")
        if small:
            which = c.page.evaluate("[...document.querySelectorAll('#barx button')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.height<43.5}).map(e=>(e.dataset.bx||e.className)+':'+e.getBoundingClientRect().height.toFixed(1)).join(', ')")
            raise AssertionError('月影酒吧：有 %d 顆按鈕在手機上不到 44px 高（%s）' % (small, which))
        bx_vn(c)
        # 右邊卡片、說明框可以收起和展開（真實點擊），收起狀態記住
        c.click('[data-bx=fold][data-v=card]', wait=300)
        if not c.page.evaluate("document.querySelector('#barx .bxc-card').classList.contains('fold')&&!document.querySelector('#barx .bxc-st').offsetParent"):
            raise AssertionError('月影酒吧：按了收起，卡片沒有收起來')
        c.click('[data-bx=fold][data-v=card]', wait=300)
        if not c.page.evaluate("!!document.querySelector('#barx .bxc-st').offsetParent"):
            raise AssertionError('月影酒吧：卡片收起後展不開')
        c.click('[data-bx=book]', wait=400)
        if '酒譜' not in c.page.evaluate("(document.querySelector('.modal')||{innerText:''}).innerText"):
            raise AssertionError('月影酒吧：酒譜打不開')
        c.click('.modal [data-act=closem]', wait=400)
        if c.has('.modal') or not c.has('[data-bx=start]'):
            raise AssertionError('月影酒吧：關掉酒譜後回不到調酒畫面\n%s' % c.diag())
        bx_shot(c, 'arrive')
        sv = c.page.evaluate("""(()=>{const li=document.querySelectorAll('#barx .bxc-card .bxc-st li'),cd=document.querySelector('#barx .bxc-card').getBoundingClientRect(),h=document.querySelector('#barx [data-lyk=hand0]').getBoundingClientRect();
          return {n:li.length,want:bxStages({k:bxOrder().k,c:['none']}).length,old:document.querySelectorAll('#barx .bxc-left .bx-steps').length,over:cd.bottom>h.top+2}})()""")
        if sv['n'] != sv['want'] or sv['old'] or sv['over']:
            raise AssertionError('月影酒吧：右邊卡片的步驟清單不對或蓋到手邊酒瓶 %s' % sv)
        ly = c.page.evaluate("""(()=>{const bg=document.querySelector('#barx .bxs-bg'),r=bg.getBoundingClientRect();
          const a=lyPick(bg,r.left+5,r.top+5),say=document.querySelector('#barx [data-lyk=say]'),h=document.querySelector('#barx [data-lyk=hand0]');
          return {bg:a===null,say:lyPick(say)===say&&lyQ(say).q,hand:lyPick(h)===h&&lyQ(h).q,up:lyUp(say)&&lyUp(say).dataset.lyk||''}})()""")
        if not ly['bg'] or ly['say'] != 'div[data-lyk="say"]' or ly['hand'] != 'div[data-lyk="hand0"]' or ly['up'] != 'left':
            raise AssertionError('月影酒吧：排版工具選取不對（背景圖要選不到、文字框和手邊酒瓶要各自能選）%s' % ly)
        hid = c.page.evaluate("['bg','custLayer','counter','stations'].map(id=>getComputedStyle($(id)).display).join(',')")
        if hid != 'none,none,none,none':
            raise AssertionError('月影酒吧：營業時底下的舊舞台沒有藏起來（%s），會跟著重畫、變卡' % hid)
        c.click('[data-bx=turn]', wait=500)
        bx_vn(c)
        small = c.page.evaluate("[...document.querySelectorAll('#barx button')].map(e=>e.getBoundingClientRect()).filter(r=>r.width&&(r.height<43.5||r.width<43.5)).length")
        n_bot = c.page.evaluate("document.querySelectorAll('#barx [data-bx=take]').length")
        if small or n_bot != 27:
            raise AssertionError('月影酒吧：酒櫃有 %d 顆按鈕不到 44px，酒瓶 %d 瓶（應該 27）\n%s' % (small, n_bot, c.diag()))
        c.click('[data-bx=take][data-v=vodka]', wait=400)
        if 'vodka' in c.page.evaluate("BX.hand"):
            raise AssertionError('月影酒吧：還沒買的伏特加居然拿得到')
        c.click('[data-bx=turn]', wait=500)
        for i in range(3):
            if i == 0:
                bx_vn(c)
                c.click('[data-bx=start]', wait=400)
                bx_vn(c)
                if c.page.evaluate("BX.stage") != 'make' or not c.has('#barx .bxc-box'):
                    raise AssertionError('月影酒吧：開始調酒後沒有說明框\n%s' % c.diag())
                c.click('[data-bx=fold][data-v=ins]', wait=300)
                if not c.page.evaluate("document.querySelector('#barx .bxc-box').classList.contains('fold')&&!document.querySelector('#barx .bxc-ins').offsetParent&&JSON.parse(localStorage.getItem('izakaya-bxfold')).ins"):
                    raise AssertionError('月影酒吧：說明框收不起來或沒記住')
                c.click('[data-bx=fold][data-v=ins]', wait=300)
                if not c.page.evaluate("!!document.querySelector('#barx .bxc-ins').offsetParent"):
                    raise AssertionError('月影酒吧：說明框收起後展不開')
            if not bx_make(c, started=(i == 0)):
                sc = c.page.evaluate("BX.d.comps.map(x=>x.key+':'+x.q.toFixed(2)).join(' ')+' | '+BX.d.pref.map(x=>x.key+':'+x.q).join(' ')")
                raise AssertionError('月影酒吧：照做的第 %d 杯沒過關（%s）\n%s' % (i + 1, sc, c.diag()))
            if i == 2:
                # 時間要會走（不再卡在 16:00），而且不能還沒到 00:20 就打烊
                if not c.page.evaluate("R.t>0&&hourNow()>16"):
                    raise AssertionError('月影酒吧：營業時間沒有在走（R.t=%s）' % c.page.evaluate("R.t"))
                # 時間跟居酒屋一樣快：酒吧每秒走的量要等於 1（BXTS=1）
                if c.page.evaluate("BXTS") != 1:
                    raise AssertionError('月影酒吧：時間速度不是跟居酒屋一樣（BXTS=%s）' % c.page.evaluate("BXTS"))
                c.page.evaluate("BX.q.splice(BX.i+1,BX.q.length,{k:'brhigh',c:['none'],who:'misaki'})")
            if i == 1:
                # 教學三杯就算時間過了 00:20 也要讓教學做完（第三杯不能被打烊切掉）
                c.page.evaluate("R.t=DAYLEN*.99")
                c.page.wait_for_timeout(300)
            bx_finish_cust(c)
            if i == 1:
                if not c.has('#barx') or c.page.evaluate("BX.i") != 2:
                    raise AssertionError('月影酒吧：時間到了，教學第三杯被打烊切掉\n%s' % c.diag())
                c.page.evaluate("R.t=DAYLEN*.3;R.lastCall=false")
        # 客人不限 3 位：教學三杯後還在營業，第 4 位客人進來
        if not c.has('#barx') or c.page.evaluate("BX.i") != 3 or c.page.evaluate("R.settled"):
            raise AssertionError('月影酒吧：教學三杯做完就打烊了，客人應該不限人數\n%s' % c.diag())
        if '第 4 位客人' not in c.page.evaluate("document.querySelector('#barx').innerText"):
            raise AssertionError('月影酒吧：畫面上沒有顯示第 4 位客人')
        # 有日文的客人對話框可以收起／展開（真實點擊）
        c.click('[data-bx=fold][data-v=say]', wait=300)
        if not c.page.evaluate("(()=>{const e=document.querySelector('#barx .bxc-say');return e.classList.contains('fold')&&e.querySelector('b').offsetParent===null})()"):
            raise AssertionError('月影酒吧：日文對話框按了收起沒有收起來')
        c.click('[data-bx=fold][data-v=say]', wait=300)
        if c.page.evaluate("document.querySelector('#barx .bxc-say').classList.contains('fold')"):
            raise AssertionError('月影酒吧：日文對話框收起後按不回來')
        # 客人沒有耐心限制：時間走過去也不會走掉
        c.page.wait_for_timeout(1500)
        if c.page.evaluate("BX.stage") != 'arrive' or c.page.evaluate("BX.i") != 3:
            raise AssertionError('月影酒吧：客人等一下就走了（應該沒有耐心限制）')
        # 時間快轉到最後點餐之後：手上這位送走就打烊
        c.page.evaluate("R.t=DAYLEN*.99")
        c.page.wait_for_timeout(400)
        if not c.page.evaluate("R.lastCall") or c.page.evaluate("clockStr()") not in ('00:20', '00:25', '00:30'):
            raise AssertionError('月影酒吧：過了 00:20 沒有最後點餐（%s）' % c.page.evaluate("clockStr()"))
        if not bx_make(c):
            raise AssertionError('月影酒吧：第 4 位的嗨棒照做沒過關\n%s' % c.diag())
        bx_vn(c)
        c.click('[data-bx=totalk]', wait=300)
        bx_vn(c)
        c.click('[data-bx=say][data-v=%s]' % c.page.evaluate("BXCH[bxOrder().who][0]"), wait=300)
        if '打烊' not in c.page.evaluate("(document.querySelector('[data-bx=nextc]')||{innerText:''}).innerText"):
            raise AssertionError('月影酒吧：最後點餐後的最後一位，按鈕應該是「打烊」')
        bx_vn(c)
        c.click('[data-bx=nextc]', wait=700)
        c.page.wait_for_timeout(900)
        c.expect_clean('月影酒吧教學三杯＋第四位')
        if VN_CLICKS[0] < 12:
            raise AssertionError('月影酒吧：教學三杯只點了 %d 下小夜的對話框，教學台詞好像沒出來' % VN_CLICKS[0])
        if c.has('#tut .vn'):
            raise AssertionError('月影酒吧：打烊後小夜的對話框還留在畫面上')
        if c.has('#barx') or not c.page.evaluate("R&&R.settled"):
            raise AssertionError('月影酒吧：最後一位客人送走後沒有打烊結算\n%s' % c.diag())
        st = c.page.evaluate("({tut:ST.bar.tut,xp:ST.bar.xp,served:R.served,earned:R.earned,zz:!!ST.zz_future_field,old:ST.menu.brmojito===undefined})")
        if st['tut'] != 1 or st['served'] != 4 or st['earned'] <= 0 or not st['zz']:
            raise AssertionError('月影酒吧：打烊後的紀錄不對 %s' % st)
        # 第二天：開店前先到商店（真實點擊）買伏特加和薄荷葉，酒譜要自動解鎖
        c.click('.modal [data-act=next]', wait=900)
        c.dismiss_modals(1)
        c.click('.modal [data-act=barhome]', wait=600)
        c.click('.modal [data-act=brtab][data-id=bot]', wait=400)
        bx_shot(c, 'shop-bot')
        coins = c.page.evaluate("ST.coins")
        c.click('.modal [data-act=brbot][data-id=vodka]', wait=500)
        r = c.page.evaluate("({v:!!ST.bar.bot.vodka,m:!!ST.menu.brmoscow,c:ST.coins})")
        if not r['v'] or not r['m'] or coins - r['c'] != 80000:
            raise AssertionError('月影酒吧：買伏特加後狀態不對 %s（買前 %s）' % (r, coins))
        c.click('.modal [data-act=brtab][data-id=gar]', wait=400)
        c.click('.modal [data-act=brgar][data-id=mint]', wait=500)
        if not c.page.evaluate("!!ST.bar.gar.mint"):
            raise AssertionError('月影酒吧：買薄荷葉沒有記到存檔')
        c.click('.modal [data-act=brtab][data-id=rec]', wait=400)
        txt = c.page.evaluate("document.querySelector('.modal').innerText")
        if '莫斯科騾子' not in txt or '還缺' not in txt:
            raise AssertionError('月影酒吧：酒單分頁沒有顯示解鎖狀態')
        bx_shot(c, 'shop-rec')
        c.click('.modal [data-act=back], .modal [data-act=closem]', wait=600)
        c.dismiss_modals(1)
        c.click('[data-act=start]', wait=900)
        if c.page.evaluate("BX.q.length") != 1 or c.page.evaluate("BX.tut") or c.page.evaluate("clockStr()") != '16:00':
            raise AssertionError('月影酒吧：第二天開店狀態不對（客人 %s、時間 %s）' % (c.page.evaluate("BX.q.length"), c.page.evaluate("clockStr()")))
        if bx_make(c, wrong=True):
            raise AssertionError('月影酒吧：故意選錯杯、量錯酒居然過關')
        if not c.has('[data-bx=retry]'):
            raise AssertionError('月影酒吧：第一次沒過關沒有「重做一杯」\n%s' % c.diag())
        # 評分面板要一次看完：不能出現捲軸，「重做一杯」「抱歉，就這樣」要整顆在面板裡（2026/11/18 使用者說還要上下滑）
        pn = c.page.evaluate("(()=>{const p=document.querySelector('#barx .bxc-panel'),r=p.getBoundingClientRect();return {over:p.scrollHeight-p.clientHeight,bad:[...p.querySelectorAll('button')].filter(b=>{const q=b.getBoundingClientRect();return q.top<r.top-1||q.bottom>r.bottom+1}).length}})()")
        if pn['over'] > 1 or pn['bad']:
            raise AssertionError('月影酒吧：評分面板要上下滑才看得到按鈕（多出 %spx、%s 顆按鈕在面板外）' % (pn['over'], pn['bad']))
        c.click('[data-bx=retry]', wait=300)
        if not bx_make(c, started=True):
            raise AssertionError('月影酒吧：重做照做還是沒過關\n%s' % c.diag())
        # 接下來兩位指定曼哈頓（三瓶酒、抖苦精、馬丁尼杯）和瑪格麗特（鹽口在配料 B 頁）；酒和配料用存檔補上
        c.page.evaluate("Object.assign(ST.bar.bot,{vermr:1,bitters:1,tequila:1,triple:1});Object.assign(ST.bar.gar,{cherry:1,salt:1});bxMig(ST);"
                        "BX.q.splice(BX.i+1,BX.q.length,{k:'brmanhattan',c:['g:cherry'],who:'kuroda'},{k:'brmarg',c:['g:salt'],who:'emily'},{k:'brhigh',c:['none'],who:'ren'},{k:'brhigh',c:['none'],who:'misaki'})")
        bx_finish_cust(c)
        for k in ('brmanhattan', 'brmarg'):
            if c.page.evaluate("bxOrder().k") != k:
                raise AssertionError('月影酒吧：客人順序不對（%s）' % c.page.evaluate("bxOrder().k"))
            if not bx_make(c):
                sc = c.page.evaluate("BX.d.comps.map(x=>x.key+':'+x.q.toFixed(2)).join(' ')+' | '+BX.d.pref.map(x=>x.key+':'+x.q).join(' ')")
                raise AssertionError('月影酒吧：照做 %s 沒過關（%s）\n%s' % (k, sc, c.diag()))
            if k == 'brmarg':
                h = c.page.evaluate("BX.hand")
                if len(h) != 3 or 'whisky' in h or 'tequila' not in h:
                    raise AssertionError('月影酒吧：手邊滿三瓶時沒有把最早拿的放回去（%s）' % h)
            bx_shot(c, 'res-' + k)
            c.page.evaluate("R.t=DAYLEN*.3;R.lastCall=false")
            bx_finish_cust(c)
        # 自由加料（2026/11/18）：亂加兩種 → 客人生氣走掉、不付錢、不能重做
        lost0, earn0 = c.page.evaluate("R.lost"), c.page.evaluate("R.earned")
        if bx_make(c, adds=[('tomato', 10), ('grenadine', 10), ('vodka', 10)]):
            raise AssertionError('月影酒吧：嗨棒亂加番茄汁、紅石榴糖漿、伏特加，客人居然滿意')
        if c.has('[data-bx=retry]') or not c.has('[data-bx=leave]') or c.page.evaluate("R.lost") != lost0 + 1 or c.page.evaluate("R.earned") != earn0 or c.page.evaluate("BX.mood") != 'angry':
            raise AssertionError('月影酒吧：亂加料後客人應該生氣走掉、不付錢、不能重做\n%s' % c.diag())
        bx_shot(c, 'free-angry')
        bx_vn(c)
        c.click('[data-bx=leave]', wait=700)
        # 隱藏配方：嗨棒加一點蜂蜜 → 驚喜、付錢＋小費、記進酒譜
        if bx_make(c, adds=[('honey', 5)]) is not True:
            raise AssertionError('月影酒吧：嗨棒加蜂蜜（隱藏配方）客人沒有驚喜\n%s' % c.diag())
        if not c.page.evaluate("ST.bar.disc['brhigh:honey']===1") or '隱藏配方' not in c.page.evaluate("document.querySelector('#barx .bxc-panel').innerText") or c.page.evaluate("R.earned") <= earn0:
            raise AssertionError('月影酒吧：發現隱藏配方後沒有記到存檔／沒顯示／沒付錢\n%s' % c.diag())
        bx_shot(c, 'free-surprise')
        # 換基酒的隱藏配方：嗨棒把調和威士忌換成白蘭地
        c.page.evaluate("ST.bar.bot.brandy=1;BX.q.splice(BX.i+1,BX.q.length,{k:'brhigh',c:['none'],who:'ryuji'})")
        c.page.evaluate("R.t=DAYLEN*.3;R.lastCall=false")
        bx_finish_cust(c)
        if bx_make(c, swap=('whisky', 'brandy')) is not True:
            raise AssertionError('月影酒吧：嗨棒換成白蘭地（隱藏配方）客人沒有驚喜\n%s' % c.diag())
        if not c.page.evaluate("ST.bar.disc['brhigh:whisky>brandy']===1"):
            raise AssertionError('月影酒吧：換基酒的隱藏配方沒有記到存檔（%s）' % c.page.evaluate("JSON.stringify(ST.bar.disc)"))
        c.page.evaluate("R.t=DAYLEN*.99")
        c.page.wait_for_timeout(300)
        bx_finish_cust(c)
        c.page.wait_for_timeout(900)
        c.expect_clean('月影酒吧第二天')
        if c.has('#barx') or not c.page.evaluate("R&&R.settled"):
            raise AssertionError('月影酒吧：第二天最後一位送走後沒有打烊\n%s' % c.diag())
        # 第三天：開店後暫停回主頁，調酒畫面要收掉
        c.click('.modal [data-act=next]', wait=900)
        c.dismiss_modals(1)
        c.click('[data-act=start]', wait=900)
        c.click('[data-act=pause]', wait=500)
        c.click('.modal [data-act=home]', wait=1000)
        if c.has('#barx'):
            raise AssertionError('月影酒吧：暫停回主頁後調酒畫面沒有收掉')
        if c.page.evaluate("$('game').classList.contains('barmode')||getComputedStyle($('stations')).display==='none'"):
            raise AssertionError('月影酒吧：離開酒吧後底下的舞台還被藏著（barmode 沒拿掉）')
        c.expect_clean('月影酒吧第三天')
    finally:
        c.close()




def sc_pausewalk(b, base):
    """回歸測試：客人還在走進來時按暫停 → 滑動要定住、不能在暫停中滑到定點後原地踏步；繼續營業後要接著走完。"""
    c = Ctx(b, base).open()
    try:
        to_day(c, run_ms=800)
        try:
            c.page.wait_for_function("R && R.seats.some(x=>x&&x.st==='in'&&x.t<x.walkT-0.4)", timeout=20000)
        except Exception:
            raise AssertionError('等不到走進來的客人（還在走路中）' + c.diag('沒有客人在走路'))
        c.click('[data-act=pause]', wait=0)
        res = c.page.evaluate("""async()=>{
            const x=R.seats.find(y=>y&&y.st==='in'&&y.t<y.walkT-0.4);
            if(!x)return {err:'暫停前客人已經走到定點'};
            window.__pzX=x;
            const raf=()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
            await raf();
            const t0=getComputedStyle(x.el).transform;
            await new Promise(r=>setTimeout(r,1500));
            const t1=getComputedStyle(x.el).transform;
            const sp=x.el.querySelector('.spr')||x.el.querySelector('.fig');
            return {body:document.body.classList.contains('cust-pz'),same:t0===t1,
                    aps:sp?getComputedStyle(sp).animationPlayState:'paused',st:x.st,t0,t1};
        }""")
        c.expect_clean('暫停時客人走路中')
        if res.get('err'):
            raise AssertionError(res['err'])
        if not res['body']:
            raise AssertionError('暫停時沒有套上 cust-pz（客人走路的同步沒有啟動）')
        if not res['same']:
            raise AssertionError('暫停中客人還在滑動（%s → %s），會滑到定點後原地踏步' % (res['t0'], res['t1']))
        if res['aps'] != 'paused':
            raise AssertionError('暫停中客人還在原地踏步（animation-play-state=%s）' % res['aps'])
        c.click('.modal [data-act=resume]', wait=0)
        try:
            c.page.wait_for_function("!document.body.classList.contains('cust-pz') && window.__pzX && window.__pzX.st!=='in'", timeout=6000)
        except Exception:
            raise AssertionError('繼續營業後客人沒有走到定點' + c.diag('繼續營業後客人卡在走路中'))
        c.expect_clean('繼續營業後客人走到定點')
        day_to_home(c)
    finally:
        c.close()


def sc_iframeclip(b, base):
    """內嵌在入口網站（iframe）：iframe 比外層看得到的範圍高時，舞台不能被切掉（2026/11/16 PlayStalls iPad 玩家：下面料理點不到）；
    外層恢復高度後舞台要長回來。外層裁切用 overflow:hidden 的容器模擬。"""
    ua = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) '
          'Version/18.0 Safari/605.1.15')
    for vis, ih, ipad in ((450, 700, True), (400, 640, True), (380, 800, False), (450, 700, False)):  # ipad=True：iPadOS 用桌面版 UA，靠 platform+觸控點數判斷
        ctx = b.new_context(viewport={'width': 820, 'height': 1180}, has_touch=True, user_agent=ua, locale='zh-TW')
        ctx.route('**/*', lambda r: r.continue_() if r.request.url.startswith(base) else r.abort())
        ctx.add_init_script("if(!localStorage.getItem('__s')){localStorage.setItem('%s',%s);localStorage.setItem('%s',%s);localStorage.setItem('__s','1')}"
                            % (SAVE_KEY, json.dumps(json.dumps(SEED_SAVE)), REC_KEY, json.dumps(json.dumps(SEED_REC))))
        if ipad:
            ctx.add_init_script("Object.defineProperty(navigator,'platform',{get:()=>'MacIntel'});Object.defineProperty(navigator,'maxTouchPoints',{get:()=>5})")
        pg = ctx.new_page()
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.route('**/wrap.html', lambda r: r.fulfill(
            body='<body style="margin:0"><div id=c style="height:%dpx;overflow:hidden;width:620px"><iframe src="%s/index.html" '
                 'style="width:620px;height:%dpx;border:0"></iframe></div></body>' % (vis, base, ih), content_type='text/html'))
        try:
            pg.goto(base + '/wrap.html')
            pg.wait_for_timeout(3000)
            f = pg.frames[1]
            jc = lambda sel: f.evaluate('s=>document.querySelector(s).click()', sel)
            for _ in range(3):
                if f.locator('.modal').count():
                    pg.mouse.click(616, 4)
                    pg.wait_for_timeout(300)
            jc('[data-act=cont]'); pg.wait_for_timeout(900)
            if f.locator('[data-act=start]').count() == 0 and f.locator('.modal [data-act=back]').count():
                jc('.modal [data-act=back]'); pg.wait_for_timeout(600)
            jc('[data-act=start]'); pg.wait_for_timeout(2500)
            for _ in range(3):
                if f.locator('[data-act=iostipok]').count():
                    jc('[data-act=iostipok]'); pg.wait_for_timeout(400)
            pg.wait_for_timeout(2500)
            bot = lambda: f.evaluate("document.getElementById('box').getBoundingClientRect().bottom")
            b1 = bot()
            if b1 > vis + 1:
                raise AssertionError('iframe 高 %d、外層只看得到 %d：舞台底部 %.0f，被切掉了（下面的料理點不到）' % (ih, vis, b1))
            pg.evaluate("document.getElementById('c').style.height='%dpx'" % ih)
            pg.wait_for_timeout(2600)
            b2 = bot()
            if b2 < b1 + 20:
                raise AssertionError('外層恢復到 %d 後舞台沒有長回來（%.0f → %.0f）' % (ih, b1, b2))
            if errs:
                raise AssertionError('JS 錯誤：%s' % errs[:3])
        finally:
            ctx.close()


def find_chrome():
    for p in (os.environ.get('CHROME'), shutil.which('google-chrome'), shutil.which('chromium'),
              shutil.which('chromium-browser'), '/usr/bin/google-chrome'):
        if p and os.path.exists(p):
            return p
    return None


def sc_gun(b, base):
    """回歸測試：拿起槍（瞄準）後，要能用大的「點這裡放回」按鈕放回去；槍架本身很小，不能只靠它。"""
    c = Ctx(b, base).open()
    try:
        to_day(c, run_ms=600)
        c.page.evaluate("()=>{ST.weapon=1;save();buildStations();renderStations();renderHUD()}")
        c.page.evaluate("()=>{robIn()}")
        c.page.wait_for_timeout(1000)

        def tap(sel):
            bb = c.page.locator(sel).first.bounding_box()
            c.page.mouse.click(bb['x'] + bb['width'] / 2, bb['y'] + bb['height'] / 2)
            c.page.wait_for_timeout(400)

        tap('#st-gunT')
        if not c.page.evaluate('R.aim'):
            raise AssertionError('點槍架拿不起槍' + c.diag('槍架點了沒反應'))
        bb = c.page.locator('#hand.putback').first.bounding_box()
        if bb['height'] < 44 or bb['width'] < 44:
            raise AssertionError('放回按鈕太小：%.0fx%.0f' % (bb['width'], bb['height']))
        tap('#hand.putback')
        if c.page.evaluate('R.aim'):
            raise AssertionError('按「點這裡放回」沒有放回槍' + c.diag('瞄準中'))
        if 'aim' in c.page.evaluate("document.getElementById('game').className"):
            raise AssertionError('放回後畫面還留著瞄準狀態')
        c.expect_clean('放回槍')
    finally:
        c.close()


def vn_click_text(c):
    box = c.page.locator('#tut .vn-tx').bounding_box()
    c.page.mouse.click(box['x'] + box['width'] * 0.5, box['y'] + box['height'] * 0.5)
    c.page.wait_for_timeout(300)


def sc_tut(b, base):
    """新手教學（小夜的對話框）：居酒屋從「說明 → 新手教學」真實點擊進去、點完每一句回主頁；
    上一步、跳過教學按鈕；海風壽司教學與「📖 製作教學」也要能點完／跳過；立繪圖片要載得出來。"""
    for prof in ({}, {'viewport': {'width': 1280, 'height': 720}}):
        c = Ctx(b, base, profile=prof or None)
        c.open()
        try:
            c.dismiss_modals()
            c.page.evaluate("showHowto('tut')")
            c.page.wait_for_timeout(300)
            c.click('.modal [data-act=tut]', wait=900)
            if not c.has('#tut .vn img.vn-por') or not c.page.evaluate("TUT&&TUT.i===0"):
                raise AssertionError('新手教學：按了新手教學沒有出現小夜的對話框\n%s' % c.diag())
            if not c.page.evaluate("[...document.querySelectorAll('#tut .vn img')].every(i=>i.complete&&i.naturalWidth>0)"):
                raise AssertionError('新手教學：小夜的立繪圖片載不出來')
            n = c.page.evaluate("TUTS.length")
            vn_click_text(c)
            vn_click_text(c)
            c.click('#tut [data-tut=prev]', wait=300)
            if c.page.evaluate("TUT.i") != 1:
                raise AssertionError('新手教學：上一步沒有回到上一句（現在第 %s 句）' % c.page.evaluate("TUT.i"))
            # 每一句：對話框不能超出畫面、按鈕實際至少 44px 高
            for i in range(n + 3):
                if not c.page.evaluate("!!TUT"):
                    break
                bad = c.page.evaluate("""(()=>{const v=document.querySelector('#tut .vn'),r=[...v.querySelectorAll('.vn-box')].map(e=>e.getBoundingClientRect())[0];
                  const sm=[...v.querySelectorAll('button')].filter(e=>e.getBoundingClientRect().height<43.5).length;
                  return (r.top<-1||r.bottom>innerHeight+1?'對話框超出畫面 ':'')+(sm?sm+' 顆按鈕不到 44px':'')})()""")
                if bad:
                    raise AssertionError('新手教學第 %d 句：%s' % (c.page.evaluate("TUT.i") + 1, bad))
                vn_click_text(c)
            if c.page.evaluate("!!TUT") or not c.page.evaluate("HOME"):
                raise AssertionError('新手教學：點完最後一句沒有回到主頁\n%s' % c.diag())
            c.expect_clean('居酒屋新手教學')
            # 海風壽司新手教學：點完；製作教學：按跳過
            c.page.evaluate("startSushiTut(false)")
            c.page.wait_for_timeout(900)
            for i in range(20):
                if not c.page.evaluate("!!TUT"):
                    break
                vn_click_text(c)
            if c.page.evaluate("!!TUT") or not c.page.evaluate("HOME"):
                raise AssertionError('海風壽司教學：點完沒有回到主頁\n%s' % c.diag())
            c.page.evaluate("startSushiLesson(false)")
            c.page.wait_for_timeout(900)
            vn_click_text(c)
            c.click('#tut [data-tut=skip]', wait=700)
            if c.page.evaluate("!!TUT") or c.has('#tut .vn'):
                raise AssertionError('海風壽司製作教學：按跳過教學沒有結束\n%s' % c.diag())
            c.expect_clean('海風壽司教學')
        finally:
            c.close()


def sc_barbuy(b, base):
    """月影酒吧解鎖（2026-11-18 開放給所有玩家）：一般玩家的選店對話框真實點擊 → 看得到酒吧 → 買下 ¥5,000,000 → 商店有「去月影酒吧營業」；公告也要在。"""
    c = Ctx(b, base)
    c.open()
    try:
        c.dismiss_modals()
        c.page.evaluate("CL.user={email:'player@example.com',uid:'check-player',name:'Player',photo:''};CL.isStaff=false;showHome()")
        c.page.wait_for_timeout(300)
        c.click('[data-act=cont]', wait=900)
        if not c.has('.modal [data-act=barhome]'):
            raise AssertionError('月影酒吧：一般玩家的選店畫面看不到月影酒吧')
        c.click('.modal [data-act=barhome]', wait=600)
        if '測試中' in c.page.evaluate("document.querySelector('.modal').innerText"):
            raise AssertionError('月影酒吧：還顯示「測試中」鎖頭提示')
        coins = c.page.evaluate("load().coins")
        c.click('.modal [data-act=buybar]', wait=600)
        r = c.page.evaluate("(()=>{const o=load();return {bar:!!o.bar,spent:%d-o.coins}})()" % coins)
        if not r['bar'] or r['spent'] != 5000000:
            raise AssertionError('月影酒吧：一般玩家買酒吧後狀態不對 %s（應該花 ¥5,000,000）' % r)
        if not c.has('.modal [data-act=baropen]'):
            raise AssertionError('月影酒吧：買完後商店沒有「去月影酒吧營業」')
        if not c.page.evaluate("NOTICES[0].id==='2026-11-18-bar'&&!/。/.test(NOTICES[0].text)&&/不要緊張/.test(NOTICES[0].text)&&/考試/.test(NOTICES[0].text)"):
            raise AssertionError('月影酒吧：公告不在最前面或內容不對')
        c.expect_clean('一般玩家買月影酒吧')
    finally:
        c.close()


# ------------------------------------------------------------------ 御好燒店（作者／管理員限定）：從麵糊開始自己加料
OK_KEYS = ['okosaka', 'okhiro', 'okmoji', 'okmoder']
OK_TILE = {'bat': 'okBat', 'cab': 'okCab', 'spr': 'okSpr', 'pork': 'okPork', 'nood': 'okNood', 'egg': 'okEgg',
           'mc': 'okMc', 'spat': 'okSpat', 'sauce': 'okSauce', 'mayo': 'okMayo', 'top': 'okTop'}


def ok_shot(c, name):
    try:
        c.page.screenshot(path='/tmp/check-oko-%s.png' % name)
    except Exception:
        pass


def ok_make(c, slot, k, shots=False):
    """真實點擊：一步一步拿食材 → 點鐵板，要煎的步驟等到可以做（金色）再點；刷醬點三下。"""
    steps = c.page.evaluate("OKR[%s]" % json.dumps(k))
    for n, st in enumerate(steps):
        ing = st[0]
        if c.page.evaluate("R.okHand") != ing:
            c.click('#st-%s' % OK_TILE[ing], wait=120)
            if c.page.evaluate("R.okHand") != ing:
                raise AssertionError('御好燒：點了 %s 沒有拿起來（手上：%s）' % (ing, c.page.evaluate("R.okHand")))
        if n > 0:
            for _ in range(80):
                if c.page.evaluate("(()=>{const g=R.tpn[%d];return !!g&&g.ct>=okCook(g)})()" % slot):
                    break
                c.page.wait_for_timeout(100)
        taps = 3 if ing == 'sauce' else 1
        for _ in range(taps):
            c.click('[data-tpn="%d"]' % slot, wait=120)
        g = c.page.evaluate("(()=>{const g=R.tpn[%d];return g?{n:g.n,fin:!!g.fin,bad:!!g.bad,kind:g.kind,br:g.br}:null})()" % slot)
        if not g or g['bad'] or g['n'] != n + 1:
            raise AssertionError('御好燒：做 %s 第 %d 步（%s）後狀態不對：%s\n%s' % (k, n + 1, st[1], g, c.diag()))
        if shots and n in (0, 2, 4):
            ok_shot(c, '%s-%d' % (k, n + 1))
    g = c.page.evaluate("(()=>{const g=R.tpn[%d];return {fin:!!g.fin,kind:g.kind,st:cookState(g.t,g.kind)}})()" % slot)
    if not g['fin'] or g['kind'] != k or g['st'] != 'done':
        raise AssertionError('御好燒：%s 全部步驟做完卻不是做好的狀態 %s' % (k, g))
    if not c.page.evaluate("!!R.tpn[%d].star" % slot):
        raise AssertionError('御好燒：%s 每一步都在金色時做，卻沒有變成職人之作' % k)


def sc_oko(b, base):
    seed = dict(SEED_SAVE)
    seed.update({'oko': {'up': {}}, 'where': 'oko', 'menu': {k: 1 for k in OK_KEYS}})
    c = Ctx(b, base, seed=False)
    c.ctx.add_init_script("if(!localStorage.getItem('__okseed')){localStorage.setItem('%s',%s);localStorage.setItem('%s',%s);localStorage.setItem('__okseed','1')}"
                          % (SAVE_KEY, json.dumps(json.dumps(seed)), REC_KEY, json.dumps(json.dumps(SEED_REC))))
    c.open()
    try:
        c.dismiss_modals()
        c.page.evaluate("CL.user={email:ADMIN_EMAIL,uid:'check-admin',name:'Author Check',photo:''};showHome()")
        c.page.wait_for_timeout(500)
        c.dismiss_modals()
        c.click('[data-act=cont]', wait=900)
        if c.page.evaluate("CUR") != 'oko':
            raise AssertionError('御好燒：作者繼續營業後沒有進到御好燒店（CUR=%s）' % c.page.evaluate("CUR"))
        c.click('[data-act=start]', wait=1200)
        c.dismiss_modals()
        c.expect_clean('御好燒開店')
        # 食材盤 12 格都在、都在舞台裡、實際大小至少 44px
        tiles = list(OK_TILE.values()) + ['okBook']
        bad = c.page.evaluate("""(ts=>{const W=innerWidth,H=innerHeight;return ts.filter(t=>{const e=document.getElementById('st-'+t);if(!e||e.hidden)return true;const r=e.getBoundingClientRect();return r.width<44||r.height<44||r.right>W+1||r.bottom>H+1||r.left<-1})})(%s)""" % json.dumps(tiles))
        if bad:
            raise AssertionError('御好燒：食材盤這些格子不見、太小或超出畫面：%s\n%s' % (bad, c.diag()))
        ok_shot(c, 'open')
        # 沒拿東西點空鐵板：不能下料；拿豬五花點空鐵板：不能（要先倒麵糊）
        c.click('[data-tpn="0"]', wait=150)
        c.click('#st-okPork', wait=150)
        c.click('[data-tpn="0"]', wait=150)
        if c.page.evaluate("!!R.tpn[0]"):
            raise AssertionError('御好燒：沒倒麵糊就能直接放豬五花')
        # 順序錯的料加不進去
        c.click('#st-okBat', wait=150)
        c.click('[data-tpn="0"]', wait=150)
        c.click('#st-okPork', wait=150)
        c.click('[data-tpn="0"]', wait=150)
        if c.page.evaluate("R.tpn[0].n") != 1:
            raise AssertionError('御好燒：倒完麵糊直接放豬五花居然加得進去（大阪燒要先加高麗菜、拌勻）')
        # 點兩下空手 = 倒掉重來
        c.click('#st-okPork', wait=150)  # 放下手上的
        c.click('[data-tpn="0"]', wait=150)
        c.click('[data-tpn="0"]', wait=150)
        if c.page.evaluate("!!R.tpn[0]"):
            raise AssertionError('御好燒：空手連點兩下做到一半的餅沒有倒掉')
        c.expect_clean('御好燒順序檢查')
        # 四道菜各做一次（真實點擊），第一道留截圖
        ok_make(c, 0, 'okosaka', shots=True)
        ok_shot(c, 'osaka-done')
        # 職人之作直接送給點大阪燒的客人：多拿三成（真實點擊菜和客人）
        seat = c.page.evaluate("(()=>{const i=R.seats.findIndex(x=>x&&x.st==='wait');if(i<0)return -1;const q=R.seats[i];q.order=['okosaka'];q.filled=[false];q.taken=true;q.extra=null;return i})()")
        if seat >= 0:
            e0 = c.page.evaluate("R.earned")
            c.click('[data-tpn="0"]', wait=200)
            c.click('.cust[data-seat="%d"]' % seat, wait=500)
            got = c.page.evaluate("R.earned") - e0
            want = c.page.evaluate("Math.round(ITEMS.okosaka.price*.3/10)*10")
            if got < want:
                raise AssertionError('御好燒：職人之作送給客人，收入只多了 %s（至少要 %s）\n%s' % (got, want, c.diag()))
            c.expect_clean('御好燒送職人之作')
            ok_make(c, 0, 'okosaka')
        c.click('[data-tpn="0"]', wait=200)
        if c.page.evaluate("R.held&&R.held.key") != 'okosaka':
            raise AssertionError('御好燒：做好的大阪燒點不起來')
        c.click('#st-warmT [data-warm="0"]', wait=200)
        if c.page.evaluate("!!R.tpn[0]||!(R.warm[0]&&R.warm[0].key==='okosaka')"):
            raise AssertionError('御好燒：大阪燒放不上保溫台\n%s' % c.diag())
        ok_make(c, 1, 'okhiro', shots=True)
        ok_shot(c, 'hiro-done')
        ok_make(c, 2, 'okmoji', shots=True)
        ok_make(c, 0, 'okmoder', shots=True)
        ok_shot(c, 'all-done')
        c.expect_clean('御好燒四道菜')
        # 放太久會焦：倒麵糊、加高麗菜、拌勻、鋪肉後不翻面
        c.click('[data-tpn="1"]', wait=150)
        c.click('[data-tpn="2"]', wait=150)
        c.page.evaluate("R.held=null;R.tpn[1]=R.tpn[2]=null")
        for ing in ['bat', 'cab', 'spat', 'pork']:
            c.click('#st-%s' % OK_TILE[ing], wait=100)
            c.click('[data-tpn="1"]', wait=100)
        c.page.wait_for_timeout(int((3.5 + 7 + 1) * 1000))
        if not c.page.evaluate("!!(R.tpn[1]&&R.tpn[1].bad)"):
            raise AssertionError('御好燒：鋪肉後放著不翻面，過很久也沒焦')
        c.click('[data-tpn="1"]', wait=200)
        if c.page.evaluate("!!R.tpn[1]"):
            raise AssertionError('御好燒：焦掉的點了丟不掉')
        # 📖 做法：營業中打開會暫停，按繼續營業回來
        c.click('#st-okBook', wait=400)
        if not c.page.evaluate("R.paused") or '大阪燒' not in c.page.evaluate("(document.querySelector('.modal')||{innerText:''}).innerText"):
            raise AssertionError('御好燒：📖 做法打不開或沒暫停\n%s' % c.diag())
        ok_shot(c, 'book')
        c.click('.modal [data-act=resume]', wait=400)
        if c.page.evaluate("R.paused") or c.has('.modal'):
            raise AssertionError('御好燒：做法關掉後沒有繼續營業')
        c.expect_clean('御好燒做法')
        day_to_home(c)
    finally:
        c.close()


SCENARIOS = [('coopcpu', sc_coopcpu), ('boot', sc_boot), ('styles', sc_styles), ('replay', sc_replay), ('shops', sc_shops),
             ('pick', sc_pick), ('layout', sc_layout), ('lyed', sc_lyed), ('saves', sc_saves),
             ('ach_backfill', sc_ach_backfill), ('sponsor', sc_sponsor), ('homedog', sc_homedog), ('bar', sc_bar), ('barbuy', sc_barbuy), ('oko', sc_oko),
             ('tut', sc_tut), ('pausewalk', sc_pausewalk), ('iframeclip', sc_iframeclip), ('gun', sc_gun)]


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
