// un actor que sigue al jugador y explota cuando lo toca o es disparado
class Creeper extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 3;
        this.vel = 4;
        this.monedas = 3;
        this.valor = 25;
        this.alto = 20;
        this.ancho = 16.67;
    }

    draw() {
        image(imgcreeper, this.x, this.y, this.ancho, this.alto);
    }

}