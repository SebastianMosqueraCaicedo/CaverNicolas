// un proyectil que mueve al personaje una casilla atras, incluso si es el abismo

class Roca extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 3;
        this.vel = 2;
        this.ancho = 20;
        this.alto = 20;
    }

    draw() {
        image(imgroca, this.x, this.y, this.ancho, this.alto);
    }


}