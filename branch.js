// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY

function Branch(parent, pos, dir, branchColor) {
  this.pos = pos;
  this.parent = parent;
  this.dir = dir;
  this.origDir = this.dir.copy();
  this.count = 0;
  this.thickness = parent ? max(parent.thickness - 0.02, 0.2) : 4;
  this.branchColor = branchColor;
  
  // Segment length = the distance between nodes as the network grows. Larger values mean   better performance, but choppier and sharper branch curves.
  this.len = 5;

  this.reset = function() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }


  this.next = function() {  
    var nextDir = p5.Vector.mult(this.dir, this.len);
    var nextPos = p5.Vector.add(this.pos, nextDir);
    var nextBranch = new Branch(this, nextPos, this.dir.copy(),this.branchColor);
    
    return nextBranch;
  }

  this.show = function() {
    if (parent != null) {
      stroke(this.branchColor[0],this.branchColor[1],this.branchColor[2]);
      
      strokeWeight(this.thickness);
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
      
    }
  }
}
