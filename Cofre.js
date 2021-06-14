// un recogible que da mejoras o dinero
class Cofre extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.anchos = 40;
        this.alto = 30.3;
        this.tipo = "recogible";
        this.nombre = "cofre";
    }

    draw() {
        image(imgcofrer, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}