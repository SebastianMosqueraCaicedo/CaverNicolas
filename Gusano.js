// un actor que se mueve aleatoriamente


class Gusano extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 2;
        this.vidaTotal = 2;
        this.dano = 2;
        this.vel = 5;
        this.monedas = 2;
        this.valor = 20;
    }
}