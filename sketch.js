var tree;

// Attraction distance = only nodes within this distance around an attractor can be associated with that attractor. Large attraction distances mean smoother and more subtle branch curves, but at a performance cost.
var max_dist = 20;

// Kill distance = an attractor may be removed if one or more nodes are within this distance around it.
var min_dist = 10;

function setup() {
  createCanvas(1280, 720);
  
  resetSketch();
  
  let a = createA('https://space-bio-lab.vercel.app/', 'Space Bio Lab');
  a.position(width - 180, 35);
  // Inline styles for the link
  a.style('color', 'white');
  a.style('font-size', '18px');
  a.style('text-decoration', 'none');
  a.style('background-color', 'rgba(0, 100, 200, 0.7)');
  a.style('padding', '8px 15px');
  a.style('border-radius', '5px');
  a.style('font-family', 'Arial, sans-serif');
  a.style('transition', 'background-color 0.3s');
  
  // Hover effect using JavaScript
  a.mouseOver(() => {
    a.style('background-color', 'rgba(0, 150, 250, 1)');
  });
  a.mouseOut(() => {
    a.style('background-color', 'rgba(0, 100, 200, 0.7)');
  });

  button = createButton('Restart Simulation');
  button.position(40, 30);
  button.mousePressed(resetSketch);
}

function draw() {
  background(0);
  tree.show();
  tree.grow();
}

function resetSketch(){
  tree = new Tree();
}
