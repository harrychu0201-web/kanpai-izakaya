#!/bin/sh
# 建置街角試作：dev/corner/src.js（＋three）→ dev/corner/corner-<hash>.js（全域 Corner），並把 corner.html 指到新檔名。
# 用法：先在別的資料夾 npm i three esbuild，再：  ./build.sh /path/to/node_modules
set -e
cd "$(dirname "$0")"
NM="${1:-/tmp/build/node_modules}"
OUT=$(mktemp)
"$NM/.bin/esbuild" src.js --bundle --minify --format=iife --global-name=Corner --target=es2019 --legal-comments=none --alias:three/examples="$NM/three/examples" --alias:three="$NM/three/build/three.module.js" --outfile="$OUT"
H=$(sha1sum "$OUT" | cut -c1-8)
rm -f corner-*.js
cp "$OUT" "corner-$H.js"; chmod 644 "corner-$H.js"
sed -i "s#corner-[0-9a-f]*\.js#corner-$H.js#" corner.html
echo "dev/corner/corner-$H.js"; ls -l "corner-$H.js"
