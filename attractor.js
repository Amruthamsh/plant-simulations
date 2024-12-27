// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY

function Attractor() {
  this.pos = createVector(random(width), random(height));
  this.reached = false;

  this.show = function() {
    fill(50);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }
}
