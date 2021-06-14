// clase padre de los obstaculos / objetos del mapa (puerta, abismo, muro, barril, cartel, carril)

class Ambiente extends Ent {
    constructor(x, y) {
        super(x, y);
        // determina si el obstaculo permite el movimiento
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
                this.getY() < ent.getInf() || dist(this.getX(), this.getY(), ent.getX(), ent.getY()) < 20) && (ent.tipo === "caminador") || (ent.tipo === "jugador")) {
            // si el obstaculo no es caminable y es tocado por un ente, lo envia a la direccion opuesta
            ent.vel = -ent.vel;
            // lo devuelve la distancia y direccion necesaria para volver a su posicion anterior

            switch (ent.getDir()) {
                case 1:
                    ent.dir = 2;
                    ent.distancia = abs(ent.getY() - ent.getPastY())
                    break;
                case 2:
                    ent.dir = 1;
                    ent.distancia = abs(ent.getY() - ent.getPastY())
                    break;
                case 3:
                    ent.dir = 4;
                    ent.distancia = abs(ent.getX() - ent.getPastX())
                    break;
                case 4:
                    ent.dir = 3;
                    ent.distancia = abs(ent.getX() - ent.getPastX())
                    break;

                default:
                    break;
            }
        } else {
            return null;
        }
    }
}