// un recogible que incrementa el contador de carriles

class CarrilRecogible extends Recogible {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        image(imgcarrilr, this.x, this.y, this.ancho, this.alto);
    }

}