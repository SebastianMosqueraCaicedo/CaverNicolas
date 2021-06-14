class LatigoRecogible extends Recogible {

    constructor(x, y) {
        super(x, y);
        this.ancho = 36;
        this.alto = 36;
    }


    draw() {
        image(imglatigor, this.x, this.y, this.ancho, this.alto);
    }


}