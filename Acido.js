// un proyectil disparado por el centinela, se destruye al tocar un muro o el jugador

class Acido extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 2;
        this.vel = 2;
        this.ancho = 10; 
        this.alto = 10;
    }

    draw() {
        image(imgacidoabajo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgacidoarriba, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgacidoderecha, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgacidoizquierda, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }


}