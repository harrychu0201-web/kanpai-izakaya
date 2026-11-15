#!/usr/bin/env bash
# 一條龍：同步遠端 → bump 版本 → 整套檢查 → commit → push → 確認線上真的更新。
# 用法：tools/ship.sh "commit 說明"
set -euo pipefail
cd "$(dirname "$0")/.."
msg=${1:?用法：tools/ship.sh \"commit 說明\"}
git fetch --depth=50 origin main
if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ] && ! git merge-base --is-ancestor origin/main HEAD; then
  echo "遠端有新 commit，先 rebase 再繼續"; git stash -u -q || true
  git rebase origin/main
  git stash pop -q || true
fi
tools/bump_sw.sh
tools/check.sh
git add -A
git commit -m "$msg"
git -c push.negotiate=true push origin HEAD:main
# push 之後如果又有人同時推了新版本（會蓋掉我們的版本號），verify_live 會看出來
tools/verify_live.sh
