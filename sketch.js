// Imagenes
// bichos
let imgabeja;
let imgcentinela;
let imggusanorojo;
let imgusanoAzul;

function preload() {

  // bichos
  imgcentinela = loadImage('data/bichos/centinela.png');
  imgabeja = loadImage('data/bichos/abeja.png');
  imggusanorojo = loadImage('data/bichos/gusano_rojo.png');
  imgusanoAzul = loadImage ('data/bichos/gusano_azul.png');

}





function setup() {
  createCanvas(700, 550);
  ejemplo = new Abeja(200, 200);
}

function draw() {
  background(220);
  ejemplo.draw();
}