// un ambiente que cambia el estado de la pantalla

class Puerta extends Ambiente {
    constructor(x, y, identificador) {
        super(x, y);
        this.identificador = identificador;
    }

    draw() {
        image(imgpuertaabierta, this.x, this.y, this.ancho, this.alto);
        image(imgpuertacerrada, this.x, this.y, this.ancho, this.alto);
    }


}