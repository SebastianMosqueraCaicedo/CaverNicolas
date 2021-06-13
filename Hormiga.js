// un actor que se mueve hacia el jugador

class Gusano extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 5;
        this.vidaTotal = 5;
        this.dano = 1;
        this.vel = 2;
        this.monedas = 1;
        this.valor = 15;
    }
}