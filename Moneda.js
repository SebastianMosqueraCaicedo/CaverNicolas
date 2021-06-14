// un recogible que se encuentra alrededor del mapa, es creado por la muerte de actores y aumenta el contador de monedas
class Moneda extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.cantidad = 1;
        this.ancho = 15;
        this.alto = 13.5;
    }
    getCantidad() {
        return this.cantidad;
    }

    draw() {
        image(imgmonedar, this.x, this.y, this.ancho, this.alto);
    }


}