// clase padre de los obstaculos / objetos del mapa (puerta, abismo, muro, barril, cartel, carril)

class Ambiente extends Ent {
    constructor(x, y) {
        super(x, y);
        // determina si el obstaculo permite el movimiento
        this.caminable = false;
    }

    tocado(ent) {
        // se agrega la variable de distancia, debido a que los ambientes siempre ocuparan 40x40

        if ((this.getSup() > ent.getSup() &&
                this.getSup() < ent.getInf() &&
                this.getX() > ent.getIzq() &&
                this.getX() < ent.getDer() || this.getInf() > ent.getSup() &&
                this.getInf() < ent.getInf() &&
                this.getX() > ent.getIzq() &&
                this.getX() < ent.getDer() || this.getDer() > ent.getIzq() &&
                this.getDer() < ent.getDer() &&
                this.getY() > ent.getSup() &&
                this.getY() < ent.getInf() || this.getIzq() > ent.getIzq() &&
                this.getIzq() < ent.getDer() &&
                this.getY() > ent.getSup() &&
                this.getY() < ent.getInf() || dist(this.getX(), this.getY(), ent.getX(), ent.getY()) < 20) && this.caminable === false) {
            ent.vel = -ent.vel;
            // si el obstaculo no es caminable y es tocado por un ente, lo envia a la direccion opuesta
        } else {
            return null;
        }
    }
}