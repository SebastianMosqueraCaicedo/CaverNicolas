// un actor que se mueve rapidamente

class Serpiente extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 2;
        this.vidaTotal = 2;
        this.dano = 1;
        this.vel = 3;
        this.monedas = 1;
        this.valor = 5;
    }
}