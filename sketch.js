let video;
let vScale = 2;
let particles = [];
let x = 0;
function setup() {
  createCanvas(960, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(50);
}

function draw() {
  video.loadPixels();
  let w = video.width;
  let h = video.height;
  copy(video, w / 2, 0, 1, h, x, 0, 1, h);

  x > width ? (x = 0) : (x += 1);
}
