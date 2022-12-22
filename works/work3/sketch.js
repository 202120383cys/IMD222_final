let a = 0;
function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function draw() {
  r = random;
  background(255, 5);
  v = p5.Vector.fromAngle(a);
  u = p5.Vector.fromAngle(a);
  fill(r(255));
  v.mult(r(100));
  circle(v.x + 300, v.y + 300, r(50));
  u.mult(250);
  circle(u.x + 300, u.y + 300, r(16));
  a += 0.02;
}
