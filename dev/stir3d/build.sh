#!/bin/sh
# 建置月影酒吧 3D 攪拌：dev/stir3d/src.js（＋three）→ img/stir3d-<hash>.js（立即函式，全域 Stir3D）。
# 用法：先在別的資料夾 npm i three esbuild，再把 node_modules 路徑傳進來：  ./build.sh /path/to/node_modules
set -e
cd "$(dirname "$0")"
NM="${1:-/tmp/build/node_modules}"
OUT=$(mktemp)
NODE_PATH="$NM" "$NM/.bin/esbuild" src.js --bundle --minify --format=iife --global-name=Stir3D --target=es2019 --legal-comments=none --outfile="$OUT"
H=$(sha1sum "$OUT" | cut -c1-8)
rm -f ../../img/stir3d-*.js
cp "$OUT" "../../img/stir3d-$H.js"; chmod 644 "../../img/stir3d-$H.js"
sed -i "s/img\/stir3d-[0-9a-f]*\.js/img\/stir3d-$H.js/g" ../../index.html
echo "img/stir3d-$H.js"
