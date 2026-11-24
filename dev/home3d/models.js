/* 我的店 3D：家具與擺飾的模型（全部用 three.js 幾何體畫，沒有外部模型檔）。
   每個 build(k) 回傳 Group：原點在「佔地中心、地板高度」，正面朝 +z。佔地 w×d 格（1 格 = 1 公尺）。 */
import {
  Group, Mesh, BoxGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, TorusGeometry, IcosahedronGeometry,
  PlaneGeometry, CircleGeometry, MeshLambertMaterial, MeshBasicMaterial, CanvasTexture, SRGBColorSpace, DoubleSide,
  Sprite, SpriteMaterial, AdditiveBlending, CapsuleGeometry, LatheGeometry, Vector2,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const FONT = "'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif";
const MC = {};
export const lam = (c, o) => { if (o) return new MeshLambertMaterial(Object.assign({ color: c }, o)); return MC[c] || (MC[c] = new MeshLambertMaterial({ color: c })); };
export const bas = (c, o) => new MeshBasicMaterial(Object.assign({ color: c }, o));
const FL = {}; const flat = c => FL[c] || (FL[c] = new MeshLambertMaterial({ color: c, flatShading: true }));
export function ctex(w, h, fn) { const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h); const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 4; return t; }
export function rrect(x, a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }
export const GLOW = ctex(128, 128, (x) => { const g = x.createRadialGradient(64, 64, 2, 64, 64, 64); g.addColorStop(0, 'rgba(255,214,140,1)'); g.addColorStop(.4, 'rgba(255,170,90,.35)'); g.addColorStop(1, 'rgba(255,150,80,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); });

function B(g, w, h, d, m, x, y, z, ry) { const o = new Mesh(new BoxGeometry(w, h, d), typeof m === 'string' ? lam(m) : m); o.position.set(x, y, z); if (ry) o.rotation.y = ry; g.add(o); return o; }
function C(g, rt, rb, h, m, x, y, z, seg) { const o = new Mesh(new CylinderGeometry(rt, rb, h, seg || 16), typeof m === 'string' ? lam(m) : m); o.position.set(x, y, z); g.add(o); return o; }
function S(g, r, m, x, y, z, sx, sy, sz, ws) { const o = new Mesh(new SphereGeometry(r, ws || 16, ws ? ws * .7 | 0 : 12), typeof m === 'string' ? lam(m) : m); o.position.set(x, y, z); o.scale.set(sx || 1, sy || 1, sz || 1); g.add(o); return o; }
function I(g, r, c, x, y, z, s) { const o = new Mesh(new IcosahedronGeometry(r, 1), flat(c)); o.position.set(x, y, z); if (s) o.scale.set(s[0], s[1], s[2]); g.add(o); return o; }
function glow(g, x, y, z, s, op, col) { const sp = new Sprite(new SpriteMaterial({ map: GLOW, blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: op })); if (col) sp.material.color.set(col); sp.scale.set(s, s, 1); sp.position.set(x, y, z); g.add(sp); g.userData.glows = (g.userData.glows || []).concat(sp); return sp; }
function P(g, w, h, tex, x, y, z, ry, ds) { const o = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ map: tex, transparent: true, side: ds ? DoubleSide : undefined, alphaTest: .05 })); o.position.set(x, y, z); if (ry) o.rotation.y = ry; g.add(o); return o; }
function lathe(g, pts, m, x, y, z, seg) { const o = new Mesh(new LatheGeometry(pts.map(p => new Vector2(p[0], p[1])), seg || 20), typeof m === 'string' ? lam(m) : m); o.position.set(x, y, z); g.add(o); return o; }

const W1 = '#a8703f', W2 = '#6b3f1f', W3 = '#d4a56a', DK = '#3a2214', RED = '#d23a28', CREAM = '#f3e2bd';
const txtCache = {};
function kanTex(s, bg, ink, w, h, fs) { const k = s + bg + ink + w + h; return txtCache[k] || (txtCache[k] = ctex(w, h, (x) => { x.fillStyle = bg; x.fillRect(0, 0, w, h); x.fillStyle = ink; x.textAlign = 'center'; x.textBaseline = 'middle'; const ks = [...s]; x.font = `900 ${fs}px ${FONT}`; if (h > w) ks.forEach((c, i) => x.fillText(c, w / 2, h / (ks.length + 1) * (i + 1))); else x.fillText(s, w / 2, h / 2 + 2, w - 10); })); }

/* ───────── 目錄 ─────────
   k: 代號｜n: 名字｜cat: 分類｜p: 價錢｜w,d: 佔地｜L: 圖層（main 地上家具、rug 地毯、top 小東西（可放桌上）、wall 掛牆）
   sf: 桌面高度（可以放小東西）｜seat: 座位｜c: 溫馨度｜solid: 會擋路（預設 main 會擋） */
export const CATS = [['tbl', '🪑 桌椅'], ['lit', '🏮 燈飾'], ['dec', '🎎 擺飾'], ['pla', '🌿 植物'], ['wal', '🖼 牆面'], ['sml', '🍶 小物'], ['rug', '🟫 地墊']];
export const ITEMS = [
  { k: 'table', n: '木頭四人桌', cat: 'tbl', p: 6000, w: 2, d: 1, sf: .81, c: 3 },
  { k: 'chabu', n: '圓矮桌', cat: 'tbl', p: 4000, w: 1, d: 1, sf: .39, c: 3 },
  { k: 'counter', n: '吧台', cat: 'tbl', p: 9000, w: 2, d: 1, sf: 1.07, c: 4 },
  { k: 'chair', n: '木椅', cat: 'tbl', p: 1500, w: 1, d: 1, seat: 1, c: 1 },
  { k: 'stool', n: '高腳椅', cat: 'tbl', p: 1800, w: 1, d: 1, seat: 1, c: 1 },
  { k: 'zabu', n: '座布團', cat: 'tbl', p: 800, w: 1, d: 1, seat: 1, c: 1, solid: 0 },
  { k: 'bench', n: '長板凳', cat: 'tbl', p: 3500, w: 2, d: 1, seat: 1, c: 2 },
  { k: 'register', n: '收銀台', cat: 'tbl', p: 0, w: 1, d: 1, sf: 1.0, c: 2, fixed: 1 },
  { k: 'lantern', n: '紅燈籠立架', cat: 'lit', p: 5000, w: 1, d: 1, c: 4, lit: 1 },
  { k: 'andon', n: '行燈', cat: 'lit', p: 6000, w: 1, d: 1, c: 5, lit: 1 },
  { k: 'stonel', n: '石燈籠', cat: 'lit', p: 12000, w: 1, d: 1, c: 5, lit: 1 },
  { k: 'chochin', n: '燈籠串', cat: 'lit', p: 7000, w: 2, d: 1, L: 'wall', c: 5, lit: 1 },
  { k: 'tanuki', n: '狸貓擺飾', cat: 'dec', p: 15000, w: 1, d: 1, c: 6 },
  { k: 'barrel', n: '酒樽', cat: 'dec', p: 8000, w: 1, d: 1, c: 3, sf: .95 },
  { k: 'crates', n: '啤酒箱', cat: 'dec', p: 3000, w: 1, d: 1, c: 2, sf: .9 },
  { k: 'byobu', n: '屏風', cat: 'dec', p: 18000, w: 2, d: 1, c: 6 },
  { k: 'shelf', n: '清酒櫃', cat: 'dec', p: 20000, w: 2, d: 1, c: 6 },
  { k: 'hibachi', n: '火鉢', cat: 'dec', p: 14000, w: 1, d: 1, c: 6, lit: 1 },
  { k: 'tank', n: '金魚缸', cat: 'dec', p: 22000, w: 1, d: 1, c: 7, sf: 0 },
  { k: 'jukebox', n: '老唱片機', cat: 'dec', p: 30000, w: 1, d: 1, c: 7 },
  { k: 'pine', n: '松樹盆栽', cat: 'pla', p: 9000, w: 1, d: 1, L: 'top', c: 4 },
  { k: 'bamboo', n: '竹子盆', cat: 'pla', p: 7000, w: 1, d: 1, c: 4 },
  { k: 'sakura', n: '櫻花樹盆', cat: 'pla', p: 25000, w: 1, d: 1, c: 8 },
  { k: 'ajisai', n: '紫陽花盆', cat: 'pla', p: 6000, w: 1, d: 1, c: 4 },
  { k: 'scroll', n: '掛軸', cat: 'wal', p: 8000, w: 1, d: 1, L: 'wall', c: 4 },
  { k: 'menu', n: '木牌菜單', cat: 'wal', p: 5000, w: 2, d: 1, L: 'wall', c: 3 },
  { k: 'clock', n: '掛鐘', cat: 'wal', p: 6000, w: 1, d: 1, L: 'wall', c: 3 },
  { k: 'mado', n: '圓窗', cat: 'wal', p: 16000, w: 2, d: 1, L: 'wall', c: 6 },
  { k: 'fuji', n: '富士山畫', cat: 'wal', p: 12000, w: 2, d: 1, L: 'wall', c: 5 },
  { k: 'maneki', n: '招財貓', cat: 'sml', p: 6000, w: 1, d: 1, L: 'top', c: 4 },
  { k: 'daruma', n: '達摩', cat: 'sml', p: 4000, w: 1, d: 1, L: 'top', c: 3 },
  { k: 'beer', n: '生啤酒', cat: 'sml', p: 600, w: 1, d: 1, L: 'top', c: 1 },
  { k: 'sake', n: '清酒組', cat: 'sml', p: 1200, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'yakitori', n: '串燒拼盤', cat: 'sml', p: 1500, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'sushi', n: '壽司盤', cat: 'sml', p: 2500, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'ramen', n: '拉麵', cat: 'sml', p: 1200, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'edamame', n: '毛豆', cat: 'sml', p: 500, w: 1, d: 1, L: 'top', c: 1 },
  { k: 'vase', n: '一輪插', cat: 'sml', p: 2000, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'tatami', n: '榻榻米', cat: 'rug', p: 5000, w: 2, d: 2, L: 'rug', c: 3 },
  { k: 'rug', n: '藍染地毯', cat: 'rug', p: 6000, w: 2, d: 2, L: 'rug', c: 3 },
  { k: 'step', n: '踏石', cat: 'rug', p: 1500, w: 1, d: 1, L: 'rug', c: 1 },
];
/* 家（島上自己房子的室內）用的家具：hc＝家裡的分類 */
export const HCATS = [['liv', '🛋 客廳'], ['bed', '🛏 臥室'], ['kit', '🍳 廚房'], ['dec', '🎎 擺飾'], ['pla', '🌿 植物'], ['wal', '🖼 牆面'], ['sml', '☕ 小物'], ['rug', '🟫 地墊']];
ITEMS.push(
  { k: 'sofa', n: '布沙發', cat: 'x', hc: 'liv', p: 12000, w: 2, d: 1, seat: 1, c: 5 },
  { k: 'armchair', n: '單人沙發', cat: 'x', hc: 'liv', p: 7000, w: 1, d: 1, seat: 1, c: 3 },
  { k: 'ctable', n: '茶几', cat: 'x', hc: 'liv', p: 5000, w: 2, d: 1, sf: .43, c: 3 },
  { k: 'tv', n: '電視櫃', cat: 'x', hc: 'liv', p: 18000, w: 2, d: 1, c: 5 },
  { k: 'books', n: '書櫃', cat: 'x', hc: 'liv', p: 14000, w: 2, d: 1, c: 5 },
  { k: 'flamp', n: '立燈', cat: 'x', hc: 'liv', p: 6000, w: 1, d: 1, c: 4, lit: 1 },
  { k: 'piano', n: '直立鋼琴', cat: 'x', hc: 'liv', p: 40000, w: 2, d: 1, c: 8 },
  { k: 'bed', n: '雙人床', cat: 'x', hc: 'bed', p: 20000, w: 2, d: 2, c: 6 },
  { k: 'wardrobe', n: '衣櫃', cat: 'x', hc: 'bed', p: 15000, w: 2, d: 1, c: 4 },
  { k: 'nstand', n: '床頭櫃', cat: 'x', hc: 'bed', p: 3000, w: 1, d: 1, sf: .52, c: 2 },
  { k: 'desk', n: '書桌', cat: 'x', hc: 'bed', p: 8000, w: 2, d: 1, sf: .77, c: 3 },
  { k: 'kcounter', n: '流理台', cat: 'x', hc: 'kit', p: 16000, w: 2, d: 1, sf: .92, c: 4 },
  { k: 'stove', n: '瓦斯爐', cat: 'x', hc: 'kit', p: 9000, w: 1, d: 1, sf: .92, c: 3 },
  { k: 'fridge', n: '冰箱', cat: 'x', hc: 'kit', p: 14000, w: 1, d: 1, c: 3 },
  { k: 'catbed', n: '貓窩', cat: 'x', hc: 'dec', p: 4000, w: 1, d: 1, c: 4, solid: 0 },
  { k: 'monstera', n: '龜背芋', cat: 'x', hc: 'pla', p: 6000, w: 1, d: 1, c: 4 },
  { k: 'cactus', n: '仙人掌', cat: 'x', hc: 'pla', p: 1500, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'wwin', n: '窗簾窗戶', cat: 'x', hc: 'wal', p: 8000, w: 2, d: 1, L: 'wall', c: 5 },
  { k: 'photos', n: '相框牆', cat: 'x', hc: 'wal', p: 5000, w: 2, d: 1, L: 'wall', c: 4 },
  { k: 'shelfw', n: '牆上層架', cat: 'x', hc: 'wal', p: 4000, w: 2, d: 1, L: 'wall', c: 3 },
  { k: 'book', n: '一疊書', cat: 'x', hc: 'sml', p: 800, w: 1, d: 1, L: 'top', c: 1 },
  { k: 'mug', n: '馬克杯', cat: 'x', hc: 'sml', p: 500, w: 1, d: 1, L: 'top', c: 1 },
  { k: 'cake', n: '草莓蛋糕', cat: 'x', hc: 'sml', p: 1800, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'laptop', n: '筆電', cat: 'x', hc: 'sml', p: 9000, w: 1, d: 1, L: 'top', c: 2 },
  { k: 'dlamp', n: '桌燈', cat: 'x', hc: 'sml', p: 2500, w: 1, d: 1, L: 'top', c: 2, lit: 1 },
  { k: 'teddy', n: '小熊玩偶', cat: 'x', hc: 'sml', p: 3000, w: 1, d: 1, L: 'top', c: 3 },
  { k: 'carpet', n: '毛毛地毯', cat: 'x', hc: 'rug', p: 6000, w: 2, d: 2, L: 'rug', c: 3 },
);
/* 店裡的東西也可以搬回家擺 */
export const HOMECAT = { chair: 'kit', table: 'kit', chabu: 'liv', zabu: 'liv', andon: 'liv', jukebox: 'liv', tank: 'dec', tanuki: 'dec', byobu: 'bed', hibachi: 'dec', pine: 'pla', bamboo: 'pla', sakura: 'pla', ajisai: 'pla', scroll: 'wal', clock: 'wal', mado: 'wal', fuji: 'wal', maneki: 'sml', daruma: 'sml', vase: 'sml', beer: 'sml', ramen: 'sml', sushi: 'sml', edamame: 'sml', tatami: 'rug', rug: 'rug' };
ITEMS.forEach(i => { if (!i.hc && HOMECAT[i.k]) i.hc = HOMECAT[i.k]; });
export const IT = {}; ITEMS.forEach(i => { i.L = i.L || 'main'; if (i.solid === undefined) i.solid = i.L === 'main' ? 1 : 0; IT[i.k] = i; });
export const FLOORS = [['wood', '原木地板', 0], ['light', '淺色木地板', 8000], ['carpetf', '米色地毯', 10000], ['dark', '深色木地板', 12000], ['tatami', '榻榻米地', 20000], ['stone', '石板地', 16000], ['check', '市松格紋', 24000]];
export const WALLS = [['tsuchi', '米色土牆', 0], ['cream', '奶油壁紙', 6000], ['stripe', '條紋壁紙', 9000], ['flower', '碎花壁紙', 12000], ['mint', '薄荷漆牆', 9000], ['plank', '木板牆', 10000], ['red', '朱紅漆牆', 18000], ['ai', '藍染布牆', 18000], ['sakura', '櫻花紙牆', 24000]];

/* ───────── 模型 ───────── */
const F = {};
F.table = g => { B(g, 1.9, .08, .9, W1, 0, .74, 0); B(g, 1.84, .03, .84, W3, 0, .79, 0); for (const sx of [-.82, .82]) for (const sz of [-.36, .36]) B(g, .08, .72, .08, W2, sx, .36, sz); B(g, 1.6, .06, .04, W2, 0, .55, -.36); B(g, 1.6, .06, .04, W2, 0, .55, .36); };
F.chabu = g => { C(g, .46, .46, .06, W1, 0, .34, 0, 28); C(g, .44, .44, .02, W3, 0, .375, 0, 28); for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; B(g, .07, .32, .07, W2, Math.cos(a) * .3, .16, Math.sin(a) * .3); } };
F.counter = g => { B(g, 1.96, 1.0, .8, W2, 0, .5, 0); B(g, 2.04, .08, .96, W3, 0, 1.03, .04); B(g, 1.9, .12, .04, W1, 0, .14, .41); for (let i = -2; i <= 2; i++) B(g, .04, .8, .02, '#5a3216', i * .38, .52, .405); };
F.chair = g => { B(g, .48, .06, .48, W1, 0, .46, .02); for (const sx of [-.2, .2]) for (const sz of [-.18, .22]) B(g, .05, .46, .05, W2, sx, .23, sz); B(g, .48, .5, .05, W1, 0, .74, -.2); B(g, .4, .06, .03, W3, 0, .86, -.18); };
F.stool = g => { C(g, .22, .2, .07, '#c23a2a', 0, .76, 0, 18); C(g, .03, .03, .72, '#3a3a40', 0, .38, 0, 8); C(g, .2, .22, .04, '#3a3a40', 0, .02, 0, 18); const r = new Mesh(new TorusGeometry(.13, .015, 6, 18), lam('#3a3a40')); r.rotation.x = Math.PI / 2; r.position.y = .3; g.add(r); };
F.zabu = g => { const o = B(g, .62, .1, .62, '#7a2e4a', 0, .06, 0); o.geometry = new BoxGeometry(.62, .1, .62, 2, 1, 2); S(g, .05, '#e9c34a', 0, .12, 0); };
F.bench = g => { B(g, 1.9, .07, .42, W1, 0, .44, 0); for (const sx of [-.8, .8]) { B(g, .07, .42, .36, W2, sx, .21, 0); } B(g, 1.6, .05, .04, W2, 0, .2, 0); };
F.register = g => { B(g, .9, .95, .7, W2, 0, .475, 0); B(g, .96, .06, .78, W3, 0, .98, 0); B(g, .5, .22, .36, '#2b2b33', 0, 1.12, -.05); B(g, .42, .1, .3, '#3c3c46', 0, 1.26, -.12); B(g, .36, .14, .03, '#9fe0b6', 0, 1.3, -.28, 0).material = bas('#9fe0b6'); S(g, .07, '#e9b830', .3, 1.06, .2); S(g, .05, '#e9b830', .22, 1.04, .26); };
F.lantern = g => { C(g, .025, .025, 1.7, DK, 0, .85, 0, 6); B(g, .5, .04, .04, DK, .2, 1.68, 0); C(g, .18, .2, .06, '#2a2a2a', 0, .03, 0, 12); const lg = new Group(); lg.position.set(.38, 1.3, 0); g.add(lg); const b = S(lg, .22, bas('#e2452f'), 0, 0, 0, 1, 1.3, 1, 18); b.userData.lit = 1; C(lg, .14, .14, .06, DK, 0, .3, 0, 12); C(lg, .14, .14, .06, DK, 0, -.3, 0, 12); P(lg, .2, .34, kanTex('酒', 'rgba(0,0,0,0)', '#2a1408', 64, 110, 64), 0, 0, .225); C(lg, .01, .01, .2, DK, 0, .42, 0, 4); glow(lg, 0, 0, .1, 1.8, .55); g.userData.swing = lg; };
F.andon = g => { for (const sx of [-.17, .17]) for (const sz of [-.17, .17]) B(g, .04, .9, .04, DK, sx, .45, sz); const sh = B(g, .32, .5, .32, bas('#fff1c8'), 0, .55, 0); sh.userData.lit = 1; B(g, .4, .04, .4, DK, 0, .82, 0); B(g, .4, .04, .4, DK, 0, .29, 0); for (const a of [-.06, .06]) B(g, .005, .48, .33, DK, a, .55, 0); glow(g, 0, .55, 0, 2.2, .6); };
F.stonel = g => { const st = '#9a9590'; B(g, .5, .12, .5, st, 0, .06, 0); C(g, .1, .13, .5, st, 0, .37, 0, 8); B(g, .42, .1, .42, st, 0, .66, 0); const f = B(g, .3, .28, .3, bas('#ffd98a'), 0, .85, 0); f.userData.lit = 1; for (const s of [[-.13, -.13], [.13, -.13], [-.13, .13], [.13, .13]]) B(g, .06, .3, .06, st, s[0], .85, s[1]); const rf = new Mesh(new ConeGeometry(.45, .3, 4), lam(st)); rf.rotation.y = Math.PI / 4; rf.position.y = 1.14; g.add(rf); S(g, .07, st, 0, 1.33, 0); glow(g, 0, .85, 0, 1.6, .55); };
F.chochin = g => { const col = ['#e2452f', '#f2b630', '#e2452f', '#fff1c8', '#e2452f']; for (let i = 0; i < 5; i++) { const x = -.8 + i * .4, y = 2.25 - Math.sin(i / 4 * Math.PI) * .25; const b = S(g, .12, bas(col[i]), x, y, .18, 1, 1.25, 1, 12); b.userData.lit = 1; glow(g, x, y, .26, .8, .35); } const pts = []; for (let i = 0; i <= 8; i++) { const t = i / 8; pts.push([-.95 + t * 1.9, 2.42 - Math.sin(t * Math.PI) * .25]); } for (let i = 0; i < 8; i++) { const [x1, y1] = pts[i], [x2, y2] = pts[i + 1]; const o = B(g, Math.hypot(x2 - x1, y2 - y1), .015, .015, DK, (x1 + x2) / 2, (y1 + y2) / 2, .18); o.rotation.z = Math.atan2(y2 - y1, x2 - x1); } };
F.tanuki = g => { const br = '#8a6a4a', bl = '#e8d8b8'; S(g, .3, br, 0, .38, 0, 1, 1.05, .95); S(g, .2, bl, 0, .36, .16, 1, 1.1, .5); S(g, .22, br, 0, .82, .02); for (const sx of [-.13, .13]) { S(g, .06, br, sx, 1.0, 0); S(g, .055, DK, sx * .7, .85, .19, 1, .8, .5); S(g, .02, '#fff', sx * .7 + .01, .86, .21); } S(g, .045, DK, 0, .78, .22); B(g, .34, .06, .3, '#5a4a3a', 0, 1.03, 0); C(g, .16, .2, .04, '#5a4a3a', 0, 1.0, 0, 14); const bt = C(g, .07, .09, .28, '#d8c8a8', .26, .32, .12, 10); bt.rotation.z = -.3; const cap = B(g, .45, .03, .02, '#c43a2a', 0, .5, .3); cap.visible = false; S(g, .15, br, -.2, .12, .12, 1, .6, 1); S(g, .15, br, .2, .12, .12, 1, .6, 1); S(g, .12, br, .1, .25, -.3, 1, .7, 1.4); };
F.barrel = g => { lathe(g, [[0, 0], [.3, 0], [.36, .2], [.38, .45], [.36, .7], [.3, .9], [0, .9]], '#e8dcc0', 0, 0, 0, 22); for (const y of [.12, .78]) { const r = new Mesh(new TorusGeometry(.34, .025, 6, 22), lam('#5a3a1a')); r.rotation.x = Math.PI / 2; r.position.y = y; g.add(r); } P(g, .36, .36, kanTex('祝', '#c4302a', '#f8eed8', 96, 96, 70), 0, .45, .375); C(g, .3, .3, .02, W3, 0, .91, 0, 22); };
F.crates = g => { const cr = (y, ry, c) => { const o = new Group(); o.position.y = y; o.rotation.y = ry; g.add(o); B(o, .6, .32, .44, c, 0, .16, 0); for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { C(o, .06, .06, .36, '#7a4a1a', -.18 + i * .18, .3, -.1 + j * .2, 8); C(o, .025, .03, .1, '#f2e6c8', -.18 + i * .18, .52, -.1 + j * .2, 6); } }; cr(0, 0, '#c8352a'); cr(.32, .15, '#e0a32a'); };
F.byobu = g => { const t = ctex(256, 128, (x, w, h) => { x.fillStyle = '#e6c770'; x.fillRect(0, 0, w, h); x.fillStyle = '#d9b450'; for (let i = 0; i < 40; i++) x.fillRect(Math.random() * w, Math.random() * h, 12, 12); x.strokeStyle = '#7a5530'; x.lineWidth = 4; x.beginPath(); x.moveTo(30, 110); x.quadraticCurveTo(60, 40, 120, 70); x.quadraticCurveTo(170, 95, 230, 30); x.stroke(); x.fillStyle = '#e48aa4'; for (let i = 0; i < 18; i++) { x.beginPath(); x.arc(40 + Math.random() * 190, 25 + Math.random() * 70, 5, 0, 7); x.fill(); } x.fillStyle = '#4a6a8a'; x.beginPath(); x.ellipse(70, 116, 60, 10, 0, 0, 7); x.fill(); });
  for (let i = 0; i < 4; i++) { const pg = new Group(); pg.position.set(-.72 + i * .48, 0, i % 2 ? .08 : -.08); pg.rotation.y = i % 2 ? .3 : -.3; g.add(pg); B(pg, .48, 1.5, .03, '#3a1e0c', 0, .8, -.01); const m = new Mesh(new PlaneGeometry(.42, 1.4), new MeshBasicMaterial({ map: t })); m.material.map = t.clone(); m.material.map.needsUpdate = true; m.material.map.repeat.set(.25, 1); m.material.map.offset.set(i * .25, 0); m.position.set(0, .8, .01); pg.add(m); const bk = m.clone(); bk.rotation.y = Math.PI; bk.position.z = -.025; pg.add(bk); } };
F.shelf = g => { for (const sx of [-.925, .925]) B(g, .05, 1.8, .42, W2, sx, .9, -.1); B(g, 1.9, .05, .42, W2, 0, 1.775, -.1); B(g, 1.8, 1.7, .02, '#2a1408', 0, .9, -.3); B(g, 1.8, .06, .38, W1, 0, .03, -.1); for (const y of [.35, .8, 1.25, 1.65]) B(g, 1.8, .04, .38, W1, 0, y, -.1); const bc = ['#2f6a3a', '#7a3a1a', '#e8e0d0', '#2a3a6a', '#5a2a4a', '#c8a040']; let k = 0; for (const y of [.37, .82, 1.27]) for (let i = 0; i < 6; i++) { const c = bc[(k++ * 7) % 6], h = .26 + (k % 3) * .04; C(g, .055, .065, h, c, -.72 + i * .29, y + h / 2, -.06, 10); C(g, .02, .03, .09, c, -.72 + i * .29, y + h + .04, -.06, 6); if (k % 2) B(g, .1, .08, .01, CREAM, -.72 + i * .29, y + h * .5, .012); } };
F.hibachi = g => { lathe(g, [[0, 0], [.28, 0], [.34, .08], [.36, .4], [.3, .46], [0, .46]], '#3a4a5a', 0, 0, 0, 24); C(g, .28, .28, .02, '#cfc6b8', 0, .44, 0, 24); for (let i = 0; i < 5; i++) { const e = I(g, .06, '#ff7a2a', Math.cos(i * 1.3) * .12, .48, Math.sin(i * 1.3) * .12); e.material = bas('#ff7a2a'); e.userData.lit = 1; } C(g, .14, .16, .14, '#2a2a2a', 0, .58, 0, 12); const sp = C(g, .03, .03, .1, '#2a2a2a', .16, .62, 0, 6); sp.rotation.z = -.9; glow(g, 0, .55, 0, 1.4, .6, '#ff8a3a'); };
F.tank = g => { B(g, .7, .55, .5, W2, 0, .275, 0); const gl = B(g, .68, .5, .48, lam('#9fd8ef', { transparent: true, opacity: .35 }), 0, .82, 0); gl.renderOrder = 2; B(g, .62, .4, .42, bas('#3a9ac8', { transparent: true, opacity: .45 }), 0, .78, 0).renderOrder = 1; B(g, .6, .06, .4, '#d8c8a0', 0, .6, 0); for (let i = 0; i < 3; i++) { const f = new Group(); f.position.set(-.15 + i * .15, .78 + (i % 2) * .08, -.05 + i * .05); g.add(f); S(f, .05, i === 1 ? '#f8f0e8' : '#ff6a2a', 0, 0, 0, 1.5, 1, .6); const tl = new Mesh(new ConeGeometry(.04, .07, 6), lam('#ff8a4a')); tl.rotation.z = Math.PI / 2; tl.position.x = -.09; f.add(tl); g.userData.fish = (g.userData.fish || []).concat(f); } I(g, .06, '#3a8a4a', .2, .7, .1, [.6, 2.4, .6]); I(g, .05, '#4a9a5a', .24, .68, -.1, [.6, 2, .6]); };
F.jukebox = g => { B(g, .7, .7, .5, W2, 0, .35, 0); B(g, .74, .05, .54, W1, 0, .72, 0); C(g, .24, .24, .02, '#141414', -.05, .76, .02, 28); C(g, .06, .06, .025, '#d8452f', -.05, .765, .02, 12); const arm = B(g, .02, .02, .26, '#c0c0c8', .2, .79, -.02); arm.rotation.y = .5; const hn = new Mesh(new ConeGeometry(.22, .4, 18, 1, true), lam('#d8a83a', { side: DoubleSide })); hn.rotation.x = -1.1; hn.position.set(.18, 1.05, -.15); g.add(hn); C(g, .02, .02, .3, '#d8a83a', .2, .85, -.08, 6); B(g, .5, .3, .02, '#2a1408', 0, .35, .26); g.userData.spin = g.children[2]; };
F.pine = g => { C(g, .2, .16, .14, '#3a5a8a', 0, .07, 0, 6); C(g, .2, .2, .02, '#5a3a2a', 0, .14, 0, 6); const t = C(g, .03, .04, .3, '#5a3a24', 0, .28, 0, 6); t.rotation.z = .3; I(g, .14, '#2f5a32', -.06, .44, 0, [1.4, .55, 1.1]); I(g, .1, '#3a6a3a', .12, .38, .04, [1.4, .5, 1]); I(g, .09, '#2f5a32', -.1, .3, -.04, [1.3, .45, 1]); };
F.bamboo = g => { C(g, .22, .18, .32, '#e8e0d0', 0, .16, 0, 18); C(g, .2, .2, .02, '#4a3a2a', 0, .32, 0, 18); for (let i = 0; i < 5; i++) { const x = Math.cos(i * 2.4) * .1, z = Math.sin(i * 2.4) * .1, h = 1.3 + (i % 3) * .3; C(g, .025, .025, h, '#6a9a3a', x, .3 + h / 2, z, 8); for (let j = 1; j < 4; j++) C(g, .03, .03, .02, '#4a7a2a', x, .3 + j * h / 4, z, 8); for (let j = 0; j < 3; j++) { const l = new Mesh(new PlaneGeometry(.32, .06), new MeshLambertMaterial({ color: '#5a9a3a', side: DoubleSide })); l.position.set(x + .12 * Math.cos(j * 2 + i), .3 + h * (.55 + j * .15), z + .12 * Math.sin(j * 2 + i)); l.rotation.set(-.3, j * 2 + i, -.4); g.add(l); } } };
F.sakura = g => { C(g, .26, .22, .36, '#2a3a5a', 0, .18, 0, 8); C(g, .24, .24, .02, '#4a3a2a', 0, .36, 0, 8); const tr = C(g, .05, .08, 1.1, '#5a3a2a', 0, .9, 0, 7); tr.rotation.z = .12; const br = C(g, .03, .04, .6, '#5a3a2a', .2, 1.3, 0, 6); br.rotation.z = -.8; const pk = ['#f4b8c8', '#f8d0dc', '#e898b0']; [[0, 1.65, 0, .55], [.4, 1.55, .1, .4], [-.32, 1.5, -.05, .4], [.1, 1.45, .3, .35], [-.1, 1.85, -.1, .38]].forEach(([x, y, z, s], i) => I(g, s, pk[i % 3], x, y, z, [1, .75, 1])); g.userData.petals = 1; };
F.ajisai = g => { C(g, .2, .16, .28, '#8a5a3a', 0, .14, 0, 14); for (let i = 0; i < 6; i++) I(g, .13, '#3a6a3a', Math.cos(i) * .14, .38, Math.sin(i) * .14, [1.2, .6, 1.2]); const cs = ['#8a7ad8', '#6a8ae8', '#b08ae0', '#7aa0f0']; for (let i = 0; i < 5; i++) { const a = i * 1.25; I(g, .12, cs[i % 4], Math.cos(a) * .12, .5 + (i % 2) * .08, Math.sin(a) * .12); } };
/* 牆面物件：原點在牆前地板，正面朝 +z，高度自己畫 */
F.scroll = g => { const t = ctex(96, 256, (x, w, h) => { x.fillStyle = '#f4ecd8'; x.fillRect(0, 0, w, h); x.fillStyle = '#c8b890'; x.fillRect(0, 0, w, 30); x.fillRect(0, h - 30, w, 30); x.fillStyle = '#1a1a1a'; x.textAlign = 'center'; x.font = `900 46px ${FONT}`; ['一', '期', '一', '會'].forEach((c, i) => x.fillText(c, w / 2, 76 + i * 46)); x.fillStyle = '#c4302a'; x.fillRect(58, 214, 14, 14); }); B(g, .5, .04, .04, DK, 0, 2.25, .04); B(g, .5, .04, .04, DK, 0, 1.02, .04); P(g, .42, 1.2, t, 0, 1.63, .03); };
F.menu = g => { const items = ['生ビール', '焼き鳥', '枝豆', '唐揚げ', '冷奴', '熱燗']; for (let i = 0; i < 6; i++) { const t = kanTex(items[i], '#e9d3a4', '#2a1408', 64, 256, 36); B(g, .22, .82, .03, W2, -.7 + i * .28, 1.75, .015); P(g, .18, .76, t, -.7 + i * .28, 1.75, .035); } B(g, 1.8, .06, .05, DK, 0, 2.2, .03); };
F.clock = g => { const t = ctex(128, 128, (x) => { x.fillStyle = '#f8f0dc'; x.beginPath(); x.arc(64, 64, 60, 0, 7); x.fill(); x.fillStyle = '#2a1408'; x.font = `700 18px ${FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle'; for (let i = 1; i <= 12; i++) { const a = i / 12 * Math.PI * 2 - Math.PI / 2; x.fillText(String(i), 64 + Math.cos(a) * 46, 64 + Math.sin(a) * 46); } }); B(g, .5, .7, .1, W2, 0, 1.95, .05); C(g, .2, .2, .02, '#d8b040', 0, 1.5, .08, 18).rotation.x = Math.PI / 2; const f = P(g, .4, .4, t, 0, 2.05, .105); const h1 = B(g, .015, .13, .01, '#1a1a1a', 0, 2.1, .11), h2 = B(g, .01, .17, .01, '#1a1a1a', 0, 2.1, .115); g.userData.hands = [h1, h2]; g.userData.handY = 2.05; const pend = new Group(); pend.position.set(0, 1.75, .07); g.add(pend); B(pend, .01, .2, .01, '#c8a040', 0, -.1, 0); g.userData.swing = pend; };
F.mado = g => { const t = ctex(256, 256, (x, w, h) => { const gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#1a1a40'); gr.addColorStop(1, '#5a3a6a'); x.fillStyle = gr; x.fillRect(0, 0, w, h); x.fillStyle = '#fdf2c8'; x.beginPath(); x.arc(170, 80, 34, 0, 7); x.fill(); x.fillStyle = '#fff8'; for (let i = 0; i < 30; i++) x.fillRect(Math.random() * w, Math.random() * h * .6, 2, 2); x.strokeStyle = '#2a1a1a'; x.lineWidth = 6; x.beginPath(); x.moveTo(0, 200); x.quadraticCurveTo(80, 150, 130, 190); x.stroke(); x.fillStyle = '#f4b8c8'; for (let i = 0; i < 14; i++) { x.beginPath(); x.arc(10 + Math.random() * 120, 150 + Math.random() * 50, 7, 0, 7); x.fill(); } }); const m = new Mesh(new CircleGeometry(.62, 32), new MeshBasicMaterial({ map: t })); m.position.set(0, 1.6, .03); g.add(m); const ring = new Mesh(new TorusGeometry(.64, .06, 8, 32), lam(W2)); ring.position.set(0, 1.6, .04); g.add(ring); for (const a of [-.2, .2]) B(g, .02, 1.2, .02, DK, a, 1.6, .05); B(g, 1.2, .02, .02, DK, 0, 1.6, .05); glow(g, 0, 1.6, .15, 1.6, .25, '#b8c8ff'); };
F.fuji = g => { const t = ctex(256, 160, (x, w, h) => { const gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#f8d8a0'); gr.addColorStop(1, '#f0b090'); x.fillStyle = gr; x.fillRect(0, 0, w, h); x.fillStyle = '#e2452f'; x.beginPath(); x.arc(200, 40, 18, 0, 7); x.fill(); x.fillStyle = '#4a6a9a'; x.beginPath(); x.moveTo(20, 150); x.lineTo(128, 40); x.lineTo(236, 150); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.moveTo(108, 60); x.lineTo(128, 40); x.lineTo(148, 60); x.lineTo(138, 66); x.lineTo(128, 58); x.lineTo(118, 68); x.fill(); x.fillStyle = '#2a4a6a'; x.fillRect(0, 140, w, 20); }); B(g, 1.6, 1.0, .05, '#2a1408', 0, 1.7, .025); P(g, 1.5, .9, t, 0, 1.7, .055); };
/* 小物 */
F.maneki = g => { const wh = '#f8f4ec'; S(g, .12, wh, 0, .13, 0, 1, 1.1, .9); S(g, .1, wh, 0, .32, .01); for (const sx of [-.06, .06]) { const e = new Mesh(new ConeGeometry(.035, .06, 4), lam(wh)); e.position.set(sx, .42, 0); g.add(e); S(g, .012, '#1a1a1a', sx * .6, .34, .09); } S(g, .02, '#f08a9a', 0, .31, .1); B(g, .16, .025, .05, RED, 0, .23, .06); S(g, .02, '#e9b830', 0, .21, .1); const arm = new Group(); arm.position.set(.09, .3, .02); g.add(arm); S(arm, .035, wh, 0, .07, 0, 1, 1.6, 1); g.userData.wave = arm; S(g, .05, '#e9b830', -.05, .15, .1, 1, .7, .3); };
F.daruma = g => { S(g, .14, '#d23a28', 0, .15, 0, 1, 1.1, 1); S(g, .085, '#f8eed8', 0, .19, .08, 1, .9, .5); for (const sx of [-.03, .03]) S(g, .016, '#1a1a1a', sx, .2, .125); B(g, .08, .012, .01, '#1a1a1a', 0, .155, .13); };
F.beer = g => { C(g, .07, .065, .2, lam('#f0a830', { transparent: true, opacity: .85 }), 0, .1, 0, 14); C(g, .072, .072, .05, '#fff8ec', 0, .22, 0, 14); const h = new Mesh(new TorusGeometry(.05, .012, 6, 12, Math.PI), lam('#d8e8f0', { transparent: true, opacity: .7 })); h.position.set(.09, .1, 0); h.rotation.z = -Math.PI / 2; g.add(h); };
F.sake = g => { B(g, .34, .02, .2, W2, 0, .01, 0); lathe(g, [[0, 0], [.05, 0], [.06, .08], [.05, .14], [.02, .19], [.022, .22], [0, .22]], '#f0ece0', -.08, .02, 0, 14); for (const x of [.06, .13]) C(g, .03, .025, .04, '#f0ece0', x, .04, 0, 10); };
F.yakitori = g => { C(g, .16, .14, .02, '#f0ece0', 0, .01, 0, 20); for (let i = 0; i < 3; i++) { const s = new Group(); s.position.set(0, .035, -.05 + i * .05); s.rotation.y = .2; g.add(s); B(s, .26, .006, .006, '#d8c8a0', 0, 0, 0); for (let j = 0; j < 4; j++) I(s, .025, i === 1 ? '#5a8a3a' : '#9a4a1a', -.07 + j * .05, .005, 0, [1.1, .9, 1]); } };
F.sushi = g => { B(g, .34, .03, .16, W1, 0, .03, 0); for (let i = 0; i < 4; i++) { B(g, .06, .035, .035, '#f8f6f0', -.11 + i * .075, .065, 0); B(g, .065, .015, .04, ['#e2452f', '#f08a4a', '#f8f0e0', '#e2452f'][i], -.11 + i * .075, .088, 0); } };
F.ramen = g => { lathe(g, [[0, 0], [.06, 0], [.11, .04], [.13, .1], [.125, .1], [0, .1]], '#c8352a', 0, 0, 0, 20); C(g, .12, .12, .01, '#d89a4a', 0, .09, 0, 20); S(g, .025, '#f8e8a0', -.04, .1, .02, 1, .5, 1); B(g, .05, .01, .04, '#8a4a2a', .04, .1, -.02); B(g, .03, .01, .05, '#2a3a2a', .02, .1, .05); for (const x of [.0, .015]) { const c = B(g, .005, .005, .2, '#c8a070', .07 + x, .13, 0); c.rotation.x = .3; } };
F.edamame = g => { C(g, .09, .06, .04, '#f0ece0', 0, .02, 0, 14); for (let i = 0; i < 6; i++) I(g, .022, '#6aa83a', Math.cos(i) * .04, .05, Math.sin(i) * .04, [1.8, .8, 1]); };
F.vase = g => { lathe(g, [[0, 0], [.05, 0], [.07, .08], [.05, .18], [.025, .24], [.03, .26], [0, .26]], '#3a5a8a', 0, 0, 0, 16); C(g, .006, .006, .25, '#4a7a3a', 0, .36, 0, 4); S(g, .035, '#f0e0e8', .0, .5, 0); S(g, .03, '#e898b0', .02, .48, .02); };
/* 地墊 */
F.tatami = g => { const t = ctex(256, 256, (x, w, h) => { x.fillStyle = '#c8c47a'; x.fillRect(0, 0, w, h); for (let i = 0; i < h; i += 3) { x.fillStyle = i % 6 ? '#bcb86e' : '#d2ce86'; x.fillRect(0, i, w, 1); } x.fillStyle = '#2a3a2a'; x.fillRect(0, 0, w, 10); x.fillRect(0, h - 10, w, 10); x.fillRect(0, 124, w, 8); }); const m = new Mesh(new BoxGeometry(1.96, .04, 1.96), [lam('#2a3a2a'), lam('#2a3a2a'), new MeshLambertMaterial({ map: t }), lam('#2a3a2a'), lam('#2a3a2a'), lam('#2a3a2a')]); m.position.y = .02; g.add(m); };
F.rug = g => { const t = ctex(256, 256, (x, w, h) => { x.fillStyle = '#23315c'; x.fillRect(0, 0, w, h); x.strokeStyle = '#e8e0d0'; x.lineWidth = 3; for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) { const cx = 26 + i * 51, cy = 26 + j * 51; x.beginPath(); for (let k = 0; k < 3; k++) x.arc(cx, cy, 8 + k * 7, Math.PI, 0); x.stroke(); } x.strokeStyle = '#c8a040'; x.lineWidth = 6; x.strokeRect(6, 6, w - 12, h - 12); }); const m = new Mesh(new CircleGeometry(.96, 40), new MeshLambertMaterial({ map: t })); m.rotation.x = -Math.PI / 2; m.position.y = .015; g.add(m); };
F.step = g => { I(g, .32, '#8a8680', 0, .02, 0, [1.1, .12, .9]); };

/* 同一件家具裡、同一種材質的靜態零件合併成一個 mesh（手機上 draw call 少很多）；會動的零件、透明的不合併 */
function compact(g) {
  const skip = new Set(), u = g.userData;
  for (const k of ['swing', 'wave', 'spin']) if (u[k]) u[k].traverse(o => skip.add(o));
  if (u.fish) u.fish.forEach(f => f.traverse(o => skip.add(o)));
  if (u.hands) u.hands.forEach(o => skip.add(o));
  g.updateMatrixWorld(true);
  const by = new Map();
  g.traverse(o => { if (!o.isMesh || skip.has(o) || Array.isArray(o.material) || o.material.transparent || o.material.map) return; const k = o.material.uuid; if (!by.has(k)) by.set(k, []); by.get(k).push(o); });
  for (const list of by.values()) {
    if (list.length < 2) continue;
    try {
      const geos = list.map(o => { let gg = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone(); for (const n of Object.keys(gg.attributes)) if (n !== 'position' && n !== 'normal' && n !== 'uv') gg.deleteAttribute(n); if (!gg.attributes.uv) return null; gg.applyMatrix4(o.matrixWorld); return gg; });
      if (geos.some(x => !x)) continue;
      const mg = mergeGeometries(geos, false); if (!mg) continue;
      const m = new Mesh(mg, list[0].material); g.add(m);
      list.forEach(o => { o.parent.remove(o); o.geometry.dispose(); }); geos.forEach(x => x.dispose());
    } catch (_) { }
  }
}
/* ───── 家具（家） ───── */
const FAB = '#6fa8d6', FAB2 = '#4f86b8', WHITE = '#f6f2ea', OAK = '#d9b07a';
F.sofa = g => { B(g, 1.9, .42, .82, FAB2, 0, .21, 0); for (const x of [-.46, .46]) B(g, .9, .16, .7, FAB, x, .5, .06); B(g, 1.9, .55, .2, FAB2, 0, .72, -.32); for (const x of [-.88, .88]) B(g, .18, .58, .82, FAB2, x, .45, 0); S(g, .16, '#f2c94c', -.6, .7, -.12, 1, 1, .5); S(g, .16, '#f29ab8', .6, .7, -.12, 1, 1, .5); };
F.armchair = g => { B(g, .8, .4, .78, '#e07a5f', 0, .2, 0); B(g, .62, .14, .64, '#ee9a7a', 0, .48, .05); B(g, .8, .55, .18, '#e07a5f', 0, .7, -.3); for (const x of [-.36, .36]) B(g, .14, .52, .78, '#e07a5f', x, .45, 0); };
F.ctable = g => { B(g, 1.6, .06, .7, OAK, 0, .4, 0); for (const sx of [-.7, .7]) for (const sz of [-.28, .28]) C(g, .03, .03, .38, '#8a6a4a', sx, .19, sz, 8); B(g, 1.5, .03, .6, '#c89a62', 0, .15, 0); };
F.tv = g => { B(g, 1.8, .5, .48, WHITE, 0, .25, -.1); for (const x of [-.45, .45]) B(g, .8, .38, .02, '#e8e0d0', x, .25, .15); B(g, 1.3, .78, .06, '#1a1a1e', 0, .98, -.12); const sc = B(g, 1.2, .68, .02, bas('#4a8ad8'), 0, .98, -.085); sc.userData.lit = 1; g.userData.tvs = sc; B(g, .3, .08, .2, '#2a2a2e', 0, .54, -.12); };
F.books = g => { for (const sx of [-.925, .925]) B(g, .05, 1.9, .4, OAK, sx, .95, -.1); B(g, 1.9, .05, .4, OAK, 0, 1.875, -.1); B(g, 1.8, 1.8, .02, '#a07850', 0, .95, -.29); for (const y of [.05, .5, .95, 1.4]) B(g, 1.8, .04, .36, '#c8a070', 0, y + .02, -.1); const cs = ['#d8452f', '#2f6bb8', '#3f8f4f', '#f2b630', '#9a6ad6', '#e8e0d0', '#5a3a2a']; let k = 0; for (const y of [.09, .54, .99]) { let x = -.84; while (x < .8) { const w = .06 + (k % 3) * .02, h = .3 + (k * 7 % 5) * .025; B(g, w, h, .24, cs[k % 7], x + w / 2, y + h / 2, -.08); x += w + .01; k++; } } S(g, .12, '#3f8f4f', .6, 1.54, -.08); };
F.flamp = g => { C(g, .2, .22, .04, '#3a3a3e', 0, .02, 0, 18); C(g, .02, .02, 1.5, '#3a3a3e', 0, .77, 0, 6); const sh = C(g, .16, .26, .32, bas('#fff0c8'), 0, 1.6, 0, 18); sh.userData.lit = 1; glow(g, 0, 1.55, 0, 2.4, .55); };
F.piano = g => { B(g, 1.6, 1.25, .55, '#1e1a1a', 0, .63, -.15); B(g, 1.6, .06, .7, '#1e1a1a', 0, .72, .05); B(g, 1.45, .04, .2, '#f6f2ea', 0, .76, .2); for (let i = 0; i < 10; i++) B(g, .05, .03, .12, '#111', -.63 + i * .14, .785, .17); for (const x of [-.7, .7]) B(g, .1, .7, .1, '#1e1a1a', x, .35, .3); B(g, .5, .05, .3, '#1e1a1a', 0, .45, .6); B(g, .5, .04, .3, '#8a3a2a', 0, .48, .6); };
F.bed = g => { B(g, 1.9, .3, 1.95, OAK, 0, .25, 0); B(g, 1.9, .9, .1, OAK, 0, .55, -.95); B(g, 1.8, .2, 1.85, WHITE, 0, .5, .02); B(g, 1.82, .14, 1.2, '#f29ab8', 0, .62, .33); for (const x of [-.45, .45]) S(g, .3, '#ffffff', x, .66, -.62, 1.2, .4, .7); for (const sx of [-.9, .9]) for (const sz of [-.9, .9]) B(g, .08, .12, .08, '#8a6a4a', sx, .06, sz); };
F.wardrobe = g => { B(g, 1.8, 2.0, .6, WHITE, 0, 1.0, -.15); B(g, .02, 1.9, .02, '#c8c0b0', 0, 1.0, .16); for (const x of [-.08, .08]) C(g, .02, .02, .3, '#c8a040', x, 1.05, .18, 6); B(g, 1.84, .06, .64, '#e0d8c8', 0, 2.02, -.15); };
F.nstand = g => { B(g, .5, .5, .45, OAK, 0, .27, 0); B(g, .46, .02, .02, '#8a6a4a', 0, .35, .23); S(g, .025, '#c8a040', 0, .25, .24); };
F.desk = g => { B(g, 1.6, .05, .65, OAK, 0, .74, 0); for (const sx of [-.74, .74]) B(g, .06, .72, .6, '#e8e0d0', sx, .36, 0); B(g, .45, .3, .55, '#e8e0d0', .45, .55, 0); };
F.kcounter = g => { B(g, 1.9, .86, .62, WHITE, 0, .43, -.1); B(g, 1.96, .06, .7, '#9aa0a8', 0, .89, -.08); B(g, .6, .04, .4, '#6a7078', -.4, .91, -.08); C(g, .02, .02, .3, '#c0c4cc', -.4, 1.05, -.3, 6); for (const x of [-.5, .1, .6]) B(g, .5, .6, .02, '#ece6da', x, .43, .22); const p = C(g, .12, .1, .14, '#d8452f', .55, .99, -.1, 12); };
F.stove = g => { B(g, .8, .86, .62, '#e8e4dc', 0, .43, -.1); B(g, .84, .06, .66, '#2a2a2e', 0, .89, -.08); for (const x of [-.2, .2]) { const r = new Mesh(new TorusGeometry(.1, .02, 6, 16), lam('#555')); r.rotation.x = Math.PI / 2; r.position.set(x, .93, -.08); g.add(r); } B(g, .7, .4, .02, '#2a2a2e', 0, .45, .22); C(g, .14, .14, .14, '#3a6ab8', .2, 1.0, -.08, 14); };
F.fridge = g => { B(g, .78, 1.85, .7, '#eaf2f8', 0, .93, -.08); B(g, .78, .02, .02, '#c8d0d8', 0, 1.2, .28); for (const y of [.8, 1.55]) B(g, .03, .25, .04, '#a8b0b8', .3, y, .3); B(g, .18, .14, .01, '#f29ab8', -.15, 1.5, .28); };
F.catbed = g => { const r = new Mesh(new TorusGeometry(.32, .12, 8, 20), lam('#c8935a')); r.rotation.x = Math.PI / 2; r.position.y = .12; g.add(r); C(g, .3, .3, .08, '#f2d8b0', 0, .05, 0, 18); S(g, .18, '#e8a050', .02, .2, 0, 1.4, .7, 1); S(g, .11, '#e8a050', .2, .25, .04); for (const z of [-.04, .07]) { const e = new Mesh(new ConeGeometry(.04, .07, 4), lam('#e8a050')); e.position.set(.22, .36, z); g.add(e); } };
F.monstera = g => { C(g, .24, .18, .4, '#f2efe6', 0, .2, 0, 14); C(g, .22, .22, .02, '#5a3a2a', 0, .4, 0, 14); for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; const l = new Mesh(new CircleGeometry(.28, 10), new MeshLambertMaterial({ color: i % 2 ? '#2f7a3a' : '#3f8f4a', side: DoubleSide })); l.position.set(Math.cos(a) * .25, .9 + (i % 3) * .18, Math.sin(a) * .25); l.rotation.set(-1 + Math.random() * .4, a, 0); g.add(l); C(g, .012, .012, .6, '#3f6a2a', Math.cos(a) * .12, .65, Math.sin(a) * .12, 4); } };
F.cactus = g => { C(g, .09, .07, .12, '#c8704a', 0, .06, 0, 12); C(g, .06, .06, .22, '#4a9a4a', 0, .22, 0, 10); S(g, .06, '#4a9a4a', 0, .33, 0); const a = C(g, .03, .03, .1, '#4a9a4a', .07, .24, 0, 8); a.rotation.z = -1; S(g, .025, '#f29ab8', 0, .39, 0); };
F.wwin = g => { const pane = B(g, 1.5, 1.1, .03, bas('#bfe6ff'), 0, 1.65, .02); g.userData.pane = pane; B(g, 1.62, .08, .08, WHITE, 0, 2.24, .04); B(g, 1.62, .08, .08, WHITE, 0, 1.06, .04); B(g, .06, 1.15, .06, WHITE, 0, 1.65, .05); B(g, 1.62, .1, .2, WHITE, 0, 1.03, .1); B(g, 1.9, .04, .04, '#8a6a4a', 0, 2.38, .1); for (const s of [-1, 1]) { const c = B(g, .38, 1.4, .05, '#f29ab8', s * .82, 1.68, .12); c.geometry = new BoxGeometry(.38, 1.4, .05, 4, 1, 1); } };
F.photos = g => { const cs = ['#e8d4ae', '#bfe6ff', '#f8d0dc', '#d8f0e0']; [[-.6, 1.8, .45, .55], [0, 1.95, .5, .4], [.55, 1.75, .4, .5], [-.05, 1.5, .35, .3]].forEach(([x, y, w, h], i) => { B(g, w + .08, h + .08, .03, i % 2 ? '#3a2a1a' : WHITE, x, y, .015); B(g, w, h, .01, bas(cs[i]), x, y, .035); S(g, .06, ['#f2b630', '#3f8f4f', '#d8452f', '#6a8ae8'][i], x - w * .15, y - h * .1, .04, 1, 1, .2); }); };
F.shelfw = g => { B(g, 1.7, .05, .25, OAK, 0, 1.6, .12); for (const x of [-.7, .7]) B(g, .04, .15, .2, '#8a6a4a', x, 1.52, .1); C(g, .06, .06, .16, '#f2efe6', -.5, 1.71, .12, 10); S(g, .09, '#4a9a4a', -.5, 1.82, .12); B(g, .3, .22, .16, '#2f6bb8', 0, 1.74, .12); S(g, .08, '#f2b630', .45, 1.7, .12); };
F.book = g => { const cs = ['#d8452f', '#2f6bb8', '#f2b630']; for (let i = 0; i < 3; i++) { const b = B(g, .22, .045, .16, cs[i], 0, .025 + i * .047, 0); b.rotation.y = i * .25; } };
F.mug = g => { C(g, .05, .045, .1, '#f6f2ea', 0, .05, 0, 14); C(g, .045, .045, .01, '#6a4020', 0, .095, 0, 14); const h = new Mesh(new TorusGeometry(.03, .01, 6, 10), lam('#f6f2ea')); h.position.set(.06, .05, 0); g.add(h); };
F.cake = g => { C(g, .14, .14, .02, '#f6f2ea', 0, .01, 0, 20); C(g, .1, .1, .1, '#fff8f0', 0, .07, 0, 20); C(g, .1, .1, .015, '#f29ab8', 0, .12, 0, 20); for (let i = 0; i < 5; i++) S(g, .022, '#d8302a', Math.cos(i * 1.26) * .065, .14, Math.sin(i * 1.26) * .065); };
F.laptop = g => { B(g, .32, .015, .22, '#c0c4cc', 0, .01, 0); const s = new Group(); s.position.set(0, .015, -.11); s.rotation.x = -.35; g.add(s); B(s, .32, .2, .012, '#c0c4cc', 0, .1, 0); const sc = B(s, .29, .17, .002, bas('#8ac0f0'), 0, .1, .007); sc.userData.lit = 1; };
F.dlamp = g => { C(g, .07, .08, .02, '#2f6bb8', 0, .01, 0, 12); const a = C(g, .01, .01, .3, '#2f6bb8', 0, .16, 0, 6); const sh = C(g, .04, .09, .1, bas('#fff0c8'), 0, .33, 0, 12); sh.userData.lit = 1; glow(g, 0, .3, 0, 1.2, .5); };
F.teddy = g => { const c = '#b8814a'; S(g, .1, c, 0, .1, 0, 1, 1.1, .9); S(g, .08, c, 0, .24, 0); for (const x of [-.06, .06]) { S(g, .03, c, x, .31, 0); S(g, .012, '#1a1a1a', x * .5, .26, .07); S(g, .035, c, x * 1.3, .1, .06); } S(g, .03, '#e8d0b0', 0, .225, .07); };
F.carpet = g => { const t = ctex(256, 256, (x, w, h) => { x.fillStyle = '#f2e6d0'; x.fillRect(0, 0, w, h); const r = mulberry2(3); for (let i = 0; i < 1600; i++) { x.fillStyle = r() < .5 ? 'rgba(220,200,170,.5)' : 'rgba(255,250,240,.6)'; x.fillRect(r() * w, r() * h, 3, 3); } x.strokeStyle = '#e8a0b0'; x.lineWidth = 10; x.strokeRect(14, 14, w - 28, h - 28); }); const m = new Mesh(new BoxGeometry(1.9, .04, 1.9), [lam('#e8d8c0'), lam('#e8d8c0'), new MeshLambertMaterial({ map: t }), lam('#e8d8c0'), lam('#e8d8c0'), lam('#e8d8c0')]); m.position.y = .02; g.add(m); };
const mulberry2 = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

export function build(k) {
  const g = new Group(); const f = F[k]; if (f) f(g); else B(g, .8, .8, .8, '#f0f', 0, .4, 0);
  compact(g);
  g.traverse(o => { if (o.isMesh) o.userData.item = g; });
  return g;
}
