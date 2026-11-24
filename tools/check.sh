#!/usr/bin/env bash
# 上線前整套檢查。任何一步失敗就整個失敗（結束碼非 0）。改完遊戲、push 之前一定要跑，而且要整套跑完、全綠才能 push。
# 用法：tools/check.sh          整套（含約 3 分鐘的 headless Chrome 真實點擊）
#       tools/check.sh --fast   快速：只跑語法 + sw.js 版本號（幾秒）。使用者說「快一點」、只改局部時用。
set -uo pipefail
cd "$(dirname "$0")/.."
fail=0
FAST=0; [ "${1:-}" = "--fast" ] && FAST=1

echo "▶ 1/3 語法"
node tools/syntax_check.js || fail=1
node tools/lbmerge_test.js || fail=1   # 排行榜上傳合併規則（防止成績被蓋掉）

echo "▶ 2/3 sw.js 版本號"
cur=$(sed -n "s/^const CACHE='izakaya-v\([0-9]*\)'.*/\1/p" sw.js | head -1)
if git fetch --depth=1 origin main >/dev/null 2>&1; then
  remote=$(git show origin/main:sw.js | sed -n "s/^const CACHE='izakaya-v\([0-9]*\)'.*/\1/p" | head -1)
  # 除了文件與工具以外，有任何遊戲檔案和遠端不同，版本號就必須比遠端大
  changed=$(git diff --name-only origin/main -- . ':!tools' ':!CLAUDE.md' ':!README.md' ':!.github' ':!.claude' | grep -v '^sw.js$' || true)
  if [ -n "$changed" ] && [ "$cur" -le "$remote" ]; then
    echo "  ✗ 遊戲檔案有改（$(echo "$changed" | tr '\n' ' ')），但 sw.js 是 v$cur，遠端已經是 v$remote。請先跑 tools/bump_sw.sh"
    fail=1
  else
    echo "  ✓ sw.js v$cur（遠端 v$remote）"
  fi
else
  echo "  ✗ 抓不到遠端 main，無法確認版本號有沒有撞號"; fail=1
fi

if [ "$FAST" -eq 1 ]; then
  echo "▶ 3/3 遊戲檢查：--fast 模式，略過（只驗了語法與版本號）"
else
  echo "▶ 3/3 遊戲檢查（headless Chrome・真實點擊；視機器快慢約 3～25 分鐘，慢的機器月影酒吧情境就要 6 分鐘，不設逾時、跑完為止）"
  # 開跑前先清掉殘留的 chrome 程序（不然頁面載入會卡住）。不設逾時：以前 8 分鐘逾時會把慢機器上正常在跑的檢查砍掉，重跑也一樣被砍，白白浪費時間。
  pkill -f 'chrome.*--headless' >/dev/null 2>&1 || true
  python3 -u -I tools/check_game.py || fail=1
fi

if [ "$fail" -ne 0 ]; then echo; echo "❌ check.sh 失敗：修好後整套重跑，全綠才能 push。"; exit 1; fi
echo; if [ "$FAST" -eq 1 ]; then echo "✅ check.sh --fast 通過（未跑遊戲檢查）"; else echo "✅ check.sh 全部通過"; fi
