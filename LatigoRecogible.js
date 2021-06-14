class LatigoRecogible extends Recogible {

    constructor(x, y) {
        super(x, y);
    }


    draw() {
        image(imglatigor, this.x, this.y, this.ancho, this.alto);
    }


}