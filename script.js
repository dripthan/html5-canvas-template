
(async () => {

  const loadImage = path => new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(path);
    image.src = path;
  });

  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d', { willReadFrequently: true });
  const mouse = { x: 0, y: 0, down: false };
  const keys = [];
  const parts = [];

  const loop = () => {

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.font = '50px monospace';
    c.textBaseline = 'middle';
    c.textAlign = 'center';
    c.fillStyle = 'white';
    c.fillText('template text lol', canvas.width / 2, canvas.height / 2);

    parts.push({});
    for (let i = parts.length - 1; i >= 0; --i) {
      const p = parts[i];
    }

    requestAnimationFrame(loop);
  };

  addEventListener('load', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    requestAnimationFrame(loop);
  });

  addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });

  addEventListener('mousemove', ({x, y}) => { mouse.x = x; mouse.y = y; });
  addEventListener('mousedown', () => mouse.down = true);
  addEventListener('mouseup', () => mouse.down = false);
  addEventListener('keydown', ({keyCode}) => keys[keyCode] = true);
  addEventListener('keyup', ({keyCode}) => keys[keyCode] = false);

})();