class PistolaRecogible extends Recogible {

    constructor(x, y) {
        super(x, y);
    }

    draw() {
        image(imgpistolar, this.x, this.y, this.ancho, this.alto);
    }

}