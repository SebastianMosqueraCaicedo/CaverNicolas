// un ambiente que cambia el estado de la pantalla

class Puerta extends Ambiente {
    constructor(x, y, identificador) {
        super(x, y);
        this.identificador = identificador;
    }
}