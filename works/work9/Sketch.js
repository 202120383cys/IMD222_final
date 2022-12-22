let font,
  fontsize = 100;

let angleRotate = 0.0;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(0);

  font = loadFont("assets/SourceSansPro-Regular.otf");

  textFont(font);
}

function draw() {
  background(0);

  strokeWeight(4);
  stroke(255);

  push();
  translate(300, 300);
  rotate(radians(angleRotate));
  text((int(angleRotate) % 360) + " IMD2022-2 ", 8, -10);
  line(0, 0, 250, 0);
  pop();
  angleRotate += 0.25;
  stroke(255, 0, 0);
  strokeWeight(10);
  point(300, 300);
}
