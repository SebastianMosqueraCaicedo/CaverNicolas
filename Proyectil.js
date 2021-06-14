// una clase padre conteniendo a los ataques a distancia (latigo, acido, bala, roca)

class Proyectil extends Actor {
    constructor(x, y) {
        super(x, y);
        // determina cual es la distancia maxima que recorrera el proyectil    
        this.distanciaTotal = 1;
        // reemplaza a velocidad y cambia dependiendo de esta y la distancia recorrida
        this.accel = 1

    }

    // reemplaza la velocidad por aceleracion en el movimiento

    mover() {
        if (this.estado != 0) {
            switch (this.dir) {
                case 1:
                    this.y -= this.accel;
                    break;

                case 2:
                    this.y += this.accel;
                    break;

                case 3:
                    this.x -= this.accel;
                    break;

                case 4:
                    this.x += this.accel;
                    break;

                default:
                    break;
            }
        }
    }

    // override del tocado original

    tocado(ent) {

        if (this.getSup() > ent.getSup() &&
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
            this.getY() < ent.getInf()) {
            if ((this.nombre === "roca" || this.nombre === "acido") && ent.tipo === "jugador") {
                ent.vida -= this.dano;
                ent.invincibilidad = this.dano * 30;
                this.vida = 0;
            }
            if (this.nombre === "bala" && ent.tipo === "jugador") {
                ent.vida -= this.dano;
                ent.invincibilidad = this.dano * 30;
                this.vida = 0;
            }
        } else {
            return null;
        }
    }

    // la ecuacion de aceleracion

    acelerar() {
        this.accel = this.vel - (this.vel / (this.distanciaTotal - (this.distancia - 1)));
    }
}