// un recogible que da mejoras o dinero
class Cofre extends Recogible {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        image(imgcofrer, this.x, this.y, this.ancho, this.alto);
    }

}