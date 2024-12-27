function Leaf(pos) {
  this.pos = pos;
  this.show = function() {
    fill(34, 139, 34); 
    noStroke();
    ellipse(this.pos.x, this.pos.y, 15, 15); 
  }
}
