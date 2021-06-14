// un recogible que aumenta el contador de llaves

class Llave extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.ancho = 38;
        this.alto = 38;
        this.tipo = "recogible";
        this.nombre = "llave";
    }

    draw() {
        if (this.vida > 0) {
            image(imgllaver, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        }
    }

}