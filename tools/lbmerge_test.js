// 排行榜上傳合併規則的單元測試（lbMerge）。從 index.html 直接抽出函式來測，不需要瀏覽器。
// 目的：任何人改動 putLb / lbMerge 之後，都能立刻知道「本機資料缺漏或較舊」不會把伺服器上的無限挑戰成績蓋掉。
const fs = require('fs'), path = require('path'), assert = require('assert');
const src = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const start = src.indexOf('const LB_KEEP=');
const end = src.indexOf('function lbEntry(){');
if (start < 0 || end < 0 || end <= start) { console.error('  ✗ 找不到 lbMerge 區塊（index.html 被改了？）'); process.exit(1); }
const lbMerge = new Function(src.slice(start, end) + '\nreturn lbMerge;')();

const cases = [
  ['本機沒有無限挑戰資料時，不能蓋掉伺服器上的成績', () => {
    const m = lbMerge({ name: 'A', best: 5, earned: 9, chal: 14400, at: 1 }, { name: 'A', best: 5, earned: 9, at: 2 });
    assert.strictEqual(m.chal, 14400);
  }],
  ['較低的成績不能覆蓋較高的伺服器成績', () => {
    assert.strictEqual(lbMerge({ name: 'A', chal: 14400 }, { name: 'A', chal: 3600 }).chal, 14400);
  }],
  ['較高的成績要寫進去', () => {
    assert.strictEqual(lbMerge({ name: 'A', chal: 3600 }, { name: 'A', chal: 14400 }).chal, 14400);
  }],
  ['伺服器沒有這筆資料時，直接上傳', () => {
    assert.deepStrictEqual(lbMerge(null, { name: 'B', best: 1, earned: 2, chal: 50 }), { name: 'B', best: 1, earned: 2, chal: 50 });
  }],
  ['fallback 刪掉欄位時，伺服器上的值和其他欄位都保留', () => {
    const m = lbMerge({ name: 'A', chal: 14400, dex: 3 }, { name: 'A', best: 1 });
    assert.strictEqual(m.chal, 14400); assert.strictEqual(m.dex, 3);
  }],
  ['暱稱和時間以本次上傳為準', () => {
    const m = lbMerge({ name: 'old', at: 1 }, { name: 'new', at: 9 });
    assert.strictEqual(m.name, 'new'); assert.strictEqual(m.at, 9);
  }],
];

let bad = 0;
for (const [name, fn] of cases) {
  try { fn(); console.log('  ✓ ' + name); }
  catch (e) { bad++; console.log('  ✗ ' + name + '：' + e.message); }
}
if (bad) { console.log('❌ 排行榜合併測試失敗'); process.exit(1); }
console.log('✅ 排行榜合併測試全部通過（' + cases.length + ' 項）');
