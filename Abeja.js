//un actor de abeja, que puede volar por encima de los abismos y se mueve aleatoriamente

class Abeja extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 1;
        this.vel = 5;
        this.monedas = 1;
        this.valor = 10;

        this.ancho = 17;
        this.alto = 20;
        let abeja = loadImage('data/bichos/abeja.png');
    }

    draw() {
        image(this.abeja, this.x, this.y, this.ancho, this.alto);


    }
}