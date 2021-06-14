// un proyectil disparado por el centinela, se destruye al tocar un muro o el jugador

class Acido extends Proyectil {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 4;
        this.vel = 2;
        this.ancho = 10;
        this.alto = 10;
        this.distanciaTotal = 320;
        this.tipo = "proyectil";
        this.nombre = "acido";
    }

    draw() {
        if (this.vida > 0) {
            switch (this.dir) {
                case 1:
                    image(imgacidoarriba, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 2:
                    image(imgacidoabajo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 3:
                    image(imgacidoderecha, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 4:
                    image(imgacidoizquierda, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;

                default:
                    break;
            }
        }
    }


}