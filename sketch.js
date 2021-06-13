// Imagenes
// bichos
let imgabeja; 
let imgcentinela;
let imggusanorojo;
let imgusanoAzul;
let imgcreeper;
let imghormiganormal
let imghormigaverde
let imgmurcielago
let imgserpientenormal
let imgserpienteroja
let imgactorderecha;

// nicolas


function preload() {
  // bichos
  imgcentinela = loadImage('data/bichos/centinela.png');
  imgabeja = loadImage('data/bichos/abeja.png');
  imggusanorojo = loadImage('data/bichos/gusano_rojo.png');
  imgusanoAzul = loadImage ('data/bichos/gusano_azul.png');
  imgcreeper = loadImage ('data/bichos/creeper.png');
  imghormiganormal = loadImage ('data/bichos/hormiga_normal.png');
  imghormigaverde = loadImage ('data/bichos/hormiga_verde.png');
  imgmurcielago = loadImage ('data/bichos/murcielago.png');
  imgserpientenormal = loadImage ('data/bichos/serpiente_normal.png');
  imgserpienteroja = loadImage ('data/bichos/serpiente_roja.png');
  imgusanoAzul = loadImage('data/bichos/gusano_azul.png');
  imgactorderecha = loadImage('data/actor/actor_derecha.png');
  // nicolas

}





function setup() {
  createCanvas(700, 550);
  ejemplo = new Abeja(200, 200);
}

function draw() {
  background(220);
  ejemplo.draw();
}