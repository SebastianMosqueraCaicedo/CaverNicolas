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
        this.tipo = "estatico";
        this.nombre = "centinela";
    }

    draw() {
        image(imgcentinela, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}