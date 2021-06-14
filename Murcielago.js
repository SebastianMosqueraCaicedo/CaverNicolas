// un actor que puede moverse sobre abismos e ignora las balas del jugador

class Murcielago extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 1;
        this.vel = 3;
        this.monedas = 1;
        this.valor = 15;
    }

    draw() {
        image(imgmurcielago, this.x, this.y, this.ancho, this.alto);
    }

}