let video;
let vScale = 2;
let particles = [];

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);

  for (let i = 0; i < 10; i++) {
    particles.push(
      new Particle(random(width), random(height))
    );
  }
}

function draw() {
  video.loadPixels();
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}
