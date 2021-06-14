class PistolaRecogible extends Recogible {

    constructor(x, y) {
        super(x, y);
        this.ancho = 42;
        this.alto = 23;
    }

    draw() {
        image(imgpistolar, this.x, this.y, this.ancho, this.alto);
    }

}