let gap = 10;
let cirNum = 40;
let cirSize = 20;
let angle = 0;
let ptNum = 100;
let rectSize = 580;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);
}

function draw() {
  background("black");
  noCursor();
  noStroke();
  fill("white");
  circle(mouseX, mouseY, 5);

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  angle = angle + map(mouseX, 0, width, -1, 1);
  noFill();
  stroke("white");
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }
  pop();
}
