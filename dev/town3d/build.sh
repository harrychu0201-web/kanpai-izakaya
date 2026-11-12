#!/bin/sh
# 建置乾杯橫丁 3D：dev/town3d/src.js（＋three）→ img/town3d-<hash>.js（立即函式，全域 Town3D）。
# 用法：先在別的資料夾 npm i three esbuild，再 NODE_PATH 指過去：  ./build.sh /path/to/node_modules
set -e
cd "$(dirname "$0")"
NM="${1:-/tmp/build/node_modules}"
OUT=$(mktemp)
"$NM/.bin/esbuild" src.js --bundle --minify --format=iife --global-name=Town3D --target=es2019 --legal-comments=none --alias:three="$NM/three/build/three.module.js" --outfile="$OUT"
H=$(sha1sum "$OUT" | cut -c1-8)
rm -f ../../img/town3d-*.js
cp "$OUT" "../../img/town3d-$H.js"
echo "img/town3d-$H.js"; ls -l "../../img/town3d-$H.js"
