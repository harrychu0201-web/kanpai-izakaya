/* 我的店（3D、可以走進去逛、可以自己布置）— Three.js。
   像動森那樣：自己的店可以擺家具、換地板牆壁；好友（或示範店）可以來逛、留言、送小禮物。
   角色沿用遊戲的動漫立牌（billboard）；家具、房子、街道、食物全部用 three.js 幾何體畫（models.js）。
   由 index.html 在作者／管理員打開「我的店」時才載入。建置：dev/home3d/build.sh → img/home3d-<hash>.js（全域 Home3D） */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, PointLight, Group, Mesh,
  BoxGeometry, PlaneGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, CircleGeometry, IcosahedronGeometry, RingGeometry,
  MeshBasicMaterial, MeshLambertMaterial, CanvasTexture, TextureLoader, SRGBColorSpace, Sprite, SpriteMaterial,
  Points, PointsMaterial, BufferGeometry, Float32BufferAttribute, BackSide, DoubleSide, RepeatWrapping, AdditiveBlending,
  Vector3, Raycaster, Plane, Vector2, WebGLRenderTarget, Box3,
} from 'three';
import { NPCS, KIND } from '../town3d/npcs.js';
import { ITEMS, IT, CATS, HCATS, FLOORS, WALLS, build, lam, bas, ctex, rrect, GLOW, FONT } from './models.js';

const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const LUT = new Uint8Array(256).map((_, i) => { const c = i / 255; return Math.round(255 * (c <= .0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055)); });
const yen = n => '¥' + Math.round(n).toLocaleString('en-US');

/* ───────── 尺寸 ───────── */
/* 室內大小可以花錢擴建（只有室內變大，島上的外觀不變）：[寬, 深, 價錢] */
export const SIZES = [[10, 8, 0], [12, 9, 50000], [14, 10, 150000], [16, 12, 400000]];
export const WH = 3.1;
export let RW = 10, RD = 8, D0 = 4, D1 = 6, DX = 5;                              // 店內 RW×RD 格，門在前牆正中間（寬 2 格）
let EX0, EX1, EZ1, YX0, YX1, YZ0, YZ1, BOARD, BCX, RESERVED;
function setDims(lv) {
  const z = SIZES[clamp(lv | 0, 0, SIZES.length - 1)]; RW = z[0]; RD = z[1]; D0 = RW / 2 - 1; D1 = RW / 2 + 1; DX = RW / 2;
  EX0 = -10; EX1 = RW + 10; EZ1 = RD + 9; YX0 = -4; YX1 = RW + 4; YZ0 = RD + 1; YZ1 = RD + 4;   // 店外可以走的範圍、門前庭院
  BOARD = { x: DX + 2.3, z: RD + 1.4 }; BCX = Math.floor(BOARD.x);              // 門口留言板
  RESERVED = new Set(); for (let zz = RD; zz < YZ1 + 1; zz++) for (let x = D0; x < D1; x++) RESERVED.add(x + ',' + zz); RESERVED.add(BCX + ',' + (RD + 1));
}
setDims(0);

export const STARS = [[0, '冷清小店'], [15, '溫暖小館'], [35, '熟客愛店'], [65, '街坊名店'], [100, '人氣名店'], [150, '傳說名店']];
export function cozyOf(d) {
  let c = 0; const cnt = {};
  for (const [k] of d.it || []) { const I = IT[k]; if (!I) continue; cnt[k] = (cnt[k] || 0) + 1; c += cnt[k] <= 2 ? I.c : I.c * .4; }
  if (d.fl && d.fl !== 'wood') c += 6; if (d.wa && d.wa !== 'tsuchi') c += 6;
  c += Object.keys(cnt).length * 1.5;                                          // 擺得越多樣越溫馨
  return Math.round(c);
}
export function starsOf(c) { let s = 0; STARS.forEach((x, i) => { if (c >= x[0]) s = i; }); return s; }
export const dailyIncome = c => Math.min(80000, 3000 + c * 400);
export function freshHome(name) {
  return { v: 1, name: name || '我的小店', fl: 'wood', wa: 'tsuchi', fo: { wood: 1 }, wo: { tsuchi: 1 }, cl: 0, gc: {},
    it: [['register', 7, 1, 0], ['counter', 4, 1, 0], ['stool', 4, 2, 0], ['stool', 5, 2, 0], ['table', 1, 4, 0], ['chair', 1, 3, 0], ['chair', 2, 5, 2], ['lantern', 8, 5, 0], ['menu', 3, 0, 0], ['beer', 1, 4, 0], ['edamame', 2, 4, 0], ['pine', 7, 1, 0]],
    inv: { chair: 2, maneki: 1, ajisai: 1, zabu: 2 } };
}
/* 島上自己房子的室內（家）預設布置 */
export function freshHomeInterior() {
  return { v: 1, fl: 'light', wa: 'cream', fo: { wood: 1, light: 1 }, wo: { tsuchi: 1, cream: 1 }, gc: {},
    it: [['tv', 1, 0, 0], ['carpet', 1, 1, 0], ['ctable', 1, 1, 0], ['sofa', 1, 3, 2], ['flamp', 0, 3, 0], ['mug', 1, 1, 0], ['kcounter', 4, 0, 0], ['fridge', 6, 0, 0], ['bed', 7, 0, 0], ['nstand', 9, 0, 0], ['dlamp', 9, 0, 0],
      ['table', 4, 3, 0], ['chair', 4, 2, 0], ['chair', 5, 4, 2], ['cake', 4, 3, 0], ['monstera', 0, 7, 0], ['wwin', 4, 0, 0], ['photos', 0, 2, 1], ['clock', 9, 3, 3], ['catbed', 9, 6, 0]],
    inv: { armchair: 1, books: 1, cactus: 1, teddy: 1 } };
}
/* 示範店（千代奶奶的店）：還沒有好友可以拜訪時，先看看別人的店長什麼樣子 */
export function demoHome() {
  return { v: 1, name: '千代的甜品屋', fl: 'tatami', wa: 'sakura', it: [
    ['register', 8, 1, 0], ['counter', 6, 1, 0], ['stool', 6, 2, 0], ['stool', 7, 2, 0], ['shelf', 4, 0, 0], ['scroll', 1, 0, 0], ['mado', 6, 0, 0], ['clock', 9, 2, 3],
    ['tatami', 0, 4, 0], ['chabu', 1, 5, 0], ['zabu', 0, 5, 0], ['zabu', 1, 6, 0], ['sushi', 1, 5, 0], ['tank', 9, 6, 0], ['sakura', 0, 1, 0], ['andon', 0, 3, 0],
    ['table', 5, 5, 0], ['chair', 5, 4, 0], ['chair', 6, 6, 2], ['ramen', 5, 5, 0], ['beer', 6, 5, 0], ['byobu', 3, 6, 1], ['hibachi', 8, 4, 0], ['maneki', 8, 1, 0],
    ['chochin', 2, 0, 0], ['ajisai', 9, 4, 0], ['tanuki', 9, 10, 0], ['stonel', 2, 9, 0], ['bamboo', 9, 9, 0], ['step', 6, 10, 0], ['barrel', 1, 9, 0], ['jukebox', 9, 0, 0],
  ] };
}

/* NPC 對擺設的感想（說到店裡真的有的東西） */
const REMARK = {
  tank: '金魚游來游去，看著看著就放鬆了～', sakura: '店裡居然有櫻花！好像一年到頭都是春天。', tanuki: '這隻狸貓的肚子……我可以摸一下嗎？',
  jukebox: '唱片機的聲音沙沙的，好有味道。', hibachi: '火鉢暖暖的，手伸過去烤一下好舒服。', byobu: '屏風後面的位子，適合講悄悄話。',
  shelf: '這一整櫃清酒……老闆一定很懂酒。', stonel: '門口的石燈籠好有氣氛，像在京都。', mado: '圓窗外面的月亮好圓。', fuji: '牆上那幅富士山，看了心情就開闊。',
  maneki: '招財貓在跟我招手！今天一定有好事。', scroll: '「一期一會」……這句話真好。', andon: '行燈的光軟軟的，眼睛好舒服。', chochin: '燈籠串一亮，就像在過祭典。',
  tatami: '榻榻米的味道，好像回到外婆家。', bamboo: '竹子沙沙的，聽起來好涼。', ajisai: '紫陽花開得好漂亮。', clock: '這個掛鐘滴答滴答的，時間都慢下來了。',
  ramen: '桌上那碗拉麵好香……可以點一樣的嗎？', yakitori: '串燒的味道把我拉進來的！', sushi: '這盤壽司好漂亮，捨不得吃。', barrel: '酒樽上寫著「祝」，今天是什麼好日子嗎？',
};
const GIFTS = ['daruma', 'maneki', 'beer', 'vase', 'pine', 'sake'];

const CSS = `
.h3hud{position:absolute;right:max(14px,env(safe-area-inset-right));top:96px;display:flex;flex-direction:column;gap:12px;z-index:3}
.h3b{min-width:92px;min-height:76px;border-radius:20px;border:3px solid #2a1810;background:#fff6e0;color:#3a1e0c;font-weight:900;font-size:19px;line-height:1.15;padding:6px 10px;box-shadow:0 5px 0 #0007;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.h3b i{font-style:normal;font-size:30px;line-height:1}
.h3b:active{transform:translateY(3px);box-shadow:0 2px 0 #0007}
.h3b.hot{background:#ffd27a}
.h3b:disabled{opacity:.45}
.h3info{position:absolute;left:max(12px,env(safe-area-inset-left));top:92px;background:#2a1810d9;color:#fff3d6;border:2px solid #ffd27a;border-radius:16px;padding:8px 14px;font-size:16px;line-height:1.35;z-index:3;pointer-events:none;max-width:44%}
.h3info b{font-size:20px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.h3info .h3st{color:#ffd34d;letter-spacing:1px}
.h3cam{position:absolute;left:max(14px,env(safe-area-inset-left));bottom:26px;display:flex;gap:14px;z-index:3}
.h3cam button{width:80px;height:80px;border-radius:50%;border:4px solid #ffffffcc;background:#2a1810cc;color:#fff3d6;font-size:40px;line-height:1;padding:0;touch-action:none;user-select:none;-webkit-user-select:none}
.h3cam button:active{background:#6b3a1ab3}
.h3hint{position:absolute;left:50%;bottom:30px;transform:translateX(-50%);background:#2a1810d9;color:#fff3d6;border:2px solid #ffd27a;border-radius:999px;padding:7px 18px;font-size:16px;font-weight:700;pointer-events:none;opacity:0;transition:opacity .25s;white-space:nowrap;z-index:3}
.h3hint.on{opacity:1}
.h3toast{position:absolute;left:50%;top:150px;transform:translateX(-50%);background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:14px;padding:8px 18px;font-size:18px;font-weight:800;box-shadow:0 5px 0 #0006;opacity:0;transition:opacity .25s;pointer-events:none;z-index:9;white-space:nowrap}
.h3toast.on{opacity:1}
.h3j{position:absolute;width:110px;height:110px;margin:-55px 0 0 -55px;border-radius:50%;background:#ffffff1f;border:3px solid #ffffff99;pointer-events:none;display:none;z-index:2}
.h3j i{position:absolute;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#ffffffd9}
.h3card{position:absolute;bottom:26px;left:12px;width:min(470px,calc(48% - 6px));background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:16px;box-shadow:0 6px 0 #0006;padding:8px 10px;display:none;font-size:16px;line-height:1.45;z-index:6}
.h3card.r{left:auto;right:12px}
.h3card.on{display:block;animation:h3pop .16s ease-out}
@keyframes h3pop{from{transform:scale(.94);opacity:0}to{transform:scale(1);opacity:1}}
.h3h{display:flex;align-items:center;gap:10px;margin-bottom:6px}
.h3av{flex:none;width:46px;height:46px;border-radius:50%;border:2px solid #2a1810;background-color:#e9d3a4;background-repeat:no-repeat;background-size:230% auto;background-position:50% 3%}
.h3nm{flex:1;min-width:0;line-height:1.25}.h3nm b{font-size:17px;display:block}.h3nm small{font-size:12px;opacity:.7}
.h3k{flex:none;border:2px solid #2a1810;border-radius:999px;padding:1px 8px;font-size:12px;font-weight:700;white-space:nowrap}
.h3x{flex:none;width:68px;height:68px;border-radius:50%;border:4px solid #2a1810;background:#fff;font-size:40px;line-height:1;padding:0;color:#3a1e0c}
.h3t{font-size:17px}.h3t.mind{font-style:italic;color:#4a3a78}
.h3bt{display:flex;justify-content:flex-end;gap:10px;margin-top:6px;flex-wrap:wrap}
.h3n{border:2px solid #2a1810;border-radius:999px;background:#ffd27a;color:#3a1e0c;font-weight:800;font-size:20px;padding:0 26px;min-height:68px}
.h3n.alt{background:#fff}
.h3n:disabled{opacity:.45}
.h3bp{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(#2a1810e6,#1a0e08f2);border-top:3px solid #ffd27a;z-index:5;padding:6px max(10px,env(safe-area-inset-right)) 10px max(10px,env(safe-area-inset-left));display:none}
.h3bp.on{display:block}
.h3tabs{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:6px}
.h3tabs::-webkit-scrollbar{display:none}
.h3tab{flex:none;border:2px solid #ffd27a;background:#3a2214;color:#fff3d6;border-radius:999px;font-size:16px;font-weight:800;padding:0 16px;min-height:52px}
.h3tab.on{background:#ffd27a;color:#3a1e0c}
.h3row{display:flex;gap:8px;overflow-x:auto;scrollbar-width:thin;padding:2px 2px 4px}
.h3it{flex:none;width:112px;border:3px solid #2a1810;border-radius:14px;background:#fff6e0;color:#3a1e0c;padding:4px 4px 6px;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:13px;font-weight:800;line-height:1.15;position:relative}
.h3it img,.h3it .ph{width:84px;height:84px;object-fit:contain;border-radius:10px;background:radial-gradient(#fff,#f0dcb0)}
.h3it .pr{font-size:13px;color:#8a3a14}
.h3it .ow{position:absolute;top:2px;right:4px;background:#2f8a4a;color:#fff;border-radius:999px;padding:0 7px;font-size:13px}
.h3it.cur{outline:4px solid #ffb02a}
.h3it.no{opacity:.55}
.h3sel{position:absolute;right:max(14px,env(safe-area-inset-right));bottom:214px;display:none;gap:10px;z-index:6}
.h3sel.on{display:flex}
.h3top{position:absolute;left:50%;top:96px;transform:translateX(-50%);display:none;z-index:4;background:#2a1810d9;border:2px solid #ffd27a;border-radius:999px;padding:6px 16px;color:#fff3d6;font-weight:800;font-size:15px;white-space:nowrap;pointer-events:none;max-width:56%;overflow:hidden;text-overflow:ellipsis}
.h3top.on{display:flex}
.h3pan{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(620px,92%);max-height:84%;overflow:auto;background:#fff6e0;color:#3a1e0c;border:3px solid #2a1810;border-radius:18px;box-shadow:0 8px 0 #0007;padding:12px 16px;z-index:8;display:none;font-size:16px}
.h3pan.on{display:block;animation:h3pop .16s ease-out}
.h3pan h3{margin:0 0 8px;font-size:22px}
.h3pan .msg{border-bottom:1px dashed #c8a878;padding:6px 2px}
.h3pan .msg b{color:#8a3a14}.h3pan .msg small{opacity:.6;margin-left:6px}
.h3pan textarea,.h3pan input{width:100%;box-sizing:border-box;font-size:17px;border:2px solid #2a1810;border-radius:10px;padding:8px;font-family:inherit;background:#fff}
.h3pan .gifts{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
.h3pan .gifts button{border:3px solid #2a1810;border-radius:12px;background:#fff;min-height:56px;padding:0 12px;font-size:15px;font-weight:800}
.h3pan .gifts button.on{background:#ffd27a}
@media (max-height:520px){
.h3hud{top:64px;gap:8px}.h3b{min-width:70px;min-height:56px;font-size:14px;border-radius:15px;padding:3px 8px;border-width:2px}.h3b i{font-size:21px}
.h3info{top:64px;font-size:12px;padding:4px 10px;border-radius:12px}.h3info b{font-size:15px}
.h3top{top:64px;font-size:13px;padding:4px 12px}
.h3cam{bottom:12px;gap:10px}.h3cam button{width:58px;height:58px;font-size:28px;border-width:3px}
.h3bp{padding-top:4px;padding-bottom:5px}.h3tab{min-height:44px;font-size:14px;padding:0 11px}.h3tabs{padding-bottom:4px;gap:5px}
.h3it{width:82px;font-size:11.5px;padding:3px 3px 4px;border-width:2px}.h3it img,.h3it .ph{width:54px;height:54px}.h3it .pr{font-size:11.5px}
.h3card{bottom:10px;font-size:14px;padding:6px 8px;width:min(430px,calc(52% - 6px))}.h3x{width:48px;height:48px;font-size:28px;border-width:3px}.h3n{min-height:48px;font-size:16px;padding:0 16px}.h3t{font-size:14.5px}.h3av{width:36px;height:36px}.h3h{margin-bottom:2px}
.h3pan{max-height:88%;padding:8px 12px;font-size:14px}.h3pan h3{font-size:17px;margin-bottom:4px}.h3pan textarea,.h3pan input{font-size:16px;padding:6px}.h3pan .gifts button{min-height:46px;font-size:13px}
.h3toast{top:70px;font-size:15px}
}
.home .modal.h3m::after{display:none}
.h3door{position:absolute;transform:translate(-50%,-100%);z-index:4;border:3px solid #3a2a1a;border-radius:999px;background:#fff8ea;color:#3a2a1a;font-weight:900;font-size:17px;min-height:50px;padding:0 18px;box-shadow:0 4px 0 #0004;display:none;white-space:nowrap}
.h3door.on{display:block}
.h3door:after{content:'';position:absolute;left:50%;bottom:-11px;margin-left:-8px;border:8px solid transparent;border-top-color:#3a2a1a}
.h3load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff3d6;font-size:18px;background:#140f2e;z-index:9}
`;

export const H3CSS = CSS;
export { island, EXO, defaultEx } from './island.js';
export function start(o) {
  setDims(o.data && o.data.sz);
  const cv = o.cv, root = o.root, cb = o.cb || {};
  const own = !!o.own, HOME = o.kind === 'home', ISL = !!o.island;
  const D = o.data || freshHome();
  D.it = (D.it || []).filter(e => IT[e[0]]); D.inv = D.inv || {}; D.fo = D.fo || { wood: 1 }; D.wo = D.wo || { tsuchi: 1 }; D.gc = D.gc || {};
  if (!document.getElementById('h3css')) { const s = document.createElement('style'); s.id = 'h3css'; s.textContent = CSS; document.head.appendChild(s); }

  const renderer = new WebGLRenderer({ canvas: cv, antialias: (window.devicePixelRatio || 1) < 2, powerPreference: 'high-performance', preserveDrawingBuffer: !!o.test });
  renderer.setClearColor(0x1a1536, 1);
  const scene = new Scene();
  scene.fog = new Fog(0x3a2848, 26, 80);
  const camera = new PerspectiveCamera(40, 2, 0.2, 500);
  const TL = new TextureLoader();
  const loadTex = (url, cb2) => TL.load(url, t => { t.colorSpace = SRGBColorSpace; t.anisotropy = 4; cb2 && cb2(t); });

  /* ───────── 天空、燈光 ───────── */
  const skyG = new SphereGeometry(250, 24, 16);
  { const col = [], p = skyG.attributes.position, c1 = new Color('#121032'), c2 = new Color('#7a4058'), c3 = new Color('#3a2350'), t = new Color();
    for (let i = 0; i < p.count; i++) { const y = p.getY(i) / 250; if (y > 0.25) t.copy(c3).lerp(c1, clamp((y - .25) / .55, 0, 1)); else t.copy(c2).lerp(c3, clamp((y + .05) / .3, 0, 1)); col.push(t.r, t.g, t.b); }
    skyG.setAttribute('color', new Float32BufferAttribute(col, 3)); }
  const sky = new Mesh(skyG, new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false })); sky.renderOrder = -10; scene.add(sky);
  { const pts = [], r = mulberry(11); for (let i = 0; i < 300; i++) { const a = r() * Math.PI * 2, e = .2 + r() * 1.2, R = 230; pts.push(Math.cos(a) * Math.cos(e) * R, Math.sin(e) * R, Math.sin(a) * Math.cos(e) * R); }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pts, 3));
    sky.add(new Points(g, new PointsMaterial({ color: 0xfff3d0, size: 2.2, sizeAttenuation: false, fog: false, transparent: true, opacity: .85, depthWrite: false }))); }
  { const mt = ctex(128, 128, x => { const g = x.createRadialGradient(64, 64, 20, 64, 64, 64); g.addColorStop(0, 'rgba(255,246,214,1)'); g.addColorStop(.5, 'rgba(255,240,200,1)'); g.addColorStop(.52, 'rgba(255,230,180,.25)'); g.addColorStop(1, 'rgba(255,230,180,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); });
    const moon = new Sprite(new SpriteMaterial({ map: mt, fog: false, depthWrite: false })); moon.scale.set(40, 40, 1); moon.position.set(-90, 120, -170); sky.add(moon); }
  const hemiL = new HemisphereLight(0xb8aef0, 0x5a4048, 1.15); scene.add(hemiL);
  const HR = (() => { const d = new Date(); return o.hour != null ? o.hour : d.getHours() + d.getMinutes() / 60; })();
  const NIGHT = HR < 5 || HR >= 19.5 ? 1 : HR < 6.5 ? (6.5 - HR) / 1.5 : HR > 17.5 ? (HR - 17.5) / 2 : 0;
  const dl = new DirectionalLight(0xffe0b8, .7); dl.position.set(-6, 12, 10); scene.add(dl);
  const warm1 = new PointLight(0xffb060, 14, 13, 1.3); warm1.position.set(RW * .3, 2.7, RD * .45); scene.add(warm1);
  const warm2 = new PointLight(0xffb060, 14, 13, 1.3); warm2.position.set(RW * .72, 2.7, RD * .55); scene.add(warm2);
  const doorL = new PointLight(0xffa050, 10, 9, 1.4); doorL.position.set(DX, 2.4, RD + 1.4); scene.add(doorL);

  /* ───────── 共用貼圖 ───────── */
  const shadowT = ctex(64, 64, x => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(0,0,0,.7)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); });
  const rep = (t, rx, ry) => { const c = t.clone(); c.wrapS = c.wrapT = RepeatWrapping; c.repeat.set(rx, ry); c.needsUpdate = true; return c; };
  function box(w, h, d, m, x, y, z, par) { const o2 = new Mesh(new BoxGeometry(w, h, d), m); o2.position.set(x, y, z); (par || scene).add(o2); return o2; }
  function glowS(x, y, z, s, op, par, col) { const sp = new Sprite(new SpriteMaterial({ map: GLOW, blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: op })); if (col) sp.material.color.set(col); sp.scale.set(s, s, 1); sp.position.set(x, y, z); (par || scene).add(sp); return sp; }

  /* ───────── 地板、牆壁貼圖（依種類） ───────── */
  const floorTex = {
    wood: () => ctex(256, 256, (x, w, h) => { const r = mulberry(4); for (let j = 0; j < 8; j++) { const v = r(); x.fillStyle = `hsl(28,${42 + v * 10}%,${44 + v * 8}%)`; x.fillRect(0, j * 32, w, 32); x.fillStyle = 'rgba(60,30,10,.35)'; x.fillRect(0, j * 32, w, 2); x.fillRect((r() * 256) | 0, j * 32, 2, 32); for (let k = 0; k < 6; k++) { x.fillStyle = 'rgba(90,50,20,.12)'; x.fillRect(r() * w, j * 32 + 6 + r() * 20, 40 + r() * 60, 2); } } }),
    dark: () => ctex(256, 256, (x, w, h) => { const r = mulberry(8); for (let j = 0; j < 8; j++) { const v = r(); x.fillStyle = `hsl(20,${30 + v * 10}%,${22 + v * 7}%)`; x.fillRect(0, j * 32, w, 32); x.fillStyle = 'rgba(0,0,0,.4)'; x.fillRect(0, j * 32, w, 2); x.fillRect((r() * 256) | 0, j * 32, 2, 32); for (let k = 0; k < 5; k++) { x.fillStyle = 'rgba(255,220,180,.05)'; x.fillRect(r() * w, j * 32 + 6 + r() * 20, 40 + r() * 60, 2); } } }),
    tatami: () => ctex(256, 256, (x, w, h) => { for (let q = 0; q < 2; q++) { const ox = q * 128; x.fillStyle = '#c4c078'; x.fillRect(ox, 0, 128, h); for (let i = 0; i < h; i += 3) { x.fillStyle = i % 6 ? '#b8b46c' : '#cfcb84'; x.fillRect(ox, i, 128, 1); } x.fillStyle = '#2a3a2a'; x.fillRect(ox, 0, 6, h); x.fillRect(ox + 122, 0, 6, h); } }),
    stone: () => ctex(256, 256, (x, w, h) => { x.fillStyle = '#5a5250'; x.fillRect(0, 0, w, h); const r = mulberry(6); for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { const v = (r() * 18) | 0; x.fillStyle = `rgb(${120 + v},${112 + v},${104 + v})`; x.fillRect(i * 64 + 3 + (j % 2) * 8, j * 64 + 3, 58, 58); } }),
    light: () => ctex(256, 256, (x, w, h) => { const r = mulberry(12); for (let j = 0; j < 8; j++) { const v = r(); x.fillStyle = `hsl(34,${48 + v * 10}%,${70 + v * 6}%)`; x.fillRect(0, j * 32, w, 32); x.fillStyle = 'rgba(120,80,40,.25)'; x.fillRect(0, j * 32, w, 2); x.fillRect((r() * 256) | 0, j * 32, 2, 32); for (let k = 0; k < 6; k++) { x.fillStyle = 'rgba(160,110,60,.1)'; x.fillRect(r() * w, j * 32 + 6 + r() * 20, 40 + r() * 60, 2); } } }),
    carpetf: () => ctex(256, 256, (x, w, h) => { x.fillStyle = '#e8dcc4'; x.fillRect(0, 0, w, h); const r = mulberry(14); for (let i = 0; i < 3000; i++) { x.fillStyle = r() < .5 ? 'rgba(200,180,150,.35)' : 'rgba(255,250,240,.4)'; x.fillRect(r() * w, r() * h, 2, 2); } }),
    check: () => ctex(256, 256, (x, w, h) => { for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { x.fillStyle = (i + j) % 2 ? '#2a3a36' : '#d8c8a0'; x.fillRect(i * 64, j * 64, 64, 64); } x.strokeStyle = 'rgba(0,0,0,.2)'; x.lineWidth = 2; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, h); x.moveTo(0, i * 64); x.lineTo(w, i * 64); x.stroke(); } }),
  };
  function wallTex(type, L) {
    const PX = 64, w = Math.round(L * PX), h = Math.round(WH * PX);
    return ctex(w, h, (x) => {
      const r = mulberry(L * 7 | 0);
      if (type === 'plank') { for (let i = 0; i < w; i += 22) { const v = r(); x.fillStyle = `hsl(28,${36 + v * 8}%,${40 + v * 8}%)`; x.fillRect(i, 0, 22, h); x.fillStyle = 'rgba(40,20,10,.4)'; x.fillRect(i, 0, 2, h); } }
      else if (type === 'red') { x.fillStyle = '#b8402e'; x.fillRect(0, 0, w, h); for (let i = 0; i < 300; i++) { x.fillStyle = r() < .5 ? 'rgba(255,200,160,.05)' : 'rgba(60,10,0,.06)'; x.fillRect(r() * w, r() * h, 8, 8); } x.fillStyle = '#5a2a14'; for (let i = 0; i < w; i += PX * 2) x.fillRect(i, 0, 8, h); }
      else if (type === 'ai') { x.fillStyle = '#26365e'; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(230,224,208,.5)'; x.lineWidth = 2; for (let j = 0; j < h; j += 24) for (let i = (j / 24 % 2) * 12; i < w; i += 24) { x.beginPath(); x.arc(i, j, 9, Math.PI, 0); x.stroke(); } }
      else if (type === 'sakura') { x.fillStyle = '#f6e6e4'; x.fillRect(0, 0, w, h); for (let i = 0; i < w * h / 900; i++) { const px = r() * w, py = r() * h; x.fillStyle = ['#f0b8c8', '#e898b0', '#f8d0dc'][i % 3]; for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; x.beginPath(); x.ellipse(px + Math.cos(a) * 4, py + Math.sin(a) * 4, 3.5, 2, a, 0, 7); x.fill(); } } }
      else if (type === 'cream') { x.fillStyle = '#fbf3e2'; x.fillRect(0, 0, w, h); for (let i = 0; i < w * h / 80; i++) { x.fillStyle = 'rgba(230,210,180,.18)'; x.fillRect(r() * w, r() * h, 2, 2); } }
      else if (type === 'stripe') { for (let i = 0; i < w; i += 24) { x.fillStyle = (i / 24) % 2 ? '#f6ecd8' : '#cfe6e0'; x.fillRect(i, 0, 24, h); } }
      else if (type === 'flower') { x.fillStyle = '#fff6ea'; x.fillRect(0, 0, w, h); for (let j = 12; j < h; j += 30) for (let i = (j / 30 % 2) * 16; i < w; i += 32) { x.fillStyle = ['#f29ab8', '#f6cf4a', '#8ac8e8'][(i + j) % 3]; for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; x.beginPath(); x.arc(i + Math.cos(a) * 4, j + Math.sin(a) * 4, 3, 0, 7); x.fill(); } x.fillStyle = '#fff'; x.beginPath(); x.arc(i, j, 2, 0, 7); x.fill(); } }
      else if (type === 'mint') { x.fillStyle = '#bfe6d8'; x.fillRect(0, 0, w, h); for (let i = 0; i < w * h / 70; i++) { x.fillStyle = r() < .5 ? 'rgba(255,255,255,.12)' : 'rgba(60,120,100,.06)'; x.fillRect(r() * w, r() * h, 3, 3); } }
      else { x.fillStyle = '#e8d4ae'; x.fillRect(0, 0, w, h); for (let i = 0; i < w * h / 60; i++) { x.fillStyle = r() < .5 ? 'rgba(160,120,70,.08)' : 'rgba(255,255,240,.1)'; x.fillRect(r() * w, r() * h, 3, 3); } x.fillStyle = '#6b3f1f'; for (let i = 0; i < w; i += PX * 2.5) x.fillRect(i, 0, 10, h); }
      /* 腰板 + 橫樑 */
      const wy = h - .9 * PX; x.fillStyle = HOME ? '#f4efe2' : '#5a3218'; x.fillRect(0, wy, w, .9 * PX); x.fillStyle = HOME ? 'rgba(0,0,0,.08)' : 'rgba(0,0,0,.25)'; for (let i = 0; i < w; i += 28) x.fillRect(i, wy, 2, .9 * PX); x.fillStyle = HOME ? '#d8c8a8' : '#3a1e0c'; x.fillRect(0, wy - 6, w, 8); x.fillRect(0, 0, w, 10);
    });
  }

  const envA0 = scene.children.length;
  /* ───────── 地面與街道 ───────── */
  const stoneT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#4a4246'; x.fillRect(0, 0, w, h); const r = mulberry(3); for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { const sh = (r() * 16 | 0) - 8; x.fillStyle = `rgb(${96 + sh},${86 + sh},${84 + sh})`; x.fillRect(i * 64 + 2, j * 64 + 2, 60, 60); } });
  const roadT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#2c2830'; x.fillRect(0, 0, w, h); const r = mulberry(5); for (let i = 0; i < 700; i++) { const v = 34 + (r() * 22 | 0); x.fillStyle = `rgb(${v},${v - 3},${v + 4})`; x.fillRect(r() * w, r() * h, 2, 2); } });
  { const g = new Mesh(new PlaneGeometry(600, 600), lam('#1c1826')); g.rotation.x = -Math.PI / 2; g.position.y = -.04; scene.add(g); }
  { const L = EX1 - EX0 + 30, cx = (EX0 + EX1) / 2;
    const side = new Mesh(new PlaneGeometry(L, 6.2), lam('#ffffff', { map: rep(stoneT, L / 3, 6.2 / 3) })); side.rotation.x = -Math.PI / 2; side.position.set(cx, .005, RD + 3.1); scene.add(side);
    const road = new Mesh(new PlaneGeometry(L, 6), lam('#ffffff', { map: rep(roadT, L / 6, 1) })); road.rotation.x = -Math.PI / 2; road.position.set(cx, .0, RD + 9.2); scene.add(road);
    for (let x = EX0 - 14; x < EX1 + 14; x += 3.4) box(1.7, .02, .14, bas('#cfc8b4'), x, .02, RD + 9.2);
    box(L, .16, .2, lam('#7a6e66'), cx, .08, RD + 6.15);
    const far = new Mesh(new PlaneGeometry(L, 5), lam('#ffffff', { map: rep(stoneT, L / 3, 5 / 3) })); far.rotation.x = -Math.PI / 2; far.position.set(cx, .005, RD + 14.7); scene.add(far); }
  const envA1 = scene.children.length;
  /* 店內地板 */
  const floorM = new MeshLambertMaterial({ color: '#ffffff' });
  const floor = new Mesh(new PlaneGeometry(RW, RD), floorM); floor.rotation.x = -Math.PI / 2; floor.position.set(RW / 2, .02, RD / 2); scene.add(floor);
  function setFloor(type) { if (floorM.map) floorM.map.dispose(); const t = (floorTex[type] || floorTex.wood)(); t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(RW / 2, RD / 2); floorM.map = t; floorM.needsUpdate = true; }
  box(RW + .4, .12, RD + .4, lam('#2a1810'), RW / 2, -.075, RD / 2);

  /* ───────── 牆（店內看得到時，擋住鏡頭的那面會降下來） ───────── */
  const wallIn = { back: new MeshLambertMaterial(), left: new MeshLambertMaterial(), right: new MeshLambertMaterial(), front: new MeshLambertMaterial() };
  const extWallT = ctex(256, 200, (x, w, h) => { x.fillStyle = '#5a3a24'; x.fillRect(0, 0, w, h); for (let i = 0; i < w; i += 16) { x.fillStyle = i % 32 ? '#4a2e1c' : '#6a4630'; x.fillRect(i, 0, 14, h); } x.fillStyle = '#2a1810'; x.fillRect(0, h - 40, w, 40); });
  const extM = new MeshLambertMaterial({ map: rep(extWallT, 3, 1) });
  const edgeM = lam('#3a2214');
  const walls = {};
  function mkWall(name, w, d, x, z, mats) { const g = new Group(); g.position.set(x, 0, z); scene.add(g); const m = new Mesh(new BoxGeometry(w, WH, d), mats); m.position.y = WH / 2; g.add(m); walls[name] = walls[name] || []; walls[name].push(g); return g; }
  mkWall('back', RW + .4, .2, RW / 2, -.1, [edgeM, edgeM, edgeM, edgeM, wallIn.back, extM]);
  mkWall('left', .2, RD, -.1, RD / 2, [wallIn.left, extM, edgeM, edgeM, edgeM, edgeM]);
  mkWall('right', .2, RD, RW + .1, RD / 2, [extM, wallIn.right, edgeM, edgeM, edgeM, edgeM]);
  /* 前牆（門口開口）：外面是店面門面 */
  const facT = ctex(640, 200, (x, w, h) => {
    x.fillStyle = '#6a4228'; x.fillRect(0, 0, w, h); for (let i = 0; i < w; i += 14) { x.fillStyle = i % 28 ? '#5a3620' : '#74482c'; x.fillRect(i, 0, 12, h); }
    const win = wx => { x.fillStyle = '#ffd98a'; x.fillRect(wx, 56, 128, 70); x.strokeStyle = '#2a1408'; x.lineWidth = 6; x.strokeRect(wx, 56, 128, 70); x.lineWidth = 3; for (let i = 1; i < 4; i++) { x.beginPath(); x.moveTo(wx + i * 32, 56); x.lineTo(wx + i * 32, 126); x.stroke(); } x.beginPath(); x.moveTo(wx, 91); x.lineTo(wx + 128, 91); x.stroke(); };
    win(64); win(448); x.fillStyle = '#2a1810'; x.fillRect(0, h - 40, w, 40);
  });
  const facM = new MeshBasicMaterial({ map: facT });
  const frontMat = (u0, u1) => { const m = new MeshBasicMaterial({ map: facT.clone() }); m.map.needsUpdate = true; m.map.repeat.set(u1 - u0, 1); m.map.offset.set(u0, 0); return m; };
  mkWall('front', D0 + .2, .2, (D0 - .2) / 2, RD + .1, [edgeM, edgeM, edgeM, edgeM, frontMat(0, (D0 + .2) / (RW + .4)), wallIn.front]);
  mkWall('front', RW - D1 + .2, .2, (D1 + RW + .2) / 2, RD + .1, [edgeM, edgeM, edgeM, edgeM, frontMat((D1 + .2) / (RW + .4), 1), wallIn.front]);
  { const g = new Group(); g.position.set(DX, 0, RD + .1); scene.add(g); box(D1 - D0, WH - 2.35, .2, lam('#4a2a14'), 0, 2.35 + (WH - 2.35) / 2, 0, g); walls.front.push(g); }
  function setWall(type) {
    const sz = { back: RW + .4, left: RD, right: RD, front: RW + .4 };
    for (const k in wallIn) { const m = wallIn[k]; if (m.map) m.map.dispose(); m.map = wallTex(type, sz[k]); m.needsUpdate = true; }
  }
  /* 門框、暖簾、招牌、門口燈籠（屬於前牆，跟著前牆一起降） */
  const facade = new Group(); scene.add(facade); walls.front.push(facade);
  const wood = lam('#3a2214');
  box(.22, 2.45, .34, wood, D0 + .05, 1.22, RD + .14, facade); box(.22, 2.45, .34, wood, D1 - .05, 1.22, RD + .14, facade); box(D1 - D0 + .4, .24, .38, wood, DX, 2.42, RD + .14, facade);
  const nor = new Group(); nor.position.set(DX, 2.32, RD + .3); facade.add(nor);
  const norT = ctex(256, 140, (cx, w, h) => { for (let i = 0; i < 3; i++) { const px = 4 + i * 84; cx.fillStyle = '#23315c'; cx.fillRect(px, 0, 80, h - 6); cx.fillStyle = 'rgba(0,0,0,.22)'; cx.fillRect(px, h - 16, 80, 10); } cx.fillStyle = '#f3e6c8'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.font = `900 50px ${FONT}`; ['営', '業', '中'].forEach((c, i) => cx.fillText(c, 44 + i * 84, 56)); });
  const norM = new Mesh(new PlaneGeometry(1.95, 1.05), new MeshBasicMaterial({ map: norT, transparent: true, side: DoubleSide, alphaTest: .05 })); norM.position.y = -.52; nor.add(norM);
  const signC = document.createElement('canvas'); signC.width = 640; signC.height = 140; const signT = new CanvasTexture(signC); signT.colorSpace = SRGBColorSpace; signT.anisotropy = 4;
  function drawSign() { const x = signC.getContext('2d'), w = 640, h = 140; x.clearRect(0, 0, w, h); x.fillStyle = '#f3e2bd'; x.strokeStyle = '#2a1810'; x.lineWidth = 10; rrect(x, 6, 6, w - 12, h - 12, 16); x.fill(); x.stroke(); x.fillStyle = '#3a1e0c'; x.textAlign = 'center'; x.textBaseline = 'middle'; let fs = 72; const s = D.name || ''; x.font = `900 ${fs}px ${FONT}`; while (x.measureText(s).width > w - 60 && fs > 24) { fs -= 2; x.font = `900 ${fs}px ${FONT}`; } x.fillText(s, w / 2, h / 2 + 4); signT.needsUpdate = true; }
  drawSign();
  { const sm = new Mesh(new BoxGeometry(3.6, .76, .12), [wood, wood, wood, wood, new MeshBasicMaterial({ map: signT }), wood]); sm.position.set(DX, 2.86, RD + .34); facade.add(sm); }
  const doorLan = [];
  for (const sx of [D0 - .45, D1 + .45]) { const lg = new Group(); lg.position.set(sx, 1.95, RD + .45); facade.add(lg); const b = new Mesh(new SphereGeometry(.28, 16, 12), bas('#e2452f')); b.scale.y = 1.3; lg.add(b); box(.26, .06, .26, bas('#2a1810'), 0, .38, 0, lg); box(.26, .06, .26, bas('#2a1810'), 0, -.38, 0, lg); doorLan.push(glowS(0, 0, .12, 2.3, .55, lg)); }
  /* 屋頂（人在店外才出現） */
  const roof = new Group(); scene.add(roof);
  { const tileT = ctex(128, 128, (x, w, h) => { x.fillStyle = '#2c3044'; x.fillRect(0, 0, w, h); for (let j = 0; j < h; j += 16) { x.fillStyle = '#3a4058'; x.fillRect(0, j, w, 3); for (let i = (j / 16 % 2) * 16; i < w; i += 32) { x.fillStyle = '#20242f'; x.fillRect(i, j, 2, 16); } } });
    const rm = new MeshLambertMaterial({ map: rep(tileT, 6, 3) });
    const sl = Math.hypot(RD / 2 + .9, 1.6);
    for (const s of [-1, 1]) { const p = new Mesh(new BoxGeometry(RW + 1.6, .14, sl), rm); p.position.set(RW / 2, WH + 1.5, RD / 2 + s * (RD / 4 + .45)); p.rotation.x = s * Math.atan2(1.6, RD / 2 + .9); roof.add(p); }
    const gab = new Mesh(new BoxGeometry(RW + 1.7, .2, .3), lam('#1c1f2a')); gab.position.set(RW / 2, WH + 2.32, RD / 2); roof.add(gab);
    for (const gx of [-.2, RW + .2]) { const gg = new BufferGeometry(); gg.setAttribute('position', new Float32BufferAttribute([gx, WH, -.2, gx, WH, RD + .2, gx, WH + 2.32, RD / 2, gx, WH, -.2, gx, WH + .7, -.9, gx, WH + 2.32, RD / 2, gx, WH, RD + .2, gx, WH + .7, RD + .9, gx, WH + 2.32, RD / 2], 3)); gg.computeVertexNormals(); roof.add(new Mesh(gg, new MeshLambertMaterial({ color: '#4a2e1c', side: DoubleSide }))); }
    for (const zz of [-.1, RD + .1]) { const fr = new Mesh(new BoxGeometry(RW + .4, 1.0, .2), extM); fr.position.set(RW / 2, WH + .5, zz); roof.add(fr); }
    const fe = new Mesh(new BoxGeometry(RW + 1.4, .18, 1.3), lam('#2c3044')); fe.position.set(RW / 2, WH + .72, RD + .75); fe.rotation.x = .25; roof.add(fe); }
  /* 屋簷下的布棚（店外看的時候） */

  const envB0 = scene.children.length;
  /* ───────── 隔壁的房子、對街、遠景 ───────── */
  const winT = [21, 33].map(sd => ctex(128, 256, (x, w, h) => { const r = mulberry(sd); x.fillStyle = '#1b1636'; x.fillRect(0, 0, w, h); for (let j = 0; j < 16; j++) for (let i = 0; i < 8; i++) { x.fillStyle = r() < .33 ? (r() < .5 ? '#ffd98a' : '#ffbe68') : '#272043'; x.fillRect(i * 16 + 3, j * 16 + 3, 10, 10); } }));
  const nbs = [];
  function neighbor(x0, x1, h, col, kan, nc) {
    const w = x1 - x0, cx = (x0 + x1) / 2, g = new Group(); g.position.set(cx, 0, 0); scene.add(g); nbs.push(g);
    box(w - .2, h, RD + 1, lam(col), 0, h / 2, RD / 2 - .4, g);
    const ft = ctex(Math.round(w * 40), Math.round(h * 40), (x, cw, ch) => { x.fillStyle = col; x.fillRect(0, 0, cw, ch); for (let i = 0; i < cw; i += 12) { x.fillStyle = 'rgba(0,0,0,.12)'; x.fillRect(i, 0, 2, ch); } x.fillStyle = '#ffcf7a'; x.fillRect(cw * .18, ch - 2.2 * 40, cw * .64, 1.6 * 40); x.strokeStyle = '#2a1408'; x.lineWidth = 4; x.strokeRect(cw * .18, ch - 2.2 * 40, cw * .64, 1.6 * 40); for (let i = 1; i < 4; i++) { x.beginPath(); x.moveTo(cw * .18 + cw * .16 * i, ch - 2.2 * 40); x.lineTo(cw * .18 + cw * .16 * i, ch - .6 * 40); x.stroke(); } if (h > 4) { x.fillStyle = '#ffd98a'; x.fillRect(cw * .25, 20, cw * .2, 40); x.fillRect(cw * .55, 20, cw * .2, 40); } });
    const f = new Mesh(new PlaneGeometry(w - .2, h), new MeshBasicMaterial({ map: ft })); f.position.set(0, h / 2, RD + .11); g.add(f);
    const rf = new Mesh(new BoxGeometry(w + .2, .2, 1.4), lam('#2c3044')); rf.position.set(0, Math.min(h, 3.1), RD + .7); rf.rotation.x = .25; g.add(rf);
    if (kan) { const nt = ctex(256, 120, (cx2, cw, ch) => { for (let i = 0; i < 3; i++) { cx2.fillStyle = nc; cx2.fillRect(4 + i * 84, 0, 80, ch - 6); } cx2.fillStyle = '#f8ecd8'; cx2.textAlign = 'center'; cx2.textBaseline = 'middle'; cx2.font = `900 46px ${FONT}`; [...kan].forEach((c, i) => cx2.fillText(c, 44 + i * 84, 52)); }); const nm = new Mesh(new PlaneGeometry(1.8, .85), new MeshBasicMaterial({ map: nt, transparent: true, side: DoubleSide })); nm.position.set(0, 2.1, RD + .5); g.add(nm); }
    glowS(0, 1.2, RD + .6, 3.5, .35, g);
  }
  neighbor(-6.4, -.3, 4.6, '#4a3a5a', '甘味', '#8a2a3a'); neighbor(-13, -6.6, 3.4, '#3a4a4a', '', ''); neighbor(RW + .3, RW + 6.2, 3.6, '#5a4030', '蕎麦', '#2a3a2a'); neighbor(RW + 6.4, RW + 13, 5.4, '#3a3a5a', '', '');
  { const r = mulberry(17);
    for (let x = -40; x < 60; x += 7 + r() * 5) { const h = 8 + r() * 18, w = 6 + r() * 5, m = new Mesh(new BoxGeometry(w, h, 6), [bas('#1c1736'), bas('#1c1736'), bas('#18132e'), bas('#18132e'), bas('#ffffff', { map: rep(winT[(r() * 2) | 0], w / 5, h / 6) }), bas('#1c1736')]); m.position.set(x, h / 2, -12 - r() * 6); scene.add(m); }
    for (let x = -40; x < 60; x += 7 + r() * 6) { const h = 5 + r() * 10, w = 5 + r() * 5, m = new Mesh(new BoxGeometry(w, h, 6), [bas('#1c1736'), bas('#1c1736'), bas('#18132e'), bas('#18132e'), bas('#ffffff', { map: rep(winT[(r() * 2) | 0], w / 5, h / 6) }), bas('#1c1736')]); m.position.set(x, h / 2, RD + 22 + r() * 4); m.rotation.y = Math.PI; scene.add(m); } }
  /* 路燈、對街的櫻花、自動販賣機、長椅、貓 */
  const lampG = [];
  function lamp(x, z) { const g = new Group(); g.position.set(x, 0, z); scene.add(g); box(.3, .14, .3, lam('#3a3030'), 0, .07, 0, g); box(.11, 4, .11, lam('#2b2422'), 0, 2, 0, g); box(.7, .09, .09, lam('#2b2422'), 0, 4, 0, g); const hd = box(.44, .44, .44, bas('#ffe2a6'), 0, 3.78, 0, g); lampG.push(glowS(0, 3.78, 0, 4.5, .55, g)); const pool = new Mesh(new PlaneGeometry(6, 6), new MeshBasicMaterial({ map: GLOW, blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: .28 })); pool.rotation.x = -Math.PI / 2; pool.position.y = .03; g.add(pool); }
  lamp(-3.2, RD + 5.7); lamp(RW + 3.2, RD + 5.7); lamp(-12, RD + 5.7); lamp(RW + 12, RD + 5.7);
  const petalSrc = [];
  function sakuraTree(x, z, s) { const g = new Group(); g.position.set(x, 0, z); g.scale.setScalar(s); scene.add(g); const tr = new Mesh(new CylinderGeometry(.16, .26, 2.6, 7), lam('#4a3024')); tr.position.y = 1.3; g.add(tr); const pk = ['#f4b8c8', '#f8d0dc', '#e898b0']; [[0, 3.1, 0, 1.4], [1, 2.7, .3, 1.0], [-1, 2.8, -.2, 1.1], [.3, 3.6, -.4, 1.0], [-.4, 3.4, .5, .9]].forEach(([a, b, c, r2], i) => { const m = new Mesh(new IcosahedronGeometry(r2, 1), new MeshLambertMaterial({ color: pk[i % 3], flatShading: true })); m.position.set(a, b, c); g.add(m); }); petalSrc.push({ x, z, y: 3.2 * s, r: 2 * s }); }
  sakuraTree(-6, RD + 16.5, 1.1); sakuraTree(3, RD + 17, 1); sakuraTree(13, RD + 16.6, 1.15); sakuraTree(-14, RD + 3.5, .95); sakuraTree(RW + 15, RD + 3.4, 1);
  { const vt = ctex(64, 128, (cx, w, h) => { cx.fillStyle = '#c23a2a'; cx.fillRect(0, 0, w, h); cx.fillStyle = '#fff3d6'; cx.fillRect(6, 8, 52, 50); const cs = ['#2b4a8a', '#f2b630', '#4aa86a', '#e2452f']; for (let j = 0; j < 8; j++) { cx.fillStyle = cs[j % 4]; cx.fillRect(10 + (j % 4) * 12, 14 + Math.floor(j / 4) * 20, 9, 14); } cx.fillStyle = '#111'; cx.fillRect(10, 90, 44, 12); });
    const vm = new Group(); vm.position.set(-1.4, 0, RD + .6); scene.add(vm); const mm = new Mesh(new BoxGeometry(.95, 1.9, .75), [lam('#c23a2a'), lam('#c23a2a'), lam('#c23a2a'), lam('#c23a2a'), bas('#ffffff', { map: vt }), lam('#c23a2a')]); mm.position.y = .95; vm.add(mm); glowS(0, 1.2, .7, 2.2, .35, vm); }
  { const bn = new Group(); bn.position.set(RW + 1.8, 0, RD + 5.2); scene.add(bn); box(1.6, .1, .5, lam('#8a5a30'), 0, .5, 0, bn); box(1.6, .5, .08, lam('#8a5a30'), 0, .8, .22, bn); box(.1, .5, .4, lam('#2b2422'), -.7, .25, 0, bn); box(.1, .5, .4, lam('#2b2422'), .7, .25, 0, bn); }
  const cat = new Group(); cat.position.set(RW + 1.5, .55, RD + 5.2); scene.add(cat);
  { const c = '#e8a050'; const b = new Mesh(new SphereGeometry(.22, 14, 10), lam(c)); b.scale.set(1.4, .7, 1); cat.add(b); const h = new Mesh(new SphereGeometry(.13, 12, 10), lam(c)); h.position.set(.3, .05, 0); cat.add(h); for (const z of [-.06, .06]) { const e = new Mesh(new ConeGeometry(.05, .09, 4), lam(c)); e.position.set(.32, .17, z); cat.add(e); } const t = new Mesh(new CylinderGeometry(.035, .03, .4, 6), lam(c)); t.rotation.z = 1.2; t.position.set(-.34, .02, .08); cat.add(t); }
  /* 門口留言板 */
  const board = new Group(); board.position.set(BOARD.x, 0, BOARD.z); scene.add(board);
  { box(.1, 1.5, .1, lam('#4a2a14'), -.55, .75, 0, board); box(.1, 1.5, .1, lam('#4a2a14'), .55, .75, 0, board); const bt = ctex(256, 160, (x, w, h) => { x.fillStyle = '#b8864a'; x.fillRect(0, 0, w, h); x.strokeStyle = '#4a2a14'; x.lineWidth = 10; x.strokeRect(0, 0, w, h); const pc = ['#fff6d0', '#f8d8e0', '#d8f0e0', '#fff']; for (let i = 0; i < 5; i++) { x.save(); x.translate(40 + (i % 3) * 80, 44 + Math.floor(i / 3) * 70); x.rotate((i % 2 ? -1 : 1) * .12); x.fillStyle = pc[i % 4]; x.fillRect(-28, -22, 56, 44); x.fillStyle = '#e2452f'; x.beginPath(); x.arc(0, -18, 4, 0, 7); x.fill(); x.fillStyle = '#8a7a6a'; for (let k = 0; k < 3; k++) x.fillRect(-20, -6 + k * 9, 40 - k * 8, 3); x.restore(); } x.fillStyle = '#3a1e0c'; x.font = `900 26px ${FONT}`; x.textAlign = 'right'; x.fillText('留言板', w - 14, h - 14); });
    const bm = new Mesh(new BoxGeometry(1.3, .85, .08), [wood, wood, wood, wood, new MeshBasicMaterial({ map: bt }), wood]); bm.position.y = 1.15; board.add(bm); const rf = new Mesh(new BoxGeometry(1.5, .08, .35), lam('#2c3044')); rf.position.y = 1.62; rf.rotation.x = .2; board.add(rf);
    board.traverse(m => { if (m.isMesh) m.userData.board = 1; }); }
  const boardPick = []; board.traverse(m => { if (m.isMesh) boardPick.push(m); });
  /* 島上模式：拿掉暖簾街風格的夜街，換成島上的草地、天空（跟著現實時間） */
  if (ISL) {
    const envB1 = scene.children.length;
    scene.children.slice(envB0, envB1).concat(scene.children.slice(envA0, envA1)).forEach(c => scene.remove(c));
    boardPick.length = 0; petalSrc.length = 0;
    const day = new Color('#8fd3f6'), nite = new Color('#16204a'), dusk = new Color('#f0a890');
    const skyC = day.clone().lerp(HR > 15 && HR < 20 ? dusk : nite, HR > 15 && HR < 20 && NIGHT < .5 ? Math.min(1, NIGHT * 2) : NIGHT).lerp(nite, NIGHT > .5 ? (NIGHT - .5) * 2 : 0);
    scene.fog.color.copy(skyC); scene.fog.near = 30; scene.fog.far = 90; renderer.setClearColor(skyC, 1); sky.visible = false;
    hemiL.color.set(NIGHT > .5 ? '#9aa8ff' : '#e8f4ff'); hemiL.groundColor.set('#6a8a4a'); hemiL.intensity = 1.25 + (1 - NIGHT) * .6; dl.intensity = .4 + (1 - NIGHT) * 1.0; dl.color.set(NIGHT > .5 ? '#a0b0ff' : '#fff2dc');
    const gr = new Mesh(new PlaneGeometry(220, 220), lam(NIGHT > .5 ? '#3a5a3a' : '#7ccb5a')); gr.rotation.x = -Math.PI / 2; gr.position.y = -.03; scene.add(gr);
    const path = new Mesh(new PlaneGeometry(2.2, 6), lam('#d9d4cc')); path.rotation.x = -Math.PI / 2; path.position.set(DX, -.01, RD + 3.2); scene.add(path);
    const tc = NIGHT > .5 ? '#2f5a3a' : '#58b84a';
    [[-4, 2], [-5, 7], [RW + 4, 1], [RW + 5, 6], [-3, RD + 5], [RW + 3, RD + 6], [2, -4], [8, -5]].forEach(([x, z], i) => { const t = new Group(); t.position.set(x, 0, z); scene.add(t); const tr = new Mesh(new CylinderGeometry(.2, .28, 1.8, 7), lam('#8a5a3a')); tr.position.y = .9; t.add(tr); const c = new Mesh(new IcosahedronGeometry(1.4, 1), new MeshLambertMaterial({ color: i % 3 ? tc : (NIGHT > .5 ? '#6a4a6a' : '#f4a8c0'), flatShading: true })); c.position.y = 2.6; t.add(c); });
  }

  /* ───────── 花瓣 ───────── */
  const NP = 140, pPos = new Float32Array(NP * 3), pVel = [];
  const petalT = ctex(32, 32, x => { x.fillStyle = '#f8c8d8'; x.beginPath(); x.ellipse(16, 16, 12, 7, .5, 0, 7); x.fill(); });
  const petals = new Points(new BufferGeometry(), new PointsMaterial({ map: petalT, size: .16, transparent: true, depthWrite: false, alphaTest: .1 }));
  petals.geometry.setAttribute('position', new Float32BufferAttribute(pPos, 3)); scene.add(petals);
  function petalReset(i, any) { const s = petalSrc.concat(potSakura)[Math.floor(Math.random() * (petalSrc.length + potSakura.length))] || petalSrc[0] || { x: -999, z: -999, y: 0, r: .1 }; pPos[i * 3] = s.x + rnd(-s.r, s.r); pPos[i * 3 + 1] = any ? rnd(0, s.y) : s.y + rnd(-.3, .3); pPos[i * 3 + 2] = s.z + rnd(-s.r, s.r); pVel[i] = { vx: rnd(-.2, .4), vy: rnd(-.5, -.25), ph: Math.random() * 7, fl: s.y }; }
  let potSakura = [];

  /* ───────── 擺設 ───────── */
  const placed = [];           // {k, x, z, r, g, I}
  const pick = [];
  const zoneIn = (x, z) => x >= 0 && x < RW && z >= 0 && z < RD;
  const zoneYard = (x, z) => !ISL && x >= YX0 && x < YX1 && z >= YZ0 && z < YZ1;
  const fp = (I, r) => r % 2 ? [I.d, I.w] : [I.w, I.d];
  function cellsOf(e) { const I = IT[e.k]; if (I.L === 'wall') return wallCells(e); const [w, d] = fp(I, e.r), a = []; for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) a.push([e.x + i, e.z + j]); return a; }
  /* 牆面物件：r=0 後牆（往 +z）、1 左牆（往 +x）、3 右牆（往 -x）、2 前牆內側（往 -z）；x,z 是貼牆那一排的格子 */
  function wallCells(e) { const I = IT[e.k], a = []; for (let i = 0; i < I.w; i++) { if (e.r === 0) a.push(['b', e.x + i]); else if (e.r === 2) a.push(['f', e.x + i]); else if (e.r === 1) a.push(['l', e.z + i]); else a.push(['r', e.z + i]); } return a; }
  function wallSide(r) { return r === 0 ? 'back' : r === 2 ? 'front' : r === 1 ? 'left' : 'right'; }
  function validWall(e, ign) {
    const I = IT[e.k];
    for (const [s, i] of wallCells(e)) { const lim = s === 'b' || s === 'f' ? RW : RD; if (i < 0 || i >= lim) return false; if (s === 'f' && i >= D0 - 0 && i < D1) return false; if (s === 'f' && i >= D0 - 1 && i < D1 + 1 && I.w > 1) { /* 不要擋到門 */ } }
    for (const q of placed) { if (q === ign || IT[q.k].L !== 'wall') continue; const a = wallCells(q); for (const c of wallCells(e)) if (a.some(t => t[0] === c[0] && t[1] === c[1])) return false; }
    return true;
  }
  function itemAt(x, z, L, ign) { for (const q of placed) { if (q === ign || IT[q.k].L !== L) continue; if (cellsOf(q).some(c => c[0] === x && c[1] === z)) return q; } return null; }
  function surfaceAt(x, z, ign) { const q = itemAt(x, z, 'main', ign); return q && IT[q.k].sf ? q : null; }
  function valid(e, ign) {
    const I = IT[e.k]; if (I.L === 'wall') return validWall(e, ign);
    const cs = cellsOf(e); let inside = null;
    for (const [x, z] of cs) {
      const zi = zoneIn(x, z), zy = zoneYard(x, z); if (!zi && !zy) return false; if (inside === null) inside = zi; else if (inside !== zi) return false;
      if (RESERVED.has(x + ',' + z)) return false;
      if (I.L === 'top') { if (itemAt(x, z, 'top', ign)) return false; const m = itemAt(x, z, 'main', ign); if (m && !IT[m.k].sf) return false; if (m && m.k === 'tank') return false; }
      else if (itemAt(x, z, I.L, ign)) return false;
      if (I.L === 'main' && I.solid && zi && z === RD - 1 && x >= D0 && x < D1) return false;  /* 門口內側一格不能擋 */
    }
    if (I.L === 'main' && !I.solid) { /* 座布團可以疊在地毯上 */ }
    return true;
  }
  function itemY(e) { const I = IT[e.k]; if (I.L !== 'top') return 0; let y = 0; for (const [x, z] of cellsOf(e)) { const s = surfaceAt(x, z); if (s) y = Math.max(y, IT[s.k].sf); } return y; }
  function posOf(e) {
    const I = IT[e.k];
    if (I.L === 'wall') { const [s, i] = wallCells(e)[0], c = i + I.w / 2; if (s === 'b') return [c, 0, .02]; if (s === 'f') return [c, 0, RD - .02]; if (s === 'l') return [.02, 0, c]; return [RW - .02, 0, c]; }
    const [w, d] = fp(I, e.r); return [e.x + w / 2, itemY(e), e.z + d / 2];
  }
  const footM = new MeshBasicMaterial({ map: shadowT, transparent: true, depthWrite: false, opacity: .55 });
  function place(e, noSave) {
    const I = IT[e.k]; e.I = I; e.g = build(e.k); scene.add(e.g); e.g.userData.e = e;
    if (I.L !== 'wall' && I.L !== 'rug' && I.L !== 'top') { const [w, d] = fp(I, 0); const sh = new Mesh(new PlaneGeometry(w * .95, d * .95), footM); sh.rotation.x = -Math.PI / 2; sh.position.y = .012; e.g.add(sh); sh.raycast = () => { }; }
    e.g.traverse(m => { if (m.isMesh) { m.userData.e = e; pick.push(m); } });
    placed.push(e); syncItem(e); if (!noSave) changed();
    return e;
  }
  function syncItem(e) { const [x, y, z] = posOf(e); e.g.position.set(x, y, z); e.g.rotation.y = e.r * Math.PI / 2; }
  function unplace(e) { const i = placed.indexOf(e); if (i >= 0) placed.splice(i, 1); scene.remove(e.g); for (let j = pick.length - 1; j >= 0; j--) if (pick[j].userData.e === e) pick.splice(j, 1); e.g.traverse(m => { if (m.geometry) m.geometry.dispose(); }); }
  function topsOn(e) { const cs = cellsOf(e); return placed.filter(q => IT[q.k].L === 'top' && cellsOf(q).some(c => cs.some(d => d[0] === c[0] && d[1] === c[1]))); }
  D.it.forEach(([k, x, z, r]) => { const e = { k, x, z, r: r || 0 }; if (valid(e)) place(e, true); else if (own) D.inv[k] = (D.inv[k] || 0) + 1; });
  placed.filter(e => IT[e.k].L === 'top').forEach(syncItem);
  setFloor(D.fl); setWall(D.wa);
  if (HOME) {
    const ex = o.ex || {}; const wc = ex.wall || '#f29ab8';
    const hf = ctex(640, 200, (x, w, h) => { x.fillStyle = wc; x.fillRect(0, 0, w, h); for (let j = 0; j < h; j += 14) { x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, j, w, 2); } const win = wx => { x.fillStyle = NIGHT > .5 ? '#ffd98a' : '#bfe6ff'; x.fillRect(wx, 60, 110, 70); x.strokeStyle = '#f4efe2'; x.lineWidth = 8; x.strokeRect(wx, 60, 110, 70); x.beginPath(); x.moveTo(wx + 55, 60); x.lineTo(wx + 55, 130); x.stroke(); }; win(70); win(460); x.fillStyle = '#e8e2d4'; x.fillRect(0, h - 26, w, 26); });
    walls.front.forEach(g => g.traverse(m => { if (m.isMesh && Array.isArray(m.material) && m.material[4] && m.material[4].map) { const u0 = m.material[4].map.offset.x, rp = m.material[4].map.repeat.x; const t = hf.clone(); t.needsUpdate = true; t.offset.set(u0, 0); t.repeat.set(rp, 1); m.material[4] = new MeshBasicMaterial({ map: t }); } }));
    extM.map = null; extM.color.set(wc); extM.needsUpdate = true;
    facade.children.slice().forEach(c => { if (c !== facade.children[0] && c !== facade.children[1] && c !== facade.children[2]) c.visible = false; });
    doorLan.forEach(l => { l.visible = false; });
    roof.traverse(m => { if (m.isMesh && m.material && m.material.map) { m.material.map = null; m.material.color.set(ex.roofC || '#d8452f'); m.material.needsUpdate = true; } });
  }
  function refreshPots() { potSakura = placed.filter(e => e.k === 'sakura').map(e => ({ x: e.g.position.x, z: e.g.position.z, y: 2, r: .5 })); }
  refreshPots(); for (let i = 0; i < NP; i++) petalReset(i, 1);

  /* ───────── 存檔 ───────── */
  let saveT = 0;
  function serialize() { D.it = placed.map(e => [e.k, e.x, e.z, e.r]); return D; }
  function changed() { if (!own) return; serialize(); clearTimeout(saveT); saveT = setTimeout(() => { try { cb.save && cb.save(D); } catch (_) { } }, 700); updInfo(); }

  /* ───────── 人 ───────── */
  const people = [];
  let PS = 1.5;
  const bubT = {};
  function bubbleTex(kind) {
    if (bubT[kind]) return bubT[kind];
    return bubT[kind] = ctex(128, 112, (x) => {
      x.strokeStyle = '#2a1810'; x.lineWidth = 6; x.lineJoin = 'round';
      if (kind === 'mind' || kind === 'zzz') { x.fillStyle = kind === 'zzz' ? '#e8f0ff' : '#efe9ff'; const cs = [[40, 40, 26], [66, 30, 28], [92, 42, 25], [64, 52, 30]]; cs.forEach(([a, b, r]) => { x.beginPath(); x.arc(a, b, r, 0, 7); x.stroke(); }); cs.forEach(([a, b, r]) => { x.beginPath(); x.arc(a, b, r, 0, 7); x.fill(); }); x.beginPath(); x.arc(44, 90, 7, 0, 7); x.fill(); x.stroke(); x.beginPath(); x.arc(30, 104, 4, 0, 7); x.fill(); x.stroke(); }
      else { x.fillStyle = kind === 'idea' ? '#fff0a8' : kind === 'msg' ? '#ffe0ea' : '#ffffff'; rrect(x, 12, 8, 104, 66, 24); x.fill(); x.stroke(); x.beginPath(); x.moveTo(44, 72); x.lineTo(34, 100); x.lineTo(66, 74); x.closePath(); x.fill(); x.stroke(); x.fillRect(46, 68, 18, 8); }
      x.fillStyle = '#2a1810'; x.textAlign = 'center'; x.textBaseline = 'middle';
      if (kind === 'idea') { x.font = `900 44px ${FONT}`; x.fillText('!', 64, 42); }
      else if (kind === 'zzz') { x.font = `900 30px ${FONT}`; x.fillText('z z Z', 64, 42); }
      else if (kind === 'msg') { x.font = `900 40px ${FONT}`; x.fillText('✉', 64, 42); }
      else for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(40 + i * 24, 42, 6, 0, 7); x.fill(); }
    });
  }
  function nameTex(name, kind) {
    const w = 512, h = 112;
    return ctex(w, h, (x) => {
      x.textAlign = 'center'; x.textBaseline = 'middle'; let fs = 52; x.font = `900 ${fs}px ${FONT}`;
      const s = String(name || '').slice(0, 16); while (x.measureText(s).width > w - 80 && fs > 22) { fs -= 2; x.font = `900 ${fs}px ${FONT}`; }
      const tw = Math.min(w - 12, x.measureText(s).width + 56);
      x.fillStyle = kind === 'me' ? '#2a1810e6' : kind === 'owner' ? '#7a3a14e6' : '#2a2a48e0'; x.strokeStyle = kind === 'me' ? '#ffd27a' : kind === 'owner' ? '#ffb36b' : '#c8c0ff'; x.lineWidth = 6;
      rrect(x, (w - tw) / 2, 14, tw, h - 28, (h - 28) / 2); x.fill(); x.stroke();
      x.fillStyle = '#fff3d6'; x.fillText(s, w / 2, h / 2 + 2);
    });
  }
  function mkPerson(src, h, opt) {
    opt = opt || {};
    const grp = new Group(); scene.add(grp);
    const geo = new PlaneGeometry(1, 1); geo.translate(0, .5, 0);
    const mat = new MeshBasicMaterial({ transparent: true, alphaTest: .04, color: opt.tint || 0xf4eef0 });
    const m = new Mesh(geo, mat); grp.add(m);
    const p = { grp, m, mat, h0: h, h: h * PS, ar: .8, w: h * PS * .8, x: 0, z: 0, face: 1, ph: Math.random() * 7, alpha: 1, moving: false, path: null, state: 'idle', t: 0, isMe: !!opt.me };
    loadTex(src, t => { mat.map = t; mat.needsUpdate = true; p.ar = t.image.width / t.image.height; p.w = p.h * p.ar; });
    const sh = new Mesh(new CircleGeometry(.5, 16), new MeshBasicMaterial({ map: shadowT, transparent: true, depthWrite: false, opacity: .8 })); sh.rotation.x = -Math.PI / 2; scene.add(sh); p.sh = sh;
    if (opt.name) { const nt = new Sprite(new SpriteMaterial({ map: nameTex(opt.name, opt.nk), transparent: true, depthTest: false })); nt.renderOrder = 30; nt.scale.set(2.0, .44, 1); scene.add(nt); p.tag = nt; p.name = opt.name; }
    if (opt.bubble) { const bs = new Sprite(new SpriteMaterial({ map: bubbleTex(opt.bubble), transparent: true, depthWrite: false })); bs.scale.set(.8, .7, 1); scene.add(bs); p.bub = bs; p.kind = opt.bubble; }
    people.push(p); return p;
  }
  const me = mkPerson(o.me.src, 1.5, { me: 1, name: o.me.name || '我', nk: 'me' });
  me.x = DX; me.z = RD + 2.6;
  if ((own && o.startInside !== false) || o.island) { me.x = DX; me.z = RD - 1.6; }

  /* ───────── 走路的格子（NPC 找路） ───────── */
  const GX0 = EX0, GX1 = EX1, GZ1 = EZ1;
  function blockedCell(x, z) {
    if (x < GX0 || x >= GX1 || z < 0 || z >= GZ1) return true;
    if (z < RD && (x < 0 || x >= RW)) return true;
    if (z >= RD && RESERVED.has(x + ',' + z) && x === BCX && z === RD + 1) return true;
    const q = itemAt(x, z, 'main'); if (q && IT[q.k].solid) return true;
    return false;
  }
  const canStep = (x1, z1, x2, z2) => { if (blockedCell(x2, z2)) return false; if ((z1 === RD - 1 && z2 === RD) || (z1 === RD && z2 === RD - 1)) return x1 >= D0 && x1 < D1 && x2 === x1; return true; };
  function findPath(sx, sz, tx, tz) {
    sx = Math.floor(sx); sz = Math.floor(sz); const key = (x, z) => (x - GX0) * 100 + z; const prev = new Map(); prev.set(key(sx, sz), null); const q = [[sx, sz]];
    while (q.length) { const [x, z] = q.shift(); if (x === tx && z === tz) { const out = []; let k = key(x, z), cx = x, cz = z; while (k !== null) { out.push([cx + .5, cz + .5]); const p = prev.get(k); if (p === null) break; cx = p[0]; cz = p[1]; k = key(cx, cz); } return out.reverse(); }
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, nz = z + dz, k = key(nx, nz); if (prev.has(k) || !canStep(x, z, nx, nz)) continue; prev.set(k, [x, z]); q.push([nx, nz]); } }
    return null;
  }
  /* 玩家連續移動的碰撞：牆（只能從門進出）＋擋路的家具 */
  const RAD = .28;
  function okAt(x, z, fromZ) {
    const inDoor = x >= D0 + RAD && x <= D1 - RAD;
    if (fromZ < RD) { if (z < RD && (x < RAD || x > RW - RAD || z < RAD)) return false; if (z >= RD - RAD && !inDoor) return false; }
    else { if (z < RD + RAD && !inDoor) return false; if (z < RD && !inDoor) return false; }
    if (x < EX0 + .4 || x > EX1 - .4 || z > EZ1 - .4) return false;
    if (z < RD && (x < 0 || x > RW)) return false;
    for (const [ox, oz] of [[-RAD, -RAD], [RAD, -RAD], [-RAD, RAD], [RAD, RAD], [0, 0]]) { const cx = Math.floor(x + ox * .8), cz = Math.floor(z + oz * .8); const q = itemAt(cx, cz, 'main'); if (q && IT[q.k].solid) return false; if (cx === BCX && cz === RD + 1 && Math.hypot(x - BOARD.x, z - BOARD.z) < .7) return false; }
    return true;
  }
  function walkableCells(inside) { const a = []; if (inside) { for (let z = 0; z < RD; z++) for (let x = 0; x < RW; x++) if (!blockedCell(x, z)) a.push([x, z]); } else { for (let z = RD + 1; z < RD + 6; z++) for (let x = -6; x < RW + 6; x++) if (!blockedCell(x, z)) a.push([x, z]); } return a; }

  /* ───────── NPC 客人、留言過的訪客、店長 ───────── */
  const npcs = [];
  const stars = () => starsOf(cozyOf(serialize()));
  const pool = shuffle(NPCS.filter(d => o.walk && o.walk[d.spr] && d.spr !== 'robot'));
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const NG = HOME ? 0 : clamp(2 + stars(), 2, 7);
  pool.slice(0, NG).forEach((d, i) => { const p = mkPerson(o.walk[d.spr], d.h, { bubble: 'chat' }); p.d = d; p.sp = d.sp * .8; p.kind2 = 'npc'; p.state = 'out'; p.t = i * 2.2 + rnd(0, 1.5); p.x = EX0 + 1; p.z = RD + 4; p.hidden = true; npcs.push(p); });
  function addVisitor(v) { const p = mkPerson(o.me.src, 1.5, { name: v.name, nk: 'vis', bubble: 'msg', tint: 0xffe8f0 }); p.d = { id: 'v' + v.id, name: v.name, role: '來過的客人' }; p.v = v; p.sp = 1.3; p.kind2 = 'vis'; p.state = 'out'; p.t = rnd(1, 6); p.x = EX1 - 1; p.z = RD + 4; p.hidden = true; npcs.push(p); }
  let owner = null;
  /* 家裡的貓：在屋裡晃來晃去，點牠會喵 */
  let pet = null;
  if (HOME) {
    const g = new Group(); scene.add(g); const c = '#e8a050', wl = '#fff3e0';
    const body = new Mesh(new SphereGeometry(.2, 14, 10), lam(c)); body.scale.set(1.5, .8, .9); body.position.y = .2; g.add(body);
    const head = new Mesh(new SphereGeometry(.14, 14, 10), lam(c)); head.position.set(.3, .34, 0); g.add(head);
    const muz = new Mesh(new SphereGeometry(.07, 10, 8), lam(wl)); muz.position.set(.41, .3, 0); muz.scale.set(.7, .7, 1); g.add(muz);
    for (const z of [-.07, .07]) { const e = new Mesh(new ConeGeometry(.05, .1, 4), lam(c)); e.position.set(.3, .5, z); g.add(e); const ey = new Mesh(new SphereGeometry(.018, 6, 6), lam('#1a1a1a')); ey.position.set(.43, .38, z * .7); g.add(ey); }
    const legs = []; for (const [x, z] of [[.18, .1], [.18, -.1], [-.18, .1], [-.18, -.1]]) { const l = new Mesh(new CylinderGeometry(.04, .04, .16, 6), lam(c)); l.position.set(x, .08, z); g.add(l); legs.push(l); }
    const tail = new Mesh(new CylinderGeometry(.03, .025, .4, 6), lam(c)); tail.position.set(-.38, .36, 0); tail.rotation.z = .8; g.add(tail);
    g.traverse(m => { if (m.isMesh) m.userData.pet = 1; });
    const cb2 = placed.find(e => e.k === 'catbed'); pet = { g, legs, tail, x: cb2 ? cb2.g.position.x : 2.5, z: cb2 ? cb2.g.position.z : 5.5, path: null, t: 2, ph: 0, sleep: !!cb2 };
  }
  if (!own) {
    const rg = placed.find(e => e.k === 'register'); let ox = DX, oz = 2;
    if (rg) { const c = [[rg.x, rg.z - 1], [rg.x + 1, rg.z], [rg.x - 1, rg.z], [rg.x, rg.z + 1]].find(([x, z]) => zoneIn(x, z) && !blockedCell(x, z)); if (c) { ox = c[0] + .5; oz = c[1] + .5; } }
    owner = mkPerson(o.owner && o.owner.src || o.me.src, 1.5, { name: '店長 ' + ((o.owner && o.owner.name) || ''), nk: 'owner', bubble: 'zzz', tint: 0xfff0e0 });
    owner.x = ox; owner.z = oz; owner.kind2 = 'owner'; owner.state = 'sleep'; owner.d = { name: '店長 ' + ((o.owner && o.owner.name) || ''), role: D.name }; npcs.push(owner);
  }
  function npcTarget(p) {
    const inside = p.kind2 === 'vis' ? Math.random() < .6 : Math.random() < .82;
    const keep = []; placed.forEach(e => { if (e.k === 'register') keep.push(...cellsOf(e)); }); keep.push([7, RD + 1]);   /* 收銀台、留言板前面不站人，玩家才點得到 */
    const cells = walkableCells(inside).filter(([x, z]) => !keep.some(c => Math.abs(c[0] - x) <= 1 && Math.abs(c[1] - z) <= 1) && !people.some(q => q !== p && !q.hidden && Math.floor(q.x) === x && Math.floor(q.z) === z));
    if (!cells.length) return null;
    /* 優先站到家具旁邊，看起來像在逛 */
    const near = cells.filter(([x, z]) => placed.some(e => IT[e.k].L !== 'rug' && cellsOf(e).some(c => Math.abs(c[0] - x) + Math.abs(c[1] - z) === 1)));
    const pickFrom = near.length && Math.random() < .75 ? near : cells;
    return pickFrom[Math.floor(Math.random() * pickFrom.length)];
  }
  function npcGo(p, tx, tz) { const path = findPath(p.x, p.z, tx, tz); if (path && path.length) { p.path = path; p.state = 'walk'; return true; } return false; }

  /* ───────── 鏡頭、輸入、介面 ───────── */
  const S = { dead: false, mode: 'walk', yaw: 0, yawT: 0, dist: 11, distT: 11, camV: 0, tgt: null, joy: null, keys: {}, t: 0, talk: null, sel: null, drag: null, last: performance.now(), inside: me.z < RD, cam: new Vector3(me.x, 1, me.z), low: {}, pitch: .7, pitchT: .7 };
  const el = (tag, cls, html, par) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; (par || root).appendChild(e); return e; };
  const ui = [];
  const U = s => { ui.push(s); return s; };
  const info = U(el('div', 'h3info'));
  const hud = U(el('div', 'h3hud'));
  const camEl = (el('div', 'h3cam', '<button type="button" aria-label="向左轉" data-h3="camL">⟲</button><button type="button" aria-label="向右轉" data-h3="camR">⟳</button>'));
  const hint = U(el('div', 'h3hint'));
  const toastEl = U(el('div', 'h3toast'));
  const joyEl = U(el('div', 'h3j', '<i></i>'));
  const card = U(el('div', 'h3card'));
  const bp = U(el('div', 'h3bp'));
  const selBar = U(el('div', 'h3sel'));
  const topBar = U(el('div', 'h3top'));
  const pan = U(el('div', 'h3pan'));
  const exitBtn = U(el('button', 'h3door', '🚪 出門')); exitBtn.type = 'button'; exitBtn.dataset.h3 = 'exit';
  function toast(s) { toastEl.textContent = s; toastEl.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('on'), 2200); }
  function hudBtns() {
    if (S.mode === 'build') { hud.innerHTML = `<button class="h3b hot" type="button" data-h3="done"><i>✓</i>完成</button>`; return; }
    hud.innerHTML = own && HOME ? `<button class="h3b" type="button" data-h3="exit"><i>🚪</i>出門</button><button class="h3b hot" type="button" data-h3="build"><i>🔨</i>布置</button><button class="h3b" type="button" data-h3="board"><i>📜</i>留言板</button>`
      : own
      ? (o.island ? `<button class="h3b" type="button" data-h3="exit"><i>🚪</i>出門</button>` : '') + `<button class="h3b hot" type="button" data-h3="build"><i>🔨</i>布置</button><button class="h3b" type="button" data-h3="rename"><i>🪧</i>店名</button><button class="h3b" type="button" data-h3="board"><i>📜</i>留言板</button>`
      : (o.island ? `<button class="h3b" type="button" data-h3="exit"><i>🚪</i>出門</button>` : '') + `<button class="h3b hot" type="button" data-h3="board"><i>✉️</i>留言</button>`;
  }
  function updInfo() {
    const c = cozyOf(serialize()), s = starsOf(c);
    if (HOME) { info.innerHTML = `<b>🏠 ${esc(o.title || '我的家')}</b><span class="h3st">${'★'.repeat(s)}${'☆'.repeat(5 - s)}</span> 溫馨度 ${c}<br><small>${own ? '按「🔨 布置」擺家具、換地板牆壁' : `${esc((o.owner && o.owner.name) || '')} 的家`}</small>`; return; }
    info.innerHTML = `<b>🏮 ${esc(D.name)}</b><span class="h3st">${'★'.repeat(s)}${'☆'.repeat(5 - s)}</span> ${esc(STARS[s][1])}<br><small>溫馨度 ${c}${own ? `・每天收入 ${yen(dailyIncome(c))}` : `・店長 ${esc((o.owner && o.owner.name) || '')}`}</small>`;
  }
  hudBtns(); updInfo(); camEl.style.display = 'none';
  camEl.querySelectorAll('button').forEach((b, i) => { const dir = i ? -1 : 1; b.addEventListener('pointerdown', e => { e.preventDefault(); S.camV = dir; try { b.setPointerCapture(e.pointerId); } catch (_) { } }); const u2 = () => { S.camV = 0; }; b.addEventListener('pointerup', u2); b.addEventListener('pointercancel', u2); b.addEventListener('click', () => { if (!S.camV) S.yawT += dir * .5; }); });

  /* 點擊 / 拖曳 */
  const rect = () => cv.getBoundingClientRect();
  const ray = new Raycaster(), ndc = new Vector2(), gplane = new Plane(new Vector3(0, 1, 0), 0), hit = new Vector3();
  const toNdc = (cx, cy) => { const r = rect(); ndc.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height * 2 - 1)); return ndc; };
  const local = (cx, cy) => { const r = rect(); return { x: (cx - r.left) * (cv.clientWidth / r.width), y: (cy - r.top) * (cv.clientHeight / r.height) }; };
  const proj = v => { const q = v.clone().project(camera), r = rect(); return { x: (q.x + 1) / 2 * r.width + r.left, y: (1 - q.y) / 2 * r.height + r.top, z: q.z }; };
  function groundAt(cx, cy) { ray.setFromCamera(toNdc(cx, cy), camera); return ray.ray.intersectPlane(gplane, hit) ? hit.clone() : null; }
  function itemHit(cx, cy) { ray.setFromCamera(toNdc(cx, cy), camera); const hs = ray.intersectObjects(pick.filter(m => m.visible && m.parent && isVis(m)), false); return hs.length ? hs[0].object.userData.e : null; }
  function isVis(m) { let o2 = m; while (o2) { if (!o2.visible) return false; o2 = o2.parent; } return true; }
  function personAt(cx, cy) {
    let best = null, bd = 1e9;
    for (const p of npcs) { if (p.hidden) continue; const f = proj(new Vector3(p.x, 0, p.z)), t = proj(new Vector3(p.x, p.h + .3, p.z)), hh = f.y - t.y; if (hh < 6) continue; const w = Math.max(hh * .36, 30), dx = Math.abs(cx - f.x); if (dx < w && cy > t.y - 14 && cy < f.y + 12) { const d = dx + Math.abs(cy - (f.y + t.y) / 2) * .3; if (d < bd) { bd = d; best = p; } } }
    return best;
  }
  function boardHit(cx, cy) { ray.setFromCamera(toNdc(cx, cy), camera); return ray.intersectObjects(boardPick, false).length > 0; }
  const giftBoxes = []; const giftPick = [];
  function giftHit(cx, cy) { ray.setFromCamera(toNdc(cx, cy), camera); return ray.intersectObjects(giftPick, false).length > 0; }
  const ptrs = new Map(); let pd = null, pinch = null;
  cv.addEventListener('contextmenu', e => e.preventDefault());
  cv.addEventListener('pointerdown', e => {
    e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (_) { }
    const l = local(e.clientX, e.clientY); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), dist: S.distT, ang: Math.atan2(b.y - a.y, b.x - a.x), yaw: S.yawT }; pd = null; S.joy = null; joyEl.style.display = 'none'; endDrag(); return; }
    pd = { id: e.pointerId, sx: l.x, sy: l.y, cx: e.clientX, cy: e.clientY, moved: 0, btn: e.button, yaw0: S.yawT, pit0: S.pitchT };
    if (S.mode === 'build') { const it = itemHit(e.clientX, e.clientY); if (it && it === S.sel && !it.I.fixed2) { pd.dragItem = it; } else if (it) { pd.pickItem = it; } }
  });
  cv.addEventListener('pointermove', e => {
    if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && ptrs.size >= 2) { const [a, b] = [...ptrs.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); S.distT = clamp(pinch.dist * pinch.d / Math.max(20, d), 6, 20); S.yawT = pinch.yaw - (Math.atan2(b.y - a.y, b.x - a.x) - pinch.ang); return; }
    if (!pd || pd.id !== e.pointerId) return;
    const l = local(e.clientX, e.clientY), dx = l.x - pd.sx, dy = l.y - pd.sy, d = Math.hypot(dx, dy);
    if (!pd.moved && d > 10) { pd.moved = 1; if (pd.pickItem && S.mode === 'build') { select(pd.pickItem); pd.dragItem = pd.pickItem; } }
    if (!pd.moved) return;
    if (pd.btn === 2 || S.mode === 'walk' || (S.mode === 'build' && !pd.dragItem)) { S.yawT = pd.yaw0 - dx * .008; S.pitchT = clamp(pd.pit0 + dy * .005, .3, 1.25); return; }
    if (S.mode === 'build' && pd.dragItem) { dragTo(pd.dragItem, e.clientX, e.clientY); return; }
    if (S.mode === 'walk') { const R = 55, m = Math.min(1, d / R) / Math.max(d, 1e-6); S.joy = { x: dx * m, y: dy * m }; S.tgt = null; joyEl.style.display = 'block'; joyEl.style.left = pd.sx + 'px'; joyEl.style.top = pd.sy + 'px'; joyEl.firstChild.style.transform = `translate(${S.joy.x * 55}px,${S.joy.y * 55}px)`; }
  });
  const up = e => {
    ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null;
    if (!pd || pd.id !== e.pointerId) return;
    if (!pd.moved) tap(e.clientX, e.clientY, pd);
    if (pd.dragItem) endDrag();
    pd = null; S.joy = null; joyEl.style.display = 'none';
  };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { e.preventDefault(); S.distT = clamp(S.distT + Math.sign(e.deltaY) * 1.2, 6, 20); }, { passive: false });
  const kd = e => { if (!document.contains(cv) || /input|textarea/i.test((e.target && e.target.tagName) || '')) return; const c = e.key.toLowerCase(); if (/^(arrowleft|arrowright|arrowup|arrowdown|w|a|s|d|q|e|r)$/.test(c)) { if (c === 'r' && S.sel) { rotateSel(); e.preventDefault(); return; } S.keys[c] = 1; if (/^(arrow|w|a|s|d)/.test(c)) S.tgt = null; e.preventDefault(); } };
  const ku = e => { delete S.keys[e.key.toLowerCase()]; };
  document.addEventListener('keydown', kd); document.addEventListener('keyup', ku);

  function tap(cx, cy) {
    if (pan.classList.contains('on')) return;
    if (S.mode === 'build') { const it = itemHit(cx, cy); if (it) select(it); else select(null); return; }
    const p = personAt(cx, cy); if (p) { openCard(p); return; }
    if (pet) { ray.setFromCamera(toNdc(cx, cy), camera); const ph2 = []; pet.g.traverse(m => { if (m.isMesh) ph2.push(m); }); if (ray.intersectObjects(ph2, false).length) { toast(['喵～', '喵嗚？', '呼嚕呼嚕……', '（伸懶腰）'][Math.floor(Math.random() * 4)]); pet.t = 2; pet.path = null; return; } }
    if (giftPick.length && giftHit(cx, cy)) { walkThen(BOARD.x - 1, BOARD.z + .9, claimGifts); return; }
    if (boardHit(cx, cy)) { walkThen(BOARD.x, BOARD.z + 1, openBoard); return; }
    let it = itemHit(cx, cy);
    if (it && IT[it.k].L === 'top') { const sf = cellsOf(it).map(c => surfaceAt(c[0], c[1])).find(Boolean); if (sf && sf.k === 'register') it = sf; }
    if (it && it.k === 'register') { walkThen(it.g.position.x, it.g.position.z + 1.2, () => regTap(it)); return; }
    if (it && IT[it.k].L !== 'rug') { const pp = it.g.position; closeCard(); itemCard(it); S.tgt = nearFree(pp.x, pp.z); return; }
    closeCard();
    const g = groundAt(cx, cy); if (g) S.tgt = { x: g.x, z: g.z };
  }
  function nearFree(x, z) { let best = null, bd = 1e9; for (const [dx, dz] of [[0, 1.1], [1.1, 0], [-1.1, 0], [0, -1.1], [.8, .8], [-.8, .8]]) { const nx = x + dx, nz = z + dz; if (okAt(nx, nz, nz < RD ? 0 : RD + 1)) { const d = Math.hypot(nx - me.x, nz - me.z); if (d < bd) { bd = d; best = { x: nx, z: nz }; } } } return best; }
  function walkThen(x, z, fn) { closeCard(); const t = nearFree(x, z - 1) || { x, z }; S.tgt = { x: t.x, z: t.z, fn }; if (Math.hypot(me.x - t.x, me.z - t.z) < 1.6) { S.tgt = null; fn(); } }

  /* 對話卡 */
  function openCard(p) {
    closeCard(true); S.talk = p; if (p.kind2 === 'npc') { p.state = 'talk'; p.t = 0; }
    let head = esc(p.d.name), role = esc(p.d.role || ''), body = '', K = KIND.chat, btns = '';
    if (p.kind2 === 'owner') { K = { tag: '💤 打盹中', c: '#c8d8ff' }; body = HOME ? `<p class="h3t mind">（${esc((o.owner && o.owner.name) || '')} 窩在家裡打盹……）</p>` : `<p class="h3t mind">（店長 ${esc((o.owner && o.owner.name) || '')} 趴在收銀台旁邊睡著了……）</p>`; body +=  `<p class="h3t">要不要在門口的留言板留言給他？</p>`; btns = `<button class="h3n" type="button" data-h3="board">✉️ 去留言</button>`; }
    else if (p.kind2 === 'vis') { K = { tag: '✉️ 留言', c: '#ffc8d8' }; body = `<p class="h3t">「${esc(p.v.msg || '……')}」</p>${p.v.gift && IT[p.v.gift] ? `<p class="h3t" style="font-size:14px">🎁 還帶了一份「${esc(IT[p.v.gift].n)}」</p>` : ''}`; }
    else {
      const it = nextLine(p); K = KIND[it.kind] || KIND.chat; body = `<p class="h3t${it.kind === 'mind' ? ' mind' : ''}">${it.kind === 'mind' ? '（' + esc(it.text) + '）' : '「' + esc(it.text) + '」'}</p>`;
      btns = `<button class="h3n" type="button" data-h3="more">再聽一句 ›</button>`;
    }
    const src = p.kind2 === 'npc' ? o.walk[p.d.spr] : (p.kind2 === 'owner' && o.owner && o.owner.src) || o.me.src;
    card.innerHTML = `<div class="h3h"><div class="h3av" style="background-image:url('${src}')"></div><div class="h3nm"><b>${head}</b><small>${role}</small></div><span class="h3k" style="background:${K.c}">${K.tag}</span><button class="h3x" type="button" data-h3="close">×</button></div>${body}<div class="h3bt">${btns}</div>`;
    const r = rect(), pp = proj(new Vector3(p.x, p.h * .5, p.z)); card.classList.toggle('r', pp.x - r.left < r.width / 2);
    card.classList.add('on'); if (p.bub) p.bub.visible = false;
  }
  function nextLine(p) {
    const near = placed.filter(e => REMARK[e.k] && Math.hypot(e.g.position.x - p.x, e.g.position.z - p.z) < 3.2);
    if (near.length && Math.random() < .5) { const e = near[Math.floor(Math.random() * near.length)]; return { kind: 'chat', text: REMARK[e.k] }; }
    if (!p.deck || !p.deck.length) p.deck = shuffle(p.d.lines.map(l => ({ kind: l[0], text: l[1] })));
    return p.deck.pop();
  }
  function itemCard(e) {
    const I = IT[e.k]; S.talk = null;
    card.innerHTML = `<div class="h3h"><div class="h3av" style="background-image:none;display:flex;align-items:center;justify-content:center;font-size:26px">${I.lit ? '🏮' : '✨'}</div><div class="h3nm"><b>${esc(I.n)}</b><small>溫馨度 +${I.c}</small></div><button class="h3x" type="button" data-h3="close">×</button></div><p class="h3t">${esc(REMARK[e.k] || '擺在這裡剛剛好。')}</p>`;
    card.classList.remove('r'); card.classList.add('on');
  }
  function closeCard(keep) { card.classList.remove('on'); const p = S.talk; S.talk = null; if (p && p.kind2 === 'npc' && p.state === 'talk') { p.state = 'idle'; p.t = rnd(1, 2.5); } }

  /* 收銀台：收今天的收入 */
  function pendingIncome() { if (!own || HOME) return 0; const day = cb.today ? cb.today() : Math.floor(Date.now() / 864e5); const n = D.cl ? clamp(day - D.cl, 0, 3) : 1; return n * dailyIncome(cozyOf(serialize())); }
  function regTap(e) {
    if (!own) { toast('收銀台鎖著，店長在打盹～'); return; }
    const a = pendingIncome();
    if (a <= 0) { toast('今天的收入已經收過了，明天再來！'); return; }
    let ok = false; try { ok = cb.collect ? cb.collect(a) : false; } catch (_) { }
    if (!ok) { toast('先開始遊戲（有存檔）才能收錢喔'); return; }
    D.cl = cb.today ? cb.today() : Math.floor(Date.now() / 864e5); changed(); coinFx(e); toast(`收到 ${yen(a)}！錢已經放進遊戲的錢包`);
  }
  const coinSp = new Sprite(new SpriteMaterial({ map: ctex(128, 128, x => { x.fillStyle = '#f2c230'; x.strokeStyle = '#8a5a10'; x.lineWidth = 8; x.beginPath(); x.arc(64, 64, 52, 0, 7); x.fill(); x.stroke(); x.fillStyle = '#8a5a10'; x.font = `900 64px ${FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('¥', 64, 68); }), transparent: true, depthTest: false }));
  coinSp.renderOrder = 25; coinSp.scale.set(.55, .55, 1); scene.add(coinSp);
  const coinFlyer = []; function coinFx(e) { for (let i = 0; i < 8; i++) { const s = coinSp.clone(); s.material = coinSp.material.clone(); s.position.copy(e.g.position).add(new Vector3(0, 1.4, 0)); s.userData.v = new Vector3(rnd(-1.2, 1.2), rnd(2.5, 4), rnd(-1.2, 1.2)); s.userData.t = 0; scene.add(s); coinFlyer.push(s); } }

  /* 布置模式 */
  function setMode(m) {
    S.mode = m; select(null); closeCard(); S.tgt = null; hudBtns();
    bp.classList.toggle('on', m === 'build'); topBar.classList.toggle('on', m === 'build'); if (m !== 'build') { camEl.style.bottom = ''; }
    info.style.display = m === 'build' ? 'none' : '';
    if (m === 'build') { topBar.textContent = '🔨 拖曳家具移動・拖空白處轉鏡頭'; drawPanel(); S.distT = 13.5; }
    else { S.distT = S.inside ? 10.5 : 13; if (!okAt(me.x, me.z, me.z)) { const c = walkableCells(me.z < RD).sort((a, b) => Math.hypot(a[0] + .5 - me.x, a[1] + .5 - me.z) - Math.hypot(b[0] + .5 - me.x, b[1] + .5 - me.z)).find(c => okAt(c[0] + .5, c[1] + .5, c[1])); if (c) { me.x = c[0] + .5; me.z = c[1] + .5; } } changed(); }
  }
  let curCat = HOME ? 'liv' : 'tbl';
  const thumbs = {};
  let thumbR = null, thumbScene = null, thumbCam = null;
  function thumbOf(k) {
    if (thumbs[k]) return thumbs[k];
    try {
      if (!thumbR) { thumbR = new WebGLRenderTarget(128, 128); thumbScene = new Scene(); thumbScene.add(new HemisphereLight(0xfff4e0, 0x806050, 2.2)); const l = new DirectionalLight(0xffffff, 1.4); l.position.set(2, 4, 3); thumbScene.add(l); thumbCam = new PerspectiveCamera(30, 1, .05, 50); }
      const g = build(k); thumbScene.add(g); const I = IT[k];
      const bb = new Box3().setFromObject(g); const c = bb.getCenter(new Vector3()), sz = bb.getSize(new Vector3()); const R = Math.max(sz.x, sz.y, sz.z) * .5 + .05;
      const dist = R / Math.sin(15 * Math.PI / 180) * 1.05; thumbCam.position.set(c.x + dist * .55, c.y + dist * .45, c.z + dist * .7); thumbCam.lookAt(c);
      if (I.L === 'wall') { thumbCam.position.set(c.x + dist * .25, c.y + dist * .1, c.z + dist * .96); thumbCam.lookAt(c); }
      renderer.setRenderTarget(thumbR); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(thumbScene, thumbCam); renderer.setRenderTarget(null); renderer.setClearColor(0x1a1536, 1);
      const px = new Uint8Array(128 * 128 * 4); renderer.readRenderTargetPixels(thumbR, 0, 0, 128, 128, px);
      const c2 = document.createElement('canvas'); c2.width = c2.height = 128; const x = c2.getContext('2d'), id = x.createImageData(128, 128);
      for (let y = 0; y < 128; y++) id.data.set(px.subarray((127 - y) * 512, (128 - y) * 512), y * 512);
      for (let i = 0; i < id.data.length; i += 4) { id.data[i] = LUT[id.data[i]]; id.data[i + 1] = LUT[id.data[i + 1]]; id.data[i + 2] = LUT[id.data[i + 2]]; }
      x.putImageData(id, 0, 0); thumbScene.remove(g); g.traverse(m => { if (m.geometry) m.geometry.dispose(); });
      return thumbs[k] = c2.toDataURL();
    } catch (_) { return thumbs[k] = ''; }
  }
  function drawPanel() {
    const coins = cb.coins ? cb.coins() : 0;
    const tabs = (HOME ? HCATS : CATS).map(([k, n]) => `<button class="h3tab ${curCat === k ? 'on' : ''}" type="button" data-h3="cat" data-k="${k}">${n}</button>`).join('') + `<button class="h3tab ${curCat === 'reno' ? 'on' : ''}" type="button" data-h3="cat" data-k="reno">🏠 改裝</button><span style="margin-left:auto;align-self:center;color:#ffd27a;font-weight:800;white-space:nowrap;padding:0 6px">💰 ${yen(coins)}</span>`;
    let row = '';
    if (curCat === 'reno') {
      const lv = D.sz | 0, nx = SIZES[lv + 1];
      row = (own ? `<button class="h3it ${nx && coins < nx[2] ? 'no' : ''}" type="button" data-h3="expand" ${nx ? '' : 'disabled'}><span class="ph" style="display:flex;align-items:center;justify-content:center;font-size:34px">📐</span>${nx ? `擴建到 ${nx[0]}×${nx[1]}<span class="pr">${yen(nx[2])}</span>` : `已經最大<span class="pr">${RW}×${RD}</span>`}</button>` : '')
        + FLOORS.map(([k, n, p]) => { const ow = D.fo[k], cur = D.fl === k; return `<button class="h3it ${cur ? 'cur' : ''}" type="button" data-h3="floor" data-k="${k}"><span class="ph" style="background:url(${swatch('f', k)}) center/cover"></span>${esc(n)}${cur ? '<span class="pr">使用中</span>' : ow ? '<span class="pr">已擁有</span>' : `<span class="pr">${yen(p)}</span>`}</button>`; }).join('')
        + WALLS.map(([k, n, p]) => { const ow = D.wo[k], cur = D.wa === k; return `<button class="h3it ${cur ? 'cur' : ''}" type="button" data-h3="wall" data-k="${k}"><span class="ph" style="background:url(${swatch('w', k)}) center/cover"></span>${esc(n)}${cur ? '<span class="pr">使用中</span>' : ow ? '<span class="pr">已擁有</span>' : `<span class="pr">${yen(p)}</span>`}</button>`; }).join('');
    } else {
      row = ITEMS.filter(I => (HOME ? I.hc === curCat : I.cat === curCat) && !I.fixed).map(I => { const n = D.inv[I.k] || 0, src = thumbOf(I.k); return `<button class="h3it ${!n && coins < I.p ? 'no' : ''}" type="button" data-h3="item" data-k="${I.k}">${n ? `<span class="ow">×${n}</span>` : ''}${src ? `<img src="${src}" alt="">` : '<span class="ph"></span>'}${esc(I.n)}<span class="pr">${n ? '拿出來擺' : yen(I.p)}</span></button>`; }).join('');
    }
    const sc = bp.querySelector('.h3row'), sl = sc ? sc.scrollLeft : 0, same = bp.dataset.cat === curCat;
    bp.innerHTML = `<div class="h3tabs">${tabs}</div><div class="h3row">${row}</div>`; bp.dataset.cat = curCat;
    if (same) bp.querySelector('.h3row').scrollLeft = sl;
    const bh = bp.offsetHeight || 150; camEl.style.bottom = (bh + 8) + 'px'; selBar.style.bottom = (bh + 8) + 'px';
  }
  const swC = {};
  function swatch(t, k) { const key = t + k; if (swC[key]) return swC[key]; let c; if (t === 'f') { const tx = (floorTex[k] || floorTex.wood)(); c = tx.image; } else { c = wallTex(k, 2).image; } return swC[key] = c.toDataURL(); }
  function select(e) {
    if (S.sel && S.sel !== e) { if (!S.sel.ok) revert(S.sel); }
    S.sel = e; ring.visible = !!e; selBar.classList.toggle('on', !!e);
    if (e) { e.last = { x: e.x, z: e.z, r: e.r }; e.ok = true; const I = IT[e.k]; selBar.innerHTML = `<button class="h3b" type="button" data-h3="rot" ${I.L === 'wall' ? 'disabled' : ''}><i>⟳</i>旋轉</button><button class="h3b" type="button" data-h3="store" ${I.fixed ? 'disabled' : ''}><i>📦</i>收起來</button><button class="h3b hot" type="button" data-h3="ok"><i>✓</i>放好</button>`; markSel(); }
  }
  function revert(e) { if (!e.last) return; const dx = e.last.x - e.x, dz = e.last.z - e.z; const tops = IT[e.k].sf ? topsOn(e) : []; e.x = e.last.x; e.z = e.last.z; e.r = e.last.r; syncItem(e); tops.forEach(t => { t.x += dx; t.z += dz; syncItem(t); }); e.ok = true; markSel(); }
  const ringT = ctex(64, 64, x => { x.strokeStyle = '#fff'; x.lineWidth = 6; x.strokeRect(3, 3, 58, 58); });
  const ring = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: ringT, transparent: true, depthWrite: false, color: '#6aff8a' })); ring.rotation.x = -Math.PI / 2; ring.visible = false; ring.renderOrder = 5; scene.add(ring);
  const ringFill = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ transparent: true, opacity: .22, depthWrite: false, color: '#6aff8a' })); ringFill.rotation.x = -Math.PI / 2; ring.add(ringFill); ringFill.rotation.x = 0; ringFill.position.z = -.001;
  function markSel() {
    const e = S.sel; if (!e) return; const I = IT[e.k]; const ok = valid(e, e); e.ok = ok;
    const col = ok ? '#6aff8a' : '#ff5a4a'; ring.material.color.set(col); ringFill.material.color.set(col);
    if (I.L === 'wall') { const [x, , z] = posOf(e); const side = wallSide(e.r); ring.scale.set(I.w, .6, 1); ring.position.set(x + (side === 'left' ? .35 : side === 'right' ? -.35 : 0), .03, z + (side === 'back' ? .35 : side === 'front' ? -.35 : 0)); ring.rotation.z = side === 'left' || side === 'right' ? Math.PI / 2 : 0; }
    else { const [w, d] = fp(I, e.r), [x, y, z] = posOf(e); ring.scale.set(w, d, 1); ring.rotation.z = 0; ring.position.set(x, y + .03, z); }
    const okb = selBar.querySelector('[data-h3="ok"]'); if (okb) okb.disabled = !ok;
  }
  function dragTo(e, cx, cy) {
    const g = groundAt(cx, cy); if (!g) return; const I = IT[e.k];
    const ox = e.x, oz = e.z;
    if (I.L === 'wall') {
      const cs = [[g.z, 0], [g.x, 1], [RW - g.x, 3], [RD - g.z, 2]].filter(c => !S.low[wallSide(c[1])]).sort((a, b) => a[0] - b[0]); if (!cs.length) return; e.r = cs[0][1];
      if (e.r === 0 || e.r === 2) { e.x = clamp(Math.round(g.x - I.w / 2), 0, RW - I.w); e.z = e.r === 0 ? 0 : RD - 1; } else { e.z = clamp(Math.round(g.z - I.w / 2), 0, RD - I.w); e.x = e.r === 1 ? 0 : RW - 1; }
    } else { const [w, d] = fp(I, e.r); e.x = Math.round(g.x - w / 2); e.z = Math.round(g.z - d / 2); }
    if (e.x !== ox || e.z !== oz || I.L === 'wall') { if (I.sf) topsOn2(e, ox, oz); syncItem(e); markSel(); }
  }
  function topsOn2(e, ox, oz) { const t = { x: ox, z: oz, r: e.r, k: e.k }; const cs = cellsOf(t); placed.filter(q => IT[q.k].L === 'top' && cellsOf(q).some(c => cs.some(d => d[0] === c[0] && d[1] === c[1]))).forEach(q => { q.x += e.x - ox; q.z += e.z - oz; syncItem(q); }); }
  function endDrag() { if (S.sel) { markSel(); placed.filter(q => IT[q.k].L === 'top').forEach(syncItem); } }
  function rotateSel() { const e = S.sel; if (!e || IT[e.k].L === 'wall') return; const tops = IT[e.k].sf ? topsOn(e) : []; if (tops.length) { tops.forEach(t => { unplace(t); D.inv[t.k] = (D.inv[t.k] || 0) + 1; }); toast('桌上的東西先收回背包了'); } e.r = (e.r + 1) % 4; syncItem(e); markSel(); }
  function storeSel() { const e = S.sel; if (!e || IT[e.k].fixed) return; const tops = IT[e.k].sf ? topsOn(e) : []; tops.forEach(t => { unplace(t); D.inv[t.k] = (D.inv[t.k] || 0) + 1; }); S.sel = null; unplace(e); D.inv[e.k] = (D.inv[e.k] || 0) + 1; ring.visible = false; selBar.classList.remove('on'); refreshPots(); changed(); drawPanel(); }
  function okSel() { const e = S.sel; if (!e) return; if (!valid(e, e)) { toast('這裡放不下（紅色），換個位置吧'); return; } e.last = null; S.sel = null; ring.visible = false; selBar.classList.remove('on'); refreshPots(); changed(); }
  function spawnItem(k) {
    const I = IT[k], e = { k, x: 0, z: 0, r: 0 };
    const cx = S.cam.x, cz = S.cam.z; let best = null, bd = 1e9;
    if (I.L === 'wall') { for (const r of [0, 1, 3, 2].filter(r => !S.low[wallSide(r)])) for (let i = 0; i < 10; i++) { const t = { k, r, x: r === 0 || r === 2 ? i : r === 1 ? 0 : RW - 1, z: r === 1 || r === 3 ? i : r === 0 ? 0 : RD - 1 }; if (validWall(t)) { const [x, , z] = posOf(t), d = Math.hypot(x - cx, z - cz); if (d < bd) { bd = d; best = t; } } } }
    else for (let z = 0; z < YZ1; z++) for (let x = YX0; x < YX1; x++) { const t = { k, x, z, r: 0 }; if (!valid(t)) continue; const [px, , pz] = posOf(t), inside = zoneIn(x, z), d = Math.hypot(px - cx, pz - cz) + (inside === S.inside ? 0 : 6) + (I.L === 'top' && !surfaceAt(x, z) ? 1.5 : 0); if (d < bd) { bd = d; best = t; } }
    if (best) Object.assign(e, best); else { e.x = 1; e.z = 1; }
    place(e, true); D.inv[k]--; if (!D.inv[k]) delete D.inv[k]; select(e); if (!best) markSel(); refreshPots(); changed(); drawPanel();
  }
  function confirmBuy(kind, k, n, p, then) {
    const coins = cb.coins ? cb.coins() : 0;
    pan.innerHTML = `<h3>買下「${esc(n)}」？</h3><p>價錢 <b>${yen(p)}</b>　你現在有 <b>${yen(coins)}</b></p>${coins < p ? '<p style="color:#c0301a">錢不夠喔，回去多營業幾天吧！</p>' : ''}<div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">取消</button><button class="h3n" type="button" data-h3="buyok" ${coins < p ? 'disabled' : ''}>買下</button></div>`;
    pan.classList.add('on'); pan._buy = () => { let ok = false; try { ok = cb.buy ? cb.buy(p, n) : false; } catch (_) { } if (!ok) { toast('買不了（錢不夠或還沒有存檔）'); return; } pan.classList.remove('on'); then(); };
  }

  /* 留言板 */
  let msgs = null, msgsErr = false;
  function loadMsgs(force) { if (msgs && !force) return Promise.resolve(msgs); if (!cb.msgs) { msgs = []; return Promise.resolve(msgs); } return Promise.resolve(cb.msgs()).then(a => { msgs = (a || []).slice().sort((x, y) => (y.t || 0) - (x.t || 0)); msgsErr = false; return msgs; }, () => { msgsErr = true; msgs = []; return msgs; }); }
  let giftPickK = '';
  function openBoard() {
    closeCard(); pan.innerHTML = `<h3>📜 ${esc(D.name)} 的留言板</h3><p>載入中…</p>`; pan.classList.add('on');
    loadMsgs(true).then(list => {
      if (!pan.classList.contains('on')) return;
      const rows = list.slice(0, 30).map(m => `<div class="msg"><b>${esc(m.name || '玩家')}</b><small>${m.t ? new Date(m.t).toLocaleString('zh-TW', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : ''}</small>${m.gift && IT[m.gift] ? ` <small>🎁 ${esc(IT[m.gift].n)}</small>` : ''}<br>${esc(m.msg || '')}</div>`).join('') || `<p style="opacity:.7">${msgsErr ? '留言板暫時打不開（雲端還沒開通或沒有網路）' : '還沒有人留言～'}</p>`;
      let form = '';
      if (!own) {
        const sent = cb.giftSent ? cb.giftSent() : false;
        form = `<hr style="border:0;border-top:2px solid #c8a878;margin:10px 0"><p style="margin:4px 0"><b>留言給店長</b>（最多 60 字）</p>${o.demo ? '<p style="margin:2px 0;color:#8a3a14;font-size:14px">（示範店：留言不會真的送出）</p>' : ''}<textarea id="h3msg" maxlength="60" rows="2" placeholder="例如：你的店好溫馨！下次再來～"></textarea>
          <p style="margin:8px 0 0">附上一份小禮物（每天一份，免費）：</p><div class="gifts">${sent ? '<span style="opacity:.7">今天已經送過禮物了</span>' : ['', ...GIFTS].map(k => `<button type="button" data-h3="gpick" data-k="${k}" class="${giftPickK === k ? 'on' : ''}">${k ? esc(IT[k].n) : '不附禮物'}</button>`).join('')}</div>
          <div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">關閉</button><button class="h3n" type="button" data-h3="post">送出留言</button></div>`;
      } else { const un = HOME ? 0 : list.filter(m => m.gift && IT[m.gift] && !D.gc[m.id]).length; form = `<div class="h3bt">${un ? `<button class="h3n" type="button" data-h3="claim">🎁 領取 ${un} 份禮物</button>` : ''}<button class="h3n alt" type="button" data-h3="pclose">關閉</button></div>`; }
      pan.innerHTML = `<h3>📜 ${esc(D.name)} 的留言板</h3>${rows}${form}`;
    });
  }
  function postMsg() {
    if (o.demo) { toast('示範店的留言不會真的送出～'); pan.classList.remove('on'); return; }
    const ta = pan.querySelector('#h3msg'), msg = (ta && ta.value || '').trim().slice(0, 60);
    if (msg.length < 1) { toast('寫一句話再送出吧'); return; }
    const gift = (cb.giftSent && cb.giftSent()) ? '' : giftPickK;
    const btn = pan.querySelector('[data-h3="post"]'); if (btn) btn.disabled = true;
    Promise.resolve(cb.post ? cb.post({ msg, gift }) : null).then(() => { toast(gift ? '留言和禮物送出了！' : '留言送出了！'); giftPickK = ''; msgs = null; pan.classList.remove('on'); }, () => { toast('送不出去，可能雲端還沒開通，稍後再試'); if (btn) btn.disabled = false; });
  }
  /* 收到的禮物（自己的店）：門口出現禮物盒，點了收進背包 */
  function refreshGifts() {
    giftBoxes.forEach(g => scene.remove(g)); giftBoxes.length = 0; giftPick.length = 0;
    if (!own || !msgs) return; const un = msgs.filter(m => m.gift && IT[m.gift] && !D.gc[m.id]);
    un.slice(0, 5).forEach((m, i) => { const g = new Group(); g.position.set(BOARD.x - 1.1 - (i % 3) * .55, 0, BOARD.z + .4 + Math.floor(i / 3) * .5); scene.add(g); const cs = ['#e2452f', '#3a7ad0', '#f2b630', '#4aa86a', '#c84a9a'][i % 5]; const b = box(.42, .36, .42, lam(cs), 0, .18, 0, g); box(.44, .38, .08, lam('#fff3d6'), 0, .18, 0, g); box(.08, .38, .44, lam('#fff3d6'), 0, .18, 0, g); const lid = box(.46, .08, .46, lam(cs), 0, .4, 0, g); const bw = new Mesh(new SphereGeometry(.08, 10, 8), lam('#fff3d6')); bw.position.y = .48; bw.scale.set(1.6, .8, 1); g.add(bw); g.traverse(x => { if (x.isMesh) giftPick.push(x); }); giftBoxes.push(g); g.userData.ph = i; });
    if (un.length) toast(o.island ? `有 ${un.length} 份禮物，按「📜 留言板」領取！` : `門口有 ${un.length} 份禮物！`);
  }
  function claimGifts() {
    if (!own || !msgs) return; const un = msgs.filter(m => m.gift && IT[m.gift] && !D.gc[m.id]); if (!un.length) return;
    un.forEach(m => { D.inv[m.gift] = (D.inv[m.gift] || 0) + 1; D.gc[m.id] = 1; });
    changed(); refreshGifts(); pan.innerHTML = `<h3>🎁 收到禮物了！</h3>${un.map(m => `<div class="msg"><b>${esc(m.name || '玩家')}</b> 送你「${esc(IT[m.gift].n)}」<br>${esc(m.msg || '')}</div>`).join('')}<p>都放進背包了，按「🔨 布置」就能擺出來。</p><div class="h3bt"><button class="h3n" type="button" data-h3="pclose">好</button></div>`; pan.classList.add('on');
  }
  /* 改店名 */
  function openRename() { closeCard(); pan.innerHTML = `<h3>🪧 幫店取名字</h3><p>會寫在島上居酒屋的招牌上，好友來玩的時候也看得到（最多 12 個字）。</p><input id="h3name" maxlength="12" value="${esc(D.name)}" autocomplete="off"><div class="h3bt"><button class="h3n alt" type="button" data-h3="pclose">取消</button><button class="h3n" type="button" data-h3="nameok">決定</button></div>`; pan.classList.add('on'); }

  /* 介面按鈕（全部用 data-h3） */
  const onClick = e => {
    const b = e.target.closest('[data-h3]'); if (!b || !root.contains(b) || b.disabled) return; const a = b.dataset.h3, k = b.dataset.k;
    if (a === 'close') closeCard();
    else if (a === 'more' && S.talk) openCard(S.talk);
    else if (a === 'build') setMode('build');
    else if (a === 'done') setMode('walk');
    else if (a === 'rename') openRename();
    else if (a === 'nameok') { const v = (pan.querySelector('#h3name').value || '').trim().slice(0, 12); if (v) { D.name = v; drawSign(); changed(); } pan.classList.remove('on'); }
    else if (a === 'board') { if (S.mode !== 'walk') return; if (o.island) openBoard(); else walkThen(BOARD.x, BOARD.z + 1, openBoard); }
    else if (a === 'claim') claimGifts();
    else if (a === 'exit') { if (o.island) { S.exited = true; try { cb.exit && cb.exit(); } catch (_) { } } }
    else if (a === 'pclose') pan.classList.remove('on');
    else if (a === 'post') postMsg();
    else if (a === 'gpick') { giftPickK = k || ''; pan.querySelectorAll('[data-h3="gpick"]').forEach(x => x.classList.toggle('on', (x.dataset.k || '') === giftPickK)); }
    else if (a === 'buyok' && pan._buy) pan._buy();
    else if (a === 'cat') { curCat = k; drawPanel(); }
    else if (a === 'item') { const I = IT[k]; if (S.sel && !S.sel.ok) revert(S.sel); select(null); if (D.inv[k]) spawnItem(k); else confirmBuy('item', k, I.n, I.p, () => { D.inv[k] = (D.inv[k] || 0) + 1; spawnItem(k); }); }
    else if (a === 'floor') { const F = FLOORS.find(x => x[0] === k); const go = () => { D.fo[k] = 1; D.fl = k; setFloor(k); changed(); drawPanel(); }; if (D.fo[k]) go(); else confirmBuy('floor', k, F[1], F[2], go); }
    else if (a === 'wall') { const W = WALLS.find(x => x[0] === k); const go = () => { D.wo[k] = 1; D.wa = k; setWall(k); changed(); drawPanel(); }; if (D.wo[k]) go(); else confirmBuy('wall', k, W[1], W[2], go); }
    else if (a === 'expand') { const lv = D.sz | 0, nx = SIZES[lv + 1]; if (!nx) return; confirmBuy('expand', 'x', `擴建到 ${nx[0]}×${nx[1]} 格（現在 ${RW}×${RD}）`, nx[2], () => { D.sz = lv + 1; serialize(); try { cb.save && cb.save(D, true); } catch (_) { } toast('擴建完成！'); if (cb.reload) setTimeout(() => cb.reload(), 400); }); }
    else if (a === 'rot') rotateSel();
    else if (a === 'store') storeSel();
    else if (a === 'ok') okSel();
  };
  root.addEventListener('click', onClick);

  /* 載入留言（自己的店：禮物盒＋留過言的人來逛；別人的店：只讀） */
  loadMsgs().then(list => { if (S.dead) return; if (own && !HOME) { refreshGifts(); const seen = {}; list.filter(m => m.name && !seen[m.from || m.name] && (seen[m.from || m.name] = 1)).slice(0, 3).forEach(addVisitor); } });

  /* ───────── 控制介面（給 index.html 和自動測試用） ───────── */
  const ctl = {
    get dead() { return S.dead; }, set dead(v) { if (v) dispose(); }, cv, dispose,
    data: () => JSON.parse(JSON.stringify(serialize())),
    probe() {
      const P = v => { const f = proj(v); return { x: Math.round(f.x), y: Math.round(f.y) }; };
      return { mode: S.mode, inside: S.inside, calls: renderer.info.render.calls, tris: renderer.info.render.triangles, me: { x: +me.x.toFixed(2), z: +me.z.toFixed(2) }, yaw: +S.yaw.toFixed(2), sel: S.sel ? { k: S.sel.k, x: S.sel.x, z: S.sel.z, r: S.sel.r, ok: S.sel.ok } : null,
        items: placed.map(e => Object.assign({ k: e.k, x: e.x, z: e.z, r: e.r }, P(new Vector3(e.g.position.x, e.g.position.y + .4, e.g.position.z)))),
        npcs: npcs.filter(p => !p.hidden).map(p => Object.assign({ id: p.d.id || p.kind2, kind: p.kind2, state: p.state }, P(new Vector3(p.x, p.h * .5, p.z)))),
        board: P(new Vector3(BOARD.x, 1.15, BOARD.z)), gifts: giftBoxes.length, card: card.classList.contains('on') ? card.textContent : '', pan: pan.classList.contains('on') ? pan.textContent : '',
        cozy: cozyOf(serialize()), inv: Object.assign({}, D.inv), name: D.name, fl: D.fl, wa: D.wa, tag: me.tag ? me.tag.visible : false,
        cellPx: (x, z) => P(new Vector3(x, 0, z)) };
    },
    px(x, y, z) { const f = proj(new Vector3(x, y, z)); return { x: Math.round(f.x), y: Math.round(f.y) }; },
    teleport(x, z) { me.x = x; me.z = z; S.inside = z < RD; },
    setYaw(y) { S.yaw = S.yawT = y; },
    setDist(d) { S.dist = S.distT = d; },
  };
  function dispose() {
    if (S.dead) return; S.dead = true; cancelAnimationFrame(S.raf); clearTimeout(saveT); if (own) { try { serialize(); cb.save && cb.save(D, true); } catch (_) { } }
    document.removeEventListener('keydown', kd); document.removeEventListener('keyup', ku); root.removeEventListener('click', onClick);
    ui.forEach(e => e.remove());
    scene.traverse(ob => { if (ob.geometry) ob.geometry.dispose(); const ms = ob.material ? (Array.isArray(ob.material) ? ob.material : [ob.material]) : []; ms.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); });
    if (thumbR) thumbR.dispose();
    try { renderer.dispose(); renderer.forceContextLoss(); } catch (_) { }
  }

  /* ───────── 每幀 ───────── */
  let cw = 0, ch = 0, dprv = 0, pr = 1, fpsT = 0, fpsN = 0, prCap = 9;
  const fwd = new Vector3(), rgt = new Vector3(), camPos = new Vector3();
  function calcPS(H) { return Math.round(clamp(1.75 - (H - 380) / 440 * .6, 1.15, 1.75) * 20) / 20; }
  function resize() {
    const r = cv.getBoundingClientRect(), W = Math.max(1, cv.clientWidth), Hh = Math.max(1, cv.clientHeight), dpr = Math.min(2, window.devicePixelRatio || 1);
    const nps = calcPS(r.height || Hh); if (nps !== PS) { PS = nps; people.forEach(q => { q.h = q.h0 * PS; q.w = q.h * q.ar; }); }
    if (W === cw && Hh === ch && dpr === dprv) return;
    cw = W; ch = Hh; dprv = dpr; pr = clamp((r.width * dpr) / W, .5, 2.2); pr = Math.min(pr, prCap, Math.sqrt(1.4e6 / (W * Hh)));
    renderer.setPixelRatio(pr); renderer.setSize(W, Hh, false); camera.aspect = W / Hh; camera.updateProjectionMatrix();
  }
  function stepPerson(p, dt) {
    if (!p.path || !p.path.length) return true;
    const [tx, tz] = p.path[0], dx = tx - p.x, dz = tz - p.z, d = Math.hypot(dx, dz), sp = p.sp;
    if (d < .06) { p.path.shift(); return !p.path.length; }
    const s = Math.min(d, sp * dt); p.x += dx / d * s; p.z += dz / d * s; p.moving = true; p.ph += dt * (4 + sp * 3.2);
    const sd = dx * rgt.x + dz * rgt.z; if (Math.abs(sd) > .05) p.face = sd > 0 ? 1 : -1; return false;
  }
  function frame(now) {
    if (S.dead) return;
    if (!document.contains(cv)) { dispose(); return; }
    S.raf = requestAnimationFrame(frame);
    const dt = Math.min(.1, (now - S.last) / 1000); S.last = now; S.t += dt; const t = S.t;
    resize();
    fpsT += dt; fpsN++; if (fpsT > 1.2) { const avg = fpsT / fpsN; if (avg > .028 && pr > .55) { pr = Math.max(.55, pr * .85); prCap = pr; renderer.setPixelRatio(pr); renderer.setSize(cw, ch, false); } fpsT = 0; fpsN = 0; }
    /* 鏡頭轉 */
    const K = S.keys; if (K.q) S.yawT += dt * 1.8; if (K.e) S.yawT -= dt * 1.8; if (S.camV) S.yawT += S.camV * dt * 1.8;
    S.yaw += (S.yawT - S.yaw) * Math.min(1, dt * 8); S.pitch += (S.pitchT - S.pitch) * Math.min(1, dt * 8); S.dist += (S.distT - S.dist) * Math.min(1, dt * 5);
    const sy = Math.sin(S.yaw), cy = Math.cos(S.yaw); fwd.set(-sy, 0, -cy); rgt.set(cy, 0, -sy);
    /* 玩家 */
    me.moving = false;
    if (S.mode === 'walk' && !pan.classList.contains('on')) {
      let vx = 0, vz = 0, mv = 0, lim = 1e9;
      if (S.joy) { vx = rgt.x * S.joy.x + fwd.x * -S.joy.y; vz = rgt.z * S.joy.x + fwd.z * -S.joy.y; mv = Math.hypot(S.joy.x, S.joy.y); }
      else {
        const ix = (K.arrowright || K.d ? 1 : 0) - (K.arrowleft || K.a ? 1 : 0), iy = (K.arrowup || K.w ? 1 : 0) - (K.arrowdown || K.s ? 1 : 0);
        if (ix || iy) { const l = Math.hypot(ix, iy); vx = (rgt.x * ix + fwd.x * iy) / l; vz = (rgt.z * ix + fwd.z * iy) / l; mv = 1; }
        else if (S.tgt) {
          if (!S.tgt.path) { const pth = findPath(me.x, me.z, Math.floor(S.tgt.x), Math.floor(S.tgt.z)); S.tgt.path = pth ? pth.slice(1) : []; if (pth) { if (S.tgt.path.length) S.tgt.path[S.tgt.path.length - 1] = [S.tgt.x, S.tgt.z]; else S.tgt.path = [[S.tgt.x, S.tgt.z]]; } else S.tgt.path = [[S.tgt.x, S.tgt.z]]; }
          const nx = S.tgt.path[0]; if (!nx) { const fn = S.tgt.fn; S.tgt = null; if (fn) fn(); }
          else { const dx = nx[0] - me.x, dz = nx[1] - me.z, d = Math.hypot(dx, dz); if (d < .12) { S.tgt.path.shift(); if (!S.tgt.path.length) { const fn = S.tgt.fn; S.tgt = null; if (fn) fn(); } } else { vx = dx / d; vz = dz / d; mv = 1; lim = d; } }
        }
      }
      if (mv > .05) {
        const l = Math.hypot(vx, vz) || 1, sp = 4 * Math.min(1, mv), stp = Math.min(sp * dt, lim), ddx = vx / l * stp, ddz = vz / l * stp; let movedA = false;
        if (okAt(me.x + ddx, me.z + ddz, me.z)) { me.x += ddx; me.z += ddz; movedA = true; }
        else if (okAt(me.x + ddx, me.z, me.z)) { me.x += ddx; movedA = true; }
        else if (okAt(me.x, me.z + ddz, me.z)) { me.z += ddz; movedA = true; }
        if (!movedA && S.tgt) { S.tgt.stuck = (S.tgt.stuck || 0) + dt; if (S.tgt.stuck > .6) { const fn = S.tgt.fn; S.tgt = null; if (fn && Math.hypot(me.x - BOARD.x, me.z - BOARD.z) < 3) fn(); } }
        if (movedA) { me.moving = true; me.ph += dt * 9 * Math.min(1, mv); const sd = (vx / l) * rgt.x + (vz / l) * rgt.z; if (Math.abs(sd) > .2) me.face = sd > 0 ? 1 : -1; }
        if (S.talk && Math.hypot(S.talk.x - me.x, S.talk.z - me.z) > 6) closeCard();
      }
    }
    if (o.island && !S.exited && me.z > RD + .5 && S.mode === 'walk') { S.exited = true; try { cb.exit && cb.exit(); } catch (_) { } return; }
    if (ISL) { const nd = S.mode === 'walk' && !S.exited && me.z > RD - 2 && Math.abs(me.x - DX) < 2; exitBtn.classList.toggle('on', nd); if (nd) { const pp = proj(new Vector3(DX, S.low && S.low.front ? .5 : 2.7, RD - .15)), r = rect(); exitBtn.style.left = (pp.x - r.left) + 'px'; exitBtn.style.top = (pp.y - r.top) + 'px'; } }
    const wasIn = S.inside; S.inside = me.z < RD - .05;
    if (wasIn !== S.inside && S.mode === 'walk') { S.distT = S.inside ? 10.5 : 13; hint.textContent = S.inside ? `歡迎光臨「${D.name}」` : '店外'; hint.classList.add('on'); clearTimeout(hint.t); hint.t = setTimeout(() => hint.classList.remove('on'), 1800); }
    /* NPC */
    for (const p of npcs) {
      p.moving = false;
      if (p.kind2 === 'owner') continue;
      if (p.state === 'talk') { p.face = (me.x - p.x) * rgt.x + (me.z - p.z) * rgt.z > 0 ? 1 : -1; continue; }
      if (p.state === 'out') { p.t -= dt; if (p.t <= 0) { const L = Math.random() < .5; p.x = L ? EX0 + 4 : EX1 - 4; p.z = RD + rnd(3.5, 5.5); p.hidden = false; p.alpha = 0; p.stops = 2 + Math.floor(Math.random() * 3); const tg = npcTarget(p); if (!tg || !npcGo(p, tg[0], tg[1])) { p.hidden = true; p.t = 3; } } continue; }
      p.alpha = Math.min(1, (p.alpha || 0) + dt * 2);
      if (p.state === 'walk') { if (stepPerson(p, dt)) { p.state = 'idle'; p.t = rnd(3, 7); } }
      else if (p.state === 'idle') { p.t -= dt; if (p.t <= 0) { p.stops--; if (p.stops <= 0) { const ex = Math.random() < .5 ? EX0 + 1 : EX1 - 2; if (npcGo(p, ex, RD + 4)) p.state = 'leave'; else p.t = 2; } else { const tg = npcTarget(p); if (!tg || !npcGo(p, tg[0], tg[1])) p.t = 2; } } }
      else if (p.state === 'leave') { if (stepPerson(p, dt)) { p.hidden = true; p.state = 'out'; p.t = rnd(4, 12); } else if (p.x < EX0 + 3 || p.x > EX1 - 3) p.alpha = Math.max(0, Math.min(p.alpha, Math.min(p.x - EX0, EX1 - p.x) / 3)); }
      /* 不要跟玩家疊在一起 */
      const dx = p.x - me.x, dz = p.z - me.z, d = Math.hypot(dx, dz), mind = .55; if (d < mind && d > .001 && p.state !== 'walk' && p.state !== 'leave') { const nx = p.x + dx / d * (mind - d), nz = p.z + dz / d * (mind - d); if (okAt(nx, nz, p.z)) { p.x = nx; p.z = nz; } }
    }
    if (pet) { const P = pet; P.t -= dt; let mv = false;
      if (P.path && P.path.length) { const [px, pz] = P.path[0], dx = px - P.x, dz = pz - P.z, d = Math.hypot(dx, dz); if (d < .05) P.path.shift(); else { const st = Math.min(d, 1.1 * dt); P.x += dx / d * st; P.z += dz / d * st; P.g.rotation.y = Math.atan2(-dz, dx); mv = true; } if (!P.path.length) P.t = rnd(3, 8); }
      else if (P.t <= 0) { const cs = walkableCells(true); const c2 = cs[Math.floor(Math.random() * cs.length)]; const cbd = placed.find(e => e.k === 'catbed'); const tgt = cbd && Math.random() < .35 ? [cbd.x, cbd.z] : c2; const pth = tgt && findPath(P.x, P.z, tgt[0], tgt[1]); if (pth && pth.length) { P.path = pth; P.sleep = false; } else P.t = 3; if (cbd && tgt && tgt[0] === cbd.x && tgt[1] === cbd.z) P.sleep = true; }
      P.ph += dt * (mv ? 12 : 0); P.legs.forEach((l, i) => { l.rotation.z = mv ? Math.sin(P.ph + i * Math.PI) * .5 : 0; }); P.tail.rotation.z = .8 + Math.sin(t * 2) * .25;
      const onBed = !mv && P.sleep && placed.some(e => e.k === 'catbed' && Math.hypot(e.g.position.x - P.x, e.g.position.z - P.z) < .4);
      P.g.position.set(P.x, onBed ? .1 : 0, P.z); P.g.scale.y = onBed ? .75 + Math.sin(t * 1.5) * .03 : 1; }
    /* 鏡頭 */
    let tx = me.x, tz = me.z, ty = 1.1;
    if (S.mode === 'build') { if (S.inside) { tx = RW / 2 + sy * 2.2; tz = RD / 2 + cy * 2.2; } else { tx = DX + sy * 2; tz = RD + 2.5 + cy * 2; } ty = .4; }
    S.cam.x += (tx - S.cam.x) * Math.min(1, dt * (S.mode === 'build' ? 4 : 12)); S.cam.z += (tz - S.cam.z) * Math.min(1, dt * (S.mode === 'build' ? 4 : 12)); S.cam.y += (ty - S.cam.y) * Math.min(1, dt * 4);
    const aspect = cw / ch, extra = aspect < 1.45 ? 1.45 / aspect : 1, dd = S.dist * extra * Math.max(RW / 10, RD / 8), pitch = S.mode === 'build' ? Math.max(.75, S.pitch) : S.pitch;
    camPos.set(S.cam.x + sy * Math.cos(pitch) * dd, S.cam.y + Math.sin(pitch) * dd, S.cam.z + cy * Math.cos(pitch) * dd);
    camera.position.copy(camPos); camera.lookAt(S.cam.x, S.cam.y + .5, S.cam.z); sky.position.copy(camPos);
    /* 牆：人在店裡時擋到鏡頭的牆降下來、屋頂拿掉；在店外就是完整的房子 */
    const indoor = S.inside || (S.mode === 'build' && S.inside);
    roof.visible = !indoor;
    const low = S.low = { back: indoor && camPos.z < 0, front: indoor && camPos.z > RD, left: indoor && camPos.x < 0, right: indoor && camPos.x > RW };
    for (const k in walls) { const lo = low[k]; for (const g of walls[k]) { const ty2 = lo ? .14 : 1; g.scale.y += (ty2 - g.scale.y) * Math.min(1, dt * 10); } }
    for (const e of placed) if (IT[e.k].L === 'wall') { const side = wallSide(e.r); e.g.visible = !low[side] || !indoor; }
    facade.visible = !low.front;
    for (const g of nbs) g.visible = !(indoor && ((low.left && g.position.x < 0) || (low.right && g.position.x > RW)));
    warm1.intensity = warm2.intensity = indoor ? 14 : 6;
    /* 人物 */
    const camYaw = Math.atan2(camPos.x - S.cam.x, camPos.z - S.cam.z);
    for (const p of people) {
      const vis = !p.hidden, thru = !indoor && p.z < RD; p.grp.visible = vis; p.sh.visible = vis; if (p.tag) p.tag.visible = vis && !thru; if (p.bub) p.bub.visible = vis && !thru && p !== S.talk && p.state !== 'leave';
      if (!vis) continue;
      const w = p.w, h = p.h, walk = p.moving ? 1 : 0, s = Math.sin(p.ph), bob = walk ? Math.abs(s) * .06 : 0, tilt = walk ? s * .06 : Math.sin(t * 1.6 + p.ph) * .01, sq = walk ? 1 + Math.cos(p.ph * 2) * .025 : 1 + Math.sin(t * 1.6 + p.ph) * .008;
      const sleep = p.state === 'sleep' ? Math.sin(t * 1.2) * .015 : 0;
      p.grp.position.set(p.x, bob, p.z); p.m.rotation.set(0, camYaw, tilt * p.face + sleep); p.m.scale.set(w * p.face * (2 - sq), h * sq, 1);
      p.mat.opacity = p.alpha == null ? 1 : p.alpha; p.sh.position.set(p.x, .025, p.z); p.sh.scale.set(w * .7, w * .4, 1);
      if (p.tag) { p.tag.position.set(p.x, h + .3, p.z); p.tag.material.opacity = p.alpha == null ? 1 : p.alpha; }
      if (p.bub) { p.bub.position.set(p.x, h + (p.tag ? .82 : .45) + Math.sin(t * 2.3 + p.ph) * .06, p.z); }
    }
    /* 動畫：燈籠、魚、招財貓、唱片、時鐘、禮物盒、暖簾、花瓣、金幣 */
    nor.rotation.x = Math.sin(t * 1.7) * .05;
    for (const l of doorLan) l.material.opacity = .45 + .12 * Math.sin(t * 6);
    for (const g of lampG) g.material.opacity = .5 + .05 * Math.sin(t * 3 + g.parent.position.x);
    for (const e of placed) {
      const u = e.g.userData;
      if (u.glows) for (const g of u.glows) g.material.opacity = (g.userData.o0 || (g.userData.o0 = g.material.opacity)) * (.85 + .15 * Math.sin(t * 5 + e.x * 1.7));
      if (u.swing) u.swing.rotation.z = Math.sin(t * 1.5 + e.x) * .06;
      if (u.wave) u.wave.rotation.x = -.6 + Math.sin(t * 4) * .5;
      if (u.fish) u.fish.forEach((f, i) => { const a = t * (.6 + i * .2) + i * 2; f.position.x = Math.cos(a) * .2; f.position.z = Math.sin(a) * .12; f.rotation.y = -a + Math.PI / 2 * (i % 2 ? 1 : -1); });
      if (u.spin) u.spin.rotation.y = t * 3;
      if (u.hands) { const d0 = new Date(); u.hands[0].rotation.z = -((d0.getHours() % 12) + d0.getMinutes() / 60) / 12 * Math.PI * 2; u.hands[1].rotation.z = -d0.getMinutes() / 60 * Math.PI * 2; u.hands.forEach(hh => { const a = hh.rotation.z, L = hh.geometry.parameters.height / 2; hh.position.x = -Math.sin(a) * L; hh.position.y = u.handY + Math.cos(a) * L; }); }
    }
    for (const g of giftBoxes) g.position.y = Math.abs(Math.sin(t * 3 + g.userData.ph)) * .12;
    { const pa = petals.geometry.attributes.position.array; for (let i = 0; i < NP; i++) { const v = pVel[i]; pa[i * 3] += (v.vx + Math.sin(t * 1.5 + v.ph) * .3) * dt; pa[i * 3 + 1] += v.vy * dt; pa[i * 3 + 2] += Math.cos(t * 1.2 + v.ph) * .2 * dt; if (pa[i * 3 + 1] < .02) petalReset(i); } petals.geometry.attributes.position.needsUpdate = true; }
    cat.children[1].rotation.z = Math.sin(t * .8) * .08; cat.children[4].rotation.y = Math.sin(t * 2) * .4;
    { const rg = own ? placed.find(e => e.k === 'register') : null, a = rg ? pendingIncome() : 0; coinSp.visible = !!(rg && a > 0 && S.mode === 'walk' && S.inside); if (coinSp.visible) { coinSp.position.set(rg.g.position.x, 1.75 + Math.sin(t * 3) * .1, rg.g.position.z); coinSp.material.rotation = 0; coinSp.scale.set(.55 * Math.abs(Math.cos(t * 2)) + .05, .55, 1); } }
    for (let i = coinFlyer.length - 1; i >= 0; i--) { const s = coinFlyer[i], u = s.userData; u.t += dt; u.v.y -= 9 * dt; s.position.addScaledVector(u.v, dt); s.material.opacity = Math.max(0, 1 - u.t / 1.1); if (u.t > 1.1) { scene.remove(s); s.material.dispose(); coinFlyer.splice(i, 1); } }
    if (S.sel) { ring.material.opacity = .7 + .3 * Math.sin(t * 6); }
    renderer.render(scene, camera);
  }
  S.raf = requestAnimationFrame(frame);
  return ctl;
}
