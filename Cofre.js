// un recogible que da mejoras o dinero
class Cofre extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.anchos = 40;
        this.alto = 30.3;
    }

    draw() {
        image(imgcofrer, this.x, this.y, this.ancho, this.alto);
    }

}