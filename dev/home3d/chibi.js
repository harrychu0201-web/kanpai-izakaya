/* Q 版 3D 角色（2026/11/27 角色從 2D 立牌換成 3D，使用者選 B 風格）。
   全部用 three.js 幾何體拼，依每個角色原本立繪的髮型、髮色、服裝配色做（SPEC）。
   效能：每個角色只有 5 個網格（身體＋頭＋頭髮＋配件合成一個、兩手、兩腳），頂點上色＋一張臉部貼圖，
   所以一個人一幀只多 5 次 draw call。
   換回 2D 立牌：在 island.js／src.js／town3d 的 mkPerson 把 CHIBI_ON 改成 false（或網址加 ?flat2d）。 */
import {
  Group, Mesh, Color, CanvasTexture, SRGBColorSpace, MeshToonMaterial, DataTexture, RedFormat, NearestFilter,
  SphereGeometry, CylinderGeometry, CapsuleGeometry, ConeGeometry, TorusGeometry, BoxGeometry, Matrix4, Euler, Quaternion, Vector3, Float32BufferAttribute,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const CHIBI_ON = !/[?&]flat2d/.test(typeof location !== 'undefined' ? location.search : '');

/* hs 髮型：short messy slick bob long bun pony twin braid curly afro bald
   top 上衣樣式：shirt hoodie suit kimono cardigan polo blouse striped jumpsuit
   bot 下身：pants skirt shorts robe
   acc 配件：glasses hat cap beard mustache bandana ribbon mask sunglass apron tie straw */
const SKIN = '#ffe0c8', SKIN2 = '#f6d0b2';
export const SPEC = {
  staff:    { hair: '#3a2a24', hs: 'pony', eye: '#5a3a2a', top: '#232328', topK: 'kimono', bot: '#232328', botK: 'pants', shoe: '#1a1a1a', acc: ['apronD'] },
  chiyo:    { hair: '#dcd8d2', hs: 'bun', eye: '#5a3a2a', eyeK: 'smile', skin: SKIN2, top: '#6a3a2a', topK: 'kimono', bot: '#c8963a', botK: 'robe', shoe: '#8a5a34', old: 1 },
  emily:    { hair: '#ecc98c', hs: 'braid', eye: '#3a9a8a', top: '#86c2b0', topK: 'shirt', bot: '#f4f2ea', botK: 'shorts', shoe: '#f4f4f0', acc: ['straw'] },
  hinata:   { hair: '#f08a2a', hs: 'bob', eye: '#c86a1a', top: '#f6a232', topK: 'hoodie', bot: '#5a7aa8', botK: 'shorts', shoe: '#ffffff' },
  kazuo:    { hair: '#f6f4f0', hs: 'afro', eye: '#4a3a2a', eyeK: 'small', skin: SKIN2, top: '#8a5a3a', topK: 'shirt', bot: '#d8c8a4', botK: 'pants', shoe: '#5a3a24', acc: ['glasses', 'beard'], old: 1 },
  kuroda:   { hair: '#1a1a1e', hs: 'slick', eye: '#2a2a2a', eyeK: 'small', top: '#1e1e22', topK: 'suit', bot: '#1e1e22', botK: 'pants', shoe: '#111', acc: ['glasses'] },
  misaki:   { hair: '#a8283a', hs: 'long', eye: '#b06a2a', top: '#4a4a54', topK: 'suit', bot: '#4a4a54', botK: 'skirt', shoe: '#1a1a1a' },
  mob0:     { hair: '#16161e', hs: 'long', eye: '#2a2a3a', top: '#252c4e', topK: 'suit', bot: '#252c4e', botK: 'skirt', shoe: '#1a1a1a' },
  mob1:     { hair: '#7a4a2a', hs: 'messy', eye: '#6a4a2a', top: '#a8a8ac', topK: 'hoodie', bot: '#3a5a8a', botK: 'pants', shoe: '#f0f0f0' },
  mob2:     { hair: '#7a2a3a', hs: 'bob', eye: '#5a3a2a', top: '#ec9aaa', topK: 'cardigan', bot: '#d8c8a4', botK: 'pants', shoe: '#6a4a3a', acc: ['glasses'] },
  mob3:     { hair: '#3a3a3a', hs: 'short', eye: '#3a3a3a', eyeK: 'small', top: '#4a9a4a', topK: 'polo', bot: '#3a3a3e', botK: 'pants', shoe: '#2a2a2a' },
  mob4:     { hair: '#e8822a', hs: 'messy', eye: '#8a5a2a', top: '#ece0cc', topK: 'shirt', bot: '#6a5a40', botK: 'pants', shoe: '#8a4a3a' },
  mob5:     { hair: '#3a2a1a', hs: 'short', eye: '#4a3a2a', top: '#3a5a8a', topK: 'jumpsuit', bot: '#3a5a8a', botK: 'pants', shoe: '#6a4a2a', acc: ['cap'], cap: '#2a4a7a' },
  mob6:     { hair: '#7a6a5a', hs: 'long', eye: '#5a4a3a', top: '#7a2a3a', topK: 'cardigan', bot: '#5a1a2a', botK: 'skirt', shoe: '#3a2a2a' },
  mob7:     { hair: '#c8c8c8', hs: 'bald', eye: '#3a3a3a', eyeK: 'small', skin: SKIN2, top: '#6a6a4a', topK: 'shirt', bot: '#7a6a50', botK: 'pants', shoe: '#3a2a1a', acc: ['glasses'], old: 1 },
  nakamura: { hair: '#2a2a2a', hs: 'bald', eye: '#2a2a2a', eyeK: 'small', top: '#5a5a62', topK: 'suit', bot: '#5a5a62', botK: 'pants', shoe: '#111', acc: ['tie'], tie: '#6a7a3a' },
  reiko:    { hair: '#f2eee6', hs: 'curly', eye: '#5a3a2a', top: '#ead9b0', topK: 'suit', bot: '#ead9b0', botK: 'skirt', shoe: '#c8202a', acc: ['sunglass'] },
  ren:      { hair: '#141418', hs: 'messy', eye: '#2a4a7a', top: '#22306a', topK: 'suit', bot: '#22306a', botK: 'pants', shoe: '#111', acc: ['glasses', 'tie'], tie: '#c8202a' },
  riko:     { hair: '#f6a6c6', hs: 'twin', eye: '#e0608a', top: '#ffffff', topK: 'blouse', bot: '#f6aac8', botK: 'skirt', shoe: '#f48ab0', acc: ['ribbon'] },
  robot:    { hair: '#141414', hs: 'bald', eye: '#2a2a2a', skin: '#202022', top: '#f2f2f2', topK: 'striped', bot: '#2a3a6a', botK: 'pants', shoe: '#1a1a1a', acc: ['mask'] },
  ryuji:    { hair: '#1a1a1a', hs: 'slick', eye: '#2a2a2a', eyeK: 'small', top: '#5a2a6a', topK: 'shirt', bot: '#1a1a1e', botK: 'pants', shoe: '#111' },
  sachiko:  { hair: '#5a3a2a', hs: 'short', eye: '#5a3a2a', top: '#f6f4ee', topK: 'shirt', bot: '#3a4a6a', botK: 'pants', shoe: '#3a3a4a', acc: ['bandana', 'apron'], apron: '#6aa8d8', bandana: '#5a9ad8' },
  soichiro: { hair: '#ece8e0', hs: 'short', eye: '#4a3a2a', eyeK: 'small', skin: SKIN2, top: '#c8904a', topK: 'suit', bot: '#c8904a', botK: 'pants', shoe: '#5a3a24', acc: ['hat', 'glasses', 'beard'], hat: '#8a5a2a', old: 1 },
  taizo:    { hair: '#ececec', hs: 'short', eye: '#3a3a3a', eyeK: 'smile', skin: SKIN2, top: '#6a4a2a', topK: 'kimono', bot: '#4a3a2a', botK: 'pants', shoe: '#3a2a1a', acc: ['mustache'], old: 1 },
};
/* 從圖片網址找角色：img/misaki-walk-xxxx.webp → misaki；img/staff-girl-1.webp → staff */
export function specKey(src) {
  const f = String(src || '').split('/').pop().replace(/\.[a-z]+$/i, '');
  if (/^staff/.test(f)) return 'staff';
  const k = f.split('-')[0];
  return SPEC[k] ? k : null;
}

/* 卡通明暗：三階（亮、中、暗），暗面不要太黑 */
let GRAD = null;
function gradMap() { if (GRAD) return GRAD; const d = new Uint8Array([150, 215, 255]); GRAD = new DataTexture(d, 3, 1, RedFormat); GRAD.minFilter = GRAD.magFilter = NearestFilter; GRAD.needsUpdate = true; return GRAD; }

/* 臉：畫在 256x256 的貼圖左下 7/8 區塊，右上角留一塊白色給其他頂點用 */
const FU = .875, WHITE_UV = [.94, .94];
function faceTex(sp) {
  const S = 256, cv = document.createElement('canvas'); cv.width = cv.height = S; const x = cv.getContext('2d');
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, S, S);
  const W = S * FU, Y0 = S - W;               // 臉的區域：x 0..W、y Y0..S
  const skin = sp.skin || SKIN; x.fillStyle = skin; x.fillRect(0, Y0, W, W);
  const X = u => u * W, Yv = v => Y0 + v * W;  // u 左→右、v 上→下（臉區塊內 0..1）
  const ey = .5, ex = .3, eyeK = sp.eyeK || 'big';
  if (sp.acc && sp.acc.includes('mask')) { x.fillStyle = '#202022'; x.fillRect(0, Y0, W, W); x.fillStyle = SKIN; x.beginPath(); x.ellipse(X(.5), Yv(.48), X(.3), Yv(.13) - Y0, 0, 0, 7); x.fill(); }
  /* 腮紅 */
  if (!(sp.acc && sp.acc.includes('mask'))) { x.fillStyle = 'rgba(255,120,130,.32)'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(X(.5 + s * .3), Yv(.66), X(.075), Yv(.035) - Y0, 0, 0, 7); x.fill(); } }
  for (const s of [-1, 1]) {
    const cx = X(.5 + s * ex * .62), cy = Yv(ey);
    if (eyeK === 'smile') { x.strokeStyle = '#3a2418'; x.lineWidth = 7; x.lineCap = 'round'; x.beginPath(); x.arc(cx, cy + 6, X(.055), Math.PI * 1.15, Math.PI * 1.85); x.stroke(); continue; }
    const rx = eyeK === 'small' ? X(.068) : X(.094), ry = eyeK === 'small' ? X(.085) : X(.128);
    x.fillStyle = '#ffffff'; x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.fill();
    const g = x.createLinearGradient(0, cy - ry, 0, cy + ry); g.addColorStop(0, '#1a1010'); g.addColorStop(.45, sp.eye || '#4a3020'); g.addColorStop(1, lighten(sp.eye || '#4a3020', .35));
    x.fillStyle = g; x.beginPath(); x.ellipse(cx, cy + ry * .08, rx * .86, ry * .9, 0, 0, 7); x.fill();
    x.fillStyle = '#140c0c'; x.beginPath(); x.ellipse(cx, cy + ry * .12, rx * .4, ry * .45, 0, 0, 7); x.fill();
    x.fillStyle = '#ffffff'; x.beginPath(); x.ellipse(cx - s * rx * .25 - rx * .15, cy - ry * .35, rx * .32, ry * .26, 0, 0, 7); x.fill();
    x.beginPath(); x.arc(cx + rx * .35, cy + ry * .4, rx * .14, 0, 7); x.fill();
    /* 上睫毛 */
    x.strokeStyle = '#1e1212'; x.lineWidth = eyeK === 'small' ? 5 : 7; x.lineCap = 'round'; x.beginPath(); x.ellipse(cx, cy, rx * 1.08, ry * 1.02, 0, Math.PI * 1.08, Math.PI * 1.92); x.stroke();
    if (eyeK !== 'small' && !sp.old) { x.lineWidth = 4; x.beginPath(); x.moveTo(cx + s * rx * .95, cy - ry * .55); x.lineTo(cx + s * rx * 1.35, cy - ry * .8); x.stroke(); }
  }
  /* 眉毛（老人家、男性款細一點） */
  x.strokeStyle = darken(sp.hair || '#3a2a1a', .25); x.lineWidth = 4; x.lineCap = 'round';
  for (const s of [-1, 1]) { const cx = X(.5 + s * ex * .62); x.beginPath(); x.moveTo(cx - X(.06), Yv(ey - .17)); x.quadraticCurveTo(cx, Yv(ey - .2), cx + X(.06), Yv(ey - .17)); x.stroke(); }
  /* 嘴 */
  if (!(sp.acc && sp.acc.includes('mask'))) { x.strokeStyle = '#a0403a'; x.lineWidth = 4; x.beginPath(); x.arc(X(.5), Yv(.7), X(.035), Math.PI * .15, Math.PI * .85); x.stroke(); }
  if (sp.old) { x.strokeStyle = 'rgba(150,90,70,.35)'; x.lineWidth = 2.5; for (const s of [-1, 1]) { x.beginPath(); x.arc(X(.5 + s * .2), Yv(.68), X(.05), s > 0 ? Math.PI * .5 : Math.PI * .1, s > 0 ? Math.PI * .9 : Math.PI * .5); x.stroke(); } }
  const t = new CanvasTexture(cv); t.colorSpace = SRGBColorSpace; t.anisotropy = 4; return t;
}
function hex2(c) { return new Color(c); }
function lighten(c, k) { const o = new Color(c); o.lerp(new Color('#ffffff'), k); return '#' + o.getHexString(); }
function darken(c, k) { const o = new Color(c); o.lerp(new Color('#000000'), k); return '#' + o.getHexString(); }

/* 把一個幾何體上色、擺位置，收進清單（之後合併） */
const _m = new Matrix4(), _q = new Quaternion(), _e = new Euler(), _s = new Vector3(), _p = new Vector3();
function put(list, geo, col, x, y, z, rx, ry, rz, sx, sy, sz, face) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone(); geo.dispose();
  _e.set(rx || 0, ry || 0, rz || 0); _q.setFromEuler(_e); _s.set(sx || 1, sy || sx || 1, sz || sx || 1); _p.set(x || 0, y || 0, z || 0);
  _m.compose(_p, _q, _s); g.applyMatrix4(_m);
  const n = g.attributes.position.count, c = new Float32Array(n * 3), cc = hex2(col);
  for (let i = 0; i < n; i++) { c[i * 3] = cc.r; c[i * 3 + 1] = cc.g; c[i * 3 + 2] = cc.b; }
  g.setAttribute('color', new Float32BufferAttribute(c, 3));
  const uv = g.attributes.uv; if (!face) { for (let i = 0; i < uv.count; i++) uv.setXY(i, WHITE_UV[0], WHITE_UV[1]); } else { for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * FU, uv.getY(i) * FU); }
  list.push(g);
}
const merge = list => { const g = mergeGeometries(list, false); list.forEach(q => q.dispose()); g.computeBoundingSphere(); return g; };

/* 尺寸（總高 1）：腳 0~.2、身體 .2~.47、頭中心 .69、頭半徑 .245 */
const HR = .245, HY = .69, LEG = .2, SH_Y = .44, SH_X = .135;
const PI = Math.PI;

function buildBody(sp) {
  const L = [], skin = sp.skin || SKIN, hair = sp.hair, acc = sp.acc || [], has = k => acc.includes(k);
  /* 身體：上窄下寬的圓柱 */
  const topC = sp.topK === 'striped' ? '#f2f2f2' : sp.top;
  put(L, new CylinderGeometry(.105, .135, .27, 18), topC, 0, LEG + .135, 0, 0, 0, 0, 1, 1, .86);
  put(L, new SphereGeometry(.105, 16, 8, 0, PI * 2, 0, PI / 2), topC, 0, LEG + .27, 0, 0, 0, 0, 1, .5, .86);   // 肩膀圓角
  if (sp.topK === 'striped') for (let i = 0; i < 4; i++) put(L, new CylinderGeometry(.108 + i * .007, .114 + i * .007, .028, 18, 1, true), '#1e1e22', 0, LEG + .04 + i * .062, 0, 0, 0, 0, 1, 1, .87);
  if (sp.topK === 'suit' || sp.topK === 'cardigan') {   // 白襯衫Ｖ領
    put(L, new ConeGeometry(.05, .13, 3), '#ffffff', 0, LEG + .2, .094, PI, 0, 0, 1, 1, .25);
  }
  if (sp.topK === 'kimono') { // 交領＋腰帶
    put(L, new BoxGeometry(.03, .16, .012), lighten(sp.top, .55), -.022, LEG + .19, .118, 0, 0, -.5);
    put(L, new BoxGeometry(.03, .16, .012), lighten(sp.top, .55), .022, LEG + .19, .116, 0, 0, .5);
    put(L, new CylinderGeometry(.122, .126, .05, 18), darken(sp.top, .35), 0, LEG + .085, 0, 0, 0, 0, 1, 1, .9);
  }
  if (sp.topK === 'hoodie') { put(L, new TorusGeometry(.085, .026, 8, 16), darken(sp.top, .08), 0, LEG + .26, -.02, PI / 2 - .25, 0, 0, 1, 1, 1); put(L, new BoxGeometry(.12, .06, .01), darken(sp.top, .12), 0, LEG + .08, .118); }
  if (sp.topK === 'polo' || sp.topK === 'blouse' || sp.topK === 'shirt') put(L, new TorusGeometry(.07, .018, 6, 16), sp.topK === 'blouse' ? '#ffffff' : darken(sp.top, .12), 0, LEG + .262, .01, PI / 2, 0, 0, 1, 1, 1);
  if (sp.topK === 'jumpsuit') put(L, new BoxGeometry(.012, .2, .01), darken(sp.top, .3), 0, LEG + .14, .117);
  if (has('tie')) put(L, new BoxGeometry(.028, .13, .01), sp.tie || '#c8202a', 0, LEG + .18, .122);
  if (has('apron') || has('apronD')) { const ac = sp.apron || '#2a2a30'; put(L, new CylinderGeometry(.128, .15, .25, 18, 1, true, -PI * .32, PI * .64), ac, 0, LEG + .02, 0.004, 0, 0, 0, 1, 1, .9);
    if (has('apronD')) put(L, new BoxGeometry(.05, .08, .005), '#d8d0c0', .02, LEG + .02, .136); }
  /* 下身 */
  if (sp.botK === 'skirt') put(L, new CylinderGeometry(.12, .165, .12, 18), sp.bot, 0, LEG + .0, 0, 0, 0, 0, 1, 1, .9);
  if (sp.botK === 'robe') put(L, new CylinderGeometry(.125, .15, .2, 18), sp.bot, 0, LEG - .06, 0, 0, 0, 0, 1, 1, .9);
  if (sp.botK === 'shorts') put(L, new CylinderGeometry(.13, .14, .07, 18), sp.bot, 0, LEG - .01, 0, 0, 0, 0, 1, 1, .88);
  if (sp.botK === 'pants') put(L, new CylinderGeometry(.13, .132, .05, 18), sp.bot, 0, LEG + .0, 0, 0, 0, 0, 1, 1, .88);
  /* 脖子、頭 */
  put(L, new CylinderGeometry(.04, .045, .06, 10), skin, 0, LEG + .29, 0);
  /* 頭：後半顆一般膚色，正面一片貼臉（臉貼圖） */
  put(L, new SphereGeometry(HR, 28, 20), skin, 0, HY, 0, 0, 0, 0, 1, .94, .96);
  put(L, new SphereGeometry(HR * 1.004, 24, 16, PI / 2 - .95, 1.9, PI * .3, PI * .48), '#ffffff', 0, HY, 0, 0, 0, 0, 1, .94, .96, true);
  /* 耳朵 */
  for (const s of [-1, 1]) put(L, new SphereGeometry(.045, 10, 8), skin, s * HR * .97, HY - .02, -.005, 0, 0, 0, .5, 1, .8);
  /* 頭髮 */
  hairGeo(L, sp, hair);
  /* 配件 */
  const fz = HR * .96;
  if (has('glasses')) for (const s of [-1, 1]) { put(L, new TorusGeometry(.052, .009, 6, 18), '#3a3030', s * .08, HY - .015, fz + .005, 0, s * .32, 0, 1, 1, 1); if (s > 0) put(L, new BoxGeometry(.05, .01, .01), '#3a3030', 0, HY - .005, fz + .03); }
  if (has('sunglass')) for (const s of [-1, 1]) put(L, new SphereGeometry(.05, 12, 8), '#1a1a1e', s * .075, HY + .2, .1, -.6, 0, 0, 1, .7, .4);
  if (has('beard')) { put(L, new SphereGeometry(.15, 16, 12), hair, 0, HY - .14, .12, 0, 0, 0, 1.05, .9, .65); put(L, new CapsuleGeometry(.025, .08, 4, 8), hair, 0, HY - .07, fz + .01, 0, 0, PI / 2); }
  if (has('mustache')) for (const s of [-1, 1]) put(L, new CapsuleGeometry(.022, .05, 4, 8), hair, s * .035, HY - .095, fz - .005, 0, 0, PI / 2 + s * .35);
  if (has('straw')) { put(L, new CylinderGeometry(.36, .36, .015, 28), '#d8b478', 0, HY + .17, -.01, -.12, 0, 0); put(L, new CylinderGeometry(.19, .23, .13, 22), '#d8b478', 0, HY + .23, -.02, -.12, 0, 0); put(L, new CylinderGeometry(.232, .232, .035, 22, 1, true), '#2a3a6a', 0, HY + .19, -.016, -.12, 0, 0); }
  if (has('hat')) { put(L, new CylinderGeometry(.33, .33, .018, 28), sp.hat, 0, HY + .17, -.01, -.1, 0, 0); put(L, new CylinderGeometry(.18, .21, .16, 22), sp.hat, 0, HY + .25, -.02, -.1, 0, 0); put(L, new CylinderGeometry(.212, .212, .035, 22, 1, true), '#5a3018', 0, HY + .2, -.016, -.1, 0, 0); put(L, new SphereGeometry(.03, 8, 6), '#e0607a', .2, HY + .21, .04); }
  if (has('cap')) { put(L, new SphereGeometry(HR * 1.13, 24, 12, 0, PI * 2, 0, PI * .5), sp.cap, 0, HY + .02, -.01, -.12, 0, 0, 1, .9, 1); put(L, new CylinderGeometry(.17, .17, .015, 20, 1, false, -PI / 2, PI), sp.cap, 0, HY + .05, .2, -.05, 0, 0, 1, 1, 1); }
  if (has('bandana')) put(L, new SphereGeometry(HR * 1.12, 24, 12, 0, PI * 2, 0, PI * .5), sp.bandana, 0, HY + .02, -.02, -.25, 0, 0, 1, .95, 1);
  if (has('ribbon')) for (const s of [-1, 1]) put(L, new ConeGeometry(.045, .1, 8), '#ffffff', s * .2, HY + .16, -.06, 0, 0, s * PI / 2);
  return merge(L);
}

function hairGeo(L, sp, c) {
  const hs = sp.hs, D = darken(c, .12), has = k => (sp.acc || []).includes(k);
  const capR = HR * 1.07, cap = (t1, col) => put(L, new SphereGeometry(capR, 28, 16, 0, PI * 2, 0, PI * t1), col || c, 0, HY + .005, -.012, -.12, 0, 0, 1, .96, 1);
  const back = (t1, wide) => put(L, new SphereGeometry(capR * 1.005, 28, 18, PI - Math.max(wide || 0, .42), PI + Math.max(wide || 0, .42) * 2, 0, PI * t1), c, 0, HY + .005, -.012, 0, 0, 0, 1, .96, 1);
  const bangs = (n, len, spread) => { if (has('cap')) return; for (let i = 0; i < n; i++) { const u = n === 1 ? 0 : i / (n - 1) - .5, a = u * spread; put(L, new ConeGeometry(.065, len, 8), c, Math.sin(a) * .228, HY + .085 - Math.abs(u) * .03, Math.cos(a) * .228, PI + .3, a, u * .25, 1, 1, .5); } };
  if (hs === 'bald') { put(L, new SphereGeometry(capR * .995, 24, 14, PI * .78, PI * 1.44, PI * .36, PI * .3), c, 0, HY + .005, -.01); return; }
  if (hs === 'afro' || hs === 'curly') {
    cap(.4); back(.62, .3);
    const r = hs === 'afro' ? .1 : .08, n = hs === 'afro' ? 16 : 13;
    for (let i = 0; i < n; i++) { const a = i / n * PI * 2, up = (i % 2) * .05; if (Math.cos(a) > .55 && hs === 'curly') continue; put(L, new SphereGeometry(r, 10, 8), i % 3 ? c : D, Math.sin(a) * .22, HY + .12 + up + (Math.cos(a) > .5 ? .06 : 0), Math.cos(a) * .2 - .02); }
    put(L, new SphereGeometry(.16, 14, 10), c, 0, HY + .2, -.03); return;
  }
  if (hs === 'slick') { cap(.4); back(.6, .15); put(L, new SphereGeometry(.12, 12, 10), c, -.04, HY + .19, .1, -.3, 0, .2, 1.3, .55, 1); return; }
  cap(.38);
  if (hs === 'short') { back(.6, .2); bangs(5, .14, 1.5); return; }
  if (hs === 'messy') { back(.6, .25); bangs(6, .17, 1.7); for (let i = 0; i < 5; i++) { const a = PI + (i - 2) * .5; put(L, new ConeGeometry(.06, .15, 6), c, Math.sin(a) * .2, HY + .16, Math.cos(a) * .2, -.6 * Math.cos(a), 0, .6 * Math.sin(a)); } put(L, new ConeGeometry(.05, .14, 6), c, .02, HY + .28, .02, -.2, 0, -.3); return; }
  if (hs === 'bob') { back(.72, .55); bangs(6, .16, 1.6); for (const s of [-1, 1]) put(L, new CapsuleGeometry(.07, .14, 4, 10), c, s * .22, HY - .07, .04, 0, 0, s * .08); return; }
  if (hs === 'long') { back(.72, .5); bangs(6, .16, 1.6); put(L, new CapsuleGeometry(.15, .26, 4, 14), c, 0, HY - .2, -.1, .05, 0, 0, 1.25, 1, .55); for (const s of [-1, 1]) put(L, new CapsuleGeometry(.065, .3, 4, 10), c, s * .2, HY - .16, .05, .1, 0, s * .1); return; }
  if (hs === 'bun') { back(.66, .3); bangs(4, .1, 1.2); put(L, new SphereGeometry(.11, 14, 10), c, 0, HY + .22, -.12); put(L, new CylinderGeometry(.008, .008, .24, 6), '#7a4a2a', .02, HY + .25, -.12, 0, 0, 1.1); put(L, new SphereGeometry(.025, 8, 6), '#e0403a', .13, HY + .3, -.12); return; }
  if (hs === 'pony') { back(.64, .3); bangs(6, .17, 1.6); put(L, new SphereGeometry(.05, 10, 8), D, 0, HY + .14, -.22); put(L, new ConeGeometry(.08, .26, 10), c, 0, HY + .03, -.27, -.35, 0, 0); for (const s of [-1, 1]) put(L, new CapsuleGeometry(.04, .14, 4, 8), c, s * .21, HY - .06, .07, 0, 0, s * .06); return; }
  if (hs === 'twin') { back(.62, .3); bangs(6, .16, 1.6); for (const s of [-1, 1]) { put(L, new CapsuleGeometry(.085, .38, 4, 12), c, s * .3, HY - .12, -.06, 0, 0, s * .22); put(L, new SphereGeometry(.07, 12, 10), c, s * .26, HY + .1, -.06); } return; }
  if (hs === 'braid') { back(.66, .3); bangs(5, .14, 1.5); for (let i = 0; i < 5; i++) put(L, new SphereGeometry(.058 - i * .004, 10, 8), i % 2 ? D : c, .16 + i * .008, HY - .14 - i * .075, .1 - i * .008); return; }
  back(.6, .2); bangs(5, .14, 1.5);
}

/* 手腳：原點在關節，往下長 */
function limbGeo(sp, arm) {
  const L = [], skin = sp.skin || SKIN;
  if (arm) {
    const sleeve = sp.topK === 'striped' ? '#f2f2f2' : sp.topK === 'blouse' ? '#ffffff' : sp.top;
    put(L, new CapsuleGeometry(.04, .11, 4, 10), sleeve, 0, -.075, 0);
    if (sp.topK === 'striped') put(L, new CylinderGeometry(.042, .042, .025, 10, 1, true), '#1e1e22', 0, -.08, 0);
    put(L, new SphereGeometry(.042, 10, 8), skin, 0, -.17, 0);
  } else {
    const legC = sp.botK === 'pants' || sp.botK === 'robe' ? sp.bot : (sp.botK === 'skirt' && sp.old ? sp.bot : skin);
    put(L, new CapsuleGeometry(.05, .1, 4, 10), legC, 0, -.08, 0);
    if (sp.botK === 'shorts' || sp.botK === 'skirt') put(L, new CylinderGeometry(.052, .052, .04, 10), '#ffffff', 0, -.15, 0);
    put(L, new SphereGeometry(.06, 12, 8), sp.shoe || '#3a2a1a', 0, -.19, .025, 0, 0, 0, .95, .62, 1.35);
  }
  return merge(L);
}

const CACHE = {};
/* 建一個 Q 版角色。回傳 { root, mat, update(dt, walking, ph, t, extra) }；root 高度 1，用 scale 放大 */
export function makeChibi(key, opt) {
  opt = opt || {};
  const sp = SPEC[key] || SPEC.staff;
  const C = CACHE[key] || (CACHE[key] = { body: buildBody(sp), arm: limbGeo(sp, 1), leg: limbGeo(sp, 0), tex: faceTex(sp) });
  const mat = new MeshToonMaterial({ vertexColors: true, map: C.tex, gradientMap: gradMap(), color: opt.tint || 0xffffff });
  const root = new Group(), hips = new Group(); root.add(hips);
  const body = new Mesh(C.body, mat); hips.add(body);
  const mk = (g, x, y) => { const pv = new Group(); pv.position.set(x, y, 0); const m = new Mesh(g, mat); pv.add(m); hips.add(pv); return pv; };
  const aL = mk(C.arm, -SH_X, SH_Y), aR = mk(C.arm, SH_X, SH_Y), lL = mk(C.leg, -.06, LEG), lR = mk(C.leg, .06, LEG);
  aL.rotation.z = -.12; aR.rotation.z = .12;
  root.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
  function update(walking, ph, t, x) {
    const s = Math.sin(ph);
    if (walking) {
      lL.rotation.x = s * .7; lR.rotation.x = -s * .7; aL.rotation.x = -s * .75; aR.rotation.x = s * .75;
      hips.position.y = Math.abs(Math.cos(ph)) * .03; hips.rotation.y = s * .08; body.rotation.x = .06; aL.rotation.z = -.18; aR.rotation.z = .18;
    } else {
      const b = Math.sin(t * 1.8 + ph);
      lL.rotation.x *= .8; lR.rotation.x *= .8; aL.rotation.x = b * .04; aR.rotation.x = -b * .04; aL.rotation.z = -.1 - b * .02; aR.rotation.z = .1 + b * .02;
      hips.position.y = b * .004; hips.rotation.y *= .85; body.rotation.x = 0;
    }
    if (x && x.sleep) { body.rotation.x = .12 + Math.sin(t * 1.2) * .03; }
  }
  return { root, mat, update, key };
}
