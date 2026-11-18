#!/usr/bin/env bash
# 一條龍：同步遠端 → bump 版本 → 整套檢查 → commit → push → 確認線上真的更新。
# 用法：tools/ship.sh "commit 說明"          整套（check 約 3 分鐘 + 驗線上最多 7 分鐘）
#       tools/ship.sh --fast "commit 說明"   快速：只驗語法與版本號、驗線上最多 3 分鐘，沒好就回報「部署中」（結束碼 2）
set -euo pipefail
cd "$(dirname "$0")/.."
FAST=0; args=()
for a in "$@"; do if [ "$a" = "--fast" ]; then FAST=1; else args+=("$a"); fi; done
msg=${args[0]:?用法：tools/ship.sh [--fast] \"commit 說明\"}
git fetch --depth=50 origin main
if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ] && ! git merge-base --is-ancestor origin/main HEAD; then
  echo "遠端有新 commit，先 rebase 再繼續"; git stash -u -q || true
  git rebase origin/main
  git stash pop -q || true
fi
tools/bump_sw.sh
if [ "$FAST" -eq 1 ]; then tools/check.sh --fast; else tools/check.sh; fi
git add -A
git commit -m "$msg"
git -c push.negotiate=true push origin HEAD:main
# push 之後如果又有人同時推了新版本（會蓋掉我們的版本號），verify_live 會看出來
if [ "$FAST" -eq 1 ]; then tools/verify_live.sh 180 --soft; else tools/verify_live.sh; fi
