


// ------------------------------------------------------------------------------------------ //
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randele = elements => elements[randint(0, elements.length - 1)];
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const keys = [];
const mouse = { x: 0, y: 0, down: false };
canvas.width = innerWidth;
canvas.height = innerHeight;
let last = 0;
const loop = now => {
  let dt = (now - last) / 1000;
  // console.log(1 / dt);
  dt = Math.min(dt, 50 / 1000); // clamp for tab in and out
  last = now;
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);
addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
addEventListener('keydown', e => keys[e.key] = true);
addEventListener('keyup', e => keys[e.key] = false);
addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});
addEventListener('mousedown', () => mouse.down = true);
addEventListener('mouseup', () => mouse.down = false);