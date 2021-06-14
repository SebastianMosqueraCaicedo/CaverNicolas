class PistolaRecogible extends Recogible {

    constructor(x, y) {
        super(x, y);
        this.ancho = 42;
        this.alto = 23;
    }

    draw() {
        image(imgpistolar,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}