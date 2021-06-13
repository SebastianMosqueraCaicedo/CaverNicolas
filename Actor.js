// clase padre de todos los entes movibles (abeja, carro, centinela, creeper, gusano, hormiga, jugador, murcielago, nicolas, proyectil)

class Actor extends Ent {
    constructor(x, y) {
        super(x, y)
        // determina que tan rapido se mueve el actor
        this.vel = 0;
        // determina la direccion en la que se mueve el actor
        // 0 sin direccion, 1 arriba, 2 abajo, 3 izquierda, 4 derecha
        this.dir = 0;
        // determina la vida actual del actor
        this.vida = 1;
        // determina cuanta vida en total tiene el actor
        this.vidaTotal = 1;
        // determina cuantas monedas tiene el actor
        this.monedas = 0;
        // determina cuantos proyectiles ha creado el actor
        this.proyectiles = [];
        //  dice cuanta distacia ha recorrido el actor
        this.distancia = 0;
    }

    // mueve el actor dependiendo de su velocidad y direccion

    mover() {

    }

    // determina cual es la siguiente casilla dependiendo de la posicion y la direccion

    getCasillaSiguiente() {

    }

}