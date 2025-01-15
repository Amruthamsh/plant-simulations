// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY

function Attractor(widthRange, heightRange) {
  this.pos = createVector(random(widthRange[0], widthRange[1]), random(heightRange[0], heightRange[1]));
  
  //this.pos = createVector(random(width), random(height));
  
  this.reached = false;

  this.show = function() {
    fill(50);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }
}
