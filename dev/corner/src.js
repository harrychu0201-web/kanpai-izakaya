/* 街角試作（2026/11/27）— 我的島改畫風前的試水溫：一個日式街角，固定斜角鏡頭。
   參考：使用者給的「AI 做的日式小鎮」截圖（明亮白天、居酒屋、便利商店、櫻花、平交道、遠景城市與山）。
   這一版全部用程式畫（佔位），目的是先對「構圖、光線、鏡頭、色調」；確認後再換成生圖轉 3D 的模型。
   操作：左下搖桿或 WASD 走路、點地面走過去；右上切換 白天／傍晚／夜晚。 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const FONT = '"Hiragino Maru Gothic ProN","Hiragino Sans","Noto Sans CJK JP","Noto Sans CJK TC","Noto Sans JP",sans-serif';

export function start(cv, o = {}) {
  const mobile = Math.min(screen.width, screen.height) < 600;
  const renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: (window.devicePixelRatio || 1) < 2, powerPreference: 'high-performance', preserveDrawingBuffer: !!o.test });
  renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 2, .5, 900);
  const R = mulberry(7);

  /* ───────── 小工具 ───────── */
  function ctex(w, h, draw, rep) { const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d'); draw(x, w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); } return t; }
  const MC = {};
  function mat(color, opt) { const k = color + (opt ? JSON.stringify(Object.keys(opt).map(k => [k, opt[k] && opt[k].uuid || opt[k]])) : ''); if (MC[k]) return MC[k]; return MC[k] = new THREE.MeshLambertMaterial(Object.assign({ color, vertexColors: true }, opt || {})); }
  /* 假 AO：牆腳暗、往上漸亮（頂點顏色），像烘焙過的光影 */
  function ao(g, dark = .66, span) { g.computeBoundingBox(); const bb = g.boundingBox, y0 = bb.min.y, hh = span || (bb.max.y - y0) || 1; const p = g.attributes.position, col = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) { const t = clamp((p.getY(i) - y0) / hh, 0, 1), f = dark + (1 - dark) * Math.pow(t, .5); col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = f; }
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); return g; }
  function ones(g) { if (!g.attributes.color) { const n = g.attributes.position.count, c = new Float32Array(n * 3).fill(1); g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3)); } return g; }
  function add(geo, m, x, y, z, par, o2) { ones(geo); const me = new THREE.Mesh(geo, typeof m === 'string' ? mat(m) : m); me.position.set(x, y, z); if (!(o2 && o2.noCast)) me.castShadow = true; me.receiveShadow = true; (par || scene).add(me); return me; }
  const rbox = (w, h, d, m, x, y, z, par, r = .06, dark) => add(ao(new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2 - .001, h / 2 - .001, d / 2 - .001)), dark), m, x, y + h / 2, z, par);
  const box = (w, h, d, m, x, y, z, par, dark) => add(ao(new THREE.BoxGeometry(w, h, d, 1, 3, 1), dark == null ? .8 : dark), m, x, y + h / 2, z, par);
  const cyl = (rt, rb, h, m, x, y, z, par, seg = 12) => add(ao(new THREE.CylinderGeometry(rt, rb, h, seg), .8), m, x, y + h / 2, z, par);
  const flat = (w, d, m, x, y, z, par) => { const g = ones(new THREE.PlaneGeometry(w, d)); g.rotateX(-Math.PI / 2); const me = add(g, m, x, y, z, par, { noCast: true }); me.castShadow = false; return me; };
  const solids = []; const solid = (x1, z1, x2, z2) => solids.push([Math.min(x1, x2), Math.min(z1, z2), Math.max(x1, x2), Math.max(z1, z2)]);

  /* ───────── 天空、雲、遠山 ───────── */
  const SKY = { top: new THREE.Color('#7fb7ea'), mid: new THREE.Color('#bfdcf3'), hor: new THREE.Color('#f3ece4') };
  const skyM = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { cT: { value: SKY.top }, cM: { value: SKY.mid }, cH: { value: SKY.hor } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
    fragmentShader: 'uniform vec3 cT,cM,cH; varying vec3 vP; void main(){ float y = max(vP.y,0.); vec3 c = mix(cH, cM, smoothstep(0.,.18,y)); c = mix(c, cT, smoothstep(.15,.6,y)); gl_FragColor = vec4(c,1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}' });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(700, 24, 12), skyM); scene.add(sky);
  const cloudT = ctex(512, 256, (x, w, h) => { const r = mulberry(3); for (let i = 0; i < 26; i++) { const cx = w * (.18 + r() * .64), cy = h * (.42 + r() * .3) - Math.abs(cx - w / 2) / w * h * .25, rr = 30 + r() * 52; const g = x.createRadialGradient(cx, cy - rr * .3, rr * .1, cx, cy, rr); g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.7, 'rgba(250,248,246,.8)'); g.addColorStop(1, 'rgba(240,240,248,0)'); x.fillStyle = g; x.beginPath(); x.arc(cx, cy, rr, 0, 7); x.fill(); }
    const s = x.createLinearGradient(0, h * .45, 0, h); s.addColorStop(0, 'rgba(0,0,0,0)'); s.addColorStop(1, 'rgba(150,160,190,.35)'); x.globalCompositeOperation = 'source-atop'; x.fillStyle = s; x.fillRect(0, 0, w, h); });
  const clouds = [];
  [[-230, 92, -560, 260], [70, 112, -600, 320], [320, 86, -540, 240], [-60, 70, -520, 180], [210, 62, -500, 170], [-400, 74, -480, 220]].forEach(([x, y, z, s]) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(s, s * .5), new THREE.MeshBasicMaterial({ map: cloudT, transparent: true, depthWrite: false, fog: false, opacity: .95 })); m.position.set(x, y, z); scene.add(m); clouds.push(m); });
  /* 遠山：兩層，越遠越淡（空氣透視） */
  function hills(z, y0, col, amp, seed, n) { const r = mulberry(seed), pts = []; const W = 1400; for (let i = 0; i <= n; i++) { const x = -W / 2 + W * i / n; let h = 0; for (let k = 1; k <= 3; k++) h += Math.sin(x * .004 * k + seed * k) * amp / k; h += amp * .9 + r() * amp * .15; pts.push([x, Math.max(10, h)]); }
    const sh = new THREE.Shape(); sh.moveTo(-W / 2, -40); pts.forEach(p => sh.lineTo(p[0], p[1])); sh.lineTo(W / 2, -40); sh.lineTo(-W / 2, -40);
    const g = new THREE.ShapeGeometry(sh, 2); const pc = g.attributes.position, c = new Float32Array(pc.count * 3); const top = new THREE.Color(col), bot = top.clone().lerp(new THREE.Color('#e9eef2'), .55);
    for (let i = 0; i < pc.count; i++) { const t = clamp(pc.getY(i) / (amp * 1.8), 0, 1); const cc = bot.clone().lerp(top, t); c[i * 3] = cc.r; c[i * 3 + 1] = cc.g; c[i * 3 + 2] = cc.b; }
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3)); const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, fog: false })); m.position.set(0, y0, z); scene.add(m); return m; }
  hills(-560, -12, '#b4c6d6', 92, 2, 90); hills(-430, -16, '#8fb3a6', 66, 5, 80); hills(-330, -20, '#74a283', 42, 9, 70);

  /* ───────── 地面：馬路、人行道、導盲磚、斑馬線 ───────── */
  const asphT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#6d7078'; x.fillRect(0, 0, w, h); const r = mulberry(11); for (let i = 0; i < 2600; i++) { const v = 95 + r() * 40 | 0; x.fillStyle = `rgba(${v},${v + 2},${v + 8},.35)`; x.fillRect(r() * w, r() * h, 1.5, 1.5); } }, [20, 20]);
  const paveT = ctex(256, 256, (x, w, h) => { x.fillStyle = '#d9cdb8'; x.fillRect(0, 0, w, h); const r = mulberry(5); for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { const v = r() * 14 - 7; x.fillStyle = `rgb(${222 + v},${208 + v},${186 + v})`; x.fillRect(i * 64 + 2, j * 64 + 2, 60, 60); } x.strokeStyle = '#bfae94'; x.lineWidth = 3; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, h); x.stroke(); x.beginPath(); x.moveTo(0, i * 64); x.lineTo(w, i * 64); x.stroke(); } }, [1, 1]);
  const dotT = ctex(64, 64, (x, w, h) => { x.fillStyle = '#f2c230'; x.fillRect(0, 0, w, h); x.fillStyle = '#e0a91c'; for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { x.beginPath(); x.arc(8 + i * 16, 8 + j * 16, 4.5, 0, 7); x.fill(); } x.strokeStyle = '#d09a10'; x.strokeRect(0, 0, w, h); }, [1, 1]);
  const lineT = ctex(64, 64, (x, w, h) => { x.fillStyle = '#f2c230'; x.fillRect(0, 0, w, h); x.fillStyle = '#dca318'; for (let i = 0; i < 4; i++) x.fillRect(6 + i * 15, 4, 6, 56); }, [1, 1]);
  const ground = flat(1200, 1200, mat('#b8ac98', {}), 0, -.02, -200); ground.receiveShadow = true;
  const road = (x1, z1, x2, z2) => { const w = x2 - x1, d = z2 - z1, t = asphT.clone(); t.needsUpdate = true; t.repeat.set(w / 8, d / 8); flat(w, d, mat('#ffffff', { map: t }), (x1 + x2) / 2, 0, (z1 + z2) / 2); };
  road(-120, 5, 120, 12); road(-3.6, -120, 3.6, 5);
  // 白線
  const white = mat('#f4f2ec', {});
  for (let x = -110; x < 110; x += 4) if (Math.abs(x + 1) > 5) flat(2, .18, white, x + 1, .012, 8.5);
  flat(240, .14, white, 0, .012, 5.35); flat(240, .14, white, 0, .012, 11.65);
  for (let i = -2; i <= 2; i++) flat(.55, 2.6, white, i * 1.3, .014, 2.9);     // 斑馬線（橫過主街）
  flat(6.8, .3, white, 0, .014, 4.6);                                           // 停止線
  for (let i = -2; i <= 2; i++) flat(.55, 2.6, white, i * 1.3, .014, -19.2);
  // 平交道前的黃色導盲磚格（像參考圖那樣一整片）
  for (let i = -3; i <= 3; i++) for (let j = 0; j < 2; j++) { const t = dotT; flat(.9, .9, mat('#ffffff', { map: t }), i * .95, .016, -21.2 - j * .95); }
  // 人行道（略高，帶路緣石）
  const curb = mat('#c9c3b8', {});
  const walk = (x1, z1, x2, z2) => { const w = x2 - x1, d = z2 - z1, t = paveT.clone(); t.needsUpdate = true; t.repeat.set(w / 1.6, d / 1.6); const m = mat('#ffffff', { map: t }); const g = ao(new THREE.BoxGeometry(w, .16, d), .9); add(g, m, (x1 + x2) / 2, .08, (z1 + z2) / 2, null, { noCast: true }); };
  walk(-120, 1.7, -3.6, 5); walk(3.6, 1.7, 120, 5); walk(-6.2, -22, -3.6, 1.7); walk(3.6, -22, 6.2, 1.7); walk(-120, 12, 120, 15);
  // 導盲磚：沿人行道的直線＋路口的點狀
  const tl = (x1, z1, x2, z2, t) => flat(x2 - x1, z2 - z1, mat('#ffffff', { map: t }), (x1 + x2) / 2, .165, (z1 + z2) / 2);
  for (let x = -60; x < -6; x += .9) tl(x, 3.1, x + .9, 3.5, lineT); for (let x = 6.2; x < 60; x += .9) tl(x, 3.1, x + .9, 3.5, lineT);
  for (let z = -20; z < 1.7; z += .9) { tl(-5.1, z, -4.7, z + .9, lineT); tl(4.7, z, 5.1, z + .9, lineT); }
  for (const sx of [-1, 1]) for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) tl(sx * 4.9 - .45 + i * .45 - (sx < 0 ? .0 : 0), 3.1 + j * .45 - .45, sx * 4.9 + i * .45 - (sx < 0 ? .0 : 0), 3.1 + j * .45, dotT);

  /* ───────── 招牌字、窗戶貼圖 ───────── */
  function signT(text, bg, fg, w = 512, h = 128, o2 = {}) { return ctex(w, h, (x) => { x.fillStyle = bg; x.fillRect(0, 0, w, h); if (o2.border) { x.strokeStyle = o2.border; x.lineWidth = h * .08; x.strokeRect(h * .06, h * .06, w - h * .12, h - h * .12); }
    x.fillStyle = fg; x.font = `900 ${h * (o2.size || .62)}px ${o2.font || FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle'; if (o2.spacing) x.letterSpacing = o2.spacing; x.fillText(text, w / 2, h * .54); }); }
  // 公寓窗：淡藍玻璃＋天空反光＋窗框，有的拉著窗簾
  function winT(cols, rows, wall, frame, seed, o2 = {}) { const r = mulberry(seed); return ctex(256, 256, (x, w, h) => { x.fillStyle = wall; x.fillRect(0, 0, w, h);
    const cw = w / cols, rh = h / rows; for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { const px = i * cw + cw * .18, py = j * rh + rh * (o2.top || .2), ww = cw * .64, hh = rh * (o2.hh || .58);
      x.fillStyle = frame; x.fillRect(px - 3, py - 3, ww + 6, hh + 6); const g = x.createLinearGradient(px, py, px + ww, py + hh); g.addColorStop(0, '#d8ecf8'); g.addColorStop(.45, '#8fb8d6'); g.addColorStop(1, '#5c7d99'); x.fillStyle = g; x.fillRect(px, py, ww, hh);
      x.fillStyle = 'rgba(255,255,255,.45)'; x.beginPath(); x.moveTo(px + ww * .1, py); x.lineTo(px + ww * .35, py); x.lineTo(px + ww * .05, py + hh); x.lineTo(px - ww * .2 + ww * .1, py + hh); x.closePath(); x.save(); x.clip(); x.fillRect(px, py, ww, hh); x.restore();
      if (r() < .45) { x.fillStyle = ['#f6e7c8', '#f3d3d3', '#e3efe0', '#fff6e6'][r() * 4 | 0]; x.fillRect(px, py, ww * (.25 + r() * .3), hh); }
      x.fillStyle = frame; x.fillRect(px + ww / 2 - 1.5, py, 3, hh); x.fillStyle = 'rgba(0,0,0,.12)'; x.fillRect(px - 3, py + hh + 3, ww + 6, 4); } }); }
  const glowM = c => new THREE.MeshBasicMaterial({ color: c, toneMapped: false });

  /* ───────── 建築 ───────── */
  const night = [];   // 夜晚會亮的東西：[材質, 白天顏色, 夜晚顏色]
  const lights = [];  // 夜晚的點光源
  // 左：四層公寓（陽台、窗、屋頂水塔）
  { const g = new THREE.Group(); g.position.set(-18.5, 0, -4.5); scene.add(g); const W = 11, D = 12, H = 12.4;
    const wt = winT(3, 4, '#efe6d6', '#8a8174', 21, { top: .16, hh: .62 }); const wm = mat('#ffffff', { map: wt });
    rbox(W, H, D, '#efe6d6', 0, 0, 0, g, .12, .74); const front = new THREE.Mesh(ones(new THREE.PlaneGeometry(W - .6, H - 1.6)), wm); front.position.set(0, H / 2 + .5, D / 2 + .01); g.add(front);
    for (let f = 0; f < 3; f++) { const y = 3.4 + f * 3.1; rbox(W - .4, .22, 1.3, '#e4dacb', 0, y, D / 2 + .6, g, .05); const rail = rbox(W - .4, .95, .08, '#d8cfc1', 0, y + .22, D / 2 + 1.22, g, .03); for (let k = -4; k <= 4; k++) rbox(.06, .9, .06, '#9a928a', k * 1.2, y + .22, D / 2 + 1.2, g, .02); }
    rbox(W + .3, .35, D + .3, '#ddd2c0', 0, H, 0, g, .08); cyl(.9, .9, 1.6, '#b9c4cf', 3, H + .35, -2, g); rbox(1.6, .9, 1.1, '#c9cdd2', -3, H + .35, -3, g, .05);
    rbox(2.2, 2.6, .3, '#7a5a3e', -3.2, 0, D / 2 + .1, g, .04); rbox(2.6, .2, 1.2, '#cfc6b8', -3.2, 2.7, D / 2 + .5, g, .05);
    const st = signT('メゾン灯', '#5d6b78', '#fff', 256, 64, { size: .5 }); add(new THREE.PlaneGeometry(1.6, .4), new THREE.MeshLambertMaterial({ map: st }), -.6, 2.2, D / 2 + .02, g, { noCast: true });
    solid(-24, -10.5, -13, 1.6); }
  // 左：居酒屋（木造兩層、藍灰瓦屋頂、暖簾、紅燈籠、招牌）
  { const g = new THREE.Group(); g.position.set(-9.3, 0, -2.4); scene.add(g); const W = 5.8, D = 7.6;
    const wood = '#8a5a36', dark = '#4a2f1e';
    rbox(W, 3.0, D, '#7b5032', 0, 0, 0, g, .05, .6);
    rbox(W - .3, 2.4, D - .4, '#efe3c8', 0, 3.25, -.1, g, .05, .8);   // 二樓灰泥牆
    // 一樓正面：格子拉門貼圖
    const doorT = ctex(512, 256, (x, w, h) => { x.fillStyle = '#5a3a24'; x.fillRect(0, 0, w, h); for (let i = 0; i < 3; i++) { const px = 20 + i * 164, pw = 150; x.fillStyle = i === 1 ? '#f3dcae' : '#e8cfa2'; x.fillRect(px, 40, pw, 200); x.strokeStyle = '#4a2c18'; x.lineWidth = 6; for (let k = 1; k < 5; k++) { x.beginPath(); x.moveTo(px + pw * k / 5, 40); x.lineTo(px + pw * k / 5, 240); x.stroke(); } for (let k = 1; k < 6; k++) { x.beginPath(); x.moveTo(px, 40 + 200 * k / 6); x.lineTo(px + pw, 40 + 200 * k / 6); x.stroke(); } x.strokeRect(px, 40, pw, 200); } });
    const doorM = new THREE.MeshLambertMaterial({ map: doorT }); night.push([doorM, '#ffffff', '#ffd9a0']);
    add(new THREE.PlaneGeometry(W - .5, 2.4), doorM, 0, 1.25, D / 2 + .02, g, { noCast: true });
    // 暖簾（藍底白字，分三片）
    const norT = ctex(512, 160, (x, w, h) => { x.fillStyle = '#25375e'; x.fillRect(0, 0, w, h); x.fillStyle = '#f6f1e4'; x.font = `900 92px ${FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('居 酒 屋', w / 2, h * .52); x.fillStyle = '#1a2846'; for (let i = 1; i < 3; i++) x.fillRect(w * i / 3 - 3, 0, 6, h); });
    const nor = add(new THREE.PlaneGeometry(2.4, .75), new THREE.MeshLambertMaterial({ map: norT, side: THREE.DoubleSide }), 0, 2.15, D / 2 + .16, g, { noCast: true });
    rbox(2.7, .1, .1, dark, 0, 2.52, D / 2 + .16, g, .03);
    // 招牌（木板、白字）＋小屋簷
    const sT = signT('居酒屋', '#3d2516', '#fff5dc', 512, 160, { size: .62, border: '#c89a5a', spacing: '18px' });
    add(new THREE.BoxGeometry(3.6, .9, .14), [mat(dark), mat(dark), mat(dark), mat(dark), new THREE.MeshLambertMaterial({ map: sT }), mat(dark)], 0, 3.25, D / 2 + .16, g);
    // 屋頂：兩層瓦片（一樓屋簷＋主屋頂）
    const tileT = ctex(128, 128, (x, w, h) => { x.fillStyle = '#5f7389'; x.fillRect(0, 0, w, h); for (let i = 0; i < 8; i++) { const g2 = x.createLinearGradient(0, i * 16, 0, i * 16 + 16); g2.addColorStop(0, '#7389a0'); g2.addColorStop(1, '#4b5d72'); x.fillStyle = g2; x.fillRect(0, i * 16, w, 14); } x.fillStyle = 'rgba(0,0,0,.18)'; for (let k = 0; k < 8; k++) x.fillRect(k * 16, 0, 2, h); }, [6, 3]);
    const roofM = mat('#ffffff', { map: tileT });
    const eave = (w, d, y, z, rise, par) => { const sh = new THREE.Shape(); sh.moveTo(-d / 2, 0); sh.lineTo(d / 2, 0); sh.lineTo(d / 2 - rise * .2, .12); sh.lineTo(0, rise); sh.lineTo(-d / 2 + rise * .2, .12); sh.closePath(); const eg = new THREE.ExtrudeGeometry(sh, { depth: w, bevelEnabled: false }); eg.translate(0, 0, -w / 2); eg.rotateY(Math.PI / 2); ones(eg); return add(eg, roofM, 0, y, z, par); };
    const hip = new THREE.ConeGeometry(1, 1, 4, 1, false, Math.PI / 4); ones(hip); const roof = add(hip, roofM, 0, 5.62, -.1, g); roof.scale.set((W + 1.0) / Math.SQRT2 * 1.0, 1.55, (D + .9) / Math.SQRT2); roof.position.y = 5.62 + .78;
    rbox(W + .9, .16, D + .8, '#4d5f73', 0, 5.6, -.1, g, .05);
    eave(W + .8, 1.5, 2.95, D / 2 + .35, .55, g); // 一樓前簷
    // 紅燈籠（夜晚會亮）
    const lanM = new THREE.MeshLambertMaterial({ color: '#e04a2a', emissive: '#000000' }); night.push([lanM, null, null, 'lan']);
    for (const sx of [-1.95, 1.95]) { const l = add(new THREE.SphereGeometry(.34, 16, 12), lanM, sx, 2.2, D / 2 + .55, g); l.scale.y = 1.35; rbox(.3, .1, .3, '#222', sx, 2.62, D / 2 + .55, g, .03); rbox(.3, .1, .3, '#222', sx, 1.68, D / 2 + .55, g, .03);
      const lt = signT('酒', '#00000000', '#1c0f08', 64, 64, { size: .7 }); add(new THREE.PlaneGeometry(.32, .32), new THREE.MeshBasicMaterial({ map: lt, transparent: true }), sx, 2.2, D / 2 + .92, g, { noCast: true }); }
    const pl = new THREE.PointLight('#ffb070', 0, 9, 1.6); pl.position.set(0, 2.2, D / 2 + 1.6); g.add(pl); lights.push([pl, 9]);
    // 門口小物：酒樽、盆栽、立式看板
    cyl(.38, .38, .8, '#9a6a3c', -2.55, 0, D / 2 + .7, g, 14); cyl(.4, .4, .06, '#3a2a1a', -2.55, .74, D / 2 + .7, g, 14);
    cyl(.28, .22, .45, '#b0623a', 2.6, 0, D / 2 + .65, g, 10); const bush = add(new THREE.IcosahedronGeometry(.45, 1), mat('#4f9a4a', { flatShading: true }), 2.6, .8, D / 2 + .65, g); ao(bush.geometry, .7);
    const menuT = ctex(128, 192, (x, w, h) => { x.fillStyle = '#2b1a10'; x.fillRect(0, 0, w, h); x.fillStyle = '#f3e6c8'; x.font = `700 22px ${FONT}`; x.textAlign = 'center'; ['本日','焼き鳥','おでん','生ビール'].forEach((t, i) => x.fillText(t, w / 2, 36 + i * 42)); });
    const mb = add(new THREE.PlaneGeometry(.6, .9), new THREE.MeshLambertMaterial({ map: menuT }), 3.35, .55, D / 2 + .9, g); mb.rotation.y = -.35;
    solid(-12.4, -6.4, -6.2, 1.7); solid(-12.1, 1.6, -6.5, 2.2); }
  // 右：便利商店（白色、彩色條紋、大片玻璃、自動販賣機）
  { const g = new THREE.Group(); g.position.set(10.4, 0, -3); scene.add(g); const W = 7.6, D = 9.2, H = 3.9;
    rbox(W, H, D, '#f4f4f2', 0, 0, 0, g, .1, .78);
    const stripe = ctex(256, 64, (x, w, h) => { [['#2f7fd6', 0], ['#ffffff', 16], ['#3aa65a', 24], ['#ffffff', 40], ['#f08a2a', 48]].forEach(([c, y]) => { x.fillStyle = c; x.fillRect(0, y, w, 16); }); });
    add(new THREE.PlaneGeometry(W + .02, .9), new THREE.MeshLambertMaterial({ map: stripe }), 0, 3.2, D / 2 + .02, g, { noCast: true });
    const gl = ctex(512, 256, (x, w, h) => { const gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#cfe6f3'); gr.addColorStop(1, '#9cc3da'); x.fillStyle = gr; x.fillRect(0, 0, w, h); const r = mulberry(8); for (let s = 0; s < 3; s++) { x.fillStyle = '#e9e4dc'; x.fillRect(20, 60 + s * 60, w - 40, 6); for (let k = 0; k < 26; k++) { x.fillStyle = ['#e8553f', '#f6cf4a', '#6fb6ea', '#7cc06a', '#f29a38', '#ffffff'][r() * 6 | 0]; x.fillRect(24 + k * 18, 40 + s * 60, 12, 20); } }
      x.fillStyle = 'rgba(255,255,255,.35)'; x.beginPath(); x.moveTo(80, 0); x.lineTo(200, 0); x.lineTo(60, h); x.lineTo(-60, h); x.fill(); x.fillStyle = '#7d8a96'; for (let k = 0; k <= 4; k++) x.fillRect(k * (w - 8) / 4, 0, 8, h); x.fillRect(0, 0, w, 8); });
    const glM = new THREE.MeshLambertMaterial({ map: gl }); night.push([glM, '#ffffff', '#fff6dc']);
    add(new THREE.PlaneGeometry(W - .7, 2.5), glM, 0, 1.35, D / 2 + .02, g, { noCast: true });
    const sT = signT('コンビニ', '#ffffff', '#2f7fd6', 512, 128, { size: .56, border: '#2f7fd6' }); const sM = new THREE.MeshLambertMaterial({ map: sT }); night.push([sM, '#ffffff', '#ffffff', 'sign']);
    add(new THREE.BoxGeometry(2.6, .6, .12), [mat('#ddd'), mat('#ddd'), mat('#ddd'), mat('#ddd'), sM, mat('#ddd')], -.9, 3.65 + .35, D / 2 + .1, g);
    rbox(1.3, .7, 1, '#c9cdd2', 2, H, -2, g, .05); rbox(1.3, .7, 1, '#c9cdd2', 2, H, .2, g, .05);
    // 自動販賣機（紅、藍）
    const vend = (c, x) => { const t = ctex(64, 128, (cx, w, h) => { cx.fillStyle = c; cx.fillRect(0, 0, w, h); cx.fillStyle = '#e8f1f6'; cx.fillRect(6, 8, w - 12, 62); const r = mulberry(x * 10 | 0); for (let j = 0; j < 3; j++) for (let i = 0; i < 5; i++) { cx.fillStyle = ['#e8553f', '#f6cf4a', '#3aa65a', '#2f7fd6', '#f29a38', '#ffffff'][r() * 6 | 0]; cx.fillRect(9 + i * 10, 12 + j * 20, 7, 14); } cx.fillStyle = '#222'; cx.fillRect(10, 96, w - 20, 16); });
      const vm = new THREE.MeshLambertMaterial({ map: t }); night.push([vm, '#ffffff', '#ffffff', 'sign']); add(new THREE.BoxGeometry(.85, 1.9, .7), [mat(c), mat(c), mat(c), mat(c), vm, mat(c)], x, .95 + .16, D / 2 + .5, g); };
    vend('#d8302a', -W / 2 + .6); vend('#2a64c8', -W / 2 + 1.55);
    rbox(.6, .9, .45, '#5a6670', W / 2 - .7, .16, D / 2 + .45, g, .05);
    const pl = new THREE.PointLight('#fff2d8', 0, 10, 1.6); pl.position.set(0, 2.6, D / 2 + 1.6); g.add(pl); lights.push([pl, 7]);
    solid(6.4, -7.8, 14.4, 1.7); solid(6.6, 1.6, 8.5, 2.3); }
  // 右：小咖啡店＋藥局
  { const g = new THREE.Group(); g.position.set(16.5, 0, -3.5); scene.add(g);
    rbox(3.6, 3.2, 8, '#e9d2b2', 0, 0, 0, g, .08, .72); rbox(3.2, 2.8, 7.4, '#d6c2a4', 0, 3.2, -.2, g, .06, .8);
    const aw = ctex(128, 64, (x, w, h) => { for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#f4efe2' : '#3f8f6a'; x.fillRect(i * 16, 0, 16, h); } });
    const awn = add(new THREE.BoxGeometry(3.4, .06, 1.2), [mat('#3f8f6a'), mat('#3f8f6a'), new THREE.MeshLambertMaterial({ map: aw }), mat('#3f8f6a'), new THREE.MeshLambertMaterial({ map: aw }), mat('#3f8f6a')], 0, 2.55, 4.5, g); awn.rotation.x = .35;
    const cT = signT('café つむぎ', '#3d2a1e', '#f6e7c8', 384, 96, { size: .48 }); add(new THREE.PlaneGeometry(2.2, .55), new THREE.MeshLambertMaterial({ map: cT }), 0, 2.95, 4.03, g, { noCast: true });
    const cg = ctex(256, 192, (x, w, h) => { x.fillStyle = '#6a4a32'; x.fillRect(0, 0, w, h); x.fillStyle = '#f0dcb4'; x.fillRect(16, 16, 100, 170); x.fillStyle = '#bfd8e6'; x.fillRect(136, 16, 104, 120); x.fillStyle = '#fff'; x.globalAlpha = .4; x.fillRect(150, 16, 30, 120); });
    const cm = new THREE.MeshLambertMaterial({ map: cg }); night.push([cm, '#ffffff', '#ffd9a8']); add(new THREE.PlaneGeometry(3.0, 2.2), cm, 0, 1.15, 4.02, g, { noCast: true });
    solid(14.6, -7.5, 18.4, 1.7); }
  { const g = new THREE.Group(); g.position.set(23.5, 0, -4.8); scene.add(g); const W = 8, D = 11;
    rbox(W, 3.6, D, '#f6f3ec', 0, 0, 0, g, .1, .78); const up = winT(3, 2, '#e9ece6', '#77808a', 33); rbox(W - .2, 6.2, D - .3, '#e9ece6', 0, 3.6, -.1, g, .1, .85);
    add(new THREE.PlaneGeometry(W - .8, 5.4), new THREE.MeshLambertMaterial({ map: up }), 0, 6.8, D / 2 - .23, g, { noCast: true });
    const pT = ctex(512, 128, (x, w, h) => { x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h); x.strokeStyle = '#2f9a5a'; x.lineWidth = 8; x.strokeRect(6, 6, w - 12, h - 12); x.fillStyle = '#2f9a5a'; x.fillRect(40, 34, 60, 20); x.fillRect(60, 14, 20, 60); x.fillRect(40, 74, 60, 20); x.fillStyle = '#2f9a5a'; x.font = `900 66px ${FONT}`; x.textAlign = 'left'; x.textBaseline = 'middle'; x.fillText('さくら薬局', 120, h * .54); });
    const pM = new THREE.MeshLambertMaterial({ map: pT }); night.push([pM, '#ffffff', '#ffffff', 'sign']); add(new THREE.BoxGeometry(4.6, 1.1, .14), [mat('#ddd'), mat('#ddd'), mat('#ddd'), mat('#ddd'), pM, mat('#ddd')], -.8, 2.55, D / 2 + .1, g);
    const pg = ctex(256, 128, (x, w, h) => { x.fillStyle = '#d8eaf2'; x.fillRect(0, 0, w, h); x.fillStyle = '#7d8a96'; x.fillRect(0, 0, w, 6); for (let k = 0; k <= 3; k++) x.fillRect(k * (w - 6) / 3, 0, 6, h); x.fillStyle = '#ffffff'; x.fillRect(20, 30, 70, 50); x.fillStyle = '#2f9a5a'; x.fillRect(110, 40, 60, 10); });
    const pgm = new THREE.MeshLambertMaterial({ map: pg }); night.push([pgm, '#ffffff', '#f4fff6']); add(new THREE.PlaneGeometry(W - 1, 1.9), pgm, 0, 1.0, D / 2 + .02, g, { noCast: true });
    for (let i = 0; i < 3; i++) { const p = add(new THREE.IcosahedronGeometry(.42, 1), mat('#5aa356', { flatShading: true }), -3 + i * 1.1, .72, D / 2 + .55, g); cyl(.3, .25, .4, '#d8d2c6', -3 + i * 1.1, .16, D / 2 + .55, g); }
    solid(19.3, -10.5, 28, 1.7); }

  /* 主街兩側、後面的房子（較簡單，填滿畫面） */
  function house(x, z, w, d, h, wall, roofC, rot = 0, kind = 'gable') { const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; scene.add(g);
    rbox(w, h, d, wall, 0, 0, 0, g, .08, .74); const wt = winT(Math.max(1, Math.round(w / 2.4)), Math.max(1, Math.round(h / 2.8)), wall, '#6f6a64', (x * 13 + z * 7) | 0);
    for (const s of [1, -1]) { const f = new THREE.Mesh(ones(new THREE.PlaneGeometry(w - .6, h - .8)), new THREE.MeshLambertMaterial({ map: wt })); f.position.set(0, h / 2 + .2, s * (d / 2 + .01)); f.rotation.y = s > 0 ? 0 : Math.PI; g.add(f); }
    if (kind === 'gable') { const sh = new THREE.Shape(); const hw = w / 2 + .45; sh.moveTo(-hw, 0); sh.lineTo(0, Math.min(2.2, w * .32)); sh.lineTo(hw, 0); sh.lineTo(-hw, 0); const eg = new THREE.ExtrudeGeometry(sh, { depth: d + .7, bevelEnabled: false }); eg.translate(0, 0, -(d + .7) / 2); ao(eg, .75); add(eg, roofC, 0, h, 0, g); }
    else { rbox(w + .2, .3, d + .2, roofC, 0, h, 0, g, .06); rbox(1.2, .6, .9, '#c4c8cc', w * .2, h + .3, -d * .2, g, .05); }
    const c = Math.cos(rot), s = Math.sin(rot), hw2 = Math.abs(c * w / 2) + Math.abs(s * d / 2), hd2 = Math.abs(s * w / 2) + Math.abs(c * d / 2); solid(x - hw2, z - hd2, x + hw2, z + hd2); return g; }
  house(-9.2, -11.5, 5.6, 5.5, 5.4, '#f2e2c8', '#7a4a3a', Math.PI / 2);
  house(-9.6, -18.2, 6, 6, 7.4, '#dfe6ea', '#9aa4ad', Math.PI / 2, 'flat');
  house(-17, -16.5, 7, 8, 9.6, '#e6d8c4', '#8a8f96', 0, 'flat');
  house(9.6, -12.4, 6, 5, 5.0, '#f4ead8', '#3f6f9a', -Math.PI / 2);
  // 車站（藍色屋頂、站名、樓梯）
  { const g = new THREE.Group(); g.position.set(11, 0, -19.4); scene.add(g); rbox(8, 3.6, 4.6, '#efe9dc', 0, 0, 0, g, .08, .72); rbox(8.8, .3, 5.4, '#3f78b8', 0, 3.6, 0, g, .06);
    const sh = new THREE.Shape(); sh.moveTo(-4.6, 0); sh.lineTo(0, 1.3); sh.lineTo(4.6, 0); sh.closePath(); const eg = new THREE.ExtrudeGeometry(sh, { depth: 5.4, bevelEnabled: false }); eg.translate(0, 0, -2.7); ao(eg, .8); add(eg, '#4a8ad0', 0, 3.9, 0, g);
    const sT = signT('あかり駅', '#ffffff', '#24456e', 512, 128, { size: .58, border: '#3f78b8' }); add(new THREE.PlaneGeometry(3, .75), new THREE.MeshLambertMaterial({ map: sT }), 0, 2.9, 2.32, g, { noCast: true });
    const dg = ctex(256, 128, (x, w, h) => { x.fillStyle = '#7d8a96'; x.fillRect(0, 0, w, h); x.fillStyle = '#cfe2ee'; x.fillRect(8, 8, w / 2 - 12, h - 8); x.fillRect(w / 2 + 4, 8, w / 2 - 12, h - 8); });
    const dm = new THREE.MeshLambertMaterial({ map: dg }); night.push([dm, '#ffffff', '#fff3d8']); add(new THREE.PlaneGeometry(2.6, 2.0), dm, -1.6, 1.0, 2.32, g, { noCast: true });
    for (let i = 0; i < 6; i++) rbox(1.8, .3 + i * .3, .45, '#cfc8bc', 2.6, 0, 2.3 + .45 * (5 - i) - 1.6, g, .03);
    solid(6.8, -21.8, 15.2, -17); }
  // 平交道與鐵軌、電車
  const RZ = -23.4;
  { flat(240, 3.4, mat('#9c958a'), 0, .03, RZ); const sl = mat('#6a5a48'); for (let x = -110; x < 110; x += .9) box(.28, .08, 2.4, sl, x, .03, RZ, null, .9); for (const dz of [-.72, .72]) box(220, .12, .1, '#a8acb2', 0, .1, RZ + dz, null, .9);
    flat(7.2, 3.2, mat('#5a5e66', {}), 0, .06, RZ); for (const dz of [-.72, .72]) box(7.2, .02, .12, '#c8ccd2', 0, .07, RZ + dz, null, .9);
    // 背後的月台
    rbox(60, .9, 2.4, '#cfc6b6', 30, 0, RZ - 3.2, null, .05); rbox(60, .08, .3, '#f2c230', 30, .9, RZ - 2.1, null, .02);
  }
  const xing = { bars: [], lamps: [] };
  for (const [sx, sz] of [[-4.6, RZ + 2.4], [4.6, RZ - 2.4]]) { const g = new THREE.Group(); g.position.set(sx, 0, sz); scene.add(g); cyl(.1, .1, 3.2, '#f4f4f0', 0, 0, 0, g, 8);
    const xs = ctex(128, 128, (x, w, h) => { x.fillStyle = '#ffd23a'; x.fillRect(0, 0, w, h); x.fillStyle = '#222'; for (let i = -4; i < 8; i++) { x.beginPath(); x.moveTo(i * 32, 0); x.lineTo(i * 32 + 16, 0); x.lineTo(i * 32 + 16 - h, h); x.lineTo(i * 32 - h, h); x.fill(); } });
    for (const r of [.6, -.6]) { const b = add(new THREE.BoxGeometry(1.2, .16, .04), new THREE.MeshLambertMaterial({ map: xs }), 0, 3.0, 0, g); b.rotation.z = r; }
    for (const dx of [-.28, .28]) { const lm = new THREE.MeshLambertMaterial({ color: '#5a1010', emissive: '#000' }); add(new THREE.CylinderGeometry(.14, .14, .1, 14).rotateX(Math.PI / 2), lm, dx, 2.4, .1 * Math.sign(-sx), g); xing.lamps.push(lm); }
    const arm = new THREE.Group(); arm.position.set(0, 1.0, 0); g.add(arm); const bar = add(new THREE.BoxGeometry(4.2, .12, .12), xs.clone(), 0, 0, 0, arm); bar.material = new THREE.MeshLambertMaterial({ map: xs }); bar.position.x = -2.1 * Math.sign(sx); arm.rotation.z = Math.sign(sx) * -1.35; xing.bars.push([arm, Math.sign(sx)]);
    solid(sx - .3, sz - .3, sx + .3, sz + .3); }
  // 電車（綠白相間，三節）
  const train = new THREE.Group(); scene.add(train); train.position.set(-200, 0, RZ);
  { const tT = ctex(512, 128, (x, w, h) => { x.fillStyle = '#f4f4ee'; x.fillRect(0, 0, w, h); x.fillStyle = '#3f9a5a'; x.fillRect(0, h * .72, w, h * .14); x.fillStyle = '#2a7a44'; x.fillRect(0, h * .9, w, h * .1); x.fillStyle = '#9fc6dc'; for (let i = 0; i < 6; i++) x.fillRect(24 + i * 82, 24, 60, 44); x.fillStyle = '#6c7a86'; for (const dx of [130, 360]) x.fillRect(dx, 18, 34, 86); });
    const tm = new THREE.MeshLambertMaterial({ map: tT }); for (let k = 0; k < 3; k++) { const c = rbox(11.5, 2.9, 2.6, '#f4f4ee', k * 12, .35, 0, train, .3, .85); const side = new THREE.Mesh(new THREE.PlaneGeometry(11, 2.6), tm); side.position.set(k * 12, 1.85, 1.31); train.add(side); rbox(11.2, .2, 2.3, '#9aa2aa', k * 12, 3.25, 0, train, .08); }
    train.traverse(m => { m.castShadow = false; }); }
  /* 電線桿＋電線（日本街景的靈魂） */
  const poles = [[-6.7, 4.6], [6.7, 4.6], [-26, 4.6], [27, 4.6], [-6.7, -12], [6.7, -15]];
  poles.forEach(([x, z]) => { cyl(.13, .17, 8.4, '#8f8a84', x, 0, z, null, 8); box(1.8, .12, .12, '#7a756e', x, 7.6, z); box(1.2, .1, .1, '#7a756e', x, 6.9, z); cyl(.22, .22, .5, '#9aa0a6', x + .4, 6.2, z, null, 8); solid(x - .2, z - .2, x + .2, z + .2); });
  { const wm = new THREE.MeshBasicMaterial({ color: '#3d3a38' }); const wire = (a, b, y, sag, dx) => { const p0 = new THREE.Vector3(a[0] + dx, y, a[1]), p2 = new THREE.Vector3(b[0] + dx, y, b[1]), p1 = p0.clone().add(p2).multiplyScalar(.5); p1.y -= sag; const cv2 = new THREE.QuadraticBezierCurve3(p0, p1, p2); const m = new THREE.Mesh(new THREE.TubeGeometry(cv2, 16, .018, 4), wm); scene.add(m); };
    const pairs = [[0, 4], [1, 5], [0, 2], [1, 3]]; pairs.forEach(([i, j]) => { for (const [y, dx, sg] of [[7.6, -.8, .9], [7.6, .8, 1.0], [6.9, 0, .7]]) wire(poles[i], poles[j], y, sg, dx); }); }
  /* 路邊欄杆（綠）＋花台 */
  { const rm = mat('#4f8a68'); const rail = (x1, x2, z) => { const L = x2 - x1; box(L, .07, .07, rm, (x1 + x2) / 2, .95, z); box(L, .06, .06, rm, (x1 + x2) / 2, .45, z); for (let x = x1; x <= x2 + .01; x += 1.2) box(.08, 1.0, .08, rm, x, .16, z); solid(x1, z - .15, x2, z + .15); };
    rail(-40, -7.2, 4.75); rail(7.2, 42, 4.75);
    const plT = ctex(64, 64, (x, w, h) => { x.fillStyle = '#d8cfc0'; x.fillRect(0, 0, w, h); x.fillStyle = '#c4baa8'; x.fillRect(0, h - 10, w, 10); });
    const flower = (x, z) => { rbox(2.2, .55, .7, '#d8cfc0', x, .16, z, null, .06); const r = mulberry((x * 9 + z) | 0); for (let i = 0; i < 9; i++) { const b = add(new THREE.IcosahedronGeometry(.2 + r() * .08, 0), mat(i % 3 ? '#4f9a46' : ['#ffffff', '#ffd2e0', '#fff2a0'][r() * 3 | 0], { flatShading: true }), x - .9 + i * .23, .78 + r() * .08, z + (r() - .5) * .25); b.castShadow = false; } solid(x - 1.1, z - .35, x + 1.1, z + .35); };
    for (const x of [-34, -27, -20, -13.5, 10.5, 17, 24, 31]) flower(x, 4.15); }
  /* 復古路燈 */
  const lampM = new THREE.MeshLambertMaterial({ color: '#fff4dc', emissive: '#000' });
  [[-6.6, 2.4], [6.6, 2.4], [-5.6, -10], [5.6, -10]].forEach(([x, z]) => { cyl(.07, .1, 3.4, '#3a3d40', x, 0, z, null, 8); const h = add(new THREE.SphereGeometry(.28, 14, 10), lampM, x, 3.6, z); cyl(.3, .2, .12, '#3a3d40', x, 3.85, z, null, 8); const pl = new THREE.PointLight('#ffd9a0', 0, 8, 1.6); pl.position.set(x, 3.4, z); scene.add(pl); lights.push([pl, 6]); solid(x - .15, z - .15, x + .15, z + .15); });

  /* ───────── 櫻花樹（一團團粉紅色，頂亮底暗）＋飄落的花瓣 ───────── */
  const sakuraM = new THREE.MeshLambertMaterial({ vertexColors: true });
  const sway = [];
  function sakura(x, z, s = 1, seed = 1) { const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s); scene.add(g); const r = mulberry(seed);
    const tr = cyl(.16, .26, 2.6, '#6b4a3a', 0, 0, 0, g, 8); for (const a of [.7, -.6, 2.4]) { const b = add(new THREE.CylinderGeometry(.06, .11, 1.4, 6), mat('#6b4a3a'), Math.cos(a) * .35, 2.6, Math.sin(a) * .35, g); b.rotation.set(Math.sin(a) * .7, 0, -Math.cos(a) * .7); }
    const blobs = [[0, 3.6, 0, 1.55]]; for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2 + r() * .5; blobs.push([Math.cos(a) * (1.2 + r() * .4), 3.0 + r() * .9, Math.sin(a) * (1.2 + r() * .4), .85 + r() * .35]); } blobs.push([(r() - .5) * .6, 4.5, (r() - .5) * .6, .95]);
    const top = new THREE.Color('#ffe3ee'), bot = new THREE.Color('#e48aa8');
    const gs = blobs.map(([bx, by, bz, br]) => { const sg = new THREE.IcosahedronGeometry(br, 2); sg.translate(bx, by, bz); const p = sg.attributes.position, n = sg.attributes.normal, col = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) { const k = clamp((p.getY(i) - 2.2) / 3.0 * .6 + n.getY(i) * .35 + .25, 0, 1), j = (r() - .5) * .05; const c = bot.clone().lerp(top, clamp(k + j, 0, 1)); col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
      sg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); return sg; });
    const cn = new THREE.Mesh(mergeGeometries(gs, false), sakuraM); cn.castShadow = true; cn.receiveShadow = true; g.add(cn); sway.push([cn, x * .3 + z * .2]);
    solid(x - .35 * s, z - .35 * s, x + .35 * s, z + .35 * s); return g; }
  const trees = [[-5.2, -5.5, 1.15, 1], [-15.6, 3.2, .95, 2], [5.3, -16.5, 1.1, 3], [-5.3, -17.6, 1.05, 4], [21.5, 2.9, .9, 5], [-29.5, -2, 1.2, 6], [29, -8, 1.1, 7], [-12.5, -24.5, 1.25, 8], [16, -27, 1.2, 9]];
  trees.forEach(([x, z, s, k]) => sakura(x, z, s, k));
  // 一般綠樹（遠一點、填背景）
  for (const [x, z, s] of [[-22, -26, 1.3], [24, -28, 1.2], [-34, -12, 1.2], [36, -18, 1.3], [0, -46, 1.6], [-8, -44, 1.4], [10, -48, 1.5]]) { const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s); scene.add(g); cyl(.15, .22, 2, '#6b4a3a', 0, 0, 0, g, 6); const b = add(new THREE.IcosahedronGeometry(1.5, 2), new THREE.MeshLambertMaterial({ color: '#5f9e54', vertexColors: true }), 0, 3, 0, g); ao(b.geometry, .62); }
  // 花瓣
  const PN = mobile ? 70 : 140; const petG = new THREE.PlaneGeometry(.12, .08); const petals = new THREE.InstancedMesh(petG, new THREE.MeshBasicMaterial({ color: '#ffd0de', side: THREE.DoubleSide }), PN); scene.add(petals);
  const pet = []; for (let i = 0; i < PN; i++) { const t = trees[i % 6]; pet.push({ x: t[0] + (R() - .5) * 5, y: R() * 5, z: t[1] + (R() - .5) * 5, tx: t[0], tz: t[1], ph: R() * 6, sp: .4 + R() * .4 }); }
  const pm4 = new THREE.Object3D();

  let cityM = null; const meMats = [];
  /* ───────── 遠景城市（越遠越淡）：全部合成一個網格、一張窗戶貼圖，用頂點顏色上色 → 一次畫完 ───────── */
  { const r = mulberry(42); const cols = ['#f1e9dc', '#e3e8ec', '#f2e4cc', '#dde2e8', '#f4ece0', '#e9dcc8', '#d6dee4', '#f0d9cc'];
    const cityT = winT(2, 2, '#ffffff', '#8a8580', 77, { top: .22, hh: .5 }); cityT.wrapS = cityT.wrapT = THREE.RepeatWrapping;
    const gs = [], tc = new THREE.Color();
    for (let i = 0; i < 90; i++) { const x = (r() * 2 - 1) * 130, z = -32 - r() * 110; if (Math.abs(x) < 5.5 + (z + 32) * -.02) continue; if (Math.abs(x) < 14 && z > -40) continue;
      const far = clamp((-z - 32) / 110, 0, 1), w = 5 + r() * 8, d = 5 + r() * 7, h = 4.5 + r() * 6 + far * r() * 10;
      const g = new THREE.BoxGeometry(w, h, d, 1, 3, 1); const uv = g.attributes.uv, nr = g.attributes.normal, ps = g.attributes.position;
      for (let k = 0; k < uv.count; k++) { const ny = nr.getY(k); if (Math.abs(ny) > .5) { uv.setXY(k, .02, .02); continue; } const hor = Math.abs(nr.getX(k)) > .5 ? d : w; uv.setXY(k, uv.getX(k) * hor / 4.2, uv.getY(k) * h / 3.2); }
      tc.set(cols[r() * cols.length | 0]); const col = new Float32Array(ps.count * 3);
      for (let k = 0; k < ps.count; k++) { const t = clamp(ps.getY(k) / h + .5, 0, 1), f = .76 + .24 * Math.pow(t, .5); col[k * 3] = tc.r * f; col[k * 3 + 1] = tc.g * f; col[k * 3 + 2] = tc.b * f; }
      g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.translate(x, h / 2, z); gs.push(g);
      if (r() < .35) { const tk = new THREE.CylinderGeometry(.8, .8, 1.3, 8); const n = tk.attributes.position.count, c2 = new Float32Array(n * 3).fill(.82); tk.setAttribute('color', new THREE.Float32BufferAttribute(c2, 3)); const u2 = tk.attributes.uv; for (let k = 0; k < u2.count; k++) u2.setXY(k, .02, .02); tk.translate(x + w * .2, h + .65, z); gs.push(tk.toNonIndexed ? tk.index ? tk.toNonIndexed() : tk : tk); } }
    // 夜晚：窗戶一格格亮起來（同一個版型，牆是黑的、窗是暖黃色）
    const litT = ctex(256, 256, (x, w, h) => { const rr = mulberry(91); x.fillStyle = '#000'; x.fillRect(0, 0, w, h); for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) { if (rr() < .3) continue; const px = i * 128 + 128 * .18, py = j * 128 + 128 * .22; x.fillStyle = ['#ffd98a', '#ffe6b0', '#fff2d0', '#ffc870'][rr() * 4 | 0]; x.fillRect(px, py, 128 * .64, 128 * .5); } });
    litT.wrapS = litT.wrapT = THREE.RepeatWrapping;
    cityM = new THREE.MeshLambertMaterial({ map: cityT, vertexColors: true, emissiveMap: litT, emissive: '#000000' });
    const city = new THREE.Mesh(mergeGeometries(gs.map(g => g.index ? g.toNonIndexed() : g), false), cityM); city.receiveShadow = false; scene.add(city);
    const bill = ctex(256, 96, (x, w, h) => { x.fillStyle = '#3f8f5a'; x.fillRect(0, 0, w, h); x.strokeStyle = '#fff'; x.lineWidth = 6; x.strokeRect(6, 6, w - 12, h - 12); x.fillStyle = '#fff'; x.font = `900 40px ${FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('ようこそ', w / 2, 32); x.font = `900 26px ${FONT}`; x.fillText('あかり町', w / 2, 68); });
    const bb = new THREE.Mesh(new THREE.PlaneGeometry(5, 1.9), new THREE.MeshLambertMaterial({ map: bill })); bb.position.set(0, 7.4, -31); scene.add(bb); box(.2, 7, .2, '#8a8f96', -2.1, 0, -31.2); box(.2, 7, .2, '#8a8f96', 2.1, 0, -31.2); }

  /* ───────── 光線（白天／傍晚／夜晚三種） ───────── */
  const hemi = new THREE.HemisphereLight('#d6ebff', '#d9c7a6', 1.7); scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff0da', 2.6); sun.position.set(-34, 46, 30); sun.castShadow = true; const SS = mobile ? 1024 : 2048; sun.shadow.mapSize.set(SS, SS);
  Object.assign(sun.shadow.camera, { left: -36, right: 36, top: 30, bottom: -30, near: 10, far: 140 }); sun.shadow.bias = -.0006; sun.shadow.normalBias = .03; sun.shadow.radius = 3; sun.target.position.set(0, 0, -8); scene.add(sun, sun.target);
  scene.fog = new THREE.Fog('#e9eef0', 48, 200);
  const PRESET = {
    day: { top: '#5fa6ea', mid: '#b4d8f4', hor: '#f6eee2', fog: '#e8eef2', hemi: ['#dcefff', '#e2cfa8', 1.85], sun: ['#fff0d6', 3.0], sunPos: [-34, 46, 30], exp: 1.04, night: 0, cloud: '#ffffff', hill: 1 },
    eve: { top: '#5a6fb0', mid: '#e49a8a', hor: '#ffd2a0', fog: '#f0c9a8', hemi: ['#ffd2b0', '#8a6a6a', 1.3], sun: ['#ffb070', 2.3], sunPos: [-60, 16, 10], exp: 1.0, night: .55, cloud: '#ffd0b8', hill: .62 },
    night: { top: '#0e1430', mid: '#22305a', hor: '#4a4a72', fog: '#2a3050', hemi: ['#5a6aa8', '#2a2430', .9], sun: ['#9ab0ff', .45], sunPos: [30, 50, 20], exp: 1.15, night: 1, cloud: '#5a6088', hill: .045 },
  };
  let cur = 'day';
  function applyPreset(k) { cur = k; const P = PRESET[k]; SKY.top.set(P.top); SKY.mid.set(P.mid); SKY.hor.set(P.hor); scene.fog.color.set(P.fog);
    hemi.color.set(P.hemi[0]); hemi.groundColor.set(P.hemi[1]); hemi.intensity = P.hemi[2]; sun.color.set(P.sun[0]); sun.intensity = P.sun[1]; sun.position.set(...P.sunPos); renderer.toneMappingExposure = P.exp;
    clouds.forEach(c => c.material.color.set(P.cloud)); scene.traverse(m => { if (m.isMesh && m.material && m.material.isMeshBasicMaterial && m.material.vertexColors && !m.isInstancedMesh) m.material.color.setScalar(P.hill); });
    const n = P.night; night.forEach(([m, d, nn, kind]) => { if (kind === 'lan') { m.emissive.set('#ff5a2a'); m.emissiveIntensity = n * 1.4; } else if (kind === 'sign') { m.emissive = m.emissive || new THREE.Color(); m.emissive.set('#ffffff'); m.emissiveIntensity = n * .55; m.emissiveMap = m.map; m.needsUpdate = true; } else { m.color.set(d).lerp(new THREE.Color(nn), n); m.emissive.set(nn); m.emissiveIntensity = n * .9; m.emissiveMap = m.map; m.needsUpdate = true; } });
    meMats.forEach(m => { m.emissive.copy(m.color).multiplyScalar(n * .35); });
    if (cityM) { cityM.emissive.set(n > .3 ? '#ffffff' : '#000000'); cityM.emissiveIntensity = n * .9; }
    lampM.emissive.set('#ffe2a8'); lampM.emissiveIntensity = n * 1.6; lights.forEach(([l, i]) => { l.intensity = n * i * 6; });
    renderer.shadowMap.needsUpdate = true; }
  applyPreset(o.time || 'day');

  /* ───────── 主角（Q 版小人，三頭身） ───────── */
  const me = new THREE.Group(); scene.add(me); me.position.set(1.2, 0, 8.8);
  const skin = mat('#ffe0c8'), hair = mat('#5a3a2a'), uni = mat('#2f3e66'), skirt = mat('#3a4a78'), sock = mat('#f4f4f0');
  const body = new THREE.Group(); me.add(body);
  const head = add(new THREE.SphereGeometry(.42, 20, 16), skin, 0, 1.42, 0, body); const hr = add(new THREE.SphereGeometry(.46, 20, 16, 0, Math.PI * 2, 0, Math.PI * .55), hair, 0, 1.47, -.03, body); hr.rotation.x = -.25;
  add(new THREE.SphereGeometry(.2, 12, 10), hair, 0, 1.55, -.48, body).scale.set(.9, 1.4, .9); // 馬尾
  for (const ex of [-.15, .15]) { const e = add(new THREE.SphereGeometry(.05, 8, 6), mat('#2a1a14'), ex, 1.4, .38, body); e.scale.y = 1.5; }
  add(new THREE.CylinderGeometry(.22, .3, .52, 14), uni, 0, .98, 0, body); add(new THREE.ConeGeometry(.42, .34, 14, 1, true), skirt, 0, .62, 0, body);
  const legs = []; for (const lx of [-.11, .11]) { const l = new THREE.Group(); l.position.set(lx, .62, 0); body.add(l); const m = add(new THREE.CylinderGeometry(.075, .07, .5, 8), sock, 0, -.25, 0, l); add(new THREE.BoxGeometry(.14, .08, .22), mat('#3a2a22'), 0, -.52, .03, l); legs.push(l); }
  me.traverse(m => { if (m.isMesh) { m.castShadow = false; m.receiveShadow = false; m.material = m.material.clone(); meMats.push(m.material); } }); applyPreset(cur);
  const blobT = ctex(64, 64, x => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(40,30,30,.5)'); g.addColorStop(1, 'rgba(40,30,30,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); });
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshBasicMaterial({ map: blobT, transparent: true, depthWrite: false })); blob.rotation.x = -Math.PI / 2; scene.add(blob);
  // 建築腳下的接地陰影（軟），讓房子不像飄著
  const cT = ctex(128, 128, x => { x.shadowColor = 'rgba(40,30,30,.55)'; x.shadowBlur = 16; x.shadowOffsetX = 1000; x.fillStyle = '#000'; x.fillRect(24 - 1000, 24, 80, 80); });
  for (const s of solids.slice()) { const w = s[2] - s[0], d = s[3] - s[1]; if (w < 2 || d < 2) continue; const m = new THREE.Mesh(new THREE.PlaneGeometry(w + 1.4, d + 1.4), new THREE.MeshBasicMaterial({ map: cT, transparent: true, depthWrite: false, opacity: .85 })); m.rotation.x = -Math.PI / 2; m.position.set((s[0] + s[2]) / 2, .18, (s[1] + s[3]) / 2); scene.add(m); }

  /* ───────── 合併不會動的零件（同材質一次畫完，手機才不會卡） ───────── */
  const dyn = new Set([me, train, blob, petals, sky, ...clouds, ...xing.bars.map(b => b[0]), ...sway.map(s => s[0])]);
  function isDyn(o) { for (let p = o; p; p = p.parent) if (dyn.has(p)) return true; return false; }
  (function mergeStatic() { scene.updateMatrixWorld(true); const groups = new Map(), kill = [];
    scene.traverse(o => { if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material) || isDyn(o) || o.material.isShaderMaterial) return; if (xing.lamps.includes(o.material) || o.material === lampM) return;
      const g = o.geometry; const sig = o.material.uuid + '|' + o.castShadow + '|' + Object.keys(g.attributes).sort().join(',') + '|' + !!g.index; if (!groups.has(sig)) groups.set(sig, []); groups.get(sig).push(o); });
    for (const [, list] of groups) { if (list.length < 2) continue; const gs = list.map(o => { let g = o.geometry.clone(); g.applyMatrix4(o.matrixWorld); return g; }); let mg; try { mg = mergeGeometries(gs, false); } catch (e) { mg = null; } if (!mg) continue;
      const m = new THREE.Mesh(mg, list[0].material); m.castShadow = list[0].castShadow; m.receiveShadow = true; m.renderOrder = list[0].renderOrder; scene.add(m); list.forEach(o => kill.push(o)); }
    kill.forEach(o => o.parent && o.parent.remove(o)); })();

  /* ───────── 鏡頭：固定斜角，跟著角色輕輕平移 ───────── */
  /* 低角度、微微往下看（約 6°）：地平線在畫面上方三分之一，看得到天空、遠山和城市；角色在畫面下方 */
  const CAM_H = 8, CAM_BACK = 21, CAM_PITCH = .105, look = new THREE.Vector3(), camAt = new THREE.Vector3(0, 0, 8.8);
  function blocked(x, z, r) { if (x < -32 || x > 32 || z < -21.4 || z > 11.4) return true; for (const s of solids) if (x > s[0] - r && x < s[2] + r && z > s[1] - r && z < s[3] + r) return true; return false; }

  /* ───────── 操作：搖桿、鍵盤、點地面 ───────── */
  const S = { t: 0, last: performance.now(), keys: {}, joy: null, tgt: null, dead: false, face: 0, ph: 0, moving: false };
  const ui = o.root || cv.parentElement;
  const joyEl = document.createElement('div'); joyEl.className = 'cjoy'; joyEl.innerHTML = '<i></i>'; ui.appendChild(joyEl); const knob = joyEl.firstChild;
  let jid = null, jc = null;
  joyEl.addEventListener('pointerdown', e => { e.preventDefault(); jid = e.pointerId; joyEl.setPointerCapture(jid); const r = joyEl.getBoundingClientRect(); jc = [r.left + r.width / 2, r.top + r.height / 2]; mv(e); });
  const mv = e => { if (e.pointerId !== jid) return; const r = joyEl.getBoundingClientRect().width / 2, dx = e.clientX - jc[0], dy = e.clientY - jc[1], l = Math.hypot(dx, dy), k = Math.min(1, l / r); S.joy = { x: l ? dx / l * k : 0, y: l ? dy / l * k : 0 }; knob.style.transform = `translate(${S.joy.x * r * .6}px,${S.joy.y * r * .6}px)`; S.tgt = null; };
  joyEl.addEventListener('pointermove', mv); const up = e => { if (e.pointerId !== jid) return; jid = null; S.joy = null; knob.style.transform = ''; }; joyEl.addEventListener('pointerup', up); joyEl.addEventListener('pointercancel', up);
  const ray = new THREE.Raycaster(), gp = new THREE.Plane(new THREE.Vector3(0, 1, 0), -.16), hit = new THREE.Vector3();
  cv.addEventListener('pointerdown', e => { const r = cv.getBoundingClientRect(); ray.setFromCamera(new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera); if (ray.ray.intersectPlane(gp, hit)) S.tgt = [hit.x, hit.z]; });
  const kd = e => { S.keys[e.key.toLowerCase()] = e.type === 'keydown'; }; addEventListener('keydown', kd); addEventListener('keyup', kd);

  /* ───────── 解析度：手機自動壓在合理像素量；太慢再往下降 ───────── */
  let cw = 0, ch = 0, pr = 1, prFloor = .7, fpsT = 0, fpsN = 0;
  function resize() { const W = Math.max(1, cv.clientWidth), H = Math.max(1, cv.clientHeight), dpr = Math.min(2, window.devicePixelRatio || 1); if (W === cw && H === ch) return; cw = W; ch = H;
    pr = Math.min(dpr, Math.sqrt((mobile ? 1.3e6 : 2.4e6) / (W * H))); prFloor = Math.max(.7, pr * .75); renderer.setPixelRatio(pr); renderer.setSize(W, H, false); camera.aspect = W / H; camera.fov = W / H < 1.6 ? 42 : 36; camera.updateProjectionMatrix(); }

  let xingOn = 0, trainT = 6;
  function frame(now) { if (S.dead) return; S.raf = requestAnimationFrame(frame); const dt = Math.min(.1, (now - S.last) / 1000); S.last = now; S.t += dt; const t = S.t; resize();
    fpsT += dt; fpsN++; if (fpsT > 2) { if (fpsT / fpsN > .03 && pr > prFloor + .01) { pr = Math.max(prFloor, pr * .88); renderer.setPixelRatio(pr); renderer.setSize(cw, ch, false); } fpsT = 0; fpsN = 0; }
    // 走路
    const K = S.keys; let vx = 0, vz = 0; const ix = (K.d || K.arrowright ? 1 : 0) - (K.a || K.arrowleft ? 1 : 0), iz = (K.s || K.arrowdown ? 1 : 0) - (K.w || K.arrowup ? 1 : 0);
    if (S.joy && Math.hypot(S.joy.x, S.joy.y) > .15) { vx = S.joy.x; vz = S.joy.y; } else if (ix || iz) { vx = ix; vz = iz; } else if (S.tgt) { const dx = S.tgt[0] - me.position.x, dz = S.tgt[1] - me.position.z, d = Math.hypot(dx, dz); if (d < .15) S.tgt = null; else { vx = dx / Math.max(d, 1); vz = dz / Math.max(d, 1); } }
    const l = Math.hypot(vx, vz); S.moving = false;
    if (l > .01) { const sp = 4.2 * dt * Math.min(1, l), mx = vx / l * sp, mz = vz / l * sp, p = me.position;
      if (!blocked(p.x + mx, p.z + mz, .3)) { p.x += mx; p.z += mz; S.moving = true; } else if (!blocked(p.x + mx, p.z, .3)) { p.x += mx; S.moving = true; } else if (!blocked(p.x, p.z + mz, .3)) { p.z += mz; S.moving = true; } else S.tgt = null;
      S.face = Math.atan2(vx, vz); }
    me.rotation.y += ((S.face - me.rotation.y + Math.PI * 3) % (Math.PI * 2) - Math.PI) * Math.min(1, dt * 12);
    if (S.moving) S.ph += dt * 11; const sw2 = S.moving ? Math.sin(S.ph) : 0; legs[0].rotation.x = sw2 * .6; legs[1].rotation.x = -sw2 * .6; body.position.y = S.moving ? Math.abs(Math.cos(S.ph)) * .07 : 0;
    const groundY = (Math.abs(me.position.x) < 3.6 && me.position.z < 5) || (me.position.z > 5 && me.position.z < 12) ? 0 : .16; me.position.y = lerp(me.position.y, groundY, Math.min(1, dt * 14));
    blob.position.set(me.position.x, me.position.y + .02, me.position.z);
    // 鏡頭
    camAt.x = lerp(camAt.x, clamp(me.position.x * .7, -14, 14), Math.min(1, dt * 3)); camAt.z = lerp(camAt.z, me.position.z, Math.min(1, dt * 3));
    camera.position.set(camAt.x, CAM_H, camAt.z + CAM_BACK); look.set(camAt.x, CAM_H - 30 * Math.tan(CAM_PITCH), camera.position.z - 30); camera.lookAt(look);
    // 樹搖、花瓣
    sway.forEach(([m, ph]) => { m.rotation.z = Math.sin(t * 1.1 + ph) * .012; m.rotation.x = Math.cos(t * .9 + ph) * .01; });
    for (let i = 0; i < PN; i++) { const q = pet[i]; q.y -= dt * q.sp; q.x += Math.sin(t * 1.3 + q.ph) * dt * .5 + dt * .35; q.z += Math.cos(t + q.ph) * dt * .3; if (q.y < .15) { q.y = 3 + R() * 2.5; q.x = q.tx + (R() - .5) * 4; q.z = q.tz + (R() - .5) * 4; }
      pm4.position.set(q.x, q.y, q.z); pm4.rotation.set(t * 2 + q.ph, t * 1.5 + q.ph, q.ph); pm4.updateMatrix(); petals.setMatrixAt(i, pm4.matrix); } petals.instanceMatrix.needsUpdate = true;
    // 電車＋平交道
    trainT -= dt; if (trainT < 0 && !xingOn) { xingOn = 1; train.position.x = -95; }
    if (xingOn) { train.position.x += dt * 16; if (train.position.x > 95) { xingOn = 0; trainT = 14 + R() * 8; } }
    const down = xingOn ? 1 : 0; xing.bars.forEach(([a, sx]) => { const tg = down ? 0 : sx * -1.35; a.rotation.z += (tg - a.rotation.z) * Math.min(1, dt * 3); });
    const bl = xingOn && Math.sin(t * 9) > 0; xing.lamps.forEach((m, i) => { const on = xingOn && ((i % 2 === 0) === bl); m.color.set(on ? '#ff3a2a' : '#5a1010'); m.emissive.set(on ? '#ff2a1a' : '#000'); });
    clouds.forEach((c, i) => { c.position.x += dt * (1.5 + i * .3); if (c.position.x > 700) c.position.x = -700; c.lookAt(camera.position.x, c.position.y, camera.position.z + 400); });
    sky.position.copy(camera.position);
    renderer.render(scene, camera); }
  renderer.shadowMap.needsUpdate = true;
  S.raf = requestAnimationFrame(frame);
  return { scene, setTime: applyPreset, get time() { return cur; }, probe: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles, me: [me.position.x, me.position.z], pr }), stop() { S.dead = true; cancelAnimationFrame(S.raf); renderer.dispose(); } };
}
