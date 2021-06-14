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
    }

    draw() {
        image(imghormiganormal, this.x, this.y, this.ancho, this.alto);
        image(imghormigaverde, this.x, this.y, this.ancho, this.alto);
        
    }

}