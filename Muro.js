// un ambiente que no deja pasar ningun ente

class Muro extends Ambiente {
    constructor(x, y) {
        super(x, y);
        this.ancho = 40;
        this.alto = 40;
    }
    draw() {
        fill(0);
        noStroke();
rect(this.x,this.y,this.ancho,this.alto);
    }
}