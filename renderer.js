import { $, RW, RD, BLD, S } from './game.js';

let GL = null;
let MG = null;

export function initGL() {
  if (GL) return true;
  if (typeof THREE === "undefined") return false;

  const cv = $("#gl");
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true });
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const sc = new THREE.Scene();
  sc.background = new THREE.Color(0xcfe3ea);

  const cam = new THREE.PerspectiveCamera(42, 2, 0.1, 60);
  sc.add(new THREE.AmbientLight(0xffffff, 0.8));

  const dl = new THREE.DirectionalLight(0xfff2d6, 0.65);
  dl.position.set(4, 9, 5);
  sc.add(dl);

  GL = { r, sc, cam, cv };
  return true;
}

export function drawRoom() {
  if (!initGL()) return;
  const w = GL.cv.clientWidth || window.innerWidth;
  const h = GL.cv.clientHeight || window.innerHeight;
  if (w && h) {
    GL.r.setSize(w, h, false);
    GL.cam.aspect = w / h;
    GL.cam.updateProjectionMatrix();
  }
  GL.r.render(GL.sc, GL.cam);
}

export function drawMap() {
  const mapin = $("#mapin");
  if (!mapin) return;
  let h = '<div class="road" style="left:4%;right:4%;top:44%;height:5%"></div>';
  BLD.forEach(b => {
    h += `<div class="b" data-id="${b.id}" style="left:${b.x}%;top:${b.y}%"><div class="blk" style="background:${b.col}"></div><div class="bub">${b.e}</div><em>${b.n}</em></div>`;
  });
  mapin.innerHTML = h;
}
