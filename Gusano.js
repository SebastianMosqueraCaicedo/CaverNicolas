// un actor que se mueve aleatoriamente


class Gusano extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 2;
        this.vidaTotal = 2;
        this.dano = 2;
        this.vel = 5;
        this.monedas = 2;
        this.valor = 20;
        this.ancho = 10.3;
        this.alto = 20;
        this.tipo = "caminador";
        this.nombre = "gusano";
    }

    draw() {
        if (this.vida > 0) {
            image(imggusanorojo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
            image(imgusanoAzul,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        }
    }
}