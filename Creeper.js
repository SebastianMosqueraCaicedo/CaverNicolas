// un actor que sigue al jugador y explota cuando lo toca o es disparado
class Creeper extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 3;
        this.vel = 4;
        this.monedas = 3;
        this.valor = 25;
        this.ancho = 16.67;
        this.alto = 20;
        this.tipo = "caminador";
        this.nombre = "creeper";

    }

    draw() {
        if (this.vida > 0) {
            image(imgcreeper, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        }
    }

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
            if (ent.tipo === "jugador") {
                ent.vida -= this.dano;
                ent.invincibilidad = this.dano * 35;
                this.vida = 0;
                this.dano = 0;
            }
        }
    }

    muerte() {
        if (this.vida <= 0) {
            this.contadorMuerte++;
            if (this.contadorMuerte > 0 &&
                this.contadorMuerte < 9) {
                image(imghumo2_1, this.x - 20, this.y - 20, 40, 40)
            }
            if (this.contadorMuerte >= 9 &&
                this.contadorMuerte < 19) {
                image(imghumo2_2, this.x - 20, this.y - 20, 40, 40)
            }
            if (this.contadorMuerte > 19 &&
                this.contadorMuerte < 29) {
                image(imghumo2_3, this.x - 20, this.y - 20, 40, 40)
            }
        }
    }

}