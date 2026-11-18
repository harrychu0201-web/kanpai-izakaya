#!/usr/bin/env bash
# push 之後確認「線上真的更新了」：GitHub Pages 部署完成、線上 sw.js 版本與本機一致、線上 index.html 與本機逐位元相同。
# 用法：tools/verify_live.sh [最多等幾秒，預設 420] [--soft]
#   --soft：時間到還沒更新就以結束碼 2 離開並印「已 push、部署中」（不當成失敗，也不能說已上線）；沒加則結束碼 1。
set -uo pipefail
cd "$(dirname "$0")/.."
URL=https://harrychu0201-web.github.io/kanpai-izakaya
MAX=${1:-420}
SOFT=0; [ "${2:-}" = "--soft" ] && SOFT=1
want=$(sed -n "s/^const CACHE='\(izakaya-v[0-9]*\)'.*/\1/p" sw.js | head -1)
want_sha=$(sha256sum index.html | cut -d' ' -f1)
echo "等線上更新到 $want …（最多 ${MAX} 秒）"
t0=$(date +%s)
while :; do
  live=$(curl -fsS -m 20 "$URL/sw.js?t=$(date +%s%N)" 2>/dev/null | sed -n "s/^const CACHE='\(izakaya-v[0-9]*\)'.*/\1/p" | head -1)
  if [ "$live" = "$want" ]; then
    live_sha=$(curl -fsS -m 60 "$URL/index.html?t=$(date +%s%N)" 2>/dev/null | sha256sum | cut -d' ' -f1)
    if [ "$live_sha" = "$want_sha" ]; then
      echo "✅ 線上已更新：sw.js = $live，index.html 與本機一致（$(( $(date +%s) - t0 )) 秒）"
      exit 0
    fi
    echo "  sw.js 已是 $live，但 index.html 還不一樣（可能 CDN 還在換），再等…"
  else
    echo "  線上 sw.js = ${live:-讀不到}，目標 $want"
  fi
  [ $(( $(date +%s) - t0 )) -ge "$MAX" ] && [ "$SOFT" -eq 1 ] && { echo "⏳ 已 push，線上還在部署（${MAX} 秒內沒變成 $want）。先回報『已 push、部署中』，不要說已上線；稍後再跑 tools/verify_live.sh 確認。"; exit 2; }
  [ $(( $(date +%s) - t0 )) -ge "$MAX" ] && { echo "❌ ${MAX} 秒內線上沒有變成 $want。不要說完成；去看 GitHub Actions 的 pages build 有沒有失敗。" >&2; exit 1; }
  sleep 15
done
