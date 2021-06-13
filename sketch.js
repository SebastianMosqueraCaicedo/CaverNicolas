let imgabeja;

function preload() {
  imgabeja = loadImage('data/bichos/abeja.png');
}

function setup() {
  createCanvas(700, 550);
  ejemplo = new Abeja(200, 200);
}

function draw() {
  background(220);
  ejemplo.draw();
}