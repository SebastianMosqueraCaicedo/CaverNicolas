// un actor que solo se mueve cuando el jugador lo toca y sigue los carriles

class Carro extends Actor {
    constructor(x, y) {
        super(x, y);
        this.ancho = 25;
        this.alto = 25;
    }

    draw() {
        image(imgcarro, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}