const simplex = new SimplexNoise();

function setup() {
  createCanvas(480, 480);
  pixelDensity(1);
}

let inc = 0.005;
let start = 0;
let zoff = 0.01;
function draw() {
  loadPixels();
  zoff = start;
  let xoff = 0;
  for (let x = 0; x < width; x++) {
    xoff += inc;
    let yoff = 0;
    for (let y = 0; y < height; y++) {
      yoff += inc;
      let index = (x + y * width) * 4;
      let r = map(
        simplex.noise3D(xoff, yoff, zoff),
        0,
        1,
        0,
        255
      );
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
    }
  }
  start += 0.005;
  updatePixels();
}
