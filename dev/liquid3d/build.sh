#!/bin/sh
# 建置月影酒吧 3D 水柱：dev/liquid3d/src.js（＋three）→ img/liquid3d-<hash>.js（立即函式，全域 Liquid3D）。
# 用法：先在別的資料夾 npm i three esbuild，再把 node_modules 路徑傳進來：  ./build.sh /path/to/node_modules
# 建好後要把 index.html 裡的 img/liquid3d-<舊hash>.js 換成新檔名。
set -e
cd "$(dirname "$0")"
NM="${1:-/tmp/build/node_modules}"
OUT=$(mktemp)
"$NM/.bin/esbuild" src.js --bundle --minify --format=iife --global-name=Liquid3D --target=es2019 --legal-comments=none --alias:three="$NM/three/build/three.module.js" --outfile="$OUT"
H=$(sha1sum "$OUT" | cut -c1-8)
rm -f ../../img/liquid3d-*.js
cp "$OUT" "../../img/liquid3d-$H.js"; chmod 644 "../../img/liquid3d-$H.js"
echo "img/liquid3d-$H.js"; ls -l "../../img/liquid3d-$H.js"
