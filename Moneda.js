// un recogible que se encuentra alrededor del mapa, es creado por la muerte de actores y aumenta el contador de monedas
class Moneda extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.cantidad = 1;
    }
    getCantidad() {
        return this.cantidad;
    }


}