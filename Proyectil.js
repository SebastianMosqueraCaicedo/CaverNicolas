// una clase padre conteniendo a los ataques a distancia (latigo, acido, bala, roca)

class Proyectil extends Actor {
    constructor(x, y) {
        super(x, y);
        // determina cual es la distancia maxima que recorrera el proyectil    
        this.distanciaTotal = 1;
        // reemplaza a velocidad y cambia dependiendo de esta y la distancia recorrida
        this.accel = 1
        this.dir = 2;
    }

    // reemplaza la velocidad por aceleracion en el movimiento

    mover() {


this.acelerar();

        if (this.vida != 0) {
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
            if (this.accel === 0 || this.distanciaTotal <= this.distancia) {
                this.vida = 0;
                this.estado = 0;
                this.dano = 0;
            }



        }
    }

    // override del tocado original

    tocado(ent) {

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
                this.getY() < ent.getInf()) && ent.invincibilidadFrame() === 0) {
            if ((this.nombre === "roca" || this.nombre === "acido") &&
                ent.tipo === "jugador") {
                ent.vida -= this.dano;
                ent.invincibilidad = this.dano * 35;
                this.vida = 0;
                this.dano = 0;
            }
            if ((this.nombre === "bala" || this.nombre === "latigo") &&
                (ent.tipo === "volador" || ent.tipo === "caminador")) {
                ent.vida -= this.dano;
                ent.invincibilidad = this.dano * 10;
                if (this.nombre === "bala") {
                    this.vida = 0;
                    this.dano = 0;
                }

            }
            if (this.nombre === "bala" &&
                (ent.tipo === "jefe")) {
                ent.vida -= (this.dano / 2);
                ent.invincibilidad = this.dano * 20;
                this.vida = 0;
                this.dano = 0;
            }
            if (this.nombre === "latigo" &&
                (ent.tipo === "jefe")) {
                ent.vida -= this.dano;
                ent.invincibilidad = this.dano * 15;
            }
        } else {
            return null;
        }
    }

    // la ecuacion de aceleracion

    acelerar() {
        if (this.distancia < this.distanciaTotal && this.vida > 0) {
            this.distancia++; // 2,720
            this.accel = this.vel - (this.vel * (1 / (this.distanciaTotal / (this.distancia))));
        }
    }
}