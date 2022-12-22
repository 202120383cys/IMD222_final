t = 0;
function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(
    boundingRects.width,
    boundingRects.height,
    (W = 400),
    W
  );
  canvas.parent("p5Canvas");
}

function draw() {
  a = TAU / 3;
  background(0);
  noStroke(fill("#aff"));
  circle((s = 300), 300, sin(t + a) * W);
  fill("#ffa");
  arc(300, 300, 200, 200, -t, a - t);
  noFill(stroke("#faf"));
  arc(300, 300, 200, 200, t + a, (t += 0.02));
}
