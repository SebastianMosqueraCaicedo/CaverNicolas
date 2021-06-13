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

//Jonh
let imgactorderecha;
//fondos
//humo


//nicolas
let imgnicolasatras;
let imgnicolasderecha;
let imgnicolasderechamano;
let imgnicolasfrente;
let imgnicolasizquierda;
let imgnicolasizquierdamano;
let imagnicolasmuerte;
let imagnicolasnormal;

//objetos
let imgbarril;
let imgcarro;
let imgcorazon0vida;
let imgcorazonmediavida;
let imgcorazontodavida;
let imgcuevaabierta;
let imgcuevacerrada;
let imginterfaz;
let imglatigo;
let imgpistola;
let imgpocima;
let imgpuertaabierta;
let imgpuertacerrada;
let imgsimioazul;






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
  // John
  //fondos
  //humo

  //nicolas
  imgnicolasatras = loadImage('data/nicolas/nicolas_atras.png');
  imgnicolasderecha = loadImage ('data/nicolas/nicolas_derecha.png');
  imgnicolasderechamano = loadImage ('data/nicolas/nicolas_derecha_mano.png');
  imgnicolasfrente = loadImage ('data/nicolas/nicolas_frente.png');
  imgnicolasizquierda = loadImage ('data/nicolas/nicolas_izquierda.png');
  imgnicolasizquierdamano = loadImage ('data/nicolas/nicolas_izquierda_mano.png');
  imagnicolasmuerte = loadImage ('data/nicolas/nicolas_muerte.png');
  imagnicolasnormal = loadImage ('data/nicolas/nicolas_normal.png');



  //objetos
  imgbarril = loadImage('data/objetos/barril.png');
  imgcarro  = loadImage ('data/objetos/carro.png');
  imgcorazon0vida = loadImage ('data/objetos/corazon_0vida.png');
  imgcorazonmediavida = loadImage ('data/objetos/corazon_media_vida.png');
  imgcorazontodavida = loadImage ('data/objetos/corazon_toda_vida.png');
  imgcuevaabierta = loadImage ('data/objetos/cueva_abierta.png');
  imgcuevacerrada = loadImage ('data/objetos/cueva_cerrada.png');
  imginterfaz = loadImage ('data/objetos/Interfaz.png');
  imglatigo = loadImage ('data/objetos/latigo.png');
  imgpistola = loadImage ('data/objetos/pistola.png');
  imgpocima = loadImage ('data/objetos/pocima.png');
  imgpuertaabierta = loadImage ('data/objetos/puerta_abierta.png');
  imgpuertacerrada = loadImage ('data/objetos/puerta_cerrada.png');
  imgsimioazul = loadImage ('data/objetos/simio_azul.png');



}





function setup() {
  createCanvas(700, 550);
  ejemplo = new Abeja(200, 200);
}

function draw() {
  background(220);
  ejemplo.draw();
}