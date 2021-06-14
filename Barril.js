// un ambiente que obstruye el paso y con los estados puede ser destruido cuando una bala lo toca

class Barril extends Ambiente {
    constructor(x, y) {
        super(x, y);
        this.ancho = 38;
        this.alto = 40;
    }

    draw() {
        image(imgbarril, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}