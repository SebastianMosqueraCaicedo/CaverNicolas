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
let imgactorizquierda;
let imgactorfrente;
let imgactorartras;
let imgactorderechapistola;
let imgactorizquierdapistola;
let imgactorfrentepistola;
let imgactorartraspistola;


let imgactorderechalatigo;
let imgactorizquierdalatigo;

//fondos
let imgfondotest;
let imgpantalla4;
let imgpantalla5;
let imgpantalla6;
let imgpantalla7;
let imgpantalla8;
let imgpantalla9;
let imgpantalla10;
let imgpantalla11;
let imgpantalla12;
let imgpantalla13;
let imgpantalla14;
let imgpantalla15;

//humo
let imghumo1_1;
let imghumo1_2;
let imghumo1_3;

let imghumo2_1;
let imghumo2_2;
let imghumo2_3;

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



//pantallas
let imggameover;
let imginicio;
let imgistrucciones;
let imgvictoria;

//proyectiles
let imgacidoabajo;
let imgacidoarriba;
let imgacidoderecha;
let imgacidoizquierda;

let imgbalaabajo;
let imgbalaarriba;
let imgbaladerecha;
let imgbalaizquierda;

let imglatigohorizontal;
let imglatigovertical;

let imgroca;

//recogibles
let imgcarrilr;
let imgcofrer;
let imglatigor;
let imgllaver;
let imgmonedar;
let imgpistolar;
let imgpocimar;

function preload() {
  // bichos
  imgcentinela = loadImage('data/bichos/centinela.png');
  imgabeja = loadImage('data/bichos/abeja.png');
  imggusanorojo = loadImage('data/bichos/gusano_rojo.png');
  imgusanoAzul = loadImage('data/bichos/gusano_azul.png');
  imgcreeper = loadImage('data/bichos/creeper.png');
  imghormiganormal = loadImage('data/bichos/hormiga_normal.png');
  imghormigaverde = loadImage('data/bichos/hormiga_verde.png');
  imgmurcielago = loadImage('data/bichos/murcielago.png');
  imgserpientenormal = loadImage('data/bichos/serpiente_normal.png');
  imgserpienteroja = loadImage('data/bichos/serpiente_roja.png');
  imgusanoAzul = loadImage('data/bichos/gusano_azul.png');

  // John
  imgactorderecha = loadImage('data/actor/actor_derecha.png');
  imgactorizquierda = loadImage('data/actor/actor_izquierda.png');
  imgactorfrente = loadImage('data/actor/actor_derecha.png');
  imgactorartras = loadImage('data/actor/actor_atras.png');
  imgactorderechapistola = loadImage('data/actor/actor_derecha_pistola.png');
  imgactorizquierdapistola = loadImage('data/actor/actor_izquierda_pistola.png');
  imgactorfrentepistola = loadImage('data/actor/actor_derecha_pistola.png');
  imgactorartraspistola = loadImage('data/actor/actor_atras_pistola.png');
  imgactorartras  = loadImage('data/actor/actor_atras.png');
  imgactorderechapistola = loadImage('data/actor/actor_derecha_pistola.png');
  imgactorizquierdapistola = loadImage('data/actor/actor_izquierda_pistola.png');
  imgactorfrentepistola = loadImage('data/actor/actor_derecha_pistola.png');
  imgactorartraspistola  = loadImage('data/actor/actor_atras_pistola.png');
  imgactorderechalatigo = loadImage('data/actor/actor_derecha_pistola.png');
  imgactorizquierdalatigo = loadImage('data/actor/actor_izquierda_pistola.png');

  //fondos
  imgfondotest = loadImage('data/fondos/Fondo_Test.png');
  imgpantalla4 = loadImage('data/fondos/pantalla_4.png');
  imgpantalla5 = loadImage('data/fondos/pantalla_5.png');
  imgpantalla6 = loadImage('data/fondos/pantalla_6.png');
  imgpantalla7 = loadImage('data/fondos/pantalla_7.png');
  imgpantalla8 = loadImage('data/fondos/pantalla_8.png');
  imgpantalla9 = loadImage('data/fondos/pantalla_9.png');
  imgpantalla10 = loadImage('data/fondos/pantalla_10.png');
  imgpantalla11 = loadImage('data/fondos/pantalla_11.png');
  imgpantalla12 = loadImage('data/fondos/pantalla_12.png');
  imgpantalla13 = loadImage('data/fondos/pantalla_13.png');
  imgpantalla14 = loadImage('data/fondos/pantalla_14.png');
  imgpantalla15 = loadImage('data/fondos/pantalla_15.png');

  //humo
  imghumo1_1 = loadImage('data/humo/humo_f_1.png');
  imghumo1_2 = loadImage('data/humo/humo_f_2.png');
  imghumo1_3 = loadImage('data/humo/humo_f_3.png');
  imghumo2_1 = loadImage('data/humo/humo2_f_1.png');
  imghumo2_2 = loadImage('data/humo/humo2_f_1.png');
  imghumo2_3 = loadImage('data/humo/humo2_f_1.png');

  //nicolas
  imgnicolasatras = loadImage('data/nicolas/nicolas_atras.png');
  imgnicolasderecha = loadImage('data/nicolas/nicolas_derecha.png');
  imgnicolasderechamano = loadImage('data/nicolas/nicolas_derecha_mano.png');
  imgnicolasfrente = loadImage('data/nicolas/nicolas_frente.png');
  imgnicolasizquierda = loadImage('data/nicolas/nicolas_izquierda.png');
  imgnicolasizquierdamano = loadImage('data/nicolas/nicolas_izquierda_mano.png');
  imagnicolasmuerte = loadImage('data/nicolas/nicolas_muerte.png');
  imagnicolasnormal = loadImage('data/nicolas/nicolas_normal.png');

  //objetos
  imgbarril = loadImage('data/objetos/barril.png');
  imgcarro = loadImage('data/objetos/carro.png');
  imgcorazon0vida = loadImage('data/objetos/corazon_0vida.png');
  imgcorazonmediavida = loadImage('data/objetos/corazon_media_vida.png');
  imgcorazontodavida = loadImage('data/objetos/corazon_toda_vida.png');
  imgcuevaabierta = loadImage('data/objetos/cueva_abierta.png');
  imgcuevacerrada = loadImage('data/objetos/cueva_cerrada.png');
  imginterfaz = loadImage('data/objetos/Interfaz.png');
  imglatigo = loadImage('data/objetos/latigo.png');
  imgpistola = loadImage('data/objetos/pistola.png');
  imgpocima = loadImage('data/objetos/pocima.png');
  imgpuertaabierta = loadImage('data/objetos/puerta_abierta.png');
  imgpuertacerrada = loadImage('data/objetos/puerta_cerrada.png');
  imgsimioazul = loadImage('data/objetos/simio_azul.png');
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

  //pantallas
  imggameover = loadImage('data/pantallas/gameover.png');
  imginicio = loadImage('data/pantallas/inicio.png');
  imgistrucciones = loadImage('data/pantallas/insturcciones.png');
  imgvictoria = loadImage('data/pantallas/victoria.png');

  //proyectiles
  imgacidoabajo = loadImage('data/proyectiles/acido_abajo.png');
  imgacidoarriba = loadImage('data/proyectiles/acido_arriba.png');
  imgacidoderecha = loadImage('data/proyectiles/acido_derecha.png');
  imgacidoizquierda = loadImage('data/proyectiles/acido_izquierda.png');
  imgbalaabajo = loadImage('data/proyectiles/bala_abajo.png');
  imgbalaarriba = loadImage('data/proyectiles/bala_arriba.png');
  imgbaladerecha = loadImage('data/proyectiles/bala_derecha.png');
  imgbalaizquierda = loadImage('data/proyectiles/bala_izquierda.png');
  imglatigohorizontal = loadImage('data/proyectiles/latigo_horizontal.png');
  imglatigovertical = loadImage('data/proyectiles/latigo_vertical.png');
  imgroca = loadImage('data/proyectiles/roca.png');

  //recogibles
  imgcarrilr = loadImage('data/recogibles/carril_recogible.png');
  imgcofrer = loadImage('data/recogibles/cofre_recogible.png');
  imglatigor = loadImage('data/recogibles/latigo_recogible.png');
  imgllaver = loadImage('data/recogibles/llave_recogible.png');
  imgmonedar = loadImage('data/recogibles/moneda_recogible.png');
  imgpistolar = loadImage('data/recogibles/pistola_recogible.png');
  imgpocimar = loadImage('data/recogibles/pocima_recogible.png');
}





function setup() {
  createCanvas(700, 550);
  ejemplo = new Abeja(200, 200);
}

function draw() {
  background(220);
  ejemplo.draw();
}