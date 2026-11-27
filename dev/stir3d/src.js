/* 月影酒吧 3D 攪拌（Three.js）：玻璃攪拌杯、會凹成漩渦的液面、會互撞並被吧勺推著走的冰、跟著手指走的吧勺、慢慢拌勻的顏色。
   由 index.html 在月影酒吧畫面出現時載入（img/stir3d-<hash>.js，全域 Stir3D）。載入失敗或不支援 WebGL 時，照舊顯示原本的圖片版。
   建置：dev/stir3d/build.sh /path/to/node_modules */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, Group, BufferGeometry, BufferAttribute, ShaderMaterial, MeshStandardMaterial,
  LatheGeometry, TorusGeometry, CylinderGeometry, SphereGeometry, CircleGeometry, TubeGeometry, CatmullRomCurve3, MeshBasicMaterial,
  Vector2, Vector3, Color, DirectionalLight, AmbientLight, PMREMGenerator, DoubleSide
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const RIN = 0.94, HGT = 2.0, NR = 18, NA = 56;
let S = null, DEAD = false;

const NOISE = `
  float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
  float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
    return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
  uniform vec3 uCol, uColA, uColB; uniform float uMix, uPhase, uSpin, uTime;
  /* 沒拌勻時兩種顏色成一絲一絲的漩渦，拌越久越接近調好的顏色 */
  vec3 liquid(vec3 p){
    float r = length(p.xz);
    float a = uPhase*(1.5-r*0.8) + r*3.2 - p.y*0.6;
    vec2 q = mat2(cos(a),-sin(a),sin(a),cos(a))*p.xz;
    float n = noise(q*3.1 + p.y*2.4)*0.65 + noise(q*7.3 - p.y*4.0)*0.35;
    vec3 raw = mix(uColA, uColB, smoothstep(0.36,0.64,n));
    return mix(raw, uCol, uMix) * (0.96 + 0.08*n);
  }`;
const VS = `varying vec3 vP, vN, vV; void main(){ vP=position; vec4 mv=modelViewMatrix*vec4(position,1.0);
  vN=normalize(normalMatrix*normal); vV=-mv.xyz; gl_Position=projectionMatrix*mv; }`;
const topFS = `varying vec3 vP, vN, vV; ${NOISE}
  void main(){
    vec3 n=normalize(vN), v=normalize(vV); if(dot(n,v)<0.0) n=-n;
    vec3 L1=normalize(vec3(-0.5,0.75,0.45)), L2=normalize(vec3(0.7,0.55,-0.2));
    float fr=pow(1.0-max(dot(n,v),0.0),3.0);
    float sp=pow(max(dot(reflect(-L1,n),v),0.0),60.0) + 0.6*pow(max(dot(reflect(-L2,n),v),0.0),30.0);
    float r=length(vP.xz);
    vec3 col=liquid(vP)*(0.72+0.38*max(dot(n,L1),0.0));
    col=mix(col, vec3(1.0,0.93,0.82), fr*0.55);
    /* 轉得快時液面出現流線 */
    float ang=atan(vP.z,vP.x);
    float streak=smoothstep(0.66,0.9, noise(vec2(r*13.0, (ang - uPhase*(1.4-r*0.6))*2.2)));
    streak *= smoothstep(0.15,0.4,r)*clamp(abs(uSpin)/7.0,0.0,1.0)*(1.0-smoothstep(3.0,3.14,abs(ang)));
    col += vec3(1.0)*(sp*0.8 + streak*0.28 + smoothstep(0.9,0.94,r)*0.2);
    gl_FragColor=vec4(col, clamp(0.66 + fr*0.25 + sp*0.4 + streak*0.15, 0.0, 1.0));
  }`;
const sideFS = `varying vec3 vP, vN, vV; ${NOISE}
  void main(){
    vec3 n=normalize(vN), v=normalize(vV);
    float face=abs(dot(n,v));
    vec3 col=liquid(vP)*(0.55+0.5*face);
    col*=0.8+0.2*clamp(vP.y/1.3,0.0,1.0);
    gl_FragColor=vec4(col, 0.6);
  }`;
const glassFS = `varying vec3 vP, vN, vV;
  void main(){
    vec3 n=normalize(vN), v=normalize(vV); if(dot(n,v)<0.0) n=-n;
    float fr=pow(1.0-max(dot(n,v),0.0),2.4);
    float ang=atan(vP.x,vP.z);
    float cut=pow(abs(sin(ang*12.0)),24.0)*step(vP.y,1.55)*step(0.14,vP.y);   /* 切子紋 */
    float hi=smoothstep(0.09,0.0,abs(ang+0.72))*0.55 + smoothstep(0.05,0.0,abs(ang-0.9))*0.3;
    hi*=step(0.2,vP.y);
    vec3 col=mix(vec3(0.62,0.78,0.86), vec3(1.0), clamp(fr+hi,0.0,1.0));
    gl_FragColor=vec4(col, clamp(0.035 + fr*0.5 + cut*0.13 + hi, 0.0, 0.85));
  }`;

const iceFS = `varying vec3 vP, vN, vV;
  void main(){
    vec3 n=normalize(vN), v=normalize(vV);
    vec3 L1=normalize(vec3(-0.5,0.7,0.5)), L2=normalize(vec3(0.75,0.2,0.35));
    float fr=pow(1.0-max(dot(n,v),0.0),1.8);
    float d=max(dot(n,L1),0.0);
    float sp=pow(max(dot(reflect(-L1,n),v),0.0),28.0)+0.6*pow(max(dot(reflect(-L2,n),v),0.0),18.0);
    float cloud=0.5+0.5*sin(vP.x*17.0+sin(vP.y*13.0)*2.0)*sin(vP.z*15.0+vP.x*7.0);
    vec3 col=mix(vec3(0.50,0.68,0.78), vec3(0.97,1.0,1.0), clamp(d*0.65+fr*0.8+cloud*0.12,0.0,1.0))+sp;
    gl_FragColor=vec4(col, clamp(0.24+fr*0.62+sp*0.7+cloud*0.06+d*0.12,0.0,0.95));
  }`;
function mat(fs, uni, extra) {
  return new ShaderMaterial(Object.assign({ uniforms: uni || {}, vertexShader: VS, fragmentShader: fs, transparent: true, depthWrite: false, side: DoubleSide }, extra || {}));
}

function init() {
  if (S || DEAD) return S;
  try {
    const canvas = document.createElement('canvas');
    canvas.className = 's3dcv';
    canvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none';
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) { DEAD = true; return null; } // 不支援就安靜退回圖片版
    const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new Scene();
    const pm = new PMREMGenerator(renderer);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    const camera = new PerspectiveCamera(30, 1, 0.1, 40);
    camera.position.set(0, 5.3, 5.2); camera.lookAt(0, 1.18, 0);
    scene.add(new AmbientLight(0xffe8d0, 0.5));
    const dl = new DirectionalLight(0xfff2dc, 1.6); dl.position.set(-3, 5, 3); scene.add(dl);
    const bl = new DirectionalLight(0x8fb4ff, 0.8); bl.position.set(4, 3, -3); scene.add(bl);

    const shadow = new Mesh(new CircleGeometry(1.2, 40), new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = -0.02; scene.add(shadow);

    const uni = {
      uCol: { value: new Color() }, uColA: { value: new Color() }, uColB: { value: new Color() },
      uMix: { value: 0 }, uPhase: { value: 0 }, uSpin: { value: 0 }, uTime: { value: 0 }
    };

    /* 液面：極座標網格，每格高度由 surfY 算 */
    const nv = (NR + 1) * (NA + 1), tg = new BufferGeometry(), idx = [];
    tg.setAttribute('position', new BufferAttribute(new Float32Array(nv * 3), 3));
    for (let i = 0; i < NR; i++) for (let j = 0; j < NA; j++) {
      const a = i * (NA + 1) + j, b = a + NA + 1; idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
    tg.setIndex(idx);
    const top = new Mesh(tg, mat(topFS, uni)); top.renderOrder = 4; scene.add(top);
    /* 液體側面：上緣跟著液面起伏 */
    const sg = new BufferGeometry(), sidx = [];
    sg.setAttribute('position', new BufferAttribute(new Float32Array((NA + 1) * 2 * 3), 3));
    sg.setAttribute('normal', new BufferAttribute(new Float32Array((NA + 1) * 2 * 3), 3));
    for (let j = 0; j < NA; j++) { const a = j * 2; sidx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    sg.setIndex(sidx);
    const side = new Mesh(sg, mat(sideFS, uni)); side.renderOrder = 1; scene.add(side);

    const prof = [[0.001, 0.0], [0.86, 0.0], [0.98, 0.06], [1.0, 0.2], [1.02, HGT - 0.08], [1.07, HGT]].map(p => new Vector2(p[0], p[1]));
    const glass = new Mesh(new LatheGeometry(prof, 64), mat(glassFS)); glass.renderOrder = 6; scene.add(glass);
    const rimM = new MeshStandardMaterial({ color: 0xdff2ff, roughness: 0.05, metalness: 0.9, transparent: true, opacity: 0.8 });
    const rim = new Mesh(new TorusGeometry(1.055, 0.028, 10, 72), rimM); rim.rotation.x = Math.PI / 2; rim.position.y = HGT; rim.renderOrder = 7; scene.add(rim);
    const base = new Mesh(new TorusGeometry(0.93, 0.02, 8, 64), new MeshBasicMaterial({ color: 0xcfe6f2, transparent: true, opacity: 0.28, depthWrite: false })); base.rotation.x = Math.PI / 2; base.position.y = 0.07; base.renderOrder = 7; scene.add(base);

    /* 吧勺：匙面＋扭紋長柄，原點在匙的位置、沿 +y 往上 */
    const steel = new MeshStandardMaterial({ color: 0xe9eef2, roughness: 0.16, metalness: 1 });
    const spoon = new Group();
    const bowl = new Mesh(new SphereGeometry(0.15, 20, 14), steel); bowl.scale.set(1, 1.5, 0.45); spoon.add(bowl);
    const shaft = new Mesh(new CylinderGeometry(0.032, 0.032, 2.75, 10), steel); shaft.position.y = 1.52; spoon.add(shaft);
    const pts = []; for (let i = 0; i <= 90; i++) { const t = i / 90, a = t * Math.PI * 18; pts.push(new Vector3(Math.cos(a) * 0.036, 0.8 + t * 1.65, Math.sin(a) * 0.036)); }
    spoon.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 180, 0.014, 5), steel));
    const knob = new Mesh(new SphereGeometry(0.085, 16, 12), steel); knob.position.y = 2.92; spoon.add(knob);
    spoon.traverse(o => { o.renderOrder = 2; });
    scene.add(spoon);

    const iceM = new ShaderMaterial({ vertexShader: VS, fragmentShader: iceFS, transparent: true });
    const cubeG = new RoundedBoxGeometry(0.46, 0.46, 0.46, 3, 0.09), ballG = new SphereGeometry(0.58, 32, 24);

    S = { canvas, renderer, scene, camera, uni, top, side, spoon, iceM, cubeG, ballG, ice: [], pad: null, key: '', raf: 0,
      level: 1.3, omega: 0, phase: 0, tilt: new Vector2(), tiltV: new Vector2(), finger: null, sp: new Vector2(0.45, 0.35), spV: new Vector2(),
      time: 0, last: 0, w: 0, frames: 0 };
    canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); DEAD = true; if (S.pad) S.pad.classList.remove('s3d'); canvas.remove(); });
  } catch (e) { DEAD = true; S = null; }
  return S;
}

function surfY(x, z) {
  const r2 = Math.min(1, (x * x + z * z) / (RIN * RIN));
  const w = Math.min(1, Math.abs(S.omega) / 6.5);
  let y = S.level + 0.18 * w * w + 0.16 * w * r2 - 0.62 * w * Math.pow(1 - r2, 2);
  y += S.tilt.x * x + S.tilt.y * z;
  const d = Math.hypot(x - S.sp.x, z - S.sp.y), amp = Math.min(0.05, S.spV.length() * 0.016);
  y += Math.sin(d * 17 - S.time * 13) * amp * Math.exp(-d * 2.6);
  y += 0.008 * Math.sin(x * 5 + S.time * 1.8) * Math.sin(z * 4 - S.time * 1.4);
  return Math.min(HGT - 0.12, y);
}

function updateLiquid() {
  const p = S.top.geometry.attributes.position.array;
  for (let i = 0; i <= NR; i++) {
    const r = RIN * i / NR;
    for (let j = 0; j <= NA; j++) {
      const a = j / NA * Math.PI * 2, x = Math.cos(a) * r, z = Math.sin(a) * r, k = (i * (NA + 1) + j) * 3;
      p[k] = x; p[k + 1] = surfY(x, z); p[k + 2] = z;
    }
  }
  S.top.geometry.attributes.position.needsUpdate = true; S.top.geometry.computeVertexNormals();
  const q = S.side.geometry.attributes.position.array, n = S.side.geometry.attributes.normal.array;
  for (let j = 0; j <= NA; j++) {
    const a = j / NA * Math.PI * 2, c = Math.cos(a), s = Math.sin(a), k = j * 6;
    q[k] = c * RIN; q[k + 1] = 0.12; q[k + 2] = s * RIN;
    q[k + 3] = c * RIN; q[k + 4] = surfY(c * RIN, s * RIN); q[k + 5] = s * RIN;
    n[k] = n[k + 3] = c; n[k + 1] = n[k + 4] = 0; n[k + 2] = n[k + 5] = s;
  }
  S.side.geometry.attributes.position.needsUpdate = true; S.side.geometry.attributes.normal.needsUpdate = true;
}

function setIce(kind) {
  S.ice.forEach(c => S.scene.remove(c.m)); S.ice = [];
  const ball = kind === 'ball', n = ball ? 1 : 7;
  for (let i = 0; i < n; i++) {
    const m = new Mesh(ball ? S.ballG : S.cubeG, S.iceM); m.renderOrder = 3;
    const a = i * 2.4, r = ball ? 0 : (i < 4 ? 0.52 : 0.36), layer = i < 4 ? 0 : 1;
    m.rotation.set(i * 1.3, i * 2.1, i * 0.7);
    S.scene.add(m);
    S.ice.push({ m, x: Math.cos(a) * r, z: Math.sin(a) * r, vx: 0, vz: 0, y: S.level, vy: 0, layer: ball ? 0 : layer,
      rad: ball ? 0.58 : 0.27, wx: 0, wy: 0, wz: 0, ph: i * 1.7 });
  }
}

function step(dt) {
  S.time += dt;
  /* 吧勺追手指；放手後停在原地 */
  const px = S.sp.x, pz = S.sp.y;
  if (S.finger) { const k = Math.min(1, dt * 22); S.sp.x += (S.finger.x - S.sp.x) * k; S.sp.y += (S.finger.y - S.sp.y) * k; }
  S.spV.set((S.sp.x - px) / dt, (S.sp.y - pz) / dt);
  const rr = Math.max(0.05, S.sp.lengthSq()), want = (S.sp.x * S.spV.y - S.sp.y * S.spV.x) / rr;
  if (S.finger && S.spV.length() > 0.15) S.omega += (Math.max(-11, Math.min(11, want)) - S.omega) * Math.min(1, dt * 4);
  else S.omega *= Math.exp(-dt * (S.finger ? 0.9 : 0.7));
  S.phase += S.omega * dt * 1.15;
  /* 液面晃動：阻尼彈簧 */
  S.tiltV.x += (-S.tilt.x * 55 - S.tiltV.x * 3.2 + S.spV.x * 0.22) * dt;
  S.tiltV.y += (-S.tilt.y * 55 - S.tiltV.y * 3.2 + S.spV.y * 0.22) * dt;
  S.tilt.addScaledVector(S.tiltV, dt); S.tilt.clampLength(0, 0.14);

  for (const c of S.ice) {
    const fx = -c.z * S.omega * 0.8, fz = c.x * S.omega * 0.8, k = Math.min(1, dt * (c.rad > 0.4 ? 1.3 : 2.2));
    c.vx += (fx - c.vx) * k; c.vz += (fz - c.vz) * k;
    c.vx += -c.x * (0.5 + Math.abs(S.omega) * 0.12) * dt; c.vz += -c.z * (0.5 + Math.abs(S.omega) * 0.12) * dt;
    c.x += c.vx * dt; c.z += c.vz * dt;
  }
  for (let it = 0; it < 2; it++) {
    for (let i = 0; i < S.ice.length; i++) {
      const c = S.ice[i];
      for (let j = i + 1; j < S.ice.length; j++) {
        const d = S.ice[j];
        if (c.layer !== d.layer) continue;
        let dx = d.x - c.x, dz = d.z - c.z; const l = Math.hypot(dx, dz) || 0.001, min = c.rad + d.rad;
        if (l < min) {
          dx /= l; dz /= l; const o = (min - l) / 2;
          c.x -= dx * o; c.z -= dz * o; d.x += dx * o; d.z += dz * o;
          const rel = (d.vx - c.vx) * dx + (d.vz - c.vz) * dz;
          if (rel < 0) { c.vx += dx * rel * 0.8; c.vz += dz * rel * 0.8; d.vx -= dx * rel * 0.8; d.vz -= dz * rel * 0.8; c.wy += rel; d.wy -= rel; c.vy -= rel * 0.12; }
        }
      }
      /* 吧勺推冰 */
      let dx = c.x - S.sp.x, dz = c.z - S.sp.y; const l = Math.hypot(dx, dz) || 0.001, min = c.rad + 0.13;
      if (l < min) {
        dx /= l; dz /= l; c.x += dx * (min - l); c.z += dz * (min - l);
        const rel = (S.spV.x - c.vx) * dx + (S.spV.y - c.vz) * dz;
        if (rel > 0) { c.vx += dx * rel * 0.9; c.vz += dz * rel * 0.9; c.wx += dz * rel * 1.5; c.wz -= dx * rel * 1.5; }
      }
      const rl = Math.hypot(c.x, c.z), max = RIN - c.rad - 0.01;
      if (rl > max) {
        const nx = c.x / rl, nz = c.z / rl; c.x = nx * max; c.z = nz * max;
        const out = c.vx * nx + c.vz * nz; if (out > 0) { c.vx -= nx * out * 1.4; c.vz -= nz * out * 1.4; }
      }
    }
  }
  for (const c of S.ice) {
    const ball = c.rad > 0.4;
    const target = surfY(c.x, c.z) - (ball ? 0.3 : c.layer ? 0.55 : 0.07) + 0.018 * Math.sin(S.time * 2.1 + c.ph);
    c.vy += ((target - c.y) * 40 - c.vy * 5) * dt; c.y += c.vy * dt;
    c.y = Math.max(c.rad * 0.8 + 0.1, c.y);
    const damp = Math.exp(-dt * 2.2); c.wx *= damp; c.wy *= damp; c.wz *= damp;
    c.m.rotation.x += (c.wx + c.vz * 0.35) * dt; c.m.rotation.y += (c.wy + S.omega * 0.55) * dt; c.m.rotation.z += (c.wz - c.vx * 0.35) * dt;
    c.m.position.set(c.x, c.y, c.z);
  }
  /* 匙在杯底，柄往上斜靠、上端比較靠中間 */
  const bx = S.sp.x, bz = S.sp.y;
  S.spoon.position.set(bx, 0.34, bz);
  S.spoon.quaternion.setFromUnitVectors(_up, _d.set(bx * 0.05 - bx * 0.5 + 0.35, 2.6, bz * 0.05 - bz * 0.5 - 0.2).normalize());
  S.uni.uPhase.value = S.phase; S.uni.uSpin.value = S.omega; S.uni.uTime.value = S.time;
}
const _up = new Vector3(0, 1, 0), _d = new Vector3();

function frame(now) {
  S.raf = 0;
  if (DEAD || !S.pad || !S.pad.isConnected || !S.canvas.isConnected) { S.pad = null; return; }
  const dt = Math.max(0.001, Math.min(0.04, S.last ? (now - S.last) / 1000 : 0.016)); S.last = now;
  const w = S.pad.offsetWidth;
  if (w && w !== S.w) { S.w = w; S.renderer.setSize(w, w, false); }
  step(dt); updateLiquid();
  S.renderer.render(S.scene, S.camera); S.frames++;
  S.raf = requestAnimationFrame(frame);
}

/* pad：#bxpad。o：{key 這杯的編號, ice, col 調好的顏色, a, b 還沒拌勻的兩色, mix 0~1, level 0~1 酒量, finger {x,y}（-1~1，以中心為 0）或 null} */
export function show(pad, o) {
  try {
    if (!init() || !pad) return false;
    if (S.canvas.parentElement !== pad) { pad.insertBefore(S.canvas, pad.querySelector('.bxz-ov')); S.w = 0; }
    const fresh = S.pad !== pad || S.key !== o.key;
    S.pad = pad;
    S.level = 0.92 + 0.55 * Math.max(0, Math.min(1, o.level));
    if (fresh) {
      S.key = o.key; S.omega = S.phase = 0; S.tilt.set(0, 0); S.tiltV.set(0, 0); S.sp.set(0.45, 0.35); S.spV.set(0, 0); S.last = 0;
      setIce(o.ice);
    }
    S.uni.uCol.value.set(o.col); S.uni.uColA.value.set(o.a); S.uni.uColB.value.set(o.b);
    S.uni.uMix.value = Math.max(0, Math.min(1, o.mix));
    if (o.finger) {
      const f = S.finger || (S.finger = new Vector2());
      f.set(o.finger.x, o.finger.y).multiplyScalar(1.15).clampLength(0.2, 0.72);
    } else S.finger = null;
    pad.classList.add('s3d');
    if (!S.raf) { S.last = 0; S.raf = requestAnimationFrame(frame); }
    return true;
  } catch (e) { DEAD = true; if (pad) pad.classList.remove('s3d'); if (S) S.canvas.remove(); return false; }
}

/* 給檢查工具用 */
export function state() {
  return S && !DEAD ? { frames: S.frames, omega: S.omega, phase: S.phase, mix: S.uni.uMix.value, sp: [S.sp.x, S.sp.y],
    ice: S.ice.map(c => [c.x, c.y, c.z]), inPad: !!(S.pad && S.canvas.parentElement === S.pad), w: S.canvas.width } : null;
}
