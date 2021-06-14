// un actor que se mueve hacia el jugador

class Hormiga extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 5;
        this.vidaTotal = 5;
        this.dano = 1;
        this.vel = 2;
        this.monedas = 1;
        this.valor = 15;
        this.ancho = 22.5;
        this.alto = 30;
        this.tipo = "caminador";
        this.nombre = "hormiga";
    }

    draw() {
        if (this.vida > 0) {
            image(imghormiganormal, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
            image(imghormigaverde,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        }
    }

}