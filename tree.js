// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY


function Tree(mode) {
  this.attractors = [];
  this.branches = [];
  this.leaves = [];

  for (var i = 0; i < mode.numberOfAttractors; i++) {
    this.attractors.push(new Attractor(mode.widthRange, mode.heightRange));
  }
  var pos = createVector(width / 2, height / 2);
  var dir = createVector(0, -1);
  var root = new Branch(null, pos, dir, mode.branchColor);
  this.branches.push(root);
  var current = root;
  var found = false;
  while (!found) {
    for (var i = 0; i < this.attractors.length; i++) {
      var d = p5.Vector.dist(current.pos, this.attractors[i].pos);
      if (d < max_dist) {
        found = true;
      }
    }
    if (!found) {
      var branch = current.next();
      current = branch;
      this.branches.push(current);
      
    }
  }

  this.grow = function() {
    // Determine the Influence of attractors on Branches
    for (var i = 0; i < this.attractors.length; i++) {
      var attractor = this.attractors[i];
      var closestBranch = null;
      var record = max_dist;
      for (var j = 0; j < this.branches.length; j++) {
        var branch = this.branches[j];
        var d = p5.Vector.dist(attractor.pos, branch.pos);
        if (d < min_dist) {
          if (branch != null) {
            let dynamicThreshold = map(record, 0, max_dist, 2, 6); // Adjust range as needed
            
            newLeafPos = createVector(branch.pos.x + 7, branch.pos.y + 7);
            
            
            if (branch.count >= dynamicThreshold) {
              this.leaves.push(new Leaf(newLeafPos));
              branch.finished = true;
            }
          }

          
          attractor.reached = true;
          closestBranch = null;
          
          break;
        } else if (d < record) {
          closestBranch = branch;
          
          record = d;
        }
      }

      if (closestBranch != null) {
        var newDir = p5.Vector.sub(attractor.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;
        
      }
    }
    
    
    // Remove Reached Attractors
    for (var i = this.attractors.length - 1; i >= 0; i--) {
      if (this.attractors[i].reached) {
        this.attractors.splice(i, 1);
        
      }
    }
    
    // Grow Branches
    for (var i = this.branches.length - 1; i >= 0; i--) {
      var branch = this.branches[i];
      if (branch.count > 0) {
        branch.dir.div(branch.count + 1);
        this.branches.push(branch.next());
        branch.reset();
        
      }
    }
    
    for (var i = this.leaves.length - 1; i >= 0; i--){
      this.leaves[i].show();
    }
  }

  this.show = function() {
    if(mode.displayAttractors){
      for (var i = 0; i < this.attractors.length; i++) {
        this.attractors[i].show();
      }
    }
    

    for (var i = 0; i < this.branches.length; i++) {
      this.branches[i].show();
    }

  }

}
