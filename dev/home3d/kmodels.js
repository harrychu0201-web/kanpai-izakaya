/* 家具 3D 模型（Kenney Furniture Kit，CC0 公有領域 www.kenney.nl）。
   .glb 直接打包進 home3d（esbuild --loader:.glb=binary），所以不用另外下載、也不會被 img 快取卡住舊檔。
   build(k) 有對應模型就用模型，沒有（或解析失敗）就沿用原本程式畫的版本。
   模型會縮放到原本那件家具的佔地與高度（有桌面高度 sf 的，桌面會剛好在 sf），正面朝 +z。 */
import { Group, Box3, Vector3, MeshLambertMaterial, MeshBasicMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import loungeSofa from './glb/loungeSofa.glb';
import loungeChair from './glb/loungeChair.glb';
import tableCoffee from './glb/tableCoffee.glb';
import lampRoundFloor from './glb/lampRoundFloor.glb';
import bedDouble from './glb/bedDouble.glb';
import sideTableDrawers from './glb/sideTableDrawers.glb';
import desk from './glb/desk.glb';
import kitchenCabinetDrawer from './glb/kitchenCabinetDrawer.glb';
import kitchenSink from './glb/kitchenSink.glb';
import kitchenStove from './glb/kitchenStove.glb';
import kitchenFridge from './glb/kitchenFridge.glb';
import pottedPlant from './glb/pottedPlant.glb';
import plantSmall3 from './glb/plantSmall3.glb';
import lampRoundTable from './glb/lampRoundTable.glb';
import laptop from './glb/laptop.glb';
import books from './glb/books.glb';
import cabinetTelevision from './glb/cabinetTelevision.glb';
import televisionModern from './glb/televisionModern.glb';

/* Kenney 的材質名 → 遊戲的暖色系配色（c 是每件家具自己的布料顏色） */
const PAL = { wood: '#d29a66', woodDark: '#9a6440', metal: '#c9d0d4', metalLight: '#f4f5f2', metalDark: '#56606a', metalMedium: '#7a8a8c', glass: '#bfe0e8', carpetWhite: '#f8f5ee', carpetDarker: '#b0584e', plant: '#4fae5a', _defaultMat: '#d8d8d8' };
/* parts：[模型, x 位移, y 疊在前一件上面?]；c：布料顏色；lamp：燈罩發光；tv：螢幕 */
const MAP = {
  sofa: { parts: [[loungeSofa]], c: '#6fa8d6' },
  armchair: { parts: [[loungeChair]], c: '#e07a5f' },
  ctable: { parts: [[tableCoffee]] },
  flamp: { parts: [[lampRoundFloor]], lamp: 1 },
  bed: { parts: [[bedDouble]], c: '#f29ab8' },
  nstand: { parts: [[sideTableDrawers]] },
  desk: { parts: [[desk]] },
  kcounter: { parts: [[kitchenCabinetDrawer, -1], [kitchenSink, 1]] },
  stove: { parts: [[kitchenStove]] },
  fridge: { parts: [[kitchenFridge]] },
  monstera: { parts: [[pottedPlant]] },
  cactus: { parts: [[plantSmall3]] },
  dlamp: { parts: [[lampRoundTable]], lamp: 1 },
  laptop: { parts: [[laptop]] },
  book: { parts: [[books]] },
  tv: { parts: [[cabinetTelevision], [televisionModern, 0, 1]], tv: 1 },
};
const MC = {};
const TVM = new MeshBasicMaterial({ color: '#4a8ad8' });   // 電視螢幕（白天藍、晚上亮）
const lamC = c => MC[c] || (MC[c] = new MeshLambertMaterial({ color: c }));
const GM = {};      // k → 已解析、組好、正規化前的 Group（模板）
const loader = new GLTFLoader();
const parse = u8 => new Promise((ok, no) => loader.parse(u8.buffer.slice(u8.byteOffset, u8.byteOffset + u8.byteLength), '', g => ok(g.scene), no));

function assemble(k, scenes) {
  const m = MAP[k], g = new Group(); let topY = 0, lastBox = null;
  scenes.forEach((sc, i) => {
    const [, dx, stack] = m.parts[i];
    sc.traverse(o => {
      if (!o.isMesh) return;
      const nm = (o.material && o.material.name) || '';
      let mat;
      if (nm === 'lamp' && m.lamp) mat = new MeshBasicMaterial({ color: '#fff0c8' });
      else if (m.tv && i === 1 && nm === 'metal') { mat = TVM; o.userData.lit = 1; o.userData.tvs = 1; }
      else if (/^carpet$|carpetBlue/.test(nm)) mat = lamC(m.c || '#e07a5f');
      else mat = lamC(PAL[nm] || '#d8d8d8');
      o.material = mat; o.castShadow = o.receiveShadow = false;
      if (nm === 'lamp' && m.lamp) o.userData.lit = 1;
    });
    const b = new Box3().setFromObject(sc), c = b.getCenter(new Vector3());
    const w = b.max.x - b.min.x;
    sc.position.x -= c.x; sc.position.z -= c.z; sc.position.y -= b.min.y;
    if (dx) sc.position.x += dx * w / 2;
    if (stack && lastBox) sc.position.y += topY;
    g.add(sc);
    const b2 = new Box3().setFromObject(sc); topY = b2.max.y; lastBox = b2;
  });
  return g;
}

/* 打開「我的島／我的店」前先解析好（src.js 的 ready），build() 才能同步拿到模型 */
export const kready = Promise.all(Object.keys(MAP).map(k => Promise.all(MAP[k].parts.map(p => parse(p[0])))
  .then(scs => { GM[k] = assemble(k, scs); }).catch(() => { }))).then(() => { });

/* ref：原本程式畫的那件（拿它的大小當目標）；I：家具資料（w、d、sf） */
export function kbuild(k, ref, I) {
  const t = GM[k]; if (!t) return null;
  const g = new Group(), o = t.clone(true); g.userData.km = 1;
  o.traverse(x => { if (x.isMesh) x.geometry = x.geometry.clone(); });
  g.add(o);
  const rb = new Box3().setFromObject(ref), rs = rb.getSize(new Vector3());
  const mb = new Box3().setFromObject(o), ms = mb.getSize(new Vector3());
  const W = (I && I.w || 1) * .94, D = (I && I.d || 1) * .94;
  const tH = Math.max(rs.y, .1) * 1.12;
  let s = Math.min(W / ms.x, D / ms.z, tH / ms.y);
  if (I && I.L === 'top') s = Math.min(s, rs.y / ms.y, Math.max(rs.x, rs.z, .15) * 1.2 / Math.max(ms.x, ms.z));
  let sy = s;
  if (I && I.sf && I.L !== 'top') sy = I.sf / ms.y;          // 桌面剛好在 sf（上面放的小東西才不會浮空或陷進去）
  else sy = Math.min(Math.max(s, rs.y * .85 / ms.y), rs.y * 1.15 / ms.y);   // 高度跟原本差不多
  sy = Math.min(Math.max(sy, s * .7), s * 1.4);
  o.scale.set(s, sy, s);
  const m = MAP[k];
  if (m.tv) { let sc = null; o.traverse(x => { if (x.isMesh && x.userData.tvs) { x.material = TVM.clone(); sc = x; } }); if (sc) g.userData.tvs = sc; }
  return g;
}
