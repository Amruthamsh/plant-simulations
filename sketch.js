var tree;

// Attraction distance = only nodes within this distance around an attractor can be associated with that attractor. Large attraction distances mean smoother and more subtle branch curves, but at a performance cost.
var max_dist = 20;

// Kill distance = an attractor may be removed if one or more nodes are within this distance around it.
var min_dist = 10;

let selectMode;
const modes = ["space","earth"];

let displayTrees;

function setup() {
  createCanvas(1280, 720);
  
  trees = [{modeName:"space", numberOfAttractors: 6000, widthRange:[0,width], heightRange:[0,height], branchColor: [255,174,100], displayAttractors: true},
             {modeName:"earth", numberOfAttractors: 200, widthRange:[width/2 - 30, width/2 + 30], heightRange:[0, height/2], branchColor: [180,255,180], displayAttractors: false},
          {modeName:"earth", numberOfAttractors: 2000, widthRange:[width/2 - 400, width/2 + 400], heightRange:[height/2,height], branchColor: [150,75,0], displayAttractors: false}] 
  
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
  
  //Dropdown for selecting modes
  selectMode = createSelect();
  selectMode.position(40, 60);
  
  modes.forEach((mode) => {
    selectMode.option(mode);
  });
  
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
  
  resetSketch();
}

function draw() {
  background(0);
  
  displayTrees.forEach((tree) =>{
    tree.show();
    tree.grow();
  })
}

function resetSketch(){
  var currentMode = selectMode.selected()
  displayTrees = trees
    .filter((treeSettings) => treeSettings.modeName === currentMode)
    .map((treeSettings) => new Tree(treeSettings));
}
