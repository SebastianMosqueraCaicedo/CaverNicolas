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
        this.distanciaTotal = 160;
        this.tipo = "proyectil";
        this.nombre = "roca";
    }

    draw() {
        image(imgroca, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }


}