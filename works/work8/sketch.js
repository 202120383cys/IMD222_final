function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}
function draw() {
  background("black");
  translate(300, 300);
  for (let i = 0; i < 300; i++) {
    stroke(i, i, 255, i);
    strokeWeight(3);
    line(100, 50, 600, 100);
    rotate(PI / 2 + frameCount * 0.00001);
  }
}
