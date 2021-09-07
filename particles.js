function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.prevX = x;
  this.prevY = y;
  this.r = random(4, 20);

  this.update = function () {
    this.prevX = this.x;
    this.prevY = this.y;
    this.x += random(-10, 10);
    this.y += random(-10, 10);
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };

  this.show = function () {
    noStroke();
    let px = floor(this.x);
    let py = floor(this.y);
    let pPrevX = floor(this.prevX);
    let pPrevY = floor(this.prevY);
    let col = video.get(px, py);
    fill(col[0], col[1], col[2]);
    strokeWeight(2);
    stroke(col[0], col[1], col[2]);
    line(this.x, this.y, this.prevX, this.prevY);
  };
}
