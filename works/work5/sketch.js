a = 0;
function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  colorMode(HSB);
  noFill();
}

function draw() {
  r = 300;
  clear();
  background(0);
  translate(r, r);
  for (i = 0; i < 10; i++) {
    rotate(a);
    w = map(sin(a + 0.2 * i), -1, 1, 1, 20);
    stroke(i * 36, r, r);
    circle(w * 20, w * 5, 5);
    ellipse(0, 0, w * 20, w * 5);
  }
  a += 0.01;
}
