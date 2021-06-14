// un recogible que regenera toda la vida faltante del jugador

class Pocima extends Recogible {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        image(imgpocimar, this.x, this.y, this.ancho, this.alto);
    }


}