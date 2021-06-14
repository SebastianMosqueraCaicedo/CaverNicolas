// un recogible que regenera toda la vida faltante del jugador

class Pocima extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.ancho = 40;
        this.alto = 40;
        this.tipo = "recogible";
        this.nombre = "pocima";
    }

    draw() {
        if (this.vida > 0) {
            image(imgpocimar, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        }
    }


}