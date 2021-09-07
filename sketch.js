function setup() {
  createCanvas(480, 480);
}
let inc = 0.01;
let start = 0;

function draw() {
  background(51);
  stroke(241);
  noFill();
  beginShape();
  xoff = start;
  for (let i = 0; i < width; i++) {
    stroke(241);
    let y =
      noise(xoff) * height +
      (sin(xoff) * height) / 4;
    vertex(i, y);
    xoff += 0.01;
  }
  start += 0.02;
  endShape();
}
