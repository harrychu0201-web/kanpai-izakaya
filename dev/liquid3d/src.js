/* 月影酒吧 3D 水柱（Three.js）。
   倒酒時把原本用 CSS 畫的一條直線（.bxs-stream / .bxs-mstream）換成有立體光影的液體：
   圓柱狀、邊緣反光、表面有流動紋路、會微微抖動；開始倒時從瓶口往下長、放手時尾巴脫離落下；落點有水花和漣漪。
   由 index.html 在月影酒吧畫面出現時才載入（img/liquid3d-<hash>.js，全域 Liquid3D）。
   載入失敗或不支援 WebGL 時什麼都不做，原本的 CSS 水柱照常顯示。
   建置：dev/liquid3d/build.sh /path/to/node_modules → img/liquid3d-<hash>.js */
import {
  WebGLRenderer, Scene, OrthographicCamera, Mesh, BufferGeometry, BufferAttribute, ShaderMaterial,
  InstancedMesh, SphereGeometry, RingGeometry, MeshBasicMaterial, Color, Matrix4, Vector3, Quaternion
} from 'three';

const SEG = 26, RAD = 12, DROPS = 40, RINGS = 5;
let R = null; // shared renderer state (one WebGL context)

const streamVS = `
  varying vec2 vUv; varying vec3 vN;
  void main(){ vUv = uv; vN = normalize(normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const streamFS = `
  uniform vec3 uCol; uniform float uTime; uniform float uAlpha; uniform float uClear;
  varying vec2 vUv; varying vec3 vN;
  float h(float n){ return fract(sin(n)*43758.5453); }
  float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
    float a=h(i.x+i.y*57.0), b=h(i.x+1.0+i.y*57.0), c=h(i.x+(i.y+1.0)*57.0), d=h(i.x+1.0+(i.y+1.0)*57.0);
    return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
  void main(){
    vec3 n = normalize(vN);
    vec3 L = normalize(vec3(-0.55, 0.35, 0.75));
    float diff = max(dot(n, L), 0.0);
    float rim = pow(1.0 - max(n.z, 0.0), 2.0);
    float spec = pow(max(dot(reflect(-L, n), vec3(0.0,0.0,1.0)), 0.0), 18.0);
    float streak = noise(vec2(vUv.y * 5.0, vUv.x * 26.0 - uTime * 7.0));
    float glint = smoothstep(0.62, 1.0, streak);
    vec3 col = uCol * (0.62 + 0.5 * diff);
    col = mix(col, uCol * 0.55, rim * 0.6 * (1.0 - uClear));
    col = mix(col, vec3(0.93, 0.97, 1.0), rim * 0.7 * uClear);
    col += vec3(1.0) * (spec * 0.85 + glint * (0.22 + 0.25 * uClear) * (0.4 + diff));
    float body = mix(0.8, 0.32, uClear);
    float a = (body + mix(0.18, 0.55, uClear) * rim + spec * 0.35 + glint * 0.25 * uClear) * uAlpha;
    gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
  }`;

function init() {
  if (R) return R;
  const canvas = document.createElement('canvas');
  canvas.className = 'l3dcv';
  canvas.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none;z-index:5';
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, premultipliedAlpha: false });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new Scene();
  const camera = new OrthographicCamera(0, 100, 0, -100, -500, 500);

  const uni = { uCol: { value: new Color('#e0c080') }, uTime: { value: 0 }, uAlpha: { value: 1 }, uClear: { value: 0 } };
  const geo = new BufferGeometry();
  const n = (SEG + 1) * (RAD + 1);
  geo.setAttribute('position', new BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('normal', new BufferAttribute(new Float32Array(n * 3), 3));
  const uv = new Float32Array(n * 2), idx = [];
  for (let i = 0; i <= SEG; i++) for (let j = 0; j <= RAD; j++) {
    const k = i * (RAD + 1) + j; uv[k * 2] = i / SEG; uv[k * 2 + 1] = j / RAD;
    if (i < SEG && j < RAD) { const a = k, b = k + RAD + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  }
  geo.setAttribute('uv', new BufferAttribute(uv, 2)); geo.setIndex(idx);
  const stream = new Mesh(geo, new ShaderMaterial({ uniforms: uni, vertexShader: streamVS, fragmentShader: streamFS, transparent: true, depthWrite: false, depthTest: false }));
  stream.frustumCulled = false; scene.add(stream);

  const dropUni = uni;
  const drops = new InstancedMesh(new SphereGeometry(1, 10, 8),
    new ShaderMaterial({ uniforms: dropUni, vertexShader: `varying vec3 vN; varying vec2 vUv; void main(){ vUv=uv; vN=normalize(normal); gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0);} `, fragmentShader: streamFS, transparent: true, depthWrite: false, depthTest: false }), DROPS);
  drops.frustumCulled = false; drops.renderOrder = 2; scene.add(drops);
  const dropState = Array.from({ length: DROPS }, () => ({ x: 0, y: 0, vx: 0, vy: 0, life: 0, s: 0 }));

  const rings = [];
  const ringGeo = new RingGeometry(0.78, 1, 40);
  for (let i = 0; i < RINGS; i++) {
    const m = new Mesh(ringGeo, new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, depthTest: false }));
    m.visible = false; m.renderOrder = 1; scene.add(m); rings.push({ m, age: 9 });
  }

  R = {
    canvas, renderer, scene, camera, uni, dropUni, geo, stream, drops, dropState, rings,
    el: null, host: null, mouth: null, on: false, head: 0, tail: 0, active: false, ringT: 0, dropI: 0, ringI: 0,
    t0: performance.now(), last: 0, raf: 0, surf: null, W: 0, H: 0
  };
  return R;
}

const _m = new Matrix4(), _q = new Quaternion(), _p = new Vector3(), _s = new Vector3();

function layout() {
  const host = R.host, el = R.el;
  const hr = host.getBoundingClientRect();
  const W = host.offsetWidth || hr.width, H = host.offsetHeight || hr.height;
  if (!W || !H || !hr.width) return null;
  const k = hr.width / W; // stage scale (the game scales the whole stage with a transform)
  if (W !== R.W || H !== R.H) {
    R.W = W; R.H = H;
    R.renderer.setSize(W, H, true);
    R.camera.left = 0; R.camera.right = W; R.camera.top = 0; R.camera.bottom = -H;
    R.camera.updateProjectionMatrix();
  }
  const er = el.getBoundingClientRect();
  const x = (er.left + er.width / 2 - hr.left) / k;
  const y0 = (er.top - hr.top) / k;
  let y1 = (er.bottom - hr.top) / k;
  if (R.surf) { const sy = R.surf(); if (sy != null) { const yy = (sy - hr.top) / k; if (yy > y0 + 4 && yy < y1) y1 = yy; } }
  const w = Math.max(3, er.width / k);
  let mx = x, my = y0;
  if (R.mouth) { const m = R.mouth(); if (m) { const xx = (m.x - hr.left) / k, yy = (m.y - hr.top) / k; if (yy < y1 - 6 && Math.abs(xx - x) < (y1 - yy) * 0.8) { mx = xx; my = yy; } } }
  return { x, y0: my, y1, w, mx };
}

function buildStream(L, time) {
  const pos = R.geo.attributes.position.array, nor = R.geo.attributes.normal.array;
  const len = L.y1 - L.y0, a = R.tail, b = R.head;
  for (let i = 0; i <= SEG; i++) {
    const f = a + (b - a) * (i / SEG); // 0 = spout, 1 = landing point
    const y = L.y0 + len * f;
    // thicker at the spout, thinner where it has sped up; a gentle wobble travels down the stream
    let r = L.w * (0.95 - 0.35 * f) * (1 + 0.09 * Math.sin(f * 24 - time * 22));
    if (i === 0 && a > 0) r *= 0.45;
    if (i === SEG && b < 1) r *= 0.6;
    const sway = Math.sin(time * 3.1 + f * 4) * L.w * 0.08 * f + (L.mx - L.x) * (1 - f) * (1 - f);
    for (let j = 0; j <= RAD; j++) {
      const ang = j / RAD * Math.PI * 2, cs = Math.cos(ang), sn = Math.sin(ang);
      const k = (i * (RAD + 1) + j) * 3;
      pos[k] = L.x + sway + cs * r; pos[k + 1] = -y; pos[k + 2] = sn * r;
      nor[k] = cs; nor[k + 1] = 0; nor[k + 2] = sn;
    }
  }
  R.geo.attributes.position.needsUpdate = true; R.geo.attributes.normal.needsUpdate = true;
}

function frame() {
  R.raf = 0;
  if (!R.el || !R.host || !R.host.isConnected || !R.el.isConnected) { stopAll(); return; }
  const now = performance.now(), dt = Math.min(0.05, R.last ? (now - R.last) / 1000 : 0.016), time = (now - R.t0) / 1000;
  R.last = now;
  const L = layout();
  if (!L) { R.raf = requestAnimationFrame(frame); return; }

  if (R.on) { R.head = Math.min(1, R.head + dt * 7); R.tail = 0; }
  else if (R.active) { R.head = 1; R.tail = Math.min(1, R.tail + dt * 6); if (R.tail >= 1) R.active = false; }
  R.uni.uTime.value = time; R.dropUni.uTime.value = time;
  R.stream.visible = R.active;
  if (R.active) buildStream(L, time);

  const landing = R.active && R.head >= 1 && R.tail < 0.85;
  if (landing && R.on) {
    for (let k = 0; k < 2; k++) if (Math.random() < 0.7) {
      const d = R.dropState[R.dropI++ % DROPS], ang = (Math.random() - 0.5) * 2.4;
      d.x = L.x; d.y = L.y1; d.vx = Math.sin(ang) * L.w * (4 + Math.random() * 8);
      d.vy = -L.w * (10 + Math.random() * 10); d.life = 1; d.s = L.w * (0.12 + Math.random() * 0.16);
    }
    R.ringT -= dt;
    if (R.ringT <= 0) { R.ringT = 0.12; const g = R.rings[R.ringI++ % RINGS]; g.age = 0; g.x = L.x; g.y = L.y1; g.w = L.w; }
  }
  let alive = R.active;
  const grav = L.w * 90;
  for (let i = 0; i < DROPS; i++) {
    const d = R.dropState[i];
    if (d.life > 0) {
      d.vy += grav * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.life -= dt * 2.6;
      if (d.y > L.y1 + L.w && d.vy > 0) d.life = 0;
      alive = alive || d.life > 0;
    }
    const s = d.life > 0 ? d.s * Math.min(1, d.life * 2) : 0;
    _m.compose(_p.set(d.x, -d.y, 2), _q, _s.set(s, s * 1.25, s)); R.drops.setMatrixAt(i, _m);
  }
  R.drops.instanceMatrix.needsUpdate = true;
  for (const g of R.rings) {
    g.age += dt; const live = g.age < 0.7; g.m.visible = live;
    if (live) {
      const k = g.w * (0.8 + g.age * 5);
      g.m.position.set(g.x, -g.y, 1); g.m.scale.set(k, k * 0.28, 1);
      g.m.material.opacity = 0.45 * (1 - g.age / 0.7);
      alive = true;
    }
  }

  R.renderer.render(R.scene, R.camera);
  if (alive || R.on) R.raf = requestAnimationFrame(frame);
  else { R.canvas.style.visibility = 'hidden'; }
}

function stopAll() {
  if (!R) return;
  R.on = false; R.active = false; R.head = R.tail = 0;
  R.dropState.forEach(d => { d.life = 0; }); R.rings.forEach(g => { g.age = 9; g.m.visible = false; });
  R.canvas.style.visibility = 'hidden';
}

/* el：原本的 CSS 水柱元素。on：開始／停止倒。opt.surf：回傳液面在螢幕上的 y（沒有就落到水柱底端） */
export function pour(el, on, opt) {
  try {
    if (!init()) return false;
    if (on) {
      if (!el || !el.parentElement) return false;
      const host = el.parentElement;
      if (R.canvas.parentElement !== host) host.appendChild(R.canvas);
      if (R.el !== el) { R.el = el; R.dropState.forEach(d => { d.life = 0; }); }
      R.host = host; R.surf = (opt && opt.surf) || null; R.mouth = (opt && opt.mouth) || null;
      const bg = el.style.background || getComputedStyle(el).backgroundColor || '#e0c080';
      try { R.uni.uCol.value.setStyle(bg); } catch (e) { R.uni.uCol.value.set('#e0c080'); }
      const hsl = {}; R.uni.uCol.value.getHSL(hsl);
      R.uni.uClear.value = hsl.l > 0.82 ? 1 : 0; // 蘇打水、水這類透明的液體
      el.classList.add('l3d');
      if (!R.on && !R.active) { R.head = 0; R.tail = 0; }
      if (!R.on && R.active) { R.head = 0; R.tail = 0; } // re-press while the old tail is still falling: start fresh
      R.on = true; R.active = true;
      R.canvas.style.visibility = 'visible';
    } else {
      if (!R.on) return true;
      R.on = false;
    }
    if (!R.raf) { R.last = 0; R.raf = requestAnimationFrame(frame); }
    return true;
  } catch (e) { return false; }
}

export function supported() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; }
}

/* 給檢查工具用：目前狀態 */
export function state() { return R ? { on: R.on, active: R.active, head: R.head, host: !!(R.canvas.parentElement), vis: R.canvas.style.visibility, W: R.W, H: R.H } : null; }
