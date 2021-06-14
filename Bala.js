// un proyectil lanzado por el personaje al disparar. se destruye al tocar un muro o un actor que no sea el jugador

class Bala extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 1;
        this.vel = 5;
    }

    draw() {
        image(imgbalaabajo, this.x, this.y, this.ancho, this.alto);
        image(imgbalaarriba, this.x, this.y, this.ancho, this.alto);
        image(imgbaladerecha, this.x, this.y, this.ancho, this.alto);
        image(imgbalaizquierda, this.x, this.y, this.ancho, this.alto);
    }

}