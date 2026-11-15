// 檢查 index.html 裡每一段行內 <script> 與 sw.js 的 JS 語法（比整頁載入更早、更準確地指出哪一行壞掉）
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.resolve(__dirname, '..');
let bad = 0;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const re = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g;
let m, n = 0;
while ((m = re.exec(html))) {
  if (/type=["']application\/(ld\+)?json/.test(m[1])) { try { JSON.parse(m[2]); } catch (e) { console.log('  ✗ JSON script #' + n + ': ' + e.message); bad++; } continue; }
  n++;
  const startLine = html.slice(0, m.index).split('\n').length;
  try { new vm.Script(m[2], { filename: 'index.html(script #' + n + ', 從第 ' + startLine + ' 行起)' }); }
  catch (e) { console.log('  ✗ ' + e.stack.split('\n').slice(0, 4).join('\n    ')); bad++; }
}
for (const f of ['sw.js']) {
  try { new vm.Script(fs.readFileSync(path.join(root, f), 'utf8'), { filename: f }); }
  catch (e) { console.log('  ✗ ' + e.stack.split('\n').slice(0, 4).join('\n    ')); bad++; }
}
for (const f of ['database.rules.json', 'manifest.webmanifest']) {
  try { JSON.parse(fs.readFileSync(path.join(root, f), 'utf8')); } catch (e) { console.log('  ✗ ' + f + ': ' + e.message); bad++; }
}
console.log(bad ? '  ✗ 語法檢查失敗 ' + bad + ' 處' : '  ✓ 語法 OK（' + n + ' 段行內 script、sw.js、rules、manifest）');
process.exit(bad ? 1 : 0);
