// un proyectil usado por el jugador, hace daño en una zona

class Latigo extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 2;
        this.vel = 10;
    }


    draw() {

    image(imglatigo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}