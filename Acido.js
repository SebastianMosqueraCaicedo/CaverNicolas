// un proyectil disparado por el centinela, se destruye al tocar un muro o el jugador

class Acido extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 2;
        this.vel = 2;
    }

    draw() {
        image(imgacidoabajo, this.x, this.y, this.ancho, this.alto);
        image(imgacidoarriba, this.x, this.y, this.ancho, this.alto);
        image(imgacidoderecha, this.x, this.y, this.ancho, this.alto);
        image(imgacidoizquierda, this.x, this.y, this.ancho, this.alto);
    }


}