class LatigoRecogible extends Recogible {

    constructor(x, y) {
        super(x, y);
        this.ancho = 36;
        this.alto = 36;
        this.tipo = "recogible";
        this.nombre = "larigoR";
    }


    draw() {
        image(imglatigor, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }


}