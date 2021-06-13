//un actor de abeja, que puede volar por encima de los abismos y se mueve aleatoriamente

class Abeja extends Actor {
    constructor(x, y) {
        super(x, y);

        this.ancho = 17;
        this.alto = 20;
        let abeja = loadImage('data/bichos/abeja.png');
    }

    draw() {
        image(this.abeja, this.x, this.y, this.ancho, this.alto);
    }
}