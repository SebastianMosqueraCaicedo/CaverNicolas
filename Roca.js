// un proyectil que mueve al personaje una casilla atras, incluso si es el abismo

class Roca extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 3;
        this.vel = 2;
    }
}