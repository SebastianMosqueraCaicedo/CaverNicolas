// un proyectil lanzado por el personaje al disparar. se destruye al tocar un muro o un actor que no sea el jugador

class Bala extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 1;
        this.vel = 5;
        this.ancho = 5;
        this.alto = 5;
        this.tipo = "proyectil";
        this.nombre = "bala";
    }

    draw() {
        image(imgbalaabajo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgbalaarriba, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgbaladerecha, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgbalaizquierda, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}