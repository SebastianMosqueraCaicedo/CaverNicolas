// un ambiente que no obstruye el paso y permite el movimiento de carro encima de el

class Carril extends Ambiente {
    constructor(x, y) {
        super(x, y);
    }


    draw() {
        image(imgcarril, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }



}