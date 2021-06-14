// un actor que se mueve rapidamente

class Serpiente extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 2;
        this.vidaTotal = 2;
        this.dano = 1;
        this.vel = 3;
        this.monedas = 1;
        this.valor = 5;
        this.ancho = 40;
        this.alto = 8.52;
        this.tipo = "caminador"
    }

    draw() {
        image(imgserpientenormal, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgserpienteroja, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);

    }

}