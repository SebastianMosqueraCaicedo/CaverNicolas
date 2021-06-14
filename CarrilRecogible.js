// un recogible que incrementa el contador de carriles

class CarrilRecogible extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.ancho = 40;
        this.alto = 40;
        this.tipo = "recogible";
        this.nombre = "carroR";

    }

    draw() {
        image(imgcarrilr, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}