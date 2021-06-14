// un proyectil usado por el jugador, hace daño en una zona

class Latigo extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 2;
        this.ancho = 70;
        this.alto = 2;
        this.vel = 10;
        this.tipo = "proyectil";
        this.nombre = "latigo";
    }

    draw() {
        switch (this.dir) {
            case 1:
                image(imglatigovertical, this.x - (this.alto / 2), this.y - (this.ancho / 2), this.ancho, this.alto);
                break;
            case 2:
                image(imglatigovertical, this.x - (this.alto / 2), this.y - (this.ancho / 2), this.ancho, this.alto);
                break;
            case 3:
                image(imglatigohorizontal, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 4:
                image(imglatigohorizontal, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;

            default:
                break;
        }
        image(imglatigohorizontal, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imglatigovertical, this.x - (this.alto / 2), this.y - (this.ancho / 2), this.ancho, this.alto);
    }

}