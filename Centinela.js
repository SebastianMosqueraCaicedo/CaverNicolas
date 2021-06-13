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
    }
}1