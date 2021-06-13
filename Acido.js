// un proyectil disparado por el centinela, se destruye al tocar un muro o el jugador

class Acido extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 2;
        this.vel = 2;
    }
}