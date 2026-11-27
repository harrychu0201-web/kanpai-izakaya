/* 我的島（3D 開放地圖）— 像《朋友收集 夢想生活》／動森那樣的明亮小島小鎮。
   中央噴水池廣場、道路、一排排彩色小屋（自己的房子外觀可以設計）、店鋪造景、海邊沙灘碼頭。
   時間跟著現實走：白天、傍晚、夜晚（路燈和窗戶會亮）。
   操作：拖曳轉鏡頭（左右＋上下）、滾輪／兩指縮放、點地面走過去、WASD 走路；點自己家的門進屋（室內是 src.js 的 start）。 */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, AmbientLight, Group, Mesh,
  BoxGeometry, PlaneGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, CircleGeometry, IcosahedronGeometry, TorusGeometry, RingGeometry, ShapeGeometry, Shape,
  MeshBasicMaterial, MeshLambertMaterial, CanvasTexture, TextureLoader, SRGBColorSpace, Sprite, SpriteMaterial, BufferGeometry, Float32BufferAttribute,
  BackSide, DoubleSide, RepeatWrapping, AdditiveBlending, Vector3, Vector2, Raycaster, Plane, PCFShadowMap, ExtrudeGeometry,
  InstancedMesh, Object3D, Matrix4,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { NPCS, KIND } from '../town3d/npcs.js';
import { ctex, rrect, GLOW, FONT } from './models.js';

const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

/* ───────── 房子外觀的選項（存在 data.ex） ───────── */
export const EXO = {
  wall: [['#e8553f', '番茄紅'], ['#f29a38', '橘子'], ['#f6cf4a', '檸檬黃'], ['#7cc06a', '草綠'], ['#6fd1c0', '薄荷'], ['#6fb6ea', '天空藍'], ['#4a72c8', '海藍'], ['#9a6ad6', '葡萄紫'], ['#f29ab8', '櫻花粉'], ['#f4efe2', '奶油白'], ['#8a6a4a', '原木']],
  roof: [['gable', '三角屋頂'], ['flat', '平頂'], ['round', '圓拱'], ['hip', '四角屋頂']],
  roofC: [['#d8452f', '紅'], ['#2f6bb8', '藍'], ['#3f8f4f', '綠'], ['#5a4a6a', '深紫'], ['#3a3a44', '黑瓦'], ['#f2b630', '黃'], ['#f4efe2', '白'], ['#8a5a34', '木']],
  door: [['round', '圓窗門'], ['grid', '格子門'], ['arch', '拱門']],
  doorC: [['#e8553f', '紅'], ['#f4efe2', '白'], ['#2f6bb8', '藍'], ['#3f8f4f', '綠'], ['#f2b630', '黃'], ['#6b3f1f', '木頭'], ['#5a4a6a', '紫']],
  win: [['square', '方窗'], ['round', '圓窗'], ['arch', '拱窗'], ['shoji', '和風格窗']],
  porch: [[1, '木平台'], [0, '不要']],
  fence: [['none', '不要'], ['white', '白籬笆'], ['hedge', '矮樹叢'], ['wood', '竹籬']],
  garden: [['flower', '花圃'], ['pots', '盆栽'], ['tree', '小樹'], ['none', '不要']],
};
export const EXO_NAMES = { wall: '牆壁', roof: '屋頂', roofC: '屋頂顏色', door: '門', doorC: '門的顏色', win: '窗戶', porch: '門前平台', fence: '圍籬', garden: '庭院' };
export const defaultEx = () => ({ wall: '#f29ab8', roof: 'gable', roofC: '#d8452f', door: 'round', doorC: '#f4efe2', win: 'square', porch: 1, fence: 'white', garden: 'flower' });

/* ───────── 島的配置 ───────── */
const IX = 46, IZ = 34;                 // 草地半寬、半深
const SAND = 7;                         // 草地外面的沙灘寬
const ROADS = [                         // [x1,z1,x2,z2]，寬 4
  [-36, 0, 36, 0], [0, -28, 0, 16], [-36, -18, 36, -18], [-36, 16, 36, 16], [-36, -18, -36, 16], [36, -18, 36, 16],
];
const RW2 = 2;                          // 路半寬
const PLAZA_R = 8.5;
const HOUSES = [                        // 住家：x, z, 朝向（0 朝 +z、2 朝 -z）, 誰
  { x: -15, z: -7.6, f: 0, own: 1 }, { x: -26, z: -7.6, f: 0, npc: 'chiyo' }, { x: 15, z: -7.6, f: 0, npc: 'hinata' }, { x: 26, z: -7.6, f: 0, npc: 'taizo' },
  { x: -15, z: 7.6, f: 2, npc: 'misaki' }, { x: -26, z: 7.6, f: 2, npc: 'kazuo' }, { x: 15, z: 7.6, f: 2, npc: 'riko' }, { x: 26, z: 7.6, f: 2, npc: 'ren' },
];
const SHOPS = [{ x: -22, z: -24, k: 'izakaya', n: '居酒屋' }, { x: -8, z: -24, k: 'ramen', n: '拉麵屋台' }, { x: 10, z: -24, k: 'sushi', n: '海風壽司' }, { x: 24, z: -24, k: 'bar', n: '月影酒吧' }];

const CSS = `
.i3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.home3 .twtop{background:none}
.i3tb{flex:none;min-width:44px;min-height:44px;border:0;background:transparent;color:#fff3d6;font-size:28px;line-height:1;padding:0 4px;border-radius:50%;text-shadow:0 2px 4px #000a;cursor:pointer}
.i3tb.on{background:#fff3d633}
.i3info{position:absolute;left:max(12px,env(safe-area-inset-left));top:92px;background:#ffffffe6;color:#3a2a1a;border:3px solid #3a2a1a;border-radius:16px;padding:6px 14px;font-size:15px;line-height:1.35;z-index:3;pointer-events:none;box-shadow:0 4px 0 #0003}
.i3info b{font-size:19px;display:block}
.i3pan{position:absolute;left:0;right:0;bottom:0;background:#fff8eaf2;border-top:4px solid #3a2a1a;z-index:5;padding:6px max(10px,env(safe-area-inset-right)) 10px max(10px,env(safe-area-inset-left));display:none;color:#3a2a1a}
.i3pan.on{display:block}
.i3row{display:flex;gap:8px;overflow-x:auto;padding:4px 2px 2px;scrollbar-width:thin}
.i3opt{flex:none;min-width:76px;min-height:64px;border:3px solid #3a2a1a;border-radius:14px;background:#fff;color:#3a2a1a;font-weight:800;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:4px 8px}
.i3opt i{display:block;width:30px;height:22px;border-radius:7px;border:2px solid #0003}
.i3opt.on{background:#ffd27a;outline:3px solid #ff9a2a}
.i3joy{position:absolute;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;background:#ffffff26;border:3px solid #ffffffaa;pointer-events:none;z-index:2;display:none}
.i3joy i{position:absolute;left:50%;top:50%;width:50px;height:50px;margin:-25px 0 0 -25px;border-radius:50%;background:#ffffffe0;box-shadow:0 2px 6px #0004}
.i3joy.rest{display:block;opacity:.55}.i3joy.on{display:block;opacity:1}
.i3door{position:absolute;transform:translate(-50%,-100%);z-index:4;border:3px solid #3a2a1a;border-radius:999px;background:#fff8ea;color:#3a2a1a;font-weight:900;font-size:17px;min-height:50px;padding:0 18px;box-shadow:0 4px 0 #0004;display:none;white-space:nowrap;animation:i3bob 1.2s ease-in-out infinite}
.i3door.on{display:block}.i3door.off{background:#e8e2d4;color:#7a6a5a}
.i3door:after{content:'';position:absolute;left:50%;bottom:-11px;margin-left:-8px;border:8px solid transparent;border-top-color:#3a2a1a}
@keyframes i3bob{0%,100%{margin-top:0}50%{margin-top:-6px}}
@media (max-height:520px){.i3door{font-size:15px;min-height:46px;padding:0 14px}.i3hud{top:64px;gap:8px}.i3info{top:64px;font-size:12px;padding:4px 10px}.i3info b{font-size:15px}.i3opt{min-width:64px;min-height:50px;font-size:11.5px;border-width:2px}.i3opt i{width:24px;height:16px}}
`;

/* 第一人稱偏好：在島上、屋內之間切換場景時保留（同一次開遊戲內有效） */
export const FPPREF = { v: false };
export function island(o) {
  const cv = o.cv, root = o.root, cb = o.cb || {}, own = !!o.own;
  const D = o.data || {}; D.ex = Object.assign(defaultEx(), D.ex || {});
  if (!document.getElementById('i3css')) { const s = document.createElement('style'); s.id = 'i3css'; s.textContent = CSS; document.head.appendChild(s); }
  if (!document.getElementById('h3css') && o.css) { const s = document.createElement('style'); s.id = 'h3css'; s.textContent = o.css; document.head.appendChild(s); }
  const mobile = Math.min(screen.width, screen.height) < 600;
  const renderer = new WebGLRenderer({ canvas: cv, antialias: (window.devicePixelRatio || 1) < 2, powerPreference: 'high-performance', preserveDrawingBuffer: !!o.test });
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap; renderer.shadowMap.autoUpdate = false;
  const scene = new Scene(); const fog = new Fog(0xbfe6ff, 60, 170); scene.fog = fog;
  const camera = new PerspectiveCamera(38, 2, .3, 600);
  const TL = new TextureLoader(); const loadTex = (url, f) => TL.load(url, t => { t.colorSpace = SRGBColorSpace; f && f(t); });
  const MC = {}, MCF = {}; const lamF = c => MCF[c] || (MCF[c] = new MeshLambertMaterial({ color: c, flatShading: true })); const lam = (c, op) => { if (op) return new MeshLambertMaterial(Object.assign({ color: c }, op)); return MC[c] || (MC[c] = new MeshLambertMaterial({ color: c })); };
  const bas = (c, op) => new MeshBasicMaterial(Object.assign({ color: c }, op || {}));
  const rep = (t, rx, ry) => { const c = t.clone(); c.wrapS = c.wrapT = RepeatWrapping; c.repeat.set(rx, ry); c.needsUpdate = true; return c; };
  const casters = [];
  function box(w, h, d, m, x, y, z, par, cast) { const b = new Mesh(new BoxGeometry(w, h, d), typeof m === 'string' ? lam(m) : m); b.position.set(x, y, z); (par || scene).add(b); if (cast !== false) { b.castShadow = true; } b.receiveShadow = true; return b; }
  function cyl(rt, rb, h, m, x, y, z, par, seg) { const b = new Mesh(new CylinderGeometry(rt, rb, h, seg || 14), typeof m === 'string' ? lam(m) : m); b.position.set(x, y, z); (par || scene).add(b); b.castShadow = true; b.receiveShadow = true; return b; }
  function sph(r, m, x, y, z, par, sx, sy, sz, flat) { const b = new Mesh(flat ? new IcosahedronGeometry(r, 1) : new SphereGeometry(r, 16, 12), typeof m === 'string' ? (flat ? lamF(m) : lam(m)) : m); b.position.set(x, y, z); if (sx) b.scale.set(sx, sy, sz); (par || scene).add(b); b.castShadow = true; return b; }

  /* 效能（2026/11/26 島上很卡）：島上原本有一千多個小零件，每個都要單獨畫一次（手機一幀畫一千多次就會卡）。
     不會動的零件依材質合併成一個網格：同一棟房子內合併；路燈、樹幹、長椅等依材質＋區塊（24 格）合併，畫面外的區塊照樣不畫。
     會動的（門、噴水池的水、船、雲、會搖的樹冠、草花）和頂點上色的不合併。 */
  const _m4 = new Matrix4(), _inv = new Matrix4();
  function collectStatic(obj, skip, out) { if (skip.has(obj)) return; if (obj.isMesh && !obj.isInstancedMesh && !Array.isArray(obj.material) && !obj.geometry.attributes.color && !obj.userData.keep) out.push(obj); for (const c of obj.children) collectStatic(c, skip, out); }
  function mergeStatic(root, meshes, keyFn) {
    root.updateMatrixWorld(true); _inv.copy(root.matrixWorld).invert();
    const buckets = new Map();
    for (const m of meshes) { _m4.multiplyMatrices(_inv, m.matrixWorld); if (_m4.determinant() <= 0) continue; const k = keyFn(m); let b = buckets.get(k); if (!b) buckets.set(k, b = []); b.push(m); }
    for (const list of buckets.values()) {
      if (list.length < 2) continue;
      let n = 0; const gs = list.map(m => { const g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone(); if (!g.attributes.normal) g.computeVertexNormals(); _m4.multiplyMatrices(_inv, m.matrixWorld); g.applyMatrix4(_m4); n += g.attributes.position.count; return g; });
      const P = new Float32Array(n * 3), N = new Float32Array(n * 3), U = new Float32Array(n * 2); let o3 = 0, o2 = 0;
      for (const g of gs) { const c = g.attributes.position.count; P.set(g.attributes.position.array, o3); N.set(g.attributes.normal.array, o3); if (g.attributes.uv) U.set(g.attributes.uv.array, o2); o3 += c * 3; o2 += c * 2; g.dispose(); }
      const geo = new BufferGeometry(); geo.setAttribute('position', new Float32BufferAttribute(P, 3)); geo.setAttribute('normal', new Float32BufferAttribute(N, 3)); geo.setAttribute('uv', new Float32BufferAttribute(U, 2));
      const f = list[0], mm = new Mesh(geo, f.material); mm.castShadow = f.castShadow; mm.receiveShadow = f.receiveShadow; mm.userData = f.userData; mm.renderOrder = f.renderOrder; root.add(mm);
      for (const m of list) m.parent.remove(m);
    }
  }
  const matKey = m => m.material.uuid + (m.castShadow ? 'c' : '') + (m.receiveShadow ? 'r' : '');
  const lamps = [];   // 夜晚會亮的光暈
  function glowS(x, y, z, s, par, col) { const sp = new Sprite(new SpriteMaterial({ map: GLOW, blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: 0 })); if (col) sp.material.color.set(col); sp.scale.set(s, s, 1); sp.position.set(x, y, z); (par || scene).add(sp); lamps.push(sp); return sp; }
  const nightMats = [];  // 夜晚變亮的窗戶材質（MeshBasic，白天顏色暗一點）
  function winMat(day, night) { const m = new MeshBasicMaterial({ color: day }); m.userData.day = new Color(day); m.userData.night = new Color(night || '#ffd98a'); nightMats.push(m); return m; }

  /* ───────── 天空 ───────── */
  const skyG = new SphereGeometry(300, 24, 16);
  const skyCol = new Float32Array(skyG.attributes.position.count * 3); skyG.setAttribute('color', new Float32BufferAttribute(skyCol, 3));
  const sky = new Mesh(skyG, new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false })); sky.renderOrder = -10; scene.add(sky);
  const starsG = new BufferGeometry(); { const p = [], r = mulberry(9); for (let i = 0; i < 400; i++) { const a = r() * Math.PI * 2, e = .15 + r() * 1.3; p.push(Math.cos(a) * Math.cos(e) * 280, Math.sin(e) * 280, Math.sin(a) * Math.cos(e) * 280); } starsG.setAttribute('position', new Float32BufferAttribute(p, 3)); }
  const sunT = ctex(128, 128, x => { const g = x.createRadialGradient(64, 64, 10, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,240,1)'); g.addColorStop(.35, 'rgba(255,240,200,.9)'); g.addColorStop(.4, 'rgba(255,230,180,.3)'); g.addColorStop(1, 'rgba(255,230,180,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); });
  const sunSp = new Sprite(new SpriteMaterial({ map: sunT, fog: false, depthWrite: false, transparent: true })); sunSp.scale.set(50, 50, 1); sky.add(sunSp);
  const moonT = ctex(128, 128, x => { const g = x.createRadialGradient(64, 64, 18, 64, 64, 64); g.addColorStop(0, 'rgba(255,248,220,1)'); g.addColorStop(.42, 'rgba(255,244,210,1)'); g.addColorStop(.46, 'rgba(255,240,200,.25)'); g.addColorStop(1, 'rgba(255,240,200,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); });
  const moonSp = new Sprite(new SpriteMaterial({ map: moonT, fog: false, depthWrite: false, transparent: true })); moonSp.scale.set(36, 36, 1); sky.add(moonSp);
  const starSprites = new Group(); sky.add(starSprites);
  { const st = ctex(16, 16, x => { x.fillStyle = '#fff8e0'; x.beginPath(); x.arc(8, 8, 3, 0, 7); x.fill(); }); const p = starsG.attributes.position; const sm = new SpriteMaterial({ map: st, fog: false, depthWrite: false, transparent: true, opacity: 0 }); for (let i = 0; i < p.count; i += 2) { const s = new Sprite(sm); s.position.set(p.getX(i), p.getY(i), p.getZ(i)); s.scale.set(1.4, 1.4, 1); starSprites.add(s); } starSprites.userData.m = sm; }
  /* 雲 */
  const clouds = new Group(); scene.add(clouds);
  { const r = mulberry(4); for (let i = 0; i < 14; i++) { const c = new Group(); const n = 3 + (r() * 3 | 0); for (let j = 0; j < n; j++) { const m = new Mesh(new IcosahedronGeometry(3 + r() * 3, 1), new MeshLambertMaterial({ color: '#ffffff', flatShading: true, transparent: true, opacity: .95, fog: false })); m.position.set(j * 4 - n * 2, r() * 1.5, r() * 2); m.scale.y = .6; c.add(m); } const a = r() * Math.PI * 2, R = 110 + r() * 60; c.position.set(Math.cos(a) * R, 40 + r() * 25, Math.sin(a) * R); c.userData.a = a; c.userData.R = R; clouds.add(c); mergeStatic(c, c.children.slice(), () => 'c'); } }
  const hemi = new HemisphereLight(0xfff2dc, 0x7a9a5a, 1.4); scene.add(hemi);
  const amb = new AmbientLight(0xffffff, .25); scene.add(amb);
  const sun = new DirectionalLight(0xfff2dc, 2.2); sun.castShadow = true; const SS = mobile ? 1024 : 2048; sun.shadow.mapSize.set(SS, SS);
  Object.assign(sun.shadow.camera, { left: -34, right: 34, top: 34, bottom: -34, near: 1, far: 160 }); sun.shadow.bias = -.0008; sun.shadow.normalBias = .03; scene.add(sun); scene.add(sun.target);

  /* ───────── 海、沙灘、草地 ───────── */
  const waveT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#3fb7d8'; x.fillRect(0, 0, w, h); const r = mulberry(2); for (let i = 0; i < 90; i++) { x.strokeStyle = `rgba(255,255,255,${.12 + r() * .25})`; x.lineWidth = 2 + r() * 2; const px = r() * w, py = r() * h, L = 10 + r() * 24; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + L / 2, py - 4, px + L, py); x.stroke(); } });
  waveT.wrapS = waveT.wrapT = RepeatWrapping; waveT.repeat.set(40, 40);
  const seaM = new MeshLambertMaterial({ map: waveT, color: '#ffffff' });
  const sea = new Mesh(new PlaneGeometry(900, 900), seaM); sea.rotation.x = -Math.PI / 2; sea.position.y = -.45; sea.receiveShadow = true; scene.add(sea);
  function rounded(w, h, r) { const s = new Shape(); s.moveTo(-w + r, -h); s.lineTo(w - r, -h); s.quadraticCurveTo(w, -h, w, -h + r); s.lineTo(w, h - r); s.quadraticCurveTo(w, h, w - r, h); s.lineTo(-w + r, h); s.quadraticCurveTo(-w, h, -w, h - r); s.lineTo(-w, -h + r); s.quadraticCurveTo(-w, -h, -w + r, -h); return s; }
  const sandT = ctex(128, 128, (x, w, h) => { x.fillStyle = '#f3dfa8'; x.fillRect(0, 0, w, h); const r = mulberry(7); for (let i = 0; i < 300; i++) { x.fillStyle = r() < .5 ? 'rgba(200,170,110,.35)' : 'rgba(255,250,230,.5)'; x.fillRect(r() * w, r() * h, 2, 2); } });
  { const g = new ExtrudeGeometry(rounded(IX + SAND, IZ + SAND, 16), { depth: 1, bevelEnabled: true, bevelSize: 2.5, bevelThickness: .8, bevelSegments: 2, curveSegments: 10 }); g.rotateX(Math.PI / 2); const m = new Mesh(g, new MeshLambertMaterial({ map: rep(sandT, .4, .4) })); m.position.y = -.83; m.receiveShadow = true; scene.add(m);
    const shore = new Mesh(new ShapeGeometry(rounded(IX + SAND + 3.4, IZ + SAND + 3.4, 18), 12), new MeshBasicMaterial({ color: '#bdf0f6', transparent: true, opacity: .55, depthWrite: false })); shore.rotation.x = -Math.PI / 2; shore.position.y = -.38; scene.add(shore); }
  /* 草地：大塊深淺色斑＋細草紋（可無縫重複），看起來才不會是一整片平平的綠 */
  const grassT = ctex(512, 512, (x, w, h) => { x.fillStyle = '#7cc65a'; x.fillRect(0, 0, w, h); const r = mulberry(5);
    const blob = (px, py, rad, col) => { for (const ox of [-w, 0, w]) for (const oy of [-h, 0, h]) { const g = x.createRadialGradient(px + ox, py + oy, 0, px + ox, py + oy, rad); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(px + ox - rad, py + oy - rad, rad * 2, rad * 2); } };
    for (let i = 0; i < 26; i++) blob(r() * w, r() * h, 50 + r() * 90, r() < .5 ? 'rgba(70,150,50,.22)' : 'rgba(170,220,110,.25)');
    for (let i = 0; i < 4200; i++) { const px = r() * w, py = r() * h, v = r(); x.fillStyle = v < .45 ? 'rgba(52,128,40,.30)' : v < .9 ? 'rgba(178,228,120,.32)' : 'rgba(255,250,210,.35)'; x.save(); x.translate(px, py); x.rotate((r() - .5) * .8); x.fillRect(-1, -4, 2, 8); x.restore(); }
    for (let i = 0; i < 70; i++) { const px = r() * w, py = r() * h; x.fillStyle = 'rgba(60,140,50,.35)'; for (let k = 0; k < 3; k++) { x.beginPath(); x.arc(px + Math.cos(k * 2.1) * 3, py + Math.sin(k * 2.1) * 3, 3, 0, 7); x.fill(); } } });
  { const g = new ShapeGeometry(rounded(IX, 27, 12), 10); g.rotateX(-Math.PI / 2); g.translate(0, 0, -7); const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 14, uv.getY(i) / 14); const m = new Mesh(g, new MeshLambertMaterial({ map: rep(grassT, 1, 1) })); m.position.y = .02; m.receiveShadow = true; scene.add(m); }
  /* 路 */
  /* 路：暖色石板（圓角石塊錯開排，像動森的石板路） */
  const roadT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#c9b796'; x.fillRect(0, 0, w, h); const r = mulberry(8);
    for (let j = 0; j < 4; j++) for (let i = -1; i < 4; i++) { const v = (r() * 18 | 0) - 9, sx = i * 64 + (j % 2 ? 32 : 0) + 3, sy = j * 64 + 3; x.fillStyle = `rgb(${236 + v},${222 + v},${196 + v})`; rrect(x, sx, sy, 58, 58, 14); x.fill(); x.fillStyle = 'rgba(255,255,255,.18)'; rrect(x, sx + 4, sy + 4, 50, 22, 10); x.fill(); x.fillStyle = 'rgba(120,90,50,.08)'; rrect(x, sx + 4, sy + 36, 50, 18, 8); x.fill(); } });
  const curbM = lam('#efe2c6');
  for (const [x1, z1, x2, z2] of ROADS) {
    const L = Math.hypot(x2 - x1, z2 - z1) + RW2 * 2, cx = (x1 + x2) / 2, cz = (z1 + z2) / 2, hor = z1 === z2;
    const m = new Mesh(new PlaneGeometry(hor ? L : RW2 * 2, hor ? RW2 * 2 : L), new MeshLambertMaterial({ map: rep(roadT, (hor ? L : 4) / 2, (hor ? 4 : L) / 2) })); m.rotation.x = -Math.PI / 2; m.position.set(cx, .04, cz); m.receiveShadow = true; scene.add(m);
    for (const s of [-1, 1]) { const c = new Mesh(new BoxGeometry(hor ? L : .25, .12, hor ? .25 : L), curbM); c.position.set(cx + (hor ? 0 : s * (RW2 + .1)), .06, cz + (hor ? s * (RW2 + .1) : 0)); c.receiveShadow = true; scene.add(c); }
  }
  /* 廣場：彩色地磚、噴水池、花壇、長椅、告示板 */
  const plazaT = ctex(512, 512, (x, w, h) => { x.fillStyle = '#e9b98a'; x.fillRect(0, 0, w, h); x.translate(256, 256); for (let r = 250; r > 40; r -= 26) { x.strokeStyle = r % 52 ? '#f4d2a6' : '#d99a6a'; x.lineWidth = 10; x.beginPath(); x.arc(0, 0, r, 0, 7); x.stroke(); } for (let i = 0; i < 16; i++) { x.rotate(Math.PI / 8); x.strokeStyle = '#f7e2c0'; x.lineWidth = 4; x.beginPath(); x.moveTo(50, 0); x.lineTo(250, 0); x.stroke(); } });
  { const m = new Mesh(new CircleGeometry(PLAZA_R, 48), new MeshLambertMaterial({ map: plazaT })); m.rotation.x = -Math.PI / 2; m.position.y = .06; m.receiveShadow = true; scene.add(m); const ring = new Mesh(new RingGeometry(PLAZA_R, PLAZA_R + .35, 48), curbM); ring.rotation.x = -Math.PI / 2; ring.position.y = .08; scene.add(ring); }
  const water = [];
  { const f = new Group(); scene.add(f);
    const st = lam('#f4f1ea'); cyl(3.4, 3.6, .7, st, 0, .35, 0, f, 32); const wt = ctex(128, 128, (x, w, h) => { x.fillStyle = '#5ec8e8'; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 3; for (let i = 0; i < 8; i++) { x.beginPath(); x.arc(64, 64, 8 + i * 8, 0, 7); x.stroke(); } });
    const wm = new Mesh(new CircleGeometry(3.05, 32), new MeshBasicMaterial({ map: wt })); wm.rotation.x = -Math.PI / 2; wm.position.y = .72; f.add(wm); water.push(wm);
    cyl(.5, .7, 1.4, st, 0, 1.3, 0, f, 16); cyl(1.4, 1.2, .25, st, 0, 2.05, 0, f, 24); cyl(.25, .35, .9, st, 0, 2.6, 0, f, 12); cyl(.7, .6, .18, st, 0, 3.1, 0, f, 20);
    const jetM = new MeshBasicMaterial({ color: '#c8f0ff', transparent: true, opacity: .75 });
    const jet = new Mesh(new CylinderGeometry(.12, .2, 1.2, 10, 1, true), jetM); jet.position.y = 3.7; f.add(jet); water.push(jet);
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; const arc = new Mesh(new TorusGeometry(.9, .06, 6, 12, Math.PI * .6), jetM); arc.position.set(Math.cos(a) * .9, 2.2, Math.sin(a) * .9); arc.rotation.set(0, -a, Math.PI * .2); f.add(arc); }
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + .26; flowerBed(Math.cos(a) * 6.6, Math.sin(a) * 6.6, a); }
  }
  function flowerBed(x, z, a) { const g = new Group(); g.position.set(x, 0, z); g.rotation.y = -a; scene.add(g); box(1.6, .45, 1.0, '#c8704a', 0, .22, 0, g); box(1.45, .1, .85, '#5a3a24', 0, .45, 0, g, false); const cs = ['#ff5a7a', '#ffd34a', '#ffffff', '#a07af0', '#ff8a3a']; for (let i = 0; i < 8; i++) { sph(.13, cs[i % 5], -.55 + (i % 4) * .36, .62, -.2 + Math.floor(i / 4) * .4, g); sph(.1, '#4a9a3a', -.55 + (i % 4) * .36, .52, -.2 + Math.floor(i / 4) * .4, g); } }

  /* ───────── 房子 ───────── */
  function houseTex(col) { return ctex(128, 128, (x, w, h) => { x.fillStyle = col; x.fillRect(0, 0, w, h); for (let j = 0; j < h; j += 16) { x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, j, w, 2); x.fillStyle = 'rgba(255,255,255,.08)'; x.fillRect(0, j + 2, w, 2); } }); }
  function signTex(s) { return ctex(512, 128, (x, w, h) => { x.fillStyle = '#fff8ea'; x.strokeStyle = '#3a2a1a'; x.lineWidth = 10; rrect(x, 6, 6, w - 12, h - 12, 24); x.fill(); x.stroke(); x.fillStyle = '#3a2a1a'; x.textAlign = 'center'; x.textBaseline = 'middle'; let fs = 64; x.font = `900 ${fs}px ${FONT}`; while (x.measureText(s).width > w - 60 && fs > 20) { fs -= 2; x.font = `900 ${fs}px ${FONT}`; } x.fillText(s, w / 2, h / 2 + 3); }); }
  /* 建一棟房子：原點在地塊中心，正面朝 +z。body 5.4 寬 × 4.2 深 × 3 高，門前平台 1.6 */
  const HW = 5.4, HD = 4.2, HH = 3;
  function buildHouse(ex, name) {
    const g = new Group(); const W = ex.wall, wallM = new MeshLambertMaterial({ map: houseTex(W) });
    const bz = -.6;
    box(HW + .3, .35, HD + .3, '#e8e2d4', 0, .17, bz, g);                                  // 地基
    const body = box(HW, HH, HD, wallM, 0, .35 + HH / 2, bz, g);
    for (const sx of [-1, 1]) box(.22, HH, .22, '#f4efe2', sx * HW / 2, .35 + HH / 2, bz + HD / 2, g);   // 白色轉角柱
    box(HW + .1, .18, .18, '#f4efe2', 0, .35 + HH, bz + HD / 2 + .02, g);
    /* 屋頂 */
    const rc = lam(ex.roofC), top = .35 + HH;
    if (ex.roof === 'flat') { box(HW + .6, .35, HD + .6, rc, 0, top + .17, bz, g); box(HW + .2, .3, HD + .2, '#f4efe2', 0, top + .5, bz, g); box(1, .7, 1, '#9a9a9a', 1.4, top + .9, bz - .6, g); }
    else if (ex.roof === 'round') { const rr = new Mesh(new CylinderGeometry(HD / 2 + .45, HD / 2 + .45, HW + .5, 24, 1, false, 0, Math.PI), rc); rr.rotation.set(0, 0, Math.PI / 2); rr.scale.set(.72, 1, 1); rr.position.set(0, top, bz); rr.castShadow = true; g.add(rr); for (const sx of [-1, 1]) { const cap = new Mesh(new CircleGeometry(HD / 2 + .45, 24, 0, Math.PI), wallM); cap.rotation.y = sx * Math.PI / 2; cap.scale.set(1, .72, 1); cap.position.set(sx * (HW / 2 + .251), top, bz); g.add(cap); } }
    else if (ex.roof === 'hip') { const a = (HW + .9) / 2, b = (HD + .9) / 2, rh = 1.7, rl = Math.max(.3, a - b), P = (x, y, z) => [x, y, z];
      const c1 = P(-a, 0, b), c2 = P(a, 0, b), c3 = P(a, 0, -b), c4 = P(-a, 0, -b), r1 = P(-rl, rh, 0), r2 = P(rl, rh, 0);
      const tri = [c1, c2, r2, c1, r2, r1, /* 前 */ c3, c4, r1, c3, r1, r2, /* 後 */ c2, c3, r2, /* 右 */ c4, c1, r1 /* 左 */];
      const hg = new BufferGeometry(); hg.setAttribute('position', new Float32BufferAttribute(tri.flat(), 3)); hg.computeVertexNormals();
      const p = new Mesh(hg, rc.clone()); p.material.side = DoubleSide; p.position.set(0, top - .05, bz); p.castShadow = true; g.add(p);
      box(2 * a, .12, 2 * b, '#f4efe2', 0, top - .02, bz, g).castShadow = false; }
    else { const sh = new Shape(); const hw = HD / 2 + .5; sh.moveTo(-hw, 0); sh.lineTo(0, 1.9); sh.lineTo(hw, 0); sh.lineTo(-hw, 0); const eg = new ExtrudeGeometry(sh, { depth: HW + .6, bevelEnabled: false }); eg.translate(0, 0, -(HW + .6) / 2); const rm = new Mesh(eg, [rc, rc]); rm.rotation.y = Math.PI / 2; rm.position.set(0, top - .05, bz); rm.castShadow = true; g.add(rm);
      const gsh = new Shape(); gsh.moveTo(-HD / 2, 0); gsh.lineTo(0, 1.55); gsh.lineTo(HD / 2, 0); const gm = new Mesh(new ShapeGeometry(gsh), wallM); gm.rotation.y = Math.PI / 2; for (const sx of [-1, 1]) { const q = gm.clone(); q.rotation.y = sx * Math.PI / 2; q.position.set(sx * (HW / 2 + .001), top, bz); g.add(q); }
      const rw = new Mesh(new CircleGeometry(.35, 20), winMat('#bfe6ff')); rw.position.set(0, top + .5, bz + HD / 2 + .02); g.add(rw); }
    /* 門 */
    const dz = bz + HD / 2 + .02, dc = lam(ex.doorC);
    box(1.35, 2.25, .12, '#f4efe2', 0, .35 + 1.12, dz, g);
    const dg = new Group(); { const dark = new Mesh(new PlaneGeometry(1.1, 2.3), new MeshBasicMaterial({ color: '#2a1a10' })); dark.position.set(0, .35 + 1.15, dz + .005); g.add(dark); const warm = new Mesh(new PlaneGeometry(1.0, 2.1), winMat('#5a3a24', '#ffcf7a')); warm.position.set(0, .35 + 1.07, dz + .007); g.add(warm); }
    if (ex.door === 'arch') { box(1.1, 1.75, .14, dc, 0, .35 + .88, dz + .02, dg); const aa = new Mesh(new CircleGeometry(.55, 20, 0, Math.PI), dc); aa.position.set(0, .35 + 1.75, dz + .1); dg.add(aa); }
    else box(1.1, 2.05, .14, dc, 0, .35 + 1.02, dz + .02, dg);
    if (ex.door === 'round') { const pw = new Mesh(new CircleGeometry(.26, 20), winMat('#bfe6ff')); pw.position.set(0, .35 + 1.5, dz + .1); dg.add(pw); const rg = new Mesh(new TorusGeometry(.28, .05, 8, 20), lam('#c8c8d0')); rg.position.set(0, .35 + 1.5, dz + .1); dg.add(rg); }
    else if (ex.door === 'grid') { for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { const q = new Mesh(new PlaneGeometry(.38, .4), winMat('#e8f4ff', '#ffe0a0')); q.position.set(-.21 + j * .42, .35 + 1.15 + i * .45, dz + .1); dg.add(q); } }
    sph(.06, '#e9c34a', .4, .35 + 1.0, dz + .12, dg);
    { const dp = new Group(); dp.position.set(-.55, 0, dz + .02); g.add(dp); dg.position.set(.55, 0, -(dz + .02)); dp.add(dg); g.userData.doorPivot = dp; g.userData.doorZ = dz; }
    const doorLamp = sph(.16, bas('#fff4d0'), .95, .35 + 2.3, dz + .2, g); glowS(.95, .35 + 2.3, dz + .3, 2.2, g);
    /* 窗 */
    for (const sx of [-1.75, 1.75]) {
      const y = .35 + 1.7;
      if (ex.win === 'round') { const w = new Mesh(new CircleGeometry(.5, 24), winMat('#bfe6ff')); w.position.set(sx, y, dz + .01); g.add(w); const t = new Mesh(new TorusGeometry(.52, .08, 8, 24), lam('#f4efe2')); t.position.set(sx, y, dz + .02); g.add(t); }
      else if (ex.win === 'arch') { const w = new Mesh(new PlaneGeometry(.9, .8), winMat('#bfe6ff')); w.position.set(sx, y - .15, dz + .01); g.add(w); const a = new Mesh(new CircleGeometry(.45, 16, 0, Math.PI), winMat('#bfe6ff')); a.position.set(sx, y + .25, dz + .01); g.add(a); box(1.05, .1, .14, '#f4efe2', sx, y - .58, dz + .05, g); }
      else if (ex.win === 'shoji') { const w = new Mesh(new PlaneGeometry(1.1, 1), winMat('#fff4dc', '#ffcf7a')); w.position.set(sx, y, dz + .01); g.add(w); for (let i = -1; i <= 1; i++) { box(.04, 1, .04, '#6b3f1f', sx + i * .36, y, dz + .04, g, false); box(1.1, .04, .04, '#6b3f1f', sx, y + i * .33, dz + .04, g, false); } }
      else { const w = new Mesh(new PlaneGeometry(1.05, .95), winMat('#bfe6ff')); w.position.set(sx, y, dz + .01); g.add(w); box(1.2, .1, .1, '#f4efe2', sx, y + .5, dz + .04, g, false); box(1.2, .1, .1, '#f4efe2', sx, y - .5, dz + .04, g, false); box(.1, 1.05, .1, '#f4efe2', sx - .55, y, dz + .04, g, false); box(.1, 1.05, .1, '#f4efe2', sx + .55, y, dz + .04, g, false); box(.06, 1, .06, '#f4efe2', sx, y, dz + .04, g, false); box(1.3, .14, .32, '#f4efe2', sx, y - .6, dz + .14, g); }
      /* 窗台花箱 */
      if (ex.garden !== 'none') { box(1.0, .2, .25, '#8a5a34', sx, y - .78, dz + .2, g); for (let i = 0; i < 4; i++) sph(.09, ['#ff5a7a', '#ffd34a', '#ffffff', '#ff8a3a'][i], sx - .36 + i * .24, y - .62, dz + .2, g); }
    }
    /* 門前平台 */
    if (+ex.porch) { box(HW + .6, .3, 1.7, '#c8935a', 0, .15, dz + .85, g); for (let i = 0; i < 9; i++) box(.02, .02, 1.7, '#9a6a3a', -HW / 2 - .1 + i * .7, .31, dz + .85, g, false); box(1.6, .15, .5, '#c8935a', 0, .075, dz + 1.95, g); for (const sx of [-1, 1]) { box(.12, .9, .12, '#f4efe2', sx * (HW / 2 + .15), .75, dz + 1.62, g); box(.12, .9, .12, '#f4efe2', sx * 1.0, .75, dz + 1.62, g); box(HW / 2 - .8, .08, .08, '#f4efe2', sx * (HW / 4 + .58), 1.1, dz + 1.62, g); } }
    /* 信箱 */
    { const mb = new Group(); mb.position.set(HW / 2 + .2, 0, dz + 2.4); g.add(mb); box(.1, 1, .1, '#6b3f1f', 0, .5, 0, mb); box(.4, .32, .55, ex.doorC === '#f4efe2' ? '#e8553f' : ex.doorC, 0, 1.12, 0, mb); box(.05, .25, .05, '#e8553f', .22, 1.3, .1, mb); }
    /* 圍籬 */
    const fz = dz + 2.9, fx = HW / 2 + 1.1;
    if (ex.fence === 'white' || ex.fence === 'wood') { const fc = ex.fence === 'white' ? '#ffffff' : '#c8b070'; for (const sx of [-1, 1]) { for (let i = 0; i < 6; i++) { const x = sx * (1.3 + i * .55); box(.12, .8, .06, fc, x, .4, fz, g); if (ex.fence === 'white') { const tip = new Mesh(new ConeGeometry(.09, .16, 4), lam(fc)); tip.position.set(x, .88, fz); tip.rotation.y = Math.PI / 4; g.add(tip); } } box(2.9, .08, .05, fc, sx * 2.65, .55, fz - .04, g, false); box(2.9, .08, .05, fc, sx * 2.65, .25, fz - .04, g, false); } }
    else if (ex.fence === 'hedge') { for (const sx of [-1, 1]) { const h = box(2.8, .7, .6, lam('#3f9a3f'), sx * 2.6, .35, fz, g); h.geometry = new BoxGeometry(2.8, .7, .6, 3, 1, 1); for (let i = 0; i < 4; i++) sph(.38, '#4aa84a', sx * (1.5 + i * .72), .7, fz, g, 1, .8, 1, true); } }
    /* 庭院 */
    if (ex.garden === 'flower') { for (const sx of [-1, 1]) for (let i = 0; i < 5; i++) { sph(.14, ['#ff5a7a', '#ffd34a', '#ffffff', '#a07af0', '#ff8a3a'][(i + (sx > 0 ? 2 : 0)) % 5], sx * (2.1 + (i % 3) * .5), .28, dz + 2.0 + Math.floor(i / 3) * .4, g); sph(.12, '#3f8a2f', sx * (2.1 + (i % 3) * .5), .14, dz + 2.0 + Math.floor(i / 3) * .4, g); } }
    else if (ex.garden === 'pots') { for (const sx of [-1, 1]) { cyl(.28, .22, .45, '#c8704a', sx * 2.3, .22, dz + 2.1, g); sph(.38, '#4a9a3a', sx * 2.3, .7, dz + 2.1, g, 1, 1, 1, true); } }
    else if (ex.garden === 'tree') { cyl(.12, .16, 1.5, '#7a5034', -HW / 2 - .6, .75, dz + 1.6, g); sph(.95, '#4aa84a', -HW / 2 - .6, 2.0, dz + 1.6, g, 1, 1, 1, true); sph(.6, '#5ab85a', -HW / 2 - .2, 2.4, dz + 1.9, g, 1, 1, 1, true); }
    /* 名牌 */
    if (name) { const nm = new Mesh(new PlaneGeometry(1.8, .45), new MeshBasicMaterial({ map: signTex(name), transparent: true })); nm.position.set(0, .35 + 2.5, dz + .09); g.add(nm); }
    g.traverse(m => { if (m.isMesh) { m.castShadow = m.castShadow || false; m.receiveShadow = true; } });
    g.userData.door = new Vector3(0, 0, dz + 2.4);
    return g;
  }

  /* ───────── 住家、店鋪 ───────── */
  const houseObjs = [];
  const r0 = mulberry(31);
  const npcName = id => { const d = NPCS.find(n => n.id === id || n.spr === id); return d ? d.name.split(' ')[0] : id; };
  function randEx(r) { const pick = a => a[Math.floor(r() * a.length)][0]; return { wall: pick(EXO.wall), roof: pick(EXO.roof), roofC: pick(EXO.roofC), door: pick(EXO.door), doorC: pick(EXO.doorC), win: pick(EXO.win), porch: r() < .75 ? 1 : 0, fence: pick(EXO.fence), garden: pick(EXO.garden) }; }
  function placeHouse(h) {
    if (h.g) { scene.remove(h.g); h.g.traverse(m => { if (m.geometry) m.geometry.dispose(); }); }
    const ex = h.own ? D.ex : h.ex, name = h.own ? (o.houseName || '我的家') : h.label;
    h.g = buildHouse(ex, name); h.g.position.set(h.x, 0, h.z); h.g.rotation.y = h.f === 2 ? Math.PI : 0; scene.add(h.g);
    h.g.traverse(m => { if (m.isMesh) m.userData.house = h; });
    { const ms = []; collectStatic(h.g, new Set([h.g.userData.doorPivot].filter(Boolean)), ms); mergeStatic(h.g, ms, matKey); }
    const d = h.g.userData.door.clone(); if (h.f === 2) { d.x = -d.x; d.z = -d.z; } h.door = { x: h.x + d.x, z: h.z + d.z };
    const sg = h.f === 2 ? -1 : 1, fz = h.g.userData.doorZ + .6; h.face = { x: h.x, z: h.z + sg * fz }; h.inw = -sg; h.pivot = h.g.userData.doorPivot;
  }
  HOUSES.forEach(h => { const hh = Object.assign({}, h); if (!hh.own) { hh.ex = randEx(r0); const d = NPCS.find(n => n.spr === h.npc || n.id === h.npc); hh.label = (d ? d.name.split(' ').pop() : '鄰居') + '的家'; } houseObjs.push(hh); placeHouse(hh); });
  const myHouse = houseObjs.find(h => h.own);
  function shopBuild(s) {
    const g = new Group(); g.position.set(s.x, 0, s.z); scene.add(g); g.userData.shopG = 1;
    const pal = { izakaya: ['#7a4a2a', '#2c3044', '#e2452f', '居酒屋'], ramen: ['#c8352a', '#3a3a3a', '#f2b630', 'ラーメン'], sushi: ['#f4efe2', '#2f4a7a', '#2f6bb8', '寿司'], bar: ['#3a2f5a', '#1c1f2a', '#9a6ad6', 'BAR'] }[s.k];
    box(7, .3, 5.6, '#e8e2d4', 0, .15, 0, g);
    box(6.6, 3.4, 5, pal[0], 0, 2, -.2, g);
    box(7.4, .4, 6, pal[1], 0, 3.9, -.2, g); box(7.6, .3, 1.6, pal[1], 0, 3.1, 2.6, g).rotation.x = .35;
    const sg = new Mesh(new PlaneGeometry(4.2, .9), new MeshBasicMaterial({ map: signTex(s.k === 'izakaya' && D.name ? D.name : pal[3]) })); sg.position.set(0, 4.55, 2.85); g.add(sg); box(4.4, 1.0, .1, '#3a2a1a', 0, 4.55, 2.78, g);
    const win = new Mesh(new PlaneGeometry(2.2, 1.4), winMat('#cfe8f4')); win.position.set(-1.9, 1.7, 2.31); g.add(win); const win2 = win.clone(); win2.position.x = 1.9; g.add(win2);
    box(1.4, 2.3, .1, '#3a2a1a', 0, 1.45, 2.31, g); const nt = ctex(256, 100, (x, w, h) => { for (let i = 0; i < 3; i++) { x.fillStyle = pal[2]; x.fillRect(4 + i * 84, 0, 80, h - 4); } x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = `900 40px ${FONT}`; [...(s.k === 'bar' ? '月影' : s.n.slice(0, 3))].slice(0, 3).forEach((c, i) => x.fillText(c, 44 + i * 84, 44)); });
    const nm = new Mesh(new PlaneGeometry(1.5, .65), new MeshBasicMaterial({ map: nt, transparent: true, side: DoubleSide })); nm.position.set(0, 2.25, 2.42); g.add(nm);
    for (const sx of [-1, 1]) { const l = sph(.3, bas(s.k === 'sushi' ? '#ffffff' : '#e2452f'), sx * 1.15, 2.3, 2.5, g, 1, 1.3, 1); glowS(sx * 1.15, 2.3, 2.6, 2.6, g); }
    if (s.k === 'ramen') { for (let i = 0; i < 3; i++) cyl(.25, .25, .7, '#c8352a', -1.2 + i * 1.2, .35, 3.5, g, 12); }
    if (s.k === 'sushi') { const f = new Mesh(new ConeGeometry(.4, 1.2, 4), lam('#2f6bb8')); f.position.set(3.1, 3.2, 2.6); f.rotation.z = -1.3; g.add(f); }
    g.traverse(m => { if (m.isMesh) m.userData.shop = s; });
    { const ms = []; collectStatic(g, new Set(), ms); mergeStatic(g, ms, matKey); }
    s.door = { x: s.x, z: s.z + 3.6 }; s.face = { x: s.x, z: s.z + 2.85 }; s.inw = -1;
    return g;
  }
  SHOPS.forEach(shopBuild);
  /* 樹、路燈、長椅、海邊 */
  const solids = [];   // 擋路的方塊 [x1,z1,x2,z2]
  const solidC = [];   // 擋路的圓 [x,z,r]（噴水池、花壇：圓的東西用圓形碰撞，才不會在斜角卡住）
  houseObjs.forEach(h => { solids.push([h.x - HW / 2 - .2, h.z - (h.f === 2 ? -.6 : .6) - HD / 2 - .2, h.x + HW / 2 + .2, h.z - (h.f === 2 ? -.6 : .6) + HD / 2 + .2]); });
  SHOPS.forEach(s => solids.push([s.x - 3.5, s.z - 3, s.x + 3.5, s.z + 2.4]));
  solidC.push([0, 0, 3.6]);
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + .26; solidC.push([Math.cos(a) * 6.6, Math.sin(a) * 6.6, .7]); }
  /* 樹冠：幾顆圓球合成一團，頂端亮、底部暗（頂點顏色），整棵樹輕輕搖 */
  const sway = []; const canopyM = new MeshLambertMaterial({ vertexColors: true });
  const CAN = {};
  function canopyG(pink, seed) { const key = pink + ':' + (seed % 4 + 4) % 4; if (CAN[key]) return CAN[key]; const r = mulberry(31 + (seed % 4 + 4) % 4 * 17 + pink);
    const top = pink ? [1, .78, .86] : [.56, .82, .36], bot = pink ? [.88, .5, .64] : [.22, .5, .2];
    const blobs = [[0, 1.25, 0, 1.45]]; for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2 + r() * .6; blobs.push([Math.cos(a) * (.9 + r() * .3), .75 + r() * .6, Math.sin(a) * (.9 + r() * .3), .8 + r() * .35]); } blobs.push([(r() - .5) * .6, 2.0 + r() * .3, (r() - .5) * .6, .85]);
    const gs = blobs.map(([bx, by, bz, br]) => { const sg = new SphereGeometry(br, 14, 10); sg.translate(bx, by, bz); const p = sg.attributes.position, n = sg.attributes.normal, col = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) { const k = clamp((p.getY(i) + .2) / 3.0 * .7 + n.getY(i) * .3 + .15, 0, 1), j = (r() - .5) * .04; for (let c = 0; c < 3; c++) col[i * 3 + c] = Math.pow(clamp(bot[c] + (top[c] - bot[c]) * k + j, 0, 1), 2.2); }
      sg.setAttribute('color', new Float32BufferAttribute(col, 3)); return sg; });
    return CAN[key] = mergeGeometries(gs, false); }
  function tree(x, z, s, kind) { const g = new Group(); g.position.set(x, 0, z); g.scale.setScalar(s); scene.add(g);
    if (kind === 'palm') { let px = 0, py = 0; for (let i = 0; i < 6; i++) { const seg = cyl(.22 - i * .02, .26 - i * .02, .8, '#a07850', px, py + .4, 0, g, 8); seg.rotation.z = -.08 * i; px += .06 * i; py += .78; } for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; const lf = new Mesh(new ConeGeometry(.32, 2.6, 4), lamF('#3fa04a')); lf.scale.z = .25; lf.position.set(px + Math.cos(a) * 1.1, py + .1, Math.sin(a) * 1.1); lf.rotation.set(Math.sin(a) * 1.6, 0, -Math.cos(a) * 1.6); lf.castShadow = true; g.add(lf); } sph(.18, '#6a4a2a', px, py - .1, .1, g); }
    else { cyl(.2, .32, 2.0, '#8a5a3a', 0, 1.0, 0, g, 10); const cn = new Mesh(canopyG(kind === 'pink' ? 1 : 0, (x * 7 + z * 13) | 0), canopyM); cn.position.y = 1.7; cn.castShadow = true; cn.rotation.y = x + z; g.add(cn); sway.push([cn, x * .3 + z * .7]); }
    solids.push([x - .5 * s, z - .5 * s, x + .5 * s, z + .5 * s]);
  }
  const r1 = mulberry(77);
  for (let i = 0; i < 34; i++) { const a = i / 34 * Math.PI * 2 + r1() * .1; const x = Math.cos(a) * (IX - 1.5 + r1() * 2), z = Math.sin(a) * (IZ - 1.5 + r1() * 2); if (z > 18) { if (r1() < .5) tree(clamp(x * 1.05, -IX - 3, IX + 3), clamp(z, 22, IZ + 4), .9, 'palm'); continue; } tree(clamp(x, -IX + 2, IX - 2), clamp(z, -IZ + 2, IZ - 2), .9 + r1() * .3, 'palm'); }
  [[-30, -11.5], [-20, -12.5], [-9, -12.5], [9, -12.5], [20, -12.5], [30, -11.5], [-30, 11.5], [-20, 12.5], [20, 12.5], [30, 11.5]].forEach(([x, z], i) => tree(x, z, .8 + (i % 3) * .1, i % 4 === 0 ? 'pink' : 'round'));
  [[8, 12.2], [-8, 12.2]].forEach(([x, z]) => tree(x, z, .8, 'pink'));
  function lampPost(x, z) { const g = new Group(); g.position.set(x, 0, z); scene.add(g); cyl(.09, .12, 3.6, '#3a3a44', 0, 1.8, 0, g, 8); const hd = sph(.28, bas('#fff4d0'), 0, 3.7, 0, g); cyl(.3, .2, .12, '#3a3a44', 0, 3.98, 0, g, 10); glowS(0, 3.7, 0, 5, g); const pool = new Mesh(new CircleGeometry(3, 20), new MeshBasicMaterial({ map: GLOW, transparent: true, blending: AdditiveBlending, depthWrite: false, opacity: 0 })); pool.rotation.x = -Math.PI / 2; pool.position.y = .08; g.add(pool); lamps.push(pool); pool.userData.k = .35; solids.push([x - .2, z - .2, x + .2, z + .2]); }
  for (const [x, z] of [[-6.2, 6.2], [6.2, 6.2], [-6.2, -6.2], [6.2, -6.2], [-20, 2.6], [20, 2.6], [-20, -2.6], [20, -2.6], [-31, 2.6], [31, -2.6], [-12, -15.4], [12, -15.4], [-12, 18.6], [12, 18.6], [2.6, -12], [-2.6, 11]]) lampPost(x, z);
  function bench(x, z, ry) { const g = new Group(); g.position.set(x, 0, z); g.rotation.y = ry; scene.add(g); box(2, .12, .55, '#b8824a', 0, .5, 0, g); box(2, .5, .1, '#b8824a', 0, .85, -.25, g); for (const sx of [-.85, .85]) { box(.1, .5, .5, '#3a3a44', sx, .25, 0, g); } const rot = Math.abs(Math.sin(ry)) > .7, hx = rot ? .4 : 1, hz = rot ? 1 : .4; solids.push([x - hx, z - hz, x + hx, z + hz]); return g; }
  bench(0, 6.9, Math.PI); bench(0, -6.9, 0); bench(-6.9, 0, Math.PI / 2); bench(6.9, 0, -Math.PI / 2);
  /* 告示板 */
  const notice = new Group(); notice.position.set(4.6, 0, -4.6); notice.rotation.y = -Math.PI / 4; scene.add(notice);
  { box(.12, 1.8, .12, '#6b3f1f', -.8, .9, 0, notice); box(.12, 1.8, .12, '#6b3f1f', .8, .9, 0, notice); const t = ctex(256, 160, (x, w, h) => { x.fillStyle = '#c8935a'; x.fillRect(0, 0, w, h); x.strokeStyle = '#6b3f1f'; x.lineWidth = 10; x.strokeRect(0, 0, w, h); x.fillStyle = '#fff8ea'; x.fillRect(20, 30, 100, 70); x.fillStyle = '#ffe0ea'; x.fillRect(135, 22, 100, 80); x.fillStyle = '#3a2a1a'; x.font = `900 26px ${FONT}`; x.textAlign = 'center'; x.fillText('島の掲示板', w / 2, h - 18); }); const b = new Mesh(new BoxGeometry(1.8, 1.1, .1), [lam('#6b3f1f'), lam('#6b3f1f'), lam('#6b3f1f'), lam('#6b3f1f'), new MeshBasicMaterial({ map: t }), lam('#6b3f1f')]); b.position.y = 1.4; b.castShadow = true; notice.add(b); solids.push([3.8, -5.4, 5.4, -3.8]); }
  /* 海邊：遮陽傘、躺椅、碼頭、小船 */
  function umbrella(x, z, c) { const g = new Group(); g.position.set(x, 0, z); scene.add(g); cyl(.05, .05, 2.4, '#f4efe2', 0, 1.2, 0, g, 6); const top = new Mesh(new ConeGeometry(1.5, .7, 12), lam(c, { flatShading: true })); top.position.y = 2.5; top.castShadow = true; g.add(top); const st = new Mesh(new ConeGeometry(1.52, .7, 12, 1, true, 0, Math.PI / 6), lam('#ffffff', { side: DoubleSide })); for (let i = 0; i < 6; i++) { const q = st.clone(); q.rotation.y = i * Math.PI / 3; q.position.y = 2.5; g.add(q); } }
  function lounger(x, z, c) { const g = new Group(); g.position.set(x, 0, z); scene.add(g); box(.7, .12, 1.8, c, 0, .35, 0, g); const bk = box(.7, .1, .8, c, 0, .6, -.85, g); bk.rotation.x = .6; for (const sx of [-.3, .3]) for (const sz of [-.7, .7]) box(.05, .3, .05, '#f4efe2', sx, .15, sz, g); }
  umbrella(-18, 28, '#2f6bb8'); lounger(-16.2, 28.4, '#6fd1c0'); lounger(-19.6, 28.8, '#f29ab8'); umbrella(-4, 30, '#e8553f'); lounger(-2.2, 30.2, '#f6cf4a'); umbrella(22, 29, '#3f8f4f'); lounger(23.8, 29.3, '#f29ab8'); umbrella(-30, 27, '#f6cf4a');
  { const pier = new Group(); pier.position.set(10, 0, IZ + 6); scene.add(pier); box(3, .3, 16, '#b8824a', 0, .15, 6, pier); for (let i = 0; i < 6; i++) for (const sx of [-1.4, 1.4]) cyl(.15, .15, 1.6, '#8a5a34', sx, -.5, -1 + i * 3, pier, 8); for (let i = 0; i < 16; i++) box(3, .02, .05, '#8a5a34', 0, .31, -1.8 + i, pier, false);
    const boat = new Group(); boat.position.set(14, -.2, IZ + 17); scene.add(boat); box(1.8, .6, 4, '#f4efe2', 0, .3, 0, boat); box(1.9, .15, 4.1, '#e8553f', 0, .65, 0, boat); cyl(.06, .06, 3, '#8a5a34', 0, 2, 0, boat, 6); const sail = new Mesh(new PlaneGeometry(1.6, 2.2), lam('#ffffff', { side: DoubleSide })); sail.position.set(0, 2.2, .6); sail.rotation.y = Math.PI / 2; boat.add(sail); clouds.userData.boat = boat; }
  /* 其他不會動的零件（路緣、路燈、樹幹、長椅、花壇、海邊、碼頭、噴水池石台）：依材質＋區塊合併 */
  { const skip = new Set([sky, clouds, clouds.userData.boat, sun, sun.target, ...water, ...lamps, ...sway.map(q => q[0])]); houseObjs.forEach(h => skip.add(h.g)); scene.children.forEach(c => { if (c.userData.shopG) skip.add(c); });
    const ms = []; for (const c of scene.children.slice()) collectStatic(c, skip, ms); const wp = new Vector3();
    mergeStatic(scene, ms, m => { m.getWorldPosition(wp); return matKey(m) + '@' + Math.floor(wp.x / 24) + ',' + Math.floor(wp.z / 24); }); }
  /* 碼頭範圍可以走 */
  const PIER = [8.5, IZ + 4, 11.5, IZ + 19];

  /* ───────── 草叢與小花（InstancedMesh，一次畫完；會隨風擺） ───────── */
  const WIND = { value: 0 };
  { const r = mulberry(123), m4 = new Object3D();
    const onRoad = (x, z) => { for (const [x1, z1, x2, z2] of ROADS) { if (x > Math.min(x1, x2) - RW2 - .6 && x < Math.max(x1, x2) + RW2 + .6 && z > Math.min(z1, z2) - RW2 - .6 && z < Math.max(z1, z2) + RW2 + .6) return true; } return false; };
    const inGrass = (x, z) => { const dx = Math.max(Math.abs(x) - (IX - 12), 0), dz = Math.max(Math.abs(z + 7) - (27 - 12), 0); return Math.hypot(dx, dz) < 10.5; };
    const free = (x, z) => { if (!inGrass(x, z) || onRoad(x, z) || Math.hypot(x, z) < PLAZA_R + .9) return false; for (const b of solids) if (x > b[0] - .4 && x < b[2] + .4 && z > b[1] - .4 && z < b[3] + .4) return false; for (const c of solidC) if (Math.hypot(x - c[0], z - c[1]) < c[2] + .4) return false; return true; };
    const pts = (n, cl) => { const out = []; let tries = 0; while (out.length < n && tries++ < n * 30) { let x = (r() * 2 - 1) * IX, z = -34 + r() * 54; if (cl && out.length && r() < .7) { const q = out[(r() * out.length) | 0]; x = q[0] + (r() - .5) * 3; z = q[1] + (r() - .5) * 3; } if (free(x, z)) out.push([x, z]); } return out; };
    // 草叢：三片細葉，根部深、葉尖亮
    const blades = []; for (let i = 0; i < 3; i++) { const b = new ConeGeometry(.07, .42, 3, 1); b.translate(0, .21, 0); b.rotateZ((i - 1) * .35); b.rotateY(i * 2.1); b.translate((i - 1) * .06, 0, (i % 2) * .05); blades.push(b); }
    const tg = mergeGeometries(blades, false); { const p = tg.attributes.position, col = new Float32Array(p.count * 3); for (let i = 0; i < p.count; i++) { const k = clamp(p.getY(i) / .42, 0, 1); col[i * 3] = Math.pow(.28 + .3 * k, 2.2); col[i * 3 + 1] = Math.pow(.55 + .3 * k, 2.2); col[i * 3 + 2] = Math.pow(.2 + .16 * k, 2.2); } tg.setAttribute('color', new Float32BufferAttribute(col, 3)); }
    const tp = pts(mobile ? 900 : 1500, true), tufts = new InstancedMesh(tg, new MeshLambertMaterial({ vertexColors: true }), tp.length);
    tp.forEach(([x, z], i) => { m4.position.set(x, .02, z); m4.rotation.set(0, r() * 6.3, 0); const sc = .7 + r() * .7; m4.scale.set(sc, sc * (.8 + r() * .5), sc); m4.updateMatrix(); tufts.setMatrixAt(i, m4.matrix); });
    tufts.material.userData.wind = 1; scene.add(tufts);
    // 小花：細莖＋五瓣花
    const stem = new CylinderGeometry(.012, .016, .26, 4); stem.translate(0, .13, 0);
    const head = new CircleGeometry(.075, 5); head.rotateX(-Math.PI / 2); head.translate(0, .27, 0); const ctr = new CircleGeometry(.03, 6); ctr.rotateX(-Math.PI / 2); ctr.translate(0, .275, 0);
    const fp = pts(mobile ? 220 : 380, true), FC = ['#ffffff', '#fff3a8', '#ffb3c8', '#c8b8ff', '#ffd08a', '#ff8a8a'];
    const stems = new InstancedMesh(stem, new MeshLambertMaterial({ color: '#4f9a3c' }), fp.length), heads = new InstancedMesh(head, new MeshLambertMaterial({ color: '#ffffff', side: DoubleSide }), fp.length), ctrs = new InstancedMesh(ctr, new MeshBasicMaterial({ color: '#ffd23a' }), fp.length);
    const cc = new Color();
    fp.forEach(([x, z], i) => { m4.position.set(x, .02, z); m4.rotation.set(0, r() * 6.3, 0); const sc = .8 + r() * .6; m4.scale.set(sc, sc, sc); m4.updateMatrix(); stems.setMatrixAt(i, m4.matrix); heads.setMatrixAt(i, m4.matrix); ctrs.setMatrixAt(i, m4.matrix); heads.setColorAt(i, cc.set(FC[(r() * FC.length) | 0])); });
    [stems, heads, ctrs].forEach(o => { o.material.userData.wind = 1; scene.add(o); });
  }
  /* 草叢、小花隨風擺（只改這幾種材質的頂點；2026/11/26 拿掉了遠處往下彎的滾筒效果：鏡頭一轉整個畫面會跟著扭，看起來到處亂動） */
  function windMat(m) { if (!m || m.userData.bent || !m.userData.wind) return; m.userData.bent = 1;
    m.onBeforeCompile = sh => { sh.uniforms.uWind = WIND; sh.vertexShader = 'uniform float uWind;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n#ifdef USE_INSTANCING\n float wP = instanceMatrix[3].x * .45 + instanceMatrix[3].z * .3; transformed.x += sin(uWind * 1.8 + wP) * .07 * max(position.y, 0.0) / .4; transformed.z += cos(uWind * 1.3 + wP) * .03 * max(position.y, 0.0) / .4;\n#endif'); };
    m.customProgramCacheKey = () => 'wind'; m.needsUpdate = true; }
  scene.traverse(o => { if (o.isInstancedMesh) windMat(o.material); });

  /* ───────── 人 ───────── */
  const people = []; let PS = 1.5;
  const shadowT = ctex(64, 64, x => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); });
  function nameTex(name, kind) { return ctex(512, 112, (x, w, h) => { x.textAlign = 'center'; x.textBaseline = 'middle'; let fs = 52; x.font = `900 ${fs}px ${FONT}`; const s = String(name || '').slice(0, 16); while (x.measureText(s).width > w - 80 && fs > 22) { fs -= 2; x.font = `900 ${fs}px ${FONT}`; } const tw = Math.min(w - 12, x.measureText(s).width + 56); x.fillStyle = kind === 'me' ? '#ffffffee' : '#2a2a48e0'; x.strokeStyle = kind === 'me' ? '#3a2a1a' : '#c8c0ff'; x.lineWidth = 7; rrect(x, (w - tw) / 2, 14, tw, h - 28, (h - 28) / 2); x.fill(); x.stroke(); x.fillStyle = kind === 'me' ? '#3a2a1a' : '#fff3d6'; x.fillText(s, w / 2, h / 2 + 2); }); }
  const bubT = ctex(128, 112, (x) => { x.strokeStyle = '#2a1810'; x.lineWidth = 6; x.lineJoin = 'round'; x.fillStyle = '#ffffff'; rrect(x, 12, 8, 104, 66, 24); x.fill(); x.stroke(); x.beginPath(); x.moveTo(44, 72); x.lineTo(34, 100); x.lineTo(66, 74); x.closePath(); x.fill(); x.stroke(); x.fillRect(46, 68, 18, 8); x.fillStyle = '#2a1810'; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(40 + i * 24, 42, 6, 0, 7); x.fill(); } });
  function mkPerson(src, h, opt) {
    opt = opt || {}; const grp = new Group(); scene.add(grp);
    const geo = new PlaneGeometry(1, 1); geo.translate(0, .5, 0); const mat = new MeshBasicMaterial({ transparent: true, alphaTest: .04, color: 0xffffff }); const m = new Mesh(geo, mat); grp.add(m);
    const p = { grp, m, mat, h0: h, h: h * PS, ar: .8, w: h * PS * .8, x: 0, z: 0, y: 0, face: 1, ph: Math.random() * 7, moving: false };
    loadTex(src, t => { mat.map = t; mat.needsUpdate = true; p.ar = t.image.width / t.image.height; p.w = p.h * p.ar; });
    const sh = new Mesh(new CircleGeometry(.5, 16), new MeshBasicMaterial({ map: shadowT, transparent: true, depthWrite: false })); sh.rotation.x = -Math.PI / 2; scene.add(sh); p.sh = sh;
    if (opt.name) { const nt = new Sprite(new SpriteMaterial({ map: nameTex(opt.name, opt.nk), transparent: true, depthTest: false })); nt.renderOrder = 30; nt.scale.set(2.2, .48, 1); scene.add(nt); p.tag = nt; }
    if (opt.bubble) { const bs = new Sprite(new SpriteMaterial({ map: bubT, transparent: true, depthWrite: false })); bs.scale.set(.85, .74, 1); scene.add(bs); p.bub = bs; }
    people.push(p); return p;
  }
  const me = mkPerson(o.me.src, 1.5, { name: o.me.name || '我', nk: 'me' }); let S0yaw = .35;
  if (o.spawn === 'door' && myHouse) { me.x = myHouse.face.x; me.z = myHouse.face.z - myHouse.inw * .9; } else if (o.spawn === 'front' && myHouse) { me.x = myHouse.face.x + .8; me.z = myHouse.face.z - myHouse.inw * 1.9; S0yaw = myHouse.f === 2 ? Math.PI : 0; } else if (o.spawn === 'shop') { me.x = SHOPS[0].face.x; me.z = SHOPS[0].face.z + .9; } else { me.x = 0; me.z = 11.5; }

  /* ───────── 碰撞、找路 ───────── */
  function inIsland(x, z) { const ax = Math.abs(x), az = Math.abs(z), W = IX + SAND - 1, Hh = IZ + SAND - 1, r = 14; if (x >= PIER[0] && x <= PIER[2] && z >= PIER[1] && z <= PIER[3]) return true; if (ax > W || az > Hh) return false; if (ax > W - r && az > Hh - r) return Math.hypot(ax - (W - r), az - (Hh - r)) < r; return true; }
  function blocked(x, z, rad) { if (!inIsland(x, z)) return true; for (const b of solids) if (x > b[0] - rad && x < b[2] + rad && z > b[1] - rad && z < b[3] + rad) return true; for (const c of solidC) if (Math.hypot(x - c[0], z - c[1]) < c[2] + rad) return true; return false; }
  const CELL = 1, GX0 = -IX - SAND, GZ0 = -IZ - SAND, GW = Math.ceil((IX + SAND) * 2), GH = Math.ceil((IZ + SAND) * 2 + 16);
  let grid = null;
  function buildGrid() { grid = new Uint8Array(GW * GH); for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) grid[j * GW + i] = blocked(GX0 + i + .5, GZ0 + j + .5, .35) ? 1 : 0; }
  buildGrid();
  function findPath(sx, sz, tx, tz) {
    const ci = x => Math.floor(x - GX0), cj = z => Math.floor(z - GZ0); let si = ci(sx), sj = cj(sz), ti = ci(tx), tj = cj(tz);
    if (ti < 0 || tj < 0 || ti >= GW || tj >= GH) return null;
    if (grid[tj * GW + ti]) { let best = null, bd = 1e9; for (let dj = -3; dj <= 3; dj++) for (let di = -3; di <= 3; di++) { const i = ti + di, j = tj + dj; if (i < 0 || j < 0 || i >= GW || j >= GH || grid[j * GW + i]) continue; const d = di * di + dj * dj; if (d < bd) { bd = d; best = [i, j]; } } if (!best) return null; [ti, tj] = best; }
    const prev = new Int32Array(GW * GH).fill(-1), start = sj * GW + si, goal = tj * GW + ti; prev[start] = start; const q = [start]; let h = 0;
    while (h < q.length) { const c = q[h++]; if (c === goal) break; const i = c % GW, j = (c / GW) | 0; for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) { const ni = i + di, nj = j + dj; if (ni < 0 || nj < 0 || ni >= GW || nj >= GH) continue; const n = nj * GW + ni; if (prev[n] >= 0 || grid[n]) continue; if (di && dj && (grid[j * GW + ni] || grid[nj * GW + i])) continue; prev[n] = c; q.push(n); } }
    if (prev[goal] < 0) return null; const out = []; let c = goal; while (c !== start) { out.push([GX0 + (c % GW) + .5, GZ0 + ((c / GW) | 0) + .5]); c = prev[c]; } out.reverse();
    /* 拉直：能直走就跳過中間點 */
    const sm = []; let cx = sx, cz = sz, k = 0; while (k < out.length) { let far = k; for (let m = out.length - 1; m > k; m--) { if (clearLine(cx, cz, out[m][0], out[m][1])) { far = m; break; } } sm.push(out[far]); cx = out[far][0]; cz = out[far][1]; k = far + 1; }
    return sm;
  }
  function clearLine(x1, z1, x2, z2) { const d = Math.hypot(x2 - x1, z2 - z1), n = Math.ceil(d / .4); for (let i = 1; i <= n; i++) { const t = i / n; if (blocked(x1 + (x2 - x1) * t, z1 + (z2 - z1) * t, .3)) return false; } return true; }

  /* ───────── NPC：沿著道路散步 ───────── */
  const NODES = []; const nodeKey = {};
  function node(x, z) { const k = x + ',' + z; if (nodeKey[k] !== undefined) return nodeKey[k]; nodeKey[k] = NODES.length; NODES.push({ x, z, n: [] }); return NODES.length - 1; }
  { const xs = [-36, -26, -15, 0, 15, 26, 36], zs = [-18, 0, 16]; for (const z of zs) for (let i = 0; i < xs.length - 1; i++) { const a = node(xs[i], z), b = node(xs[i + 1], z); NODES[a].n.push(b); NODES[b].n.push(a); }
    for (const x of [-36, 36]) for (let i = 0; i < zs.length - 1; i++) { const a = node(x, zs[i]), b = node(x, zs[i + 1]); NODES[a].n.push(b); NODES[b].n.push(a); }
    const top = node(0, -28), mid = node(0, -18); NODES[top].n.push(mid); NODES[mid].n.push(top); const pn = node(0, -9.5), ps = node(0, 9.5); for (const [a, b] of [[mid, pn], [ps, node(0, 16)], [pn, node(-9.5, 0)], [pn, node(9.5, 0)], [ps, node(-9.5, 0)], [ps, node(9.5, 0)], [node(-9.5, 0), node(-15, 0)], [node(9.5, 0), node(15, 0)]]) { NODES[a].n.push(b); NODES[b].n.push(a); }
    /* 把被廣場切掉的 (0,0) 拿掉 */ const c = nodeKey['0,0']; if (c !== undefined) NODES[c].n.forEach(i => { NODES[i].n = NODES[i].n.filter(v => v !== c); }); if (c !== undefined) NODES[c].n = []; }
  const npcs = [];
  const pool = NPCS.filter(d => o.walk && o.walk[d.spr] && d.spr !== 'robot').sort(() => Math.random() - .5).slice(0, mobile ? 7 : 10);
  pool.forEach(d => { const p = mkPerson(o.walk[d.spr], d.h, { bubble: 1 }); p.d = d; p.sp = d.sp * .9; let ni; do { ni = Math.floor(Math.random() * NODES.length); } while (!NODES[ni].n.length); p.x = NODES[ni].x + rnd(-1, 1); p.z = NODES[ni].z + rnd(-1, 1); p.node = ni; p.state = 'idle'; p.t = rnd(0, 3); npcs.push(p); });
  function npcNext(p) { const nd = NODES[p.node]; if (!nd.n.length) return; const nx = nd.n[Math.floor(Math.random() * nd.n.length)]; p.node = nx; const t = NODES[nx]; p.tx = t.x + rnd(-1.2, 1.2); p.tz = t.z + rnd(-1.2, 1.2); p.state = 'walk'; }

  /* ───────── 介面 ───────── */
  const el = (tag, cls, html, par) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; (par || root).appendChild(e); return e; };
  const ui = []; const U = e => { ui.push(e); return e; };
  const info = U(el('div', 'i3info'));
  const hud = U(el('div', 'i3hud'));
  const hint = U(el('div', 'h3hint'));
  const toastEl = U(el('div', 'h3toast'));
  const card = U(el('div', 'h3card'));
  const pan = U(el('div', 'i3pan'));
  const joyEl = U(el('div', 'i3joy', '<i></i>'));
  const TOUCH = (window.matchMedia && matchMedia('(pointer:coarse)').matches) || 'ontouchstart' in window;
  const joyRest = () => { if (S.dead) return; const r = cv.getBoundingClientRect(), rr = root.getBoundingClientRect(); joyEl.style.left = (r.left - rr.left + 110) + 'px'; joyEl.style.top = (r.bottom - rr.top - 110) + 'px'; joyEl.firstChild.style.transform = ''; joyEl.className = 'i3joy' + (TOUCH && S.mode === 'walk' ? ' rest' : ''); };
  const doorBtn = U(el('button', 'i3door')); doorBtn.type = 'button'; doorBtn.dataset.i3 = 'door';
  function toast(s) { toastEl.textContent = s; toastEl.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('on'), 2400); }
  const S = { dead: false, mode: 'walk', yaw: S0yaw, yawT: S0yaw, pitch: .6, pitchT: .6, dist: 11, distT: 11, fp: FPPREF.v, fpK: 0, fpP: 0, tgt: null, keys: {}, t: 0, talk: null, last: performance.now(), hourOff: 0, cam: new Vector3(me.x, 1, me.z) };
  const PHASES = [[null, '現在'], [8, '早上'], [13, '中午'], [17.6, '傍晚'], [21, '夜晚']];
  let phaseI = 0;
  function hourNow() { if (PHASES[phaseI][0] !== null) return PHASES[phaseI][0]; const d = new Date(); return d.getHours() + d.getMinutes() / 60; }
  function hudBtns() {
    timeTop.style.display = fpTop.style.display = S.mode === 'edit' ? 'none' : ''; fpTop.classList.toggle('on', !!S.fp);
    if (S.mode === 'edit') { hud.innerHTML = `<button class="h3b hot" type="button" data-i3="done"><i>✓</i>完成</button>`; return; }
    hud.innerHTML = (own ? `<button class="h3b hot" type="button" data-i3="edit"><i>🎨</i>外觀</button>` : '') + `<button class="h3b" type="button" data-i3="home"><i>🏠</i>${own ? '回家' : '他家'}</button><button class="h3b" type="button" data-i3="shopin"><i>🏮</i>${own ? '我的店' : '他的店'}</button>${cb.stats ? `<button class="h3b" type="button" data-i3="stats"><i>📋</i>店況</button>` : ''}`;
  }
  function updInfo() { const h = hourNow(), hh = Math.floor(h), mm = Math.floor((h - hh) * 60); info.innerHTML = `<b>🏝️ ${esc(own ? (D.name ? D.name.replace(/的(小店|家)$/, '') + '的島' : '我的島') : ((o.owner && o.owner.name) || '好友') + '的島')}</b>${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}・${h < 5 || h >= 19.5 ? '夜晚 🌙' : h < 7 ? '清晨 🌅' : h < 16.5 ? '白天 ☀️' : '傍晚 🌇'}`; }
  /* 頂部列：🕐 時間、👁 視角，放在「回首頁」左邊（無外框，只有圖示） */
  const topBar = root.querySelector('.twtop'), backBtn = topBar && topBar.querySelector('.twlist');
  const mkTop = (act, icon, label) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'i3tb'; b.dataset.i3 = act; b.setAttribute('aria-label', label); b.textContent = icon; if (topBar) topBar.insertBefore(b, backBtn || null); ui.push(b); return b; };
  const timeTop = mkTop('time', '🕐', '時間'), fpTop = mkTop('fp', '👁', '第一人稱／第三人稱');
  hudBtns(); updInfo(); setTimeout(joyRest, 50); window.addEventListener('resize', joyRest);

  /* 外觀編輯 */
  let edTab = 'wall';
  function drawPan() {
    const tabs = Object.keys(EXO).map(k => `<button class="h3tab ${edTab === k ? 'on' : ''}" type="button" data-i3="tab" data-k="${k}">${EXO_NAMES[k]}</button>`).join('');
    const opts = EXO[edTab].map(([v, n]) => { const isC = typeof v === 'string' && v[0] === '#'; return `<button class="i3opt ${String(D.ex[edTab]) === String(v) ? 'on' : ''}" type="button" data-i3="opt" data-v="${v}">${isC ? `<i style="background:${v}"></i>` : ''}${esc(n)}</button>`; }).join('');
    pan.innerHTML = `<div class="h3tabs">${tabs}</div><div class="i3row">${opts}</div>`;
  }
  function setMode(m) { S.mode = m; setTimeout(joyRest, 0); closeCard(); S.tgt = null; pan.classList.toggle('on', m === 'edit'); hudBtns(); info.style.display = m === 'edit' ? 'none' : ''; if (m === 'edit') { drawPan(); S.distT = 14; S.pitchT = .5; S.yawT = myHouse.f === 2 ? Math.PI : 0; } else { S.distT = 11; S.pitchT = .6; save(); } }
  let saveT = 0; function save() { if (!own) return; clearTimeout(saveT); saveT = setTimeout(() => { try { cb.save && cb.save(D); } catch (_) { } }, 500); }

  /* 對話卡 */
  function openCard(p) {
    closeCard(); S.talk = p; p.state = 'talk';
    if (!p.deck || !p.deck.length) p.deck = p.d.lines.map(l => ({ kind: l[0], text: l[1] })).sort(() => Math.random() - .5);
    const it = p.deck.pop(), K = KIND[it.kind] || KIND.chat;
    card.innerHTML = `<div class="h3h"><div class="h3av" style="background-image:url('${o.walk[p.d.spr]}')"></div><div class="h3nm"><b>${esc(p.d.name)}</b><small>${esc(p.d.role || '')}</small></div><span class="h3k" style="background:${K.c}">${K.tag}</span><button class="h3x" type="button" data-i3="close">×</button></div><p class="h3t${it.kind === 'mind' ? ' mind' : ''}">${it.kind === 'mind' ? '（' + esc(it.text) + '）' : '「' + esc(it.text) + '」'}</p><div class="h3bt"><button class="h3n" type="button" data-i3="more">再聽一句 ›</button></div>`;
    card.classList.toggle('r', proj(new Vector3(p.x, 1, p.z)).x < rect().left + rect().width / 2); card.classList.add('on');
  }
  function infoCard(title, sub, body, btn) { closeCard(); card.innerHTML = `<div class="h3h"><div class="h3nm"><b>${esc(title)}</b><small>${esc(sub || '')}</small></div><button class="h3x" type="button" data-i3="close">×</button></div><p class="h3t">${body}</p>${btn ? `<div class="h3bt">${btn}</div>` : ''}`; card.classList.remove('r'); card.classList.add('on'); }
  function closeCard() { card.classList.remove('on'); const p = S.talk; S.talk = null; if (p && p.state === 'talk') { p.state = 'idle'; p.t = rnd(1, 2); } }

  const onClick = e => {
    const b = e.target.closest('[data-i3]'); if (!b || !root.contains(b)) return; const a = b.dataset.i3;
    if (a === 'close') closeCard();
    else if (a === 'more' && S.talk) openCard(S.talk);
    else if (a === 'edit') { if (S.mode === 'walk') setMode('edit'); }
    else if (a === 'done') setMode('walk');
    else if (a === 'tab') { edTab = b.dataset.k; drawPan(); }
    else if (a === 'opt') { const v = b.dataset.v; D.ex[edTab] = /^\d$/.test(v) ? +v : v; placeHouse(myHouse); shFlag = true; drawPan(); save(); }
    else if (a === 'home') { closeCard(); goDoor(DOORS.find(d => d.kind === 'home')); }
    else if (a === 'enter') { closeCard(); doorAct(DOORS.find(d => d.kind === 'home')); }
    else if (a === 'shopin') { closeCard(); goDoor(DOORS.find(d => d.kind === 'shop')); }
    else if (a === 'door') { doorAct(nearDoor); }
    else if (a === 'stats') { try { cb.stats && cb.stats(); } catch (_) { } }
    else if (a === 'fp') { S.fp = !S.fp; FPPREF.v = S.fp; hudBtns(); }
    else if (a === 'time') { phaseI = (phaseI + 1) % PHASES.length; hudBtns(); updInfo(); toast(phaseI ? `預覽：${PHASES[phaseI][1]}（再按回到現在時間）` : '回到現在時間'); }
  };
  root.addEventListener('click', onClick);
  function enterHouse(kind) { if (S.entering) return; S.entering = true; try { cb.enter && cb.enter(kind || 'home'); } catch (_) { S.entering = false; } }
  /* 門：走到門前會浮出「開門」；點它、或直接往門裡走就會開門進去 */
  const DOORS = houseObjs.map(h => ({ h, face: h.face, inw: h.inw, pivot: h.pivot, kind: h.own ? 'home' : 'npc', label: h.own ? (own ? '🚪 開門' : '🚪 拜訪') : '🔔 按門鈴', name: h.own ? '' : h.label }))
    .concat(SHOPS.map(s => ({ s, face: s.face, inw: s.inw, kind: s.k === 'izakaya' ? 'shop' : 'closed', label: s.k === 'izakaya' ? (own ? '🏮 進店' : '🏮 進去逛') : '🚧 準備中', name: s.n })));
  let nearDoor = null;
  function doorAct(d) {
    if (!d || S.ent) return;
    if (d.kind === 'npc') { toast(`叮咚～ ${d.name}好像沒人在家`); return; }
    if (d.kind === 'closed') { toast(`${d.name}還在準備中，之後就能進去了！`); return; }
    closeCard(); S.tgt = null; S.ent = { d, t: 0, x0: me.x, z0: me.z };
  }
  function goDoor(d) { goTo(d.face.x, d.face.z - d.inw * .7, () => doorAct(d)); }
  if (o.spawn === 'door' && myHouse && myHouse.pivot) { myHouse.pivot.rotation.y = 1.6; S.closing = myHouse.pivot; }
  function goTo(x, z, fn) { const pth = findPath(me.x, me.z, x, z); if (!pth) { toast('走不過去'); return; } S.tgt = { path: pth, fn }; }

  /* 輸入：拖曳轉鏡頭、點擊走路／互動 */
  const rect = () => cv.getBoundingClientRect();
  const ray = new Raycaster(), ndc = new Vector2(), gplane = new Plane(new Vector3(0, 1, 0), 0), hit = new Vector3();
  const toNdc = (cx, cy) => { const r = rect(); ndc.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height * 2 - 1)); return ndc; };
  const proj = v => { const q = v.clone().project(camera), r = rect(); return { x: (q.x + 1) / 2 * r.width + r.left, y: (1 - q.y) / 2 * r.height + r.top }; };
  const ptrs = new Map(); let pd = null, pinch = null;
  cv.addEventListener('contextmenu', e => e.preventDefault());
  let jd = null;
  cv.addEventListener('pointerdown', e => { S.pt = e.pointerType; e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (_) { }
    if (e.pointerType === 'touch' && !jd && S.mode === 'walk' && !S.ent) { const r = rect(); if (e.clientX - r.left < r.width * .45) { const rr = root.getBoundingClientRect(); jd = { id: e.pointerId, x: e.clientX, y: e.clientY }; S.tgt = null; joyEl.className = 'i3joy on'; joyEl.style.left = (e.clientX - rr.left) + 'px'; joyEl.style.top = (e.clientY - rr.top) + 'px'; joyEl.firstChild.style.transform = ''; return; } }
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), dist: S.distT, ang: Math.atan2(b.y - a.y, b.x - a.x), yaw: S.yawT }; pd = null; return; }
    pd = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0, yaw0: S.yawT, pit0: S.pitchT, fp0: S.fpP }; });
  cv.addEventListener('pointermove', e => { if (jd && e.pointerId === jd.id) { const dx = e.clientX - jd.x, dy = e.clientY - jd.y, d = Math.hypot(dx, dy), R0 = 50, m = Math.min(1, d / R0) / Math.max(d, 1e-6); S.joy = { x: dx * m, y: dy * m }; joyEl.firstChild.style.transform = `translate(${S.joy.x * R0}px,${S.joy.y * R0}px)`; return; }
    if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && ptrs.size >= 2) { const [a, b] = [...ptrs.values()]; S.distT = clamp(pinch.dist * pinch.d / Math.max(20, Math.hypot(a.x - b.x, a.y - b.y)), 7, 40); S.yawT = pinch.yaw - (Math.atan2(b.y - a.y, b.x - a.x) - pinch.ang); return; }
    if (!pd || pd.id !== e.pointerId) return; const dx = e.clientX - pd.x, dy = e.clientY - pd.y; if (!pd.moved && Math.hypot(dx, dy) > 8) pd.moved = 1; if (!pd.moved) return;
    S.yawT = pd.yaw0 - dx * .007; if (S.fp) S.fpP = clamp(pd.fp0 - dy * .005, -1.2, 1.2); else S.pitchT = clamp(pd.pit0 + dy * .005, .04, 1.3); });  /* 2026/11/26 下限 .22→.04：第三人稱可以把鏡頭壓低、抬頭看天空和遠方 */
  const up = e => { if (jd && e.pointerId === jd.id) { jd = null; S.joy = null; joyRest(); return; } ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null; if (!pd || pd.id !== e.pointerId) return; if (!pd.moved) tap(e.clientX, e.clientY); pd = null; };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { e.preventDefault(); if (!S.fp) S.distT = clamp(S.distT + Math.sign(e.deltaY) * 1.6, 7, 40); }, { passive: false });
  const kd = e => { if (!document.contains(cv) || /input|textarea/i.test((e.target && e.target.tagName) || '')) return; const c = e.key.toLowerCase(); if (/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e)$/.test(c)) { S.keys[c] = 1; if (!/^[qe]$/.test(c)) S.tgt = null; e.preventDefault(); } };
  const ku = e => { delete S.keys[e.key.toLowerCase()]; };
  document.addEventListener('keydown', kd); document.addEventListener('keyup', ku);
  function personAt(cx, cy) { let best = null, bd = 1e9; for (const p of npcs) { const f = proj(new Vector3(p.x, 0, p.z)), t = proj(new Vector3(p.x, p.h + .2, p.z)), hh = f.y - t.y; if (hh < 6) continue; const w = Math.max(hh * .38, 26), dx = Math.abs(cx - f.x); if (dx < w && cy > t.y - 10 && cy < f.y + 10) { const d = dx; if (d < bd) { bd = d; best = p; } } } return best; }
  function tap(cx, cy) {
    if (S.mode === 'edit' || S.ent) return;
    const p = personAt(cx, cy); if (p) { const d = Math.hypot(p.x - me.x, p.z - me.z); openCard(p); if (d > 3) goTo(p.x + (me.x - p.x) / d * 1.4, p.z + (me.z - p.z) / d * 1.4); return; }
    ray.setFromCamera(toNdc(cx, cy), camera); const hs = ray.intersectObjects(scene.children, true).filter(h => h.object.isMesh && (h.object.userData.house || h.object.userData.shop));
    if (hs.length) { const u = hs[0].object.userData;
      if (u.house || u.shop) { const d = DOORS.find(x => x.h === u.house && u.house || x.s === u.shop && u.shop); closeCard(); if (d) goTo(d.face.x, d.face.z - d.inw * .8); return; }
      if (u.house) { const h = u.house; if (h.own) { infoCard(own ? '我的家' : `${(o.owner && o.owner.name) || '好友'}的家`, D.name || '', own ? '要進屋嗎？裡面可以布置家具、收收銀台的錢。' : '店長在家裡打盹，進去逛逛吧！', `<button class="h3n" type="button" data-i3="enter">🚪 進屋</button>`); goTo(h.door.x, h.door.z); } else { infoCard(h.label, '島上的居民', '門關著，主人好像出去散步了～'); goTo(h.door.x, h.door.z); } return; }
      if (u.shop) { const s = u.shop; if (s.k === 'izakaya') { infoCard(D.name || '居酒屋', own ? '你的店' : `${(o.owner && o.owner.name) || '好友'}的店`, own ? '你的居酒屋：進去可以布置、收收銀台的錢、看客人。' : '進去逛逛吧！', `<button class="h3n" type="button" data-i3="shopin">🏮 進店</button>`); goTo(s.door.x, s.door.z); return; } infoCard(s.n, '店鋪（造景）', '現在是造景，之後可以從這裡直接開店營業。'); goTo(s.door.x, s.door.z); return; } }
    closeCard(); if (S.pt === 'touch') return; /* 手機用搖桿走，點地面不走 */
    if (ray.ray.intersectPlane(gplane, hit)) { const pth = findPath(me.x, me.z, hit.x, hit.z); if (pth) S.tgt = { path: pth }; }
  }

  /* ───────── 日夜 ───────── */
  const KEY = [ // 時、天頂、地平線、太陽色、太陽強度、半球光強度、霧、夜晚程度
    [0, '#0e1236', '#2a2a5a', '#8090ff', .25, .55, '#1a1d40', 1], [4.5, '#141a46', '#3a3466', '#8090ff', .25, .6, '#22244a', 1], [6, '#5a6ab8', '#ffb38a', '#ffb070', .9, .9, '#e8b8a0', .5],
    [7.5, '#6ec0f4', '#d8f0ff', '#fff0d0', 2.1, 1.3, '#c8e8ff', 0], [16, '#5ab4f0', '#d0ecff', '#fff2dc', 2.2, 1.4, '#c4e6ff', 0], [17.6, '#7a8ad8', '#ffb070', '#ff9a50', 1.4, 1.0, '#f0b890', .25],
    [18.8, '#3a3a88', '#d07a8a', '#ff7a60', .6, .75, '#7a5a8a', .7], [20, '#141a46', '#3a3466', '#8090ff', .25, .6, '#22244a', 1], [24, '#0e1236', '#2a2a5a', '#8090ff', .25, .55, '#1a1d40', 1]];
  const cA = new Color(), cB = new Color(), tmp = new Color();
  function dayState(h) { let i = 0; while (i < KEY.length - 2 && h >= KEY[i + 1][0]) i++; const a = KEY[i], b = KEY[i + 1], t = clamp((h - a[0]) / (b[0] - a[0]), 0, 1); const mix = (k) => cA.set(a[k]).clone().lerp(cB.set(b[k]), t); return { zen: mix(1), hor: mix(2), sunC: mix(3), sunI: lerp(a[4], b[4], t), hemiI: lerp(a[5], b[5], t), fog: mix(6), night: lerp(a[7], b[7], t) }; }
  let lastH = -1;
  function applyTime(h) {
    const st = dayState(h); const p = skyG.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i) / 300; tmp.copy(st.hor).lerp(st.zen, clamp((y + .05) / .55, 0, 1)); const ca = skyG.attributes.color.array; ca[i * 3] = tmp.r; ca[i * 3 + 1] = tmp.g; ca[i * 3 + 2] = tmp.b; } skyG.attributes.color.needsUpdate = true;
    fog.color.copy(st.fog); renderer.setClearColor(st.fog);
    sun.color.copy(st.sunC); sun.intensity = st.sunI; hemi.intensity = st.hemiI; amb.intensity = .2 + st.night * .15; hemi.color.set(st.night > .5 ? '#8a9aff' : '#dff2ff');
    const sa = (h - 6) / 12 * Math.PI; const el2 = Math.sin(sa); sunSp.position.set(Math.cos(sa) * 260, Math.max(-40, el2 * 220), -60); sunSp.material.opacity = clamp(el2 * 3, 0, 1);
    const ma = ((h + 6) % 24 - 6) / 12 * Math.PI; moonSp.position.set(-Math.cos(sa) * 240, Math.max(30, Math.abs(Math.sin(ma)) * 200), -80); moonSp.material.opacity = st.night;
    starSprites.userData.m.opacity = st.night * .9; starSprites.visible = st.night > .02; sunSp.visible = sunSp.material.opacity > .01; moonSp.visible = st.night > .01;  /* 白天看不到的星星（200 顆）不要畫 */
    const n = st.night; lamps.forEach(l => { l.material.opacity = n * (l.userData.k || .75); l.visible = n > .02; });
    nightMats.forEach(m => m.color.copy(m.userData.day).lerp(m.userData.night, n));
    seaM.color.set('#ffffff').lerp(tmp.set('#3a4a8a'), n * .6); clouds.children.forEach(c => c.children.forEach(m => m.material.color.set('#ffffff').lerp(tmp.set('#4a4a7a'), n * .8)));
    S.night = n;
  }

  /* ───────── 控制介面 ───────── */
  const ctl = {
    get dead() { return S.dead; }, set dead(v) { if (v) dispose(); }, dispose, kind: 'island',
    probe() { const P = v => { const f = proj(v); return { x: Math.round(f.x), y: Math.round(f.y) }; }; return { mode: S.mode, fp: S.fp, fpK: +S.fpK.toFixed(2), me: { x: +me.x.toFixed(2), z: +me.z.toFixed(2) }, calls: renderer.info.render.calls, tris: renderer.info.render.triangles, yaw: +S.yaw.toFixed(2), pitch: +S.pitch.toFixed(2), ex: Object.assign({}, D.ex), night: +(S.night || 0).toFixed(2), card: card.classList.contains('on') ? card.textContent : '', door: doorBtn.classList.contains('on') ? doorBtn.textContent : '', doorXY: doorBtn.classList.contains('on') ? (() => { const b = doorBtn.getBoundingClientRect(); return { x: Math.round(b.left + b.width / 2), y: Math.round(b.top + b.height / 2) }; })() : null, ent: !!S.ent, myDoor: P(new Vector3(myHouse.door.x, 1.2, myHouse.door.z - 2.8 * (myHouse.f === 2 ? -1 : 1))), myHouse: P(new Vector3(myHouse.x, 2, myHouse.z)), npcs: npcs.map(p => Object.assign({ id: p.d.id, state: p.state }, P(new Vector3(p.x, p.h * .5, p.z)))), npcW: (() => { let mn = null; for (const p of people) { if (p === me || !p.grp.visible) continue; const c = new Vector3(p.x, p.h * .5, p.z); if (c.distanceTo(camPos) > 30 || c.clone().project(camera).z > 1) continue; p.m.updateMatrixWorld(true); const a = proj(p.m.localToWorld(new Vector3(-.5, .5, 0))), b = proj(p.m.localToWorld(new Vector3(.5, .5, 0))); const ww = Math.hypot(a.x - b.x, a.y - b.y); mn = mn === null ? ww : Math.min(mn, ww); } return mn === null ? null : Math.round(mn); })() }; },
    px(x, y, z) { const f = proj(new Vector3(x, y, z)); return { x: Math.round(f.x), y: Math.round(f.y) }; },
    teleport(x, z) { me.x = x; me.z = z; S.cam.set(x, 1, z); }, setYaw(y) { S.yaw = S.yawT = y; }, setPitch(p) { S.pitch = S.pitchT = p; }, setDist(d) { S.dist = S.distT = d; }, setHour(h) { PHASES[0][0] = h; lastH = -1; },
  };
  function dispose() { if (S.dead) return; S.dead = true; cancelAnimationFrame(S.raf); clearTimeout(saveT); if (own) { try { cb.save && cb.save(D, true); } catch (_) { } }
    document.removeEventListener('keydown', kd); document.removeEventListener('keyup', ku); root.removeEventListener('click', onClick); window.removeEventListener('resize', joyRest); ui.forEach(e => e.remove());
    scene.traverse(ob => { if (ob.geometry) ob.geometry.dispose(); const ms = ob.material ? (Array.isArray(ob.material) ? ob.material : [ob.material]) : []; ms.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); });
    try { renderer.dispose(); renderer.forceContextLoss(); } catch (_) { } }

  /* ───────── 每幀 ───────── */
  let cw = 0, ch = 0, dprv = 0, pr = 1, prFloor = 1, fpsT = 0, fpsN = 0;
  /* 陰影：太陽跟著角色走、不跟鏡頭轉，所以只有角色移動、時間變了或隔一段時間才重畫（不用每幀畫一次） */
  let shX = 1e9, shZ = 1e9, shT = 0, shFlag = true;
  const fwd = new Vector3(), rgt = new Vector3(), camPos = new Vector3(), eyeV = new Vector3(), lookV = new Vector3(), lookFP = new Vector3();
  function resize() { const r = cv.getBoundingClientRect(), W = Math.max(1, cv.clientWidth), Hh = Math.max(1, cv.clientHeight), dpr = Math.min(2, window.devicePixelRatio || 1);
    const nps = Math.round(clamp(1.75 - ((r.height || Hh) - 380) / 440 * .6, 1.15, 1.75) * 20) / 20; if (nps !== PS) { PS = nps; people.forEach(q => { q.h = q.h0 * PS; q.w = q.h * q.ar; }); }
    if (W === cw && Hh === ch && dpr === dprv) return; cw = W; ch = Hh; dprv = dpr; pr = clamp((r.width * dpr) / W, .5, 2); pr = Math.min(pr, Math.sqrt((mobile ? 1.3e6 : 2.2e6) / (W * Hh))); prFloor = Math.max(Math.min(pr, .9), pr * .8); renderer.setPixelRatio(pr); renderer.setSize(W, Hh, false); camera.aspect = W / Hh; camera.updateProjectionMatrix(); }
  function frame(now) {
    if (S.dead) return; if (!document.contains(cv)) { dispose(); return; } S.raf = requestAnimationFrame(frame);
    const dt = Math.min(.1, (now - S.last) / 1000); S.last = now; S.t += dt; const t = S.t; resize();
    fpsT += dt; fpsN++; if (fpsT > 1.5) { const slowF = fpsT / fpsN > .024; if (slowF && renderer.shadowMap.enabled) { renderer.shadowMap.enabled = false; scene.traverse(m => { if (m.material) (Array.isArray(m.material) ? m.material : [m.material]).forEach(x => { x.needsUpdate = true; }); }); } else if (slowF && pr > prFloor + .01) { pr = Math.max(prFloor, pr * .9); renderer.setPixelRatio(pr); renderer.setSize(cw, ch, false); } fpsT = 0; fpsN = 0; }
    const h = hourNow(); if (Math.abs(h - lastH) > .02) { applyTime(h); lastH = h; updInfo(); shFlag = true; }
    /* 陰影範圍以 4 格為單位跟著角色挪（陰影貼圖和它的矩陣一起換，所以沒重畫時影子位置也不會錯），走路時不用每幀重畫陰影；樹會搖，所以每 0.5 秒還是重畫一次 */
    const sgx = Math.round(S.cam.x / 4) * 4, sgz = Math.round(S.cam.z / 4) * 4;
    shT -= dt; if (shFlag || shT <= 0 || sgx !== shX || sgz !== shZ) { renderer.shadowMap.needsUpdate = true; shX = sgx; shZ = sgz; shT = .5; shFlag = false; }
    const K = S.keys; if (K.q) S.yawT += dt * 1.8; if (K.e) S.yawT -= dt * 1.8;
    S.yaw += (S.yawT - S.yaw) * Math.min(1, dt * 9); S.pitch += (S.pitchT - S.pitch) * Math.min(1, dt * 9); S.dist += (S.distT - S.dist) * Math.min(1, dt * 6);
    const sy = Math.sin(S.yaw), cy = Math.cos(S.yaw); fwd.set(-sy, 0, -cy); rgt.set(cy, 0, -sy);
    /* 玩家移動 */
    me.moving = false;
    if (S.mode === 'walk' && !S.ent) {
      let vx = 0, vz = 0, lim = 1e9; const ix = (K.arrowright || K.d ? 1 : 0) - (K.arrowleft || K.a ? 1 : 0), iy = (K.arrowup || K.w ? 1 : 0) - (K.arrowdown || K.s ? 1 : 0);
      if (S.joy && Math.hypot(S.joy.x, S.joy.y) > .15) { vx = rgt.x * S.joy.x - fwd.x * S.joy.y; vz = rgt.z * S.joy.x - fwd.z * S.joy.y; lim = 5 * dt * Math.min(1, Math.hypot(S.joy.x, S.joy.y)); }
      else if (ix || iy) { vx = rgt.x * ix + fwd.x * iy; vz = rgt.z * ix + fwd.z * iy; }
      else if (S.tgt) { const nx = S.tgt.path[0]; if (!nx) { const fn = S.tgt.fn; S.tgt = null; fn && fn(); } else { const dx = nx[0] - me.x, dz = nx[1] - me.z, d = Math.hypot(dx, dz); if (d < .1) S.tgt.path.shift(); else { vx = dx; vz = dz; lim = d; } } }
      const l = Math.hypot(vx, vz); if (l > .01) { const stp = Math.min(5 * dt, lim), mx = vx / l * stp, mz = vz / l * stp; let moved = false;
        if (!blocked(me.x + mx, me.z + mz, .3)) { me.x += mx; me.z += mz; moved = true; } else if (!blocked(me.x + mx, me.z, .3)) { me.x += mx; moved = true; } else if (!blocked(me.x, me.z + mz, .3)) { me.z += mz; moved = true; }
        else { for (const da of [.6, -.6, 1.2, -1.2]) { const c = Math.cos(da), s = Math.sin(da), rx = (mx * c - mz * s) * .8, rz = (mx * s + mz * c) * .8; if (!blocked(me.x + rx, me.z + rz, .3)) { me.x += rx; me.z += rz; moved = true; break; } } }
        if (moved) { S.mvz = mz / Math.max(1e-6, Math.hypot(mx, mz)); me.moving = true; me.ph += dt * 10; const sd = (vx / l) * rgt.x + (vz / l) * rgt.z; if (Math.abs(sd) > .2) me.face = sd > 0 ? 1 : -1; } else if (S.tgt) { S.tgt.stuck = (S.tgt.stuck || 0) + dt; if (S.tgt.stuck > .5) { const fn = S.tgt.fn; S.tgt = null; fn && fn(); } }
        if (S.talk && Math.hypot(S.talk.x - me.x, S.talk.z - me.z) > 9) closeCard(); }
    }
    /* 門：靠近就浮出提示；往門裡走就自動開門進去 */
    nearDoor = null;
    if (S.mode === 'walk' && !S.ent) { let bd = 2.6; for (const d of DOORS) { const dd = Math.hypot(me.x - d.face.x, me.z - d.face.z); if (dd < bd) { bd = dd; nearDoor = d; } }
      if (nearDoor && (nearDoor.kind === 'home' || nearDoor.kind === 'shop') && bd < .8 && me.moving && (S.mvz || 0) * nearDoor.inw > .5) doorAct(nearDoor); }
    if (nearDoor && !S.ent) { const d = nearDoor, p = proj(new Vector3(d.face.x, d.s ? 3.1 : 2.95, d.face.z + d.inw * .5)), r = rect(); doorBtn.textContent = d.label; doorBtn.classList.toggle('off', d.kind === 'npc' || d.kind === 'closed'); doorBtn.style.left = (p.x - r.left) + 'px'; doorBtn.style.top = (p.y - r.top) + 'px'; doorBtn.classList.add('on'); }
    else doorBtn.classList.remove('on');
    if (S.ent) { const E = S.ent, d = E.d; E.t += dt;
      if (d.pivot) d.pivot.rotation.y = Math.min(1, E.t / .45) * 1.6;
      const k = clamp((E.t - .2) / .75, 0, 1), tx2 = d.face.x, tz2 = d.face.z + d.inw * 1.1; me.x = lerp(E.x0, tx2, k); me.z = lerp(E.z0, tz2, k); me.moving = k > 0 && k < 1; if (me.moving) me.ph += dt * 10;
      me.mat.opacity = 1 - clamp((E.t - .55) / .45, 0, 1); if (me.tag) me.tag.material.opacity = me.mat.opacity;
      if (E.t > 1.05 && !E.done) { E.done = 1; enterHouse(d.kind); } }
    if (S.closing) { S.closing.rotation.y = Math.max(0, S.closing.rotation.y - dt * 2.4); if (S.closing.rotation.y <= 0) S.closing = null; }
    /* 站在門前平台上就墊高一點 */
    me.y = 0; for (const hh of houseObjs) { if (+((hh.own ? D.ex : hh.ex).porch) && Math.abs(me.x - hh.x) < HW / 2 + .3) { const lz = (me.z - hh.z) * (hh.f === 2 ? -1 : 1); if (lz > 1.42 && lz < 3.15) me.y = .3; } }
    /* NPC */
    for (const p of npcs) { p.moving = false;
      if (p.state === 'talk') { p.face = (me.x - p.x) * rgt.x + (me.z - p.z) * rgt.z > 0 ? 1 : -1; continue; }
      if (p.state === 'idle') { p.t -= dt; if (p.t <= 0) npcNext(p); continue; }
      const dx = p.tx - p.x, dz = p.tz - p.z, d = Math.hypot(dx, dz); if (d < .1) { p.state = 'idle'; p.t = Math.random() < .3 ? rnd(3, 8) : rnd(.2, 1); continue; }
      const s = Math.min(d, p.sp * dt); p.x += dx / d * s; p.z += dz / d * s; p.moving = true; p.ph += dt * (4 + p.sp * 3); const sd = dx * rgt.x + dz * rgt.z; if (Math.abs(sd) > .05) p.face = sd > 0 ? 1 : -1; }
    /* 鏡頭 */
    let tx = me.x, tz = me.z; if (S.mode === 'edit') { tx = myHouse.x; tz = myHouse.z + (myHouse.f === 2 ? -1 : 1) * 3.2; }
    S.cam.x += (tx - S.cam.x) * Math.min(1, dt * 8); S.cam.z += (tz - S.cam.z) * Math.min(1, dt * 8); S.cam.y += ((S.mode === 'edit' ? 1.8 : 1.1) - S.cam.y) * Math.min(1, dt * 4);
    const aspect = cw / ch, dd = S.dist * (aspect < 1.4 ? 1.4 / aspect : 1);
    camPos.set(S.cam.x + sy * Math.cos(S.pitch) * dd, S.cam.y + Math.sin(S.pitch) * dd, S.cam.z + cy * Math.cos(S.pitch) * dd); if (camPos.y < .8) camPos.y = .8;
    /* 第一人稱：鏡頭放在角色眼睛高度，和第三人稱之間平滑過渡 */
    S.fpK += ((S.fp && S.mode === 'walk' && !S.ent ? 1 : 0) - S.fpK) * Math.min(1, dt * 5);
    const fpK = S.fpK, cpf = Math.cos(S.fpP), spf = Math.sin(S.fpP);
    /* 第一人稱走路的晃動：跟著腳步上下點、左右微晃（沒有這個會像用飄的） */
    S.bobA = (S.bobA || 0) + ((me.moving ? 1 : 0) - (S.bobA || 0)) * Math.min(1, dt * 8);
    const stp = me.ph * .9, bobY = (Math.abs(Math.sin(stp)) - .6) * .09 * S.bobA, bobX = Math.sin(stp) * .05 * S.bobA;  /* 麥塊式：一秒約 2.6～2.9 步，左右一步一邊 */
    eyeV.set(S.cam.x + rgt.x * bobX, me.y + 2.3 + bobY, S.cam.z + rgt.z * bobX);  /* 2026/11/26 原本 1.55 太低（像小孩視角），調高 */
    const upK = clamp((.3 - S.pitch) / .26, 0, 1);  /* 鏡頭壓得越低，看的點越往上抬（看得到天空） */
    lookV.set(S.cam.x, S.cam.y + .4 + upK * 2.2, S.cam.z); lookFP.set(eyeV.x - sy * cpf * 10, eyeV.y + spf * 10, eyeV.z - cy * cpf * 10);
    camPos.lerp(eyeV, fpK); lookV.lerp(lookFP, fpK);
    me.grp.visible = fpK < .5; me.sh.visible = fpK < .5; if (me.tag) me.tag.visible = fpK < .5;
    camera.position.copy(camPos); camera.lookAt(lookV); sky.position.copy(camPos);
    if (fpK > .01) { const k = S.bobA * fpK; camera.rotateZ(Math.sin(stp) * .007 * k); camera.rotateX(-Math.abs(Math.cos(stp)) * .004 * k); }  /* 踏步時畫面跟著微微歪、點一下 */
    sun.position.set(shX + 30, 60, shZ + 22); sun.target.position.set(shX, 0, shZ);
    if (S.night > .6) { sun.position.set(shX - 25, 50, shZ + 30); }
    /* 人 */
    for (const p of people) { const w = p.w, hh = p.h, walk = p.moving, s = Math.sin(p.ph), bob = walk ? Math.abs(s) * .06 : 0, tilt = walk ? s * .06 : Math.sin(t * 1.6 + p.ph) * .01, sq = walk ? 1 + Math.cos(p.ph * 2) * .025 : 1 + Math.sin(t * 1.6 + p.ph) * .008;
      p.grp.position.set(p.x, (p.y || 0) + bob, p.z); p.m.rotation.set(0, Math.atan2(camPos.x - p.x, camPos.z - p.z), tilt * p.face); p.m.scale.set(w * p.face * (2 - sq), hh * sq, 1); p.sh.position.set(p.x, (p.y || 0) + .07, p.z); p.sh.scale.set(w * .7, w * .4, 1);
      if (p.tag) p.tag.position.set(p.x, (p.y || 0) + hh + .35, p.z); if (p.bub) { p.bub.visible = p !== S.talk; p.bub.position.set(p.x, hh + .5 + Math.sin(t * 2.3 + p.ph) * .06, p.z); } }
    /* 動畫 */
    waveT.offset.set(t * .004, t * .006); water.forEach((w, i) => { if (i === 0) w.rotation.z = t * .3; else w.scale.y = 1 + Math.sin(t * 6) * .08; });
    clouds.children.forEach(c => { c.userData.a += dt * .004; c.position.x = Math.cos(c.userData.a) * c.userData.R; c.position.z = Math.sin(c.userData.a) * c.userData.R; c.lookAt(0, c.position.y, 0); });
    const bt = clouds.userData.boat; if (bt) { bt.position.y = -.2 + Math.sin(t * 1.2) * .08; bt.rotation.z = Math.sin(t * .9) * .04; }
    WIND.value = t; for (const [c, ph] of sway) { c.rotation.z = Math.sin(t * 1.1 + ph) * .018; c.rotation.x = Math.cos(t * .9 + ph) * .012; }
    renderer.render(scene, camera);
  }
  S.raf = requestAnimationFrame(frame);
  return ctl;
}
