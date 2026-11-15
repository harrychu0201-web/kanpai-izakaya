#!/usr/bin/env bash
# 把 sw.js 的 CACHE 版本號設成「遠端 main 目前版本 + 1」。
# 為什麼不是「本機 + 1」：有時另一個對話同時推了新版本，本機算出來的號碼會跟遠端撞號或比遠端小，
# 玩家就收不到更新（舊 sw.js 版本號比較大，不會觸發更新）。永遠以遠端為準。
set -euo pipefail
cd "$(dirname "$0")/.."
git fetch --depth=1 origin main >/dev/null 2>&1 || { echo "bump_sw: 抓不到遠端 main，無法確認版本號" >&2; exit 1; }
remote=$(git show origin/main:sw.js | sed -n "s/^const CACHE='izakaya-v\([0-9]*\)'.*/\1/p" | head -1)
local_v=$(sed -n "s/^const CACHE='izakaya-v\([0-9]*\)'.*/\1/p" sw.js | head -1)
[ -n "$remote" ] && [ -n "$local_v" ] || { echo "bump_sw: 讀不到版本號（remote='$remote' local='$local_v'）" >&2; exit 1; }
new=$(( remote + 1 ))
if [ "$local_v" -gt "$remote" ] && [ "${1:-}" != "--force" ]; then
  echo "sw.js 版本 v$local_v 已經比遠端 v$remote 新，不重複 bump（要強制請加 --force）"
  exit 0
fi
sed -i "s/^const CACHE='izakaya-v[0-9]*'/const CACHE='izakaya-v$new'/" sw.js
echo "sw.js CACHE：遠端 v$remote → 本次 v$new"
