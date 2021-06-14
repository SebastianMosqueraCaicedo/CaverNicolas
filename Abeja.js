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
        this.tipo = "volador";
        this.nombre = "abeja";
    }

    draw() {
        if (this.vida > 0) {
            image(imgabeja, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        }
    }
}