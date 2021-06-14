// un ambiente que obstruye el paso y con los estados puede ser destruido cuando una bala lo toca

class Barril extends Ambiente {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        image(imgbarril, this.x, this.y, this.ancho, this.alto);
    }

}