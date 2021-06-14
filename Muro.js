// un ambiente que no deja pasar ningun ente

class Muro extends Ambiente {
    constructor(x, y) {
        super(x, y);
        this.ancho = 40;
        this.alto = 40;
    }
    draw() {

    }
}