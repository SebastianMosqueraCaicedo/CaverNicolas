// un ambiente que cambia el estado de la pantalla

class Puerta extends Ambiente {
    constructor(x, y, identificador) {
        super(x, y);
        this.identificador = identificador;
        this.ancho = 29;
        this.alto = 40;

    }

    draw() {
        image(imgpuertaabierta, this.x, this.y, this.ancho, this.alto);
        image(imgpuertacerrada, this.x, this.y, this.ancho, this.alto);
    }


}