// un actor que dispara el proyectil acido dependiendo de la posicion del jugador

class Centinela extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 4;
        this.vidaTotal = 4;
        this.dano = 3;
        this.vel = 0;
        this.monedas = 2;
        this.valor = 15;
        this.ancho = 30;
        this.alto = 30;
    }

    draw() {
        image(imgcentinela, this.x, this.y, this.ancho, this.alto);
    }

}