// un recogible que se encuentra alrededor del mapa, es creado por la muerte de actores y aumenta el contador de monedas
class Moneda extends Recogible {
    constructor(x, y) {
        super(x, y);
        this.cantidad = 1;
        this.ancho = 15;
        this.alto = 13.5;
        this.tipo = "recogible";
        this.nombre = "moneda";
    }
    getCantidad() {
        return this.cantidad;
    }

    draw() {
        if (this.vida > 0) {
            image(imgmonedar, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        }
    }


}