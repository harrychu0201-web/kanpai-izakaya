/* 乾杯橫丁 3D 版（Three.js）。
   建築、地面、路燈、車子是真的 3D，鏡頭可以轉；角色仍是遊戲裡的動漫圖，用立牌（billboard）站在 3D 場景裡。
   由 index.html 在作者／管理員打開橫丁時才載入（不影響一般玩家）。建置：dev/town3d/build.sh → img/town3d-<hash>.js */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, Group, Mesh,
  BoxGeometry, PlaneGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, CircleGeometry, IcosahedronGeometry,
  MeshBasicMaterial, MeshLambertMaterial, CanvasTexture, TextureLoader, SRGBColorSpace, Sprite, SpriteMaterial,
  Points, PointsMaterial, BufferGeometry, Float32BufferAttribute, BackSide, DoubleSide, RepeatWrapping, AdditiveBlending,
  Vector3, Raycaster, Line, LineBasicMaterial, Plane, Vector2,
} from 'three';
import { NPCS, PAIRS, KIND } from './npcs.js';

const FONT = "'Zen Maru Gothic','Noto Sans TC','Noto Sans JP','PingFang TC','Microsoft JhengHei',sans-serif";
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function ctex(w, h, fn, rep) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  fn(c.getContext('2d'), w, h);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 4;
  if (rep) t.wrapS = t.wrapT = RepeatWrapping;
  return t;
}
const lam = (c, o) => new MeshLambertMaterial(Object.assign({ color: c }, o));
const bas = (c, o) => new MeshBasicMaterial(Object.assign({ color: c }, o));
function rrect(x, a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }

const CSS = `
.tw3hint{position:absolute;left:50%;bottom:34px;transform:translateX(-50%);background:#2a1810d9;color:#fff3d6;border:2px solid #ffd27a;border-radius:999px;padding:7px 18px;font-size:15px;font-weight:700;pointer-events:none;opacity:0;transition:opacity .2s;white-space:nowrap}
.tw3hint.on{opacity:1}
.tw3j{position:absolute;width:110px;height:110px;margin:-55px 0 0 -55px;border-radius:50%;background:#ffffff1f;border:3px solid #ffffff99;pointer-events:none;display:none}
.tw3j i{position:absolute;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#ffffffd9}
.tw3cam{position:absolute;right:max(12px,env(safe-area-inset-right));bottom:30px;display:flex;gap:8px}
.tw3cam button{width:46px;height:46px;border-radius:50%;border:2px solid #ffffffaa;background:#2a1810b3;color:#fff3d6;font-size:22px;line-height:1;padding:0;touch-action:none;user-select:none;-webkit-user-select:none}
.tw3cam button:active{background:#6b3a1ab3}
.tw3fade{position:absolute;inset:0;background:#0a0604;opacity:0;pointer-events:none}
.tw3card{position:absolute;bottom:30px;left:12px;width:min(460px,calc(46% - 6px));background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:16px;box-shadow:0 6px 0 #0006;padding:8px 10px 8px;display:none;font-size:15px;line-height:1.45}
.tw3card.r{left:auto;right:12px}
.tw3card.on{display:block;animation:tw3pop .16s ease-out}
@keyframes tw3pop{from{transform:scale(.94);opacity:0}to{transform:scale(1);opacity:1}}
@media (max-aspect-ratio:3/2){.tw3card{width:calc(100% - 24px)}}
.tw3h{display:flex;align-items:center;gap:10px;margin-bottom:6px}
.tw3av{flex:none;width:44px;height:44px;border-radius:50%;border:2px solid #2a1810;background-color:#e9d3a4;background-repeat:no-repeat;background-size:230% auto;background-position:50% 3%}
.tw3nm{flex:1;min-width:0;line-height:1.25}.tw3nm b{font-size:16px;display:block}.tw3nm small{font-size:12px;opacity:.7}
.tw3k{flex:none;border:2px solid #2a1810;border-radius:999px;padding:1px 8px;font-size:12px;font-weight:700;white-space:nowrap}
.tw3x{flex:none;width:30px;height:30px;border-radius:50%;border:2px solid #2a1810;background:#fff;font-size:20px;line-height:1;padding:0;color:#3a1e0c}
.tw3t{font-size:16px}.tw3t.mind{font-style:italic;color:#4a3a78}
.tw3t p{margin:2px 0}.tw3t p b{margin-right:6px;color:#8a3a14}
.tw3b{display:flex;justify-content:flex-end;margin-top:4px}
.tw3n{border:2px solid #2a1810;border-radius:999px;background:#ffd27a;color:#3a1e0c;font-weight:800;font-size:13px;padding:3px 14px}
.tw3load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff3d6;font-size:16px;background:#140f2e}
`;

export function start(o) {
  const cv = o.cv, tw = o.root, txt = o.txt || {};
  if (!document.getElementById('tw3css')) { const s = document.createElement('style'); s.id = 'tw3css'; s.textContent = CSS; document.head.appendChild(s); }

  const renderer = new WebGLRenderer({ canvas: cv, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x1a1536, 1);
  const scene = new Scene();
  scene.fog = new Fog(0x4a2f55, 38, 130);
  const camera = new PerspectiveCamera(42, 2, 0.3, 600);
  const disposables = [];
  const TL = new TextureLoader();
  const loadTex = (url, cb) => TL.load(url, t => { t.colorSpace = SRGBColorSpace; t.anisotropy = 4; cb && cb(t); });

  /* ───────── 配置 ───────── */
  const shops = o.shops;                     // [{id,e,n,own,cur}]
  const SWD = 8, GAP = 2.6, PITCH = SWD + GAP, n = shops.length;
  shops.forEach((s, i) => { s.x0 = i * PITCH; s.dx = s.x0 + SWD / 2; });
  const X1 = (n - 1) * PITCH + SWD;
  const XMIN = -26, XMAX = X1 + 26;
  const BX0 = -17, BX1 = X1 + 17;            // 人能走的 x 範圍
  const Z_N = 0.95, Z_S = 11.7;              // 人能走的 z 範圍
  const ROAD0 = 3.7, ROAD1 = 10.3;

  /* ───────── 天空、燈光 ───────── */
  const skyG = new SphereGeometry(300, 24, 16);
  { const col = [], p = skyG.attributes.position, c1 = new Color('#141235'), c2 = new Color('#6b3a4a'), c3 = new Color('#3a2350'), t = new Color();
    for (let i = 0; i < p.count; i++) { const y = p.getY(i) / 300; if (y > 0.28) t.copy(c3).lerp(c1, clamp((y - 0.28) / 0.55, 0, 1)); else t.copy(c2).lerp(c3, clamp((y + 0.05) / 0.33, 0, 1)); col.push(t.r, t.g, t.b); }
    skyG.setAttribute('color', new Float32BufferAttribute(col, 3)); }
  const sky = new Mesh(skyG, new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false }));
  sky.renderOrder = -10; scene.add(sky);
  { const pts = [], r = mulberry(7); for (let i = 0; i < 260; i++) { const a = r() * Math.PI * 2, e = 0.18 + r() * 1.2, R = 280; pts.push(Math.cos(a) * Math.cos(e) * R, Math.sin(e) * R, Math.sin(a) * Math.cos(e) * R); }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pts, 3));
    const st = new Points(g, new PointsMaterial({ color: 0xfff3d0, size: 2.2, sizeAttenuation: false, fog: false, transparent: true, opacity: .8, depthWrite: false })); sky.add(st); }
  const moonT = ctex(128, 128, (x) => { x.fillStyle = '#fdf2c8'; x.beginPath(); x.arc(64, 64, 34, 0, 7); x.fill(); x.globalCompositeOperation = 'destination-out'; x.beginPath(); x.arc(78, 54, 30, 0, 7); x.fill(); });
  const moon = new Sprite(new SpriteMaterial({ map: moonT, fog: false, depthWrite: false })); moon.scale.set(34, 34, 1); moon.position.set(-120, 150, -240); sky.add(moon);
  scene.add(new HemisphereLight(0xb0a6ee, 0x6a5058, 1.25));
  const dl = new DirectionalLight(0xffe2b8, 0.55); dl.position.set(-8, 14, 12); scene.add(dl);

  /* ───────── 材質、貼圖 ───────── */
  const glowT = ctex(128, 128, (x) => { const g = x.createRadialGradient(64, 64, 2, 64, 64, 64); g.addColorStop(0, 'rgba(255,214,140,1)'); g.addColorStop(.4, 'rgba(255,170,90,.35)'); g.addColorStop(1, 'rgba(255,150,80,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); });
  const shadowT = ctex(64, 64, (x) => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(0,0,0,.75)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); });
  const tileT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#5b4c48'; x.fillRect(0, 0, w, h); const r = mulberry(3); for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { const sh = Math.floor(r() * 14) - 7; x.fillStyle = `rgb(${91 + sh},${76 + sh},${72 + sh})`; x.fillRect(i * 64 + 2, j * 64 + 2, 60, 60); } }, 1);
  const roadT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#2e2a32'; x.fillRect(0, 0, w, h); const r = mulberry(5); for (let i = 0; i < 700; i++) { const v = 36 + Math.floor(r() * 22); x.fillStyle = `rgb(${v},${v - 3},${v + 4})`; x.fillRect(r() * w, r() * h, 2, 2); } }, 1);
  const grassT = ctex(128, 128, (x, w, h) => { x.fillStyle = '#26402f'; x.fillRect(0, 0, w, h); const r = mulberry(9); for (let i = 0; i < 400; i++) { x.fillStyle = r() < .5 ? '#2e4c37' : '#1f3727'; x.fillRect(r() * w, r() * h, 3, 3); } }, 1);
  const winBase = [11, 23, 37, 51].map(seed => ctex(128, 256, (x, w, h) => { const r = mulberry(seed); x.fillStyle = '#1b1636'; x.fillRect(0, 0, w, h); for (let j = 0; j < 16; j++) for (let i = 0; i < 8; i++) { const lit = r() < .33; x.fillStyle = lit ? (r() < .5 ? '#ffd98a' : '#ffbe68') : '#272043'; x.fillRect(i * 16 + 3, j * 16 + 3, 10, 10); } }, 1));
  function repTile(t, rx, ry) { const c = t.clone(); c.needsUpdate = true; c.repeat.set(rx, ry); return c; }
  function box(w, h, d, mat, x, y, z, parent) { const m = new Mesh(new BoxGeometry(w, h, d), mat); m.position.set(x, y, z); (parent || scene).add(m); return m; }
  function glow(x, y, z, s, op, parent) { const sp = new Sprite(new SpriteMaterial({ map: glowT, blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: op })); sp.scale.set(s, s, 1); sp.position.set(x, y, z); (parent || scene).add(sp); return sp; }

  /* ───────── 地面 ───────── */
  const LEN = XMAX - XMIN, CX = (XMAX + XMIN) / 2;
  { const m = new Mesh(new PlaneGeometry(900, 900), lam('#1f1a2c')); m.rotation.x = -Math.PI / 2; m.position.y = -0.05; scene.add(m); }
  for (const [z0, z1] of [[0, 3.6], [10.4, 14]]) {
    const w = z1 - z0; const m = new Mesh(new BoxGeometry(LEN, .18, w), lam('#ffffff', { map: repTile(tileT, LEN / 4, w / 4) })); m.position.set(CX, .09, z0 + w / 2); scene.add(m);
    box(LEN, .2, .22, lam('#8a7a70'), CX, .1, z0 === 0 ? 3.7 : 10.3);
  }
  { const m = new Mesh(new PlaneGeometry(LEN, ROAD1 - ROAD0 - .2), lam('#ffffff', { map: repTile(roadT, LEN / 6, 1.2), emissive: '#1c1826' })); m.rotation.x = -Math.PI / 2; m.position.set(CX, .02, (ROAD0 + ROAD1) / 2); scene.add(m); }
  { const m = new Mesh(new PlaneGeometry(LEN, 12), lam('#ffffff', { map: repTile(grassT, LEN / 5, 2.4) })); m.rotation.x = -Math.PI / 2; m.position.set(CX, .03, 20); scene.add(m); }
  { const m = new Mesh(new PlaneGeometry(LEN, 8), lam('#17131f')); m.rotation.x = -Math.PI / 2; m.position.set(CX, .01, -11); scene.add(m); }
  const dashM = bas('#d9d2bd'); for (let x = XMIN + 2; x < XMAX - 2; x += 3.4) box(1.7, .03, .16, dashM, x, .045, 7);
  for (const gi of [1, Math.max(2, n - 2)]) { const cx = gi * PITCH - GAP / 2; for (let k = -3; k <= 3; k++) box(.55, .03, ROAD1 - ROAD0 - .5, dashM, cx + k * 1.05, .045, 7); }

  /* ───────── 遠景大樓 ───────── */
  function building(x, z, w, h, d, seed, tint) {
    const t = winBase[seed % 4], mk = (rx, ry) => bas(tint || '#ffffff', { map: repTile(t, rx, ry) });
    const side = bas('#1c1736');
    const m = new Mesh(new BoxGeometry(w, h, d), [side, side, bas('#18132e'), side, mk(w / 5, h / 6), mk(w / 5, h / 6)]);
    m.position.set(x, h / 2, z); scene.add(m); return m;
  }
  let blink;
  { const r = mulberry(21);
    for (let x = XMIN - 20; x < XMAX + 20; x += 9 + r() * 6) building(x, -15 - r() * 3, 8 + r() * 6, 13 + r() * 16, 9, Math.floor(r() * 4));
    for (let x = XMIN - 40; x < XMAX + 40; x += 13 + r() * 9) building(x, -38 - r() * 6, 11 + r() * 8, 26 + r() * 24, 11, Math.floor(r() * 4), '#9a90b8');
    for (let x = XMIN - 40; x < XMAX + 40; x += 11 + r() * 8) building(x, 36 + r() * 4, 10 + r() * 7, 12 + r() * 20, 9, Math.floor(r() * 4));
    for (let x = XMIN - 40; x < XMAX + 40; x += 15 + r() * 10) building(x, 62 + r() * 6, 12 + r() * 8, 24 + r() * 30, 11, Math.floor(r() * 4), '#9a90b8');
    building(XMIN - 4, 3, 8, 16, 34, 1); building(XMAX + 4, 3, 8, 15, 34, 2);
    const tower = building(XMAX + 30, -50, 9, 70, 9, 3, '#b8aed0');
    const bl = glow(XMAX + 30, 72, -50, 6, 1, scene); bl.material.color.set('#ff3a2a'); blink = bl; }

  /* ───────── 店家 ───────── */
  const imgs = {};
  Object.entries(o.win || {}).forEach(([id, src]) => { const im = new Image(); im.onload = () => shops.forEach(s => s.repaint && s.id === id && s.repaint()); im.src = src; imgs[id] = im; });
  const pick = [], norens = [], lanterns = [], doorGlow = [];

  function buildShop(sh) {
    const L = o.looks[sh.id] || o.looks.iz, H = L.yatai ? 4.9 : 6.2, W = SWD, D = 7, dx = sh.dx, O = '#2a1810';
    const g = new Group(); g.position.set(dx, 0, 0); scene.add(g);                 // 以門為原點
    const body = box(W, H, D, lam(L.wall), 0, H / 2, -D / 2, g); body.userData.shop = sh; pick.push(body);
    /* 彩繪的正面 */
    const PX = 64, cw = W * PX, ch = Math.round(H * PX), c = document.createElement('canvas'); c.width = cw; c.height = ch; const x = c.getContext('2d');
    const gH = 3 * PX;
    sh.repaint = () => {
      x.clearRect(0, 0, cw, ch); x.fillStyle = L.wall; x.fillRect(0, 0, cw, ch);
      x.fillStyle = L.wall2; for (let i = 1; i < 8; i++) x.fillRect(i * cw / 8 - 3, 0, 6, ch);
      x.fillStyle = '#3a2416'; x.fillRect(0, ch - gH - 8, cw, 16);
      const win = (wx, wy, ww, wh, art) => {
        x.save(); x.beginPath(); x.rect(wx, wy, ww, wh); x.clip();
        const im = art && imgs[sh.id];
        if (im && im.complete && im.naturalWidth) { const iw = im.naturalWidth, ih = im.naturalHeight, cwid = ih * .6 * ww / wh, cx = wx < cw / 2 ? iw * .18 : iw * .62; x.drawImage(im, cx, ih * .2, cwid, ih * .6, wx, wy, ww, wh); x.fillStyle = 'rgba(255,170,80,.18)'; x.fillRect(wx, wy, ww, wh); }
        else { const gr = x.createLinearGradient(0, wy, 0, wy + wh); gr.addColorStop(0, '#ffd88a'); gr.addColorStop(1, '#e59a45'); x.fillStyle = gr; x.fillRect(wx, wy, ww, wh); }
        if (!sh.own) { x.fillStyle = 'rgba(20,12,8,.6)'; x.fillRect(wx, wy, ww, wh); }
        x.restore(); x.strokeStyle = O; x.lineWidth = 4; x.strokeRect(wx, wy, ww, wh); x.lineWidth = 3; x.strokeStyle = 'rgba(42,24,16,.8)'; x.beginPath(); x.moveTo(wx + ww / 2, wy); x.lineTo(wx + ww / 2, wy + wh); x.moveTo(wx, wy + wh / 2); x.lineTo(wx + ww, wy + wh / 2); x.stroke();
      };
      if (H > 5.5) { win(1.0 * PX, 12, 2.0 * PX, 88, false); win(5.0 * PX, 12, 2.0 * PX, 88, false); }
      const wy = ch - 2.5 * PX, wh = 1.6 * PX;
      win(.45 * PX, wy, 1.95 * PX, wh, true); win(5.6 * PX, wy, 1.95 * PX, wh, true);
      x.fillStyle = L.wall2; x.fillRect(0, ch - .9 * PX, cw, .9 * PX); x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 2; for (let i = 1; i < 4; i++) { x.beginPath(); x.moveTo(0, ch - .9 * PX + i * .225 * PX); x.lineTo(cw, ch - .9 * PX + i * .225 * PX); x.stroke(); }
      const dg = x.createLinearGradient(0, ch - 2.5 * PX, 0, ch); dg.addColorStop(0, sh.own ? '#ffcf7a' : '#4a3a30'); dg.addColorStop(1, sh.own ? '#b8642a' : '#2a201a');
      x.fillStyle = dg; x.fillRect(3 * PX, ch - 2.5 * PX, 2 * PX, 2.5 * PX);
      if (!sh.own) { x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(0, 0, cw, ch); }
      if (sh.tex) sh.tex.needsUpdate = true;
    };
    sh.tex = new CanvasTexture(c); sh.tex.colorSpace = SRGBColorSpace; sh.tex.anisotropy = 4; sh.repaint();
    const fac = new Mesh(new PlaneGeometry(W, H), bas('#ffffff', { map: sh.tex })); fac.position.set(0, H / 2, .02); g.add(fac);
    /* 屋簷、屋頂 */
    const roofC = '#2f3446';
    box(W + 1.2, .24, 1.8, lam(roofC), 0, 3.28, .9, g); box(W + .6, .16, .34, lam('#4a2a14'), 0, 3.02, .2, g);
    const roof = new Mesh(new ConeGeometry(1, 1, 4, 1), lam(roofC)); roof.rotation.y = Math.PI / 4; roof.scale.set((W + 1.6) / 1.4142, 1.9, (D + 1.6) / 1.4142); roof.position.set(0, H + .95, -D / 2); g.add(roof);
    /* 門框 */
    const wood = lam('#4a2a14');
    box(.24, 2.6, .3, wood, -1.12, 1.3, .18, g); box(.24, 2.6, .3, wood, 1.12, 1.3, .18, g); box(2.6, .26, .34, wood, 0, 2.66, .18, g);
    box(2.6, .14, .9, lam('#7d6a60'), 0, .22, .55, g);                       // 門前台階
    /* 暖簾 */
    const nor = new Group(); nor.position.set(0, 2.56, .34); g.add(nor);
    const norT = ctex(256, 140, (cx, w, h) => {
      const ks = [...L.kan]; cx.textAlign = 'center'; cx.textBaseline = 'middle';
      for (let i = 0; i < 3; i++) { const px = 4 + i * 84; cx.fillStyle = L.noren; cx.fillRect(px, 0, 80, h - 6); cx.fillStyle = 'rgba(0,0,0,.25)'; cx.fillRect(px, h - 16, 80, 10); }
      cx.fillStyle = L.ink;
      if (ks.length <= 3) { cx.font = `900 46px ${FONT}`; ks.forEach((ch2, i) => cx.fillText(ch2, 4 + (i + (3 - ks.length) / 2) * 84 + 40, 56)); } else { cx.font = `900 34px ${FONT}`; cx.fillText(L.kan, 128, 56, 240); }
    });
    const norM = new Mesh(new PlaneGeometry(2.4, 1.3), new MeshBasicMaterial({ map: norT, transparent: true, side: DoubleSide, alphaTest: .05 })); norM.position.y = -.65; nor.add(norM); norens.push({ g: nor, ph: sh.x0 * .37 });
    /* 招牌 */
    const label = `${sh.e} ${sh.n}`;
    const signT = ctex(512, 100, (cx, w, h) => { cx.fillStyle = '#f3e2bd'; cx.strokeStyle = O; cx.lineWidth = 8; rrect(cx, 5, 5, w - 10, h - 10, 14); cx.fill(); cx.stroke(); cx.fillStyle = '#3a1e0c'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; let fs = 52; cx.font = `900 ${fs}px ${FONT}`; while (cx.measureText(label).width > w - 40 && fs > 18) { fs -= 2; cx.font = `900 ${fs}px ${FONT}`; } cx.fillText(label, w / 2, h / 2 + 3); });
    const sign = new Mesh(new BoxGeometry(4.6, .9, .14), [lam('#4a2a14'), lam('#4a2a14'), lam('#4a2a14'), lam('#4a2a14'), bas('#ffffff', { map: signT }), lam('#4a2a14')]); sign.position.set(0, 3.98, .2); g.add(sign);
    /* 燈籠 */
    for (const sx of [-2.15, 2.15]) {
      const lg = new Group(); lg.position.set(sx, 2.15, .55); g.add(lg);
      const lb = new Mesh(new SphereGeometry(.34, 14, 10), bas(L.lan)); lb.scale.y = 1.3; lg.add(lb);
      box(.3, .06, .3, bas('#2a1810'), 0, .46, 0, lg); box(.3, .06, .3, bas('#2a1810'), 0, -.46, 0, lg); box(.03, .5, .03, bas('#2a1810'), 0, .72, 0, lg);
      const gl = glow(0, 0, .15, 2.6, .55, lg); lanterns.push({ gl, ph: sh.x0 + sx });
    }
    /* のぼり旗 */
    { const px = 3.3, nb = new Group(); nb.position.set(px, 0, 1.3); g.add(nb);
      box(.07, 3.2, .07, bas('#2a1810'), 0, 1.6, 0, nb); box(.9, .06, .06, bas('#2a1810'), .45, 3.15, 0, nb);
      const fT = ctex(96, 320, (cx, w, h) => { cx.fillStyle = L.noren; cx.fillRect(0, 0, w, h); cx.fillStyle = L.ink; cx.textAlign = 'center'; cx.textBaseline = 'middle'; const ks = [...L.kan].slice(0, 4); cx.font = `900 52px ${FONT}`; ks.forEach((k, i) => cx.fillText(k, w / 2, 56 + i * (ks.length > 3 ? 62 : 74))); });
      const fl = new Mesh(new PlaneGeometry(.78, 2.3), new MeshBasicMaterial({ map: fT, side: DoubleSide })); fl.position.set(.5, 1.95, .02); nb.add(fl); norens.push({ g: fl, ph: sh.x0, flag: 1 }); }
    /* 小東西 */
    { const r = mulberry(sh.x0 + 5);
      const pot = new Group(); pot.position.set(-2.9, 0, 1.0); g.add(pot);
      box(.5, .45, .5, lam('#9a5a36'), 0, .25, 0, pot); const bush = new Mesh(new IcosahedronGeometry(.45, 0), lam(r() < .5 ? '#3a7a48' : '#4f8a3c')); bush.position.y = .8; pot.add(bush);
      if (sh.id === 'iz' || sh.id === 'oko' || sh.id === 'tep') { for (let i = 0; i < 3; i++) box(.55, .4, .4, lam('#c9962e'), -2.6 + i * .6, .4 + (i === 1 ? .4 : 0), 1.6, g); }
      if (sh.id === 'bar') { const pt = new Mesh(new IcosahedronGeometry(.5, 0), lam('#5a3a8a')); pt.position.set(2.8, .75, 1.0); g.add(pt); }
    }
    /* 招牌上方的名字牌 */
    const lw = 640, lh = 150;
    const labT = ctex(lw, lh, (cx) => {
      cx.textAlign = 'center'; cx.textBaseline = 'middle';
      cx.fillStyle = '#2a1810d9'; cx.strokeStyle = '#ffd27a'; cx.lineWidth = 5; rrect(cx, 8, 38, lw - 16, 100, 30); cx.fill(); cx.stroke();
      let fs = 50; cx.font = `900 ${fs}px ${FONT}`; while (cx.measureText(label).width > lw - 60 && fs > 20) { fs -= 2; cx.font = `900 ${fs}px ${FONT}`; }
      cx.fillStyle = '#fff3d6'; cx.fillText(label, lw / 2, 90);
      const tag = sh.cur ? (txt.cur || '📍 目前') : (!sh.own ? (txt.lock || '🔒 花錢解鎖') : '');
      if (tag) { cx.font = `900 28px ${FONT}`; const tw2 = cx.measureText(tag).width + 36; cx.fillStyle = sh.cur ? '#ffd34d' : '#e9d3a4'; cx.strokeStyle = O; cx.lineWidth = 4; rrect(cx, lw / 2 - tw2 / 2, 2, tw2, 40, 20); cx.fill(); cx.stroke(); cx.fillStyle = '#3a1e0c'; cx.fillText(tag, lw / 2, 24); }
    });
    const lab = new Sprite(new SpriteMaterial({ map: labT, depthTest: false, transparent: true })); lab.scale.set(5.6, 5.6 * lh / lw, 1); lab.position.set(0, H + 3.3, 1); lab.renderOrder = 20; g.add(lab); sh.lab = lab;
    const dgl = glow(0, 1.3, 1.1, own(sh) ? 4.4 : 0.01, .5, g); doorGlow.push({ sh, gl: dgl });
    function own(s) { return s.own; }
  }
  shops.forEach(buildShop);

  /* ───────── 路燈、燈籠串、行道樹、小物 ───────── */
  const fades = [];
  function regFade(g) { const ms = [], sps = []; g.traverse(ob => { if (ob.isSprite) sps.push(ob); else if (ob.isMesh && ob.material) (Array.isArray(ob.material) ? ob.material : [ob.material]).forEach(m => { m.transparent = true; m.userData.o0 = m.opacity; ms.push(m); }); }); fades.push({ g, ms, sps, a: 1 }); }
  const lampHeads = [];
  function lamp(x, z, ry) {
    const g = new Group(); g.position.set(x, .18, z); scene.add(g);
    box(.34, .14, .34, lam('#3a3030'), 0, .07, 0, g); box(.12, 4.3, .12, lam('#2b2422'), 0, 2.2, 0, g);
    box(.8, .1, .1, lam('#2b2422'), 0, 4.3, 0, g);
    const head = new Group(); head.position.set(0, 4.05, 0); g.add(head);
    const lb = new Mesh(new BoxGeometry(.5, .5, .5), bas('#ffe2a6')); head.add(lb); box(.62, .1, .62, lam('#2b2422'), 0, .3, 0, head);
    const gl = glow(0, 0, 0, 5, .6, head); lampHeads.push(gl);
    const pool = new Mesh(new PlaneGeometry(6.5, 6.5), new MeshBasicMaterial({ map: glowT, blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: .32 })); pool.rotation.x = -Math.PI / 2; pool.position.set(0, .04, 0); g.add(pool); regFade(g);
  }
  for (let i = 0; i <= n; i++) lamp(i * PITCH - GAP / 2, 3.35, 0);
  for (let x = -10; x < XMAX - 12; x += 10.5) lamp(x, 10.65, Math.PI);
  /* 燈籠串（橫過馬路） */
  { const redM = bas('#e2452f'), blk = bas('#2a1810');
    for (let i = 1; i < n; i += 2) {
      const x = i * PITCH - GAP / 2, pts = [];
      for (let k = 0; k <= 8; k++) { const t = k / 8, z = lerp(3.35, 10.65, t), y = 4.55 - Math.sin(t * Math.PI) * .75; pts.push(x, y, z); if (k > 0 && k < 8) { const lb = new Mesh(new SphereGeometry(.2, 10, 8), redM); lb.scale.y = 1.25; lb.position.set(x, y - .28, z); scene.add(lb); } }
      const gg = new BufferGeometry(); gg.setAttribute('position', new Float32BufferAttribute(pts, 3)); scene.add(new Line(gg, new LineBasicMaterial({ color: 0x2a1810 })));
    } }
  /* 行道樹、長椅、自動販賣機 */
  { const r = mulberry(33);
    for (let x = -12 + 3; x < XMAX - 8; x += 11) {
      const t = new Group(); t.position.set(x, .18, 12.4); scene.add(t);
      box(.3, 2.2, .3, lam('#4a3426'), 0, 1.1, 0, t);
      const pink = r() < .5, cols = pink ? ['#e8a0b4', '#f4c6d2', '#d98aa2'] : ['#2f5a3c', '#3a6e48', '#285034'];
      [[0, 2.9, 0, 1.15], [-.6, 2.5, .2, .85], [.6, 2.6, -.2, .85]].forEach(([a, b, c, s], i) => { const m = new Mesh(new IcosahedronGeometry(s, 0), lam(cols[i % 3], { flatShading: true })); m.position.set(a, b, c); t.add(m); });
      regFade(t);
    }
    for (let x = 2; x < XMAX - 10; x += 17) { const bn = new Group(); bn.position.set(x, .18, 13.3); scene.add(bn); box(1.6, .1, .5, lam('#8a5a30'), 0, .5, 0, bn); box(1.6, .5, .08, lam('#8a5a30'), 0, .8, -.22, bn); box(.1, .5, .4, lam('#2b2422'), -.7, .25, 0, bn); box(.1, .5, .4, lam('#2b2422'), .7, .25, 0, bn); regFade(bn); }
    for (const gi of [0, Math.floor(n / 2) + 1]) {
      const x = gi * PITCH - GAP / 2, vt = ctex(64, 128, (cx, w, h) => { cx.fillStyle = '#2b4a8a'; cx.fillRect(0, 0, w, h); cx.fillStyle = '#fff3d6'; cx.fillRect(6, 8, 52, 50); const cs = ['#e2452f', '#f2b630', '#4aa86a', '#4a7ad0']; for (let j = 0; j < 8; j++) { cx.fillStyle = cs[j % 4]; cx.fillRect(10 + (j % 4) * 12, 14 + Math.floor(j / 4) * 20, 9, 14); } cx.fillStyle = '#111'; cx.fillRect(10, 90, 44, 12); });
      const vm = new Group(); vm.position.set(x, .18, -.5); scene.add(vm);
      const mm = new Mesh(new BoxGeometry(.95, 1.9, .8), [lam('#2b4a8a'), lam('#2b4a8a'), lam('#2b4a8a'), lam('#2b4a8a'), bas('#ffffff', { map: vt }), lam('#2b4a8a')]); mm.position.y = .95; vm.add(mm); glow(0, 1.2, .8, 2.4, .35, vm);
    } }

  /* ───────── 車 ───────── */
  const cars = [];
  function mkCar(color, lane, dir, taxi) {
    const g = new Group(); scene.add(g);
    box(3.7, .72, 1.7, lam(color), 0, .68, 0, g); box(2, .66, 1.55, lam(color), -.1, 1.34, 0, g);
    box(2.02, .46, 1.58, bas('#2a3a5c'), -.1, 1.36, 0, g);
    for (const sx of [-1.2, 1.2]) for (const sz of [-.85, .85]) { const w = new Mesh(new CylinderGeometry(.34, .34, .26, 12), lam('#15121a')); w.rotation.x = Math.PI / 2; w.position.set(sx, .36, sz); g.add(w); }
    box(.06, .2, .4, bas('#fff2c0'), 1.86, .78, .5, g); box(.06, .2, .4, bas('#fff2c0'), 1.86, .78, -.5, g);
    box(.06, .2, .4, bas('#ff3a2a'), -1.86, .78, .5, g); box(.06, .2, .4, bas('#ff3a2a'), -1.86, .78, -.5, g);
    glow(2.4, .8, 0, 3.2, .5, g);
    if (taxi) box(.6, .2, .3, bas('#ffe08a'), -.1, 1.8, 0, g);
    g.isCar = true; g.scale.x = dir; g.userData = { lane, dir, v: 0, vmax: rnd(5.5, 8), x: rnd(XMIN, XMAX) };
    g.position.set(g.userData.x, .02, lane); cars.push(g); regFade(g);
  }
  mkCar('#d94b3d', 8.7, -1); mkCar('#e8e1cf', 5.3, 1); mkCar('#f2b630', 8.7, -1, true); mkCar('#2f6f9f', 5.3, 1);
  cars[2].position.x = XMAX - 30; cars[3].position.x = XMIN + 40;

  /* ───────── 人（玩家＋NPC） ───────── */
  const people = [];
  const bubbleT = {};
  function bubbleTex(kind) {
    if (bubbleT[kind]) return bubbleT[kind];
    return bubbleT[kind] = ctex(128, 112, (x, w, h) => {
      x.strokeStyle = '#2a1810'; x.lineWidth = 6; x.lineJoin = 'round';
      if (kind === 'mind') { x.fillStyle = '#efe9ff'; [[40, 40, 26], [66, 30, 28], [92, 42, 25], [64, 52, 30]].forEach(([a, b, r]) => { x.beginPath(); x.arc(a, b, r, 0, 7); x.stroke(); }); [[40, 40, 26], [66, 30, 28], [92, 42, 25], [64, 52, 30]].forEach(([a, b, r]) => { x.beginPath(); x.arc(a, b, r, 0, 7); x.fill(); }); x.beginPath(); x.arc(44, 90, 7, 0, 7); x.fill(); x.stroke(); x.beginPath(); x.arc(30, 104, 4, 0, 7); x.fill(); x.stroke(); }
      else { x.fillStyle = kind === 'idea' ? '#fff0a8' : '#ffffff'; rrect(x, 12, 8, 104, 66, 24); x.fill(); x.stroke(); x.beginPath(); x.moveTo(44, 72); x.lineTo(34, 100); x.lineTo(66, 74); x.closePath(); x.fill(); x.stroke(); x.fillStyle = '#fff'; x.fillRect(46, 70, 18, 6); if (kind === 'idea') x.fillStyle = '#fff0a8'; x.fillRect(46, 71, 18, 5); }
      x.fillStyle = '#2a1810'; x.textAlign = 'center'; x.textBaseline = 'middle';
      if (kind === 'idea') { x.font = `900 44px ${FONT}`; x.fillText('!', 64, 42); } else { for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(40 + i * 24, kind === 'mind' ? 42 : 42, 6, 0, 7); x.fill(); } }
    });
  }
  function mkPerson(src, h, isMe) {
    const grp = new Group(); scene.add(grp);
    const geo = new PlaneGeometry(1, 1); geo.translate(0, .5, 0);
    const mat = new MeshBasicMaterial({ transparent: true, alphaTest: .04, color: 0xf2ebf2 });
    const m = new Mesh(geo, mat); grp.add(m);
    const p = { grp, m, mat, h, w: h * .8, x: 0, z: 0, face: 1, ph: Math.random() * 7, alpha: 1, isMe, moving: false };
    loadTex(src, t => { mat.map = t; mat.needsUpdate = true; p.w = h * t.image.width / t.image.height; });
    const sh = new Mesh(new CircleGeometry(.5, 16), new MeshBasicMaterial({ map: shadowT, transparent: true, depthWrite: false, opacity: .8 })); sh.rotation.x = -Math.PI / 2; sh.position.y = .22; scene.add(sh); p.sh = sh;
    people.push(p); return p;
  }
  const me = mkPerson(o.me, 1.9, true);
  me.x = shops.find(s => s.cur) ? shops.find(s => s.cur).dx : shops[0].dx; me.z = 4.6;

  const npcs = [];
  const byId = {};
  NPCS.forEach(d => {
    const src = o.walk[d.spr]; if (!src) return;
    const p = mkPerson(src, d.h, false); p.d = d; p.sp = d.sp; p.state = 'walk'; p.t = 0; p.tgt = null; p.hidden = false;
    p.deck = []; p.item = null;
    const bs = new Sprite(new SpriteMaterial({ map: bubbleTex('chat'), transparent: true, depthWrite: false })); bs.scale.set(.95, .83, 1); scene.add(bs); p.bub = bs; p.kind = 'chat';
    npcs.push(p); byId[d.id] = p;
  });
  PAIRS.forEach(pr => { const a = byId[pr.a], b = byId[pr.b]; if (a && b) { b.leader = a; b.off = new Vector3(rnd(-.4, -.7), 0, rnd(.7, 1.0)); a.talks = pr.talks; b.talks = pr.talks; a.mate = b; b.mate = a; } });
  function refill(p) {
    const pool = p.d.lines.map(l => ({ kind: l[0], text: l[1] }));
    if (p.talks) p.talks.forEach(t => pool.push({ kind: 'chat', talk: t }));
    p.deck = shuffle(pool.map((_, i) => i)); p.pool = pool;
  }
  function peekItem(p) { if (!p.deck.length) refill(p); return p.pool[p.deck[p.deck.length - 1]]; }
  function popItem(p) { if (!p.deck.length) refill(p); const it = p.pool[p.deck.pop()]; if (!p.deck.length) { refill(p); if (p.pool.length > 1 && p.pool[p.deck[p.deck.length - 1]] === it) p.deck.unshift(p.deck.pop()); } return it; }
  function setBubble(p) { const it = peekItem(p); if (p.kind !== it.kind) { p.kind = it.kind; p.bub.material.map = bubbleTex(it.kind); p.bub.material.needsUpdate = true; } }
  function newTarget(p) {
    const r = Math.random(); p.linger = null;
    if (r < .42) p.tgt = { x: rnd(BX0, BX1), z: rnd(1.1, 3.2) };
    else if (r < .66) p.tgt = { x: rnd(BX0, BX1), z: rnd(10.7, 11.5) };
    else if (r < .88) { const s = shops[Math.floor(Math.random() * n)]; p.tgt = { x: s.dx + rnd(-1.6, 1.6), z: rnd(1.2, 1.7) }; p.linger = s; }
    else p.tgt = { x: clamp(p.x + rnd(-6, 6), BX0, BX1), z: p.z < 7 ? rnd(10.7, 11.5) : rnd(1.1, 3.2) };
  }
  npcs.forEach((p, i) => { p.x = lerp(BX0 + 4, BX1 - 4, (i * 0.618) % 1); p.z = Math.random() < .5 ? rnd(1.2, 3.2) : rnd(10.7, 11.5); newTarget(p); p.t = rnd(0, 2); p.state = 'idle'; setBubble(p); });
  npcs.forEach(p => { if (p.leader) { p.x = p.leader.x + p.off.x; p.z = p.leader.z + p.off.z; } });

  /* ───────── 鏡頭、輸入 ───────── */
  const S = { dead: false, cv, ent: null, yaw: 0, yawT: 0, dist: 14, distT: 14, camV: 0, tgt: null, joy: null, keys: {}, t: 0, talk: null, nearDoor: null, last: performance.now() };
  const camPos = new Vector3(), look = new Vector3(), meHead = new Vector3();
  let camT = new Vector3(me.x, 1.3, me.z);

  const hint = document.createElement('div'); hint.className = 'tw3hint'; tw.appendChild(hint);
  const joyEl = document.createElement('div'); joyEl.className = 'tw3j'; joyEl.innerHTML = '<i></i>'; tw.appendChild(joyEl);
  const camEl = document.createElement('div'); camEl.className = 'tw3cam'; camEl.innerHTML = '<button type="button" aria-label="L">⟲</button><button type="button" aria-label="R">⟳</button>'; tw.appendChild(camEl);
  const fade = document.createElement('div'); fade.className = 'tw3fade'; tw.appendChild(fade);
  const card = document.createElement('div'); card.className = 'tw3card'; tw.appendChild(card);
  const camBtns = camEl.querySelectorAll('button');
  camBtns.forEach((b, i) => { const dir = i ? -1 : 1; b.addEventListener('pointerdown', e => { e.preventDefault(); S.camV = dir; S.yawT = clamp(S.yawT + dir * .35, -1.3, 1.3); try { b.setPointerCapture(e.pointerId); } catch (_) { } }); const u = () => { S.camV = 0; }; b.addEventListener('pointerup', u); b.addEventListener('pointercancel', u); });

  function rect() { const r = cv.getBoundingClientRect(); return r; }
  const ray = new Raycaster(), ndc = new Vector2(), gplane = new Plane(new Vector3(0, 1, 0), 0), hit = new Vector3();
  function toNdc(cx, cy) { const r = rect(); ndc.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height * 2 - 1)); return ndc; }
  function local(cx, cy) { const r = rect(); return { x: (cx - r.left) * (cv.clientWidth / r.width), y: (cy - r.top) * (cv.clientHeight / r.height) }; }
  function proj(v) { const q = v.clone().project(camera), r = rect(); return { x: (q.x + 1) / 2 * r.width + r.left, y: (1 - q.y) / 2 * r.height + r.top, z: q.z }; }

  function npcAt(cx, cy) {
    let best = null, bd = 1e9; const r = rect(), u = r.height / 600;
    for (const p of npcs) {
      if (p.hidden) continue;
      const f = proj(new Vector3(p.x, 0, p.z)), t = proj(new Vector3(p.x, p.h + .75, p.z));
      const hh = f.y - t.y; if (hh < 6) continue;
      const w = Math.max(hh * .38, 26 * u * 1.2), dxp = Math.abs(cx - f.x), inRect = dxp < w && cy > t.y - 10 && cy < f.y + 12;
      if (inRect) { const d = dxp + Math.abs(cy - (f.y + t.y) / 2) * .3; if (d < bd) { bd = d; best = p; } }
    }
    return best;
  }
  let pd = null;
  cv.addEventListener('pointerdown', e => { if (S.ent) return; e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (_) { } const l = local(e.clientX, e.clientY); pd = { id: e.pointerId, sx: l.x, sy: l.y, moved: 0 }; });
  cv.addEventListener('pointermove', e => {
    if (!pd || pd.id !== e.pointerId || S.ent) return; const l = local(e.clientX, e.clientY), dx = l.x - pd.sx, dy = l.y - pd.sy, d = Math.hypot(dx, dy), R = 55;
    if (!pd.moved && d > 12) pd.moved = 1;
    if (pd.moved) { const m = Math.min(1, d / R) / Math.max(d, 1e-6); S.joy = { x: dx * m, y: dy * m }; S.tgt = null; joyEl.style.display = 'block'; joyEl.style.left = pd.sx + 'px'; joyEl.style.top = pd.sy + 'px'; joyEl.firstChild.style.transform = `translate(${S.joy.x * 55}px,${S.joy.y * 55}px)`; }
  });
  const up = e => {
    if (!pd || pd.id !== e.pointerId) return;
    if (!pd.moved && !S.ent) tap(e.clientX, e.clientY);
    pd = null; S.joy = null; joyEl.style.display = 'none';
  };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { e.preventDefault(); S.distT = clamp(S.distT + Math.sign(e.deltaY) * 1.5, 8, 20); }, { passive: false });
  function tap(cx, cy) {
    const p = npcAt(cx, cy); if (p) { openCard(p); return; }
    ray.setFromCamera(toNdc(cx, cy), camera);
    const hs = ray.intersectObjects(pick, false), hg = ray.ray.intersectPlane(gplane, hit);
    let shop = null;
    if (hs.length && (!hg || hs[0].distance < hg.distanceTo(ray.ray.origin))) shop = hs[0].object.userData.shop;
    closeCard();
    if (shop) S.tgt = { x: shop.dx, z: Z_N + .1, shop };
    else if (hg) S.tgt = { x: clamp(hit.x, BX0, BX1), z: clamp(hit.z, Z_N, Z_S) };
  }
  const kd = e => { if (!document.contains(cv)) return; const c = e.key.toLowerCase(); if (/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(c)) { S.keys[c] = 1; if (/^(arrow|w|a|s|d)/.test(c)) S.tgt = null; e.preventDefault(); } };
  const ku = e => { delete S.keys[e.key.toLowerCase()]; };
  document.addEventListener('keydown', kd); document.addEventListener('keyup', ku);

  /* ───────── 對話卡 ───────── */
  function openCard(p) {
    const it = popItem(p), K = KIND[it.kind] || KIND.chat;
    if (S.talk && S.talk !== p && S.talk !== p.mate) release(S.talk);
    S.talk = p; p.state = 'talk'; p.t = 0; if (p.mate && p.mate.state !== 'talk') { p.mate.state = 'talk'; p.mate.t = 0; }
    card.innerHTML = '';
    const h = document.createElement('div'); h.className = 'tw3h';
    const av = document.createElement('div'); av.className = 'tw3av'; av.style.backgroundImage = `url("${o.walk[p.d.spr]}")`;
    const nm = document.createElement('div'); nm.className = 'tw3nm'; const b = document.createElement('b'); b.textContent = p.d.name; const sm = document.createElement('small'); sm.textContent = p.d.role; nm.append(b, sm);
    const k = document.createElement('span'); k.className = 'tw3k'; k.style.background = K.c; k.textContent = K.tag;
    const x = document.createElement('button'); x.className = 'tw3x'; x.type = 'button'; x.textContent = '×'; x.addEventListener('click', closeCard);
    h.append(av, nm, k, x);
    const t = document.createElement('div'); t.className = 'tw3t' + (it.kind === 'mind' ? ' mind' : '');
    if (it.talk) it.talk.forEach(([who, s]) => { const pp = document.createElement('p'); const bb = document.createElement('b'); bb.textContent = who + '：'; pp.append(bb, document.createTextNode(s)); t.appendChild(pp); });
    else { const pp = document.createElement('p'); pp.textContent = it.kind === 'mind' ? '（' + it.text + '）' : '「' + it.text + '」'; t.appendChild(pp); }
    const f = document.createElement('div'); f.className = 'tw3b'; const nx = document.createElement('button'); nx.className = 'tw3n'; nx.type = 'button'; nx.textContent = (txt.next || '再聽一句') + ' ›'; nx.addEventListener('click', () => openCard(p)); f.appendChild(nx);
    { const r = rect(), pp = proj(new Vector3(p.x, p.h * .5, p.z)); card.classList.toggle('r', pp.x - r.left < r.width / 2); }
    card.append(h, t, f); card.classList.add('on'); p.bub.visible = false; setBubble(p);
    hint.classList.remove('on');
  }
  function release(p) { for (const q of [p, p.mate]) if (q) { q.state = 'idle'; q.t = 1.2; q.tgt = null; q.bub.visible = true; setBubble(q); } }
  function closeCard() { card.classList.remove('on'); if (!S.talk) return; const p = S.talk; S.talk = null; release(p); }

  /* ───────── 進店 ───────── */
  function enter(sh) { if (S.ent) return; closeCard(); S.ent = { sh, t0: performance.now(), x0: me.x, z0: me.z, done: 0 }; S.tgt = null; S.joy = null; joyEl.style.display = 'none'; }
  const ctl = {
    get dead() { return S.dead; }, set dead(v) { if (v) dispose(); },
    cv, get ent() { return S.ent; },
    probe() { const P = v => { const f = proj(v); return { x: Math.round(f.x), y: Math.round(f.y) }; };
      return { calls: renderer.info.render.calls, tris: renderer.info.render.triangles, tex: renderer.info.memory.textures, me: { x: +me.x.toFixed(2), z: +me.z.toFixed(2) }, yaw: +S.yaw.toFixed(2), talk: S.talk ? S.talk.d.id : null, ent: S.ent ? S.ent.sh.id : null, cardOn: card.classList.contains('on'), cardText: card.textContent,
        npcs: npcs.filter(p => !p.hidden).map(p => Object.assign({ id: p.d.id, state: p.state, kind: p.kind }, P(new Vector3(p.x, p.h * .5, p.z)))), shops: shops.map(s => Object.assign({ id: s.id }, P(new Vector3(s.dx, 1.5, .5)))) }; },
    resume() { S.ent = null; me.z = 3.2; me.alpha = 1; fade.style.opacity = 0; S.distT = 14; },
    dispose,
  };
  function dispose() {
    if (S.dead) return; S.dead = true; cancelAnimationFrame(S.raf);
    document.removeEventListener('keydown', kd); document.removeEventListener('keyup', ku);
    [hint, joyEl, camEl, fade, card].forEach(e => e.remove());
    scene.traverse(ob => { if (ob.geometry) ob.geometry.dispose(); const ms = ob.material ? (Array.isArray(ob.material) ? ob.material : [ob.material]) : []; ms.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); });
    try { renderer.dispose(); renderer.forceContextLoss(); } catch (_) { }
  }

  /* ───────── 每幀 ───────── */
  let cw = 0, ch = 0, dprv = 0, pr = 1, slow = 0, fpsT = 0, fpsN = 0;
  const fwd = new Vector3(), rgt = new Vector3();
  function resize() {
    const r = cv.getBoundingClientRect(), W = Math.max(1, cv.clientWidth), Hh = Math.max(1, cv.clientHeight), dpr = Math.min(2, window.devicePixelRatio || 1);
    if (W === cw && Hh === ch && dpr === dprv) return;
    cw = W; ch = Hh; dprv = dpr; pr = clamp((r.width * dpr) / W, .5, 2.2);
    renderer.setPixelRatio(pr); renderer.setSize(W, Hh, false); camera.aspect = W / Hh; camera.updateProjectionMatrix();
  }
  function frame(now) {
    if (S.dead) return;
    if (!document.contains(cv)) { dispose(); return; }
    S.raf = requestAnimationFrame(frame);
    const dt = Math.min(.05, (now - S.last) / 1000); S.last = now; S.t += dt; const t = S.t;
    resize();
    /* 效能自適應：連續太慢就降解析度 */
    fpsT += dt; fpsN++; if (fpsT > 1.5) { const avg = fpsT / fpsN; if (avg > .04 && pr > .7) { pr *= .8; renderer.setPixelRatio(pr); renderer.setSize(cw, ch, false); } fpsT = 0; fpsN = 0; }
    /* 鏡頭轉向 */
    const K = S.keys; if (K.q) S.yawT = clamp(S.yawT + dt * 1.6, -1.3, 1.3); if (K.e) S.yawT = clamp(S.yawT - dt * 1.6, -1.3, 1.3); if (S.camV) S.yawT = clamp(S.yawT + S.camV * dt * 1.6, -1.3, 1.3);
    S.yaw += (S.yawT - S.yaw) * Math.min(1, dt * 7); S.dist += (S.distT - S.dist) * Math.min(1, dt * 5);
    const sy = Math.sin(S.yaw), cy = Math.cos(S.yaw);
    fwd.set(-sy, 0, -cy); rgt.set(cy, 0, -sy);
    /* 玩家 */
    me.moving = false;
    if (!S.ent) {
      let vx = 0, vz = 0, mv = 0;
      if (S.joy) { vx = rgt.x * S.joy.x + fwd.x * -S.joy.y; vz = rgt.z * S.joy.x + fwd.z * -S.joy.y; mv = Math.hypot(S.joy.x, S.joy.y); }
      else {
        const ix = (K.arrowright || K.d ? 1 : 0) - (K.arrowleft || K.a ? 1 : 0), iy = (K.arrowup || K.w ? 1 : 0) - (K.arrowdown || K.s ? 1 : 0);
        if (ix || iy) { const l = Math.hypot(ix, iy); vx = (rgt.x * ix + fwd.x * iy) / l; vz = (rgt.z * ix + fwd.z * iy) / l; mv = 1; }
        else if (S.tgt) { const dx = S.tgt.x - me.x, dz = S.tgt.z - me.z, d = Math.hypot(dx, dz); if (d < .12) { if (S.tgt.shop) enter(S.tgt.shop); S.tgt = null; } else { vx = dx / d; vz = dz / d; mv = 1; } }
      }
      if (mv > .05 && !S.ent) {
        const l = Math.hypot(vx, vz) || 1, sp = 4.3 * Math.min(1, mv); me.x += vx / l * sp * dt; me.z += vz / l * sp * dt; me.moving = true; me.ph += dt * 9 * Math.min(1, mv);
        const sd = (vx / l) * rgt.x + (vz / l) * rgt.z; if (Math.abs(sd) > .2) me.face = sd > 0 ? 1 : -1;
        if (S.talk && Math.hypot(S.talk.x - me.x, S.talk.z - me.z) > 9) closeCard();
      }
      me.x = clamp(me.x, BX0, BX1);
      const door = shops.find(s => Math.abs(me.x - s.dx) < 1.05);
      me.z = clamp(me.z, door ? .2 : Z_N, Z_S);
      if (door && me.z <= 1.15 && !S.ent && (S.tgt ? S.tgt.shop === door : vz < -.15)) enter(door);
    }
    /* 靠近門口的提示 */
    { let nd = null; if (!S.ent) for (const s of shops) if (Math.abs(me.x - s.dx) < 2.6 && me.z < 4.6) nd = s;
      if (nd !== S.nearDoor) { S.nearDoor = nd; if (nd) hint.textContent = `${nd.e} ${nd.n}　↑ ${txt.enter || '往上走進店'}`; hint.classList.toggle('on', !!nd && !S.talk); }
      else if (!nd || S.talk) hint.classList.remove('on'); else hint.classList.add('on'); }
    /* NPC */
    for (const p of npcs) {
      if (p.hidden === 'in') { p.t -= dt; if (p.t <= 0) { p.hidden = false; p.state = 'exit'; p.t = 0; p.x = p.door.dx + rnd(-.4, .4); p.z = .4; p.alpha = 0; p.bub.visible = true; } continue; }
      let vx = 0, vz = 0, spd = 0;
      if (p.state === 'talk') { p.face = (me.x - p.x) * rgt.x + (me.z - p.z) * rgt.z > 0 ? 1 : -1; }
      else if (p.state === 'idle') { p.t -= dt; if (p.t <= 0) { p.state = 'walk'; if (p.leader) { } else newTarget(p); } }
      else if (p.state === 'exit') { p.alpha = Math.min(1, p.alpha + dt * 2.5); p.z += dt * 1.6; if (p.z > 1.3) { p.state = 'walk'; newTarget(p); } vz = 0; }
      else if (p.state === 'enter') { p.alpha = Math.max(0, p.alpha - dt * 2.5); p.z -= dt * 1.4; if (p.alpha <= 0) { p.hidden = 'in'; p.t = rnd(5, 12); p.bub.visible = false; } }
      else {
        let tx, tz, sp = p.sp;
        if (p.leader) { const L = p.leader; tx = L.x + p.off.x; tz = L.z + p.off.z; const d = Math.hypot(tx - p.x, tz - p.z); sp = clamp(d * 2.4, 0, p.sp * 1.7); if (d < .15) sp = 0; if (L.state === 'talk') sp = 0; }
        else { tx = p.tgt.x; tz = p.tgt.z; }
        const dx = tx - p.x, dz = tz - p.z, d = Math.hypot(dx, dz);
        if (!p.leader && d < .2) { if (p.linger && !p.mate && Math.random() < .45) { p.state = 'enter'; p.door = p.linger; p.x = p.door.dx + rnd(-.3, .3); } else { p.state = 'idle'; p.t = p.linger ? rnd(3, 7) : rnd(1, 4); } p.linger = null; setBubble(p); }
        else if (sp > 0 && d > .001) { vx = dx / d; vz = dz / d; spd = sp; }
      }
      if (spd > 0) { p.x += vx * spd * dt; p.z += vz * spd * dt; const sd = vx * rgt.x + vz * rgt.z; if (Math.abs(sd) > .15) p.face = sd > 0 ? 1 : -1; p.moving = true; p.ph += dt * (4 + spd * 3.2); } else { p.moving = false; }
      /* 不要疊在一起 */
      if (p.state !== 'enter' && p.state !== 'exit') { for (const q of people) { if (q === p || q.hidden === 'in' || (q.state === 'enter' || q.state === 'exit')) continue; const dx = p.x - q.x, dz = p.z - q.z, d = Math.hypot(dx, dz), mind = (q === me ? .75 : (p.leader === q || q.leader === p) ? .55 : .62); if (d < mind && d > .001) { const push = (mind - d) * (q === me ? 1 : .5); p.x += dx / d * push; p.z += dz / d * push; } } }
      p.x = clamp(p.x, BX0 - 3, BX1 + 3);
      p.alpha = p.state === 'enter' || p.state === 'exit' ? p.alpha : 1;
    }
    /* 車 */
    for (const c of cars) {
      const u = c.userData; let block = false;
      for (const q of people) { if (q.hidden === 'in') continue; const dxp = (q.x - c.position.x) * u.dir; if (dxp > 0 && dxp < 5.5 && Math.abs(q.z - u.lane) < 1.5) { block = true; break; } }
      for (const c2 of cars) { if (c2 === c || c2.userData.lane !== u.lane) continue; const dd = (c2.position.x - c.position.x) * u.dir; if (dd > 0 && dd < 5.5) { block = true; break; } }
      u.v += ((block ? 0 : u.vmax) - u.v) * Math.min(1, dt * (block ? 5 : 1.4));
      c.position.x += u.dir * u.v * dt; if (u.dir > 0 && c.position.x > XMAX + 6) c.position.x = XMIN - 6; if (u.dir < 0 && c.position.x < XMIN - 6) c.position.x = XMAX + 6;
    }
    /* 進店動畫 */
    let enterP = 0;
    if (S.ent) { const E = S.ent, p = Math.min(1, (now - E.t0) / 850), e = p * p * (3 - 2 * p); enterP = e;
      me.x = lerp(E.x0, E.sh.dx, Math.min(1, e * 1.8)); me.z = lerp(E.z0, .1, Math.min(1, e * 1.5)); me.alpha = Math.max(0, 1 - Math.max(0, p - .35) * 2.2); me.moving = true; me.ph += dt * 9;
      S.yawT = 0; S.distT = lerp(14, 3.2, e); fade.style.opacity = Math.max(0, (p - .45) / .55);
      if (p >= 1 && !E.done) { E.done = 1; try { o.onEnter && o.onEnter(E.sh, ctl); } catch (er) { } } }
    /* 鏡頭 */
    const aspect = cw / ch, extra = aspect < 1.45 ? 1.45 / aspect : 1;
    const tgtY = lerp(1.3, 1.6, enterP);
    camT.x += (me.x - camT.x) * Math.min(1, dt * 7); camT.z += (me.z - camT.z) * Math.min(1, dt * 7); camT.y = tgtY;
    const dd = S.dist * extra, ph = .5;
    camPos.set(camT.x + sy * Math.cos(ph) * dd, camT.y + Math.sin(ph) * dd, camT.z + cy * Math.cos(ph) * dd);
    camPos.z = Math.min(camPos.z, 24); camPos.x = clamp(camPos.x, XMIN + 2, XMAX - 2);
    camera.position.copy(camPos); camera.lookAt(camT.x - sy * 2.4, camT.y + 1.5, camT.z - cy * 2.4);
    sky.position.copy(camPos);
    /* 畫面上的東西更新 */
    for (const p of people) {
      const vis = p.hidden !== 'in'; p.grp.visible = vis; p.sh.visible = vis; if (!vis) continue;
      const w = p.w, h = p.h, walk = p.moving ? 1 : 0, s = Math.sin(p.ph), bob = walk ? Math.abs(s) * .07 : 0, tilt = walk ? s * .06 : Math.sin(t * 1.6 + p.ph) * .01, sq = walk ? 1 + Math.cos(p.ph * 2) * .025 : 1 + Math.sin(t * 1.6 + p.ph) * .008;
      p.grp.position.set(p.x, bob + .18, p.z); p.m.rotation.set(0, S.yaw, tilt * p.face); p.m.scale.set(w * p.face * (2 - sq), h * sq, 1);
      p.mat.opacity = p.isMe ? me.alpha : p.alpha; p.sh.position.set(p.x, .2, p.z); p.sh.scale.set(w * .75, w * .42, 1); p.sh.material.opacity = .7 * (p.isMe ? me.alpha : p.alpha);
      if (p.bub) { p.bub.position.set(p.x, h + .62 + Math.sin(t * 2.3 + p.ph) * .07, p.z); const bs = 1 + Math.sin(t * 3 + p.ph) * .04; p.bub.scale.set(.95 * bs, .83 * bs, 1); p.bub.visible = p.hidden === false && p.state !== 'talk' && p.state !== 'enter' && p.state !== 'exit' ? true : false; }
    }
    for (const nr of norens) { nr.g.rotation.x = nr.flag ? 0 : Math.sin(t * 1.8 + nr.ph) * .05; if (nr.flag) nr.g.rotation.y = Math.sin(t * 2.2 + nr.ph) * .22; }
    for (const l of lanterns) l.gl.material.opacity = .45 + .15 * Math.sin(t * 7 + l.ph);
    for (const lh of lampHeads) lh.material.opacity = .55 + .06 * Math.sin(t * 3 + lh.position.x);
    for (const d of doorGlow) { const near = S.nearDoor === d.sh; d.gl.material.opacity = d.sh.own ? (near ? .85 + .15 * Math.sin(t * 6) : .5) : .02; }
    if (blink) blink.material.opacity = Math.sin(t * 2.4) > 0 ? 1 : .1;
    { const cx = camPos.x - me.x, cz = camPos.z - me.z, cl = cx * cx + cz * cz || 1;
      for (const f of fades) { const vx = f.g.position.x - me.x, vz = f.g.position.z - me.z, tt = (vx * cx + vz * cz) / cl, lat = Math.hypot(vx - cx * tt, vz - cz * tt);
        const tgt = tt > .12 && tt < 1.05 && lat < (f.g.isCar ? 3.2 : 2.6) ? .1 : 1; f.a += (tgt - f.a) * Math.min(1, dt * 8);
        for (const m of f.ms) m.opacity = (m.userData.o0 ?? 1) * f.a; for (const sp of f.sps) sp.visible = f.a > .6; } }
    renderer.render(scene, camera);
  }
  S.raf = requestAnimationFrame(frame);
  return ctl;
}
