// clase padre de todos los entes movibles (abeja, carro, centinela, creeper, gusano, hormiga, jugador, murcielago, nicolas, proyectil)

class Actor extends Ent {
    constructor(x, y) {
        super(x, y)
        // determina que tan rapido se mueve el actor
        this.vel = 0;
        // determina la direccion en la que se mueve el actor
        // 0 sin direccion, 1 arriba, 2 abajo, 3 izquierda, 4 derecha
        this.dir = 0;
        // determina la vida actual del actor
        this.vida = 1;
        // determina cuanta vida en total tiene el actor
        this.vidaTotal = 1;
        // determina cuantas monedas tiene el actor
        this.monedas = 0;
        // dice cuanta recorrera el actor
        this.distancia = 0;
        // determina cuanto daño hace el actor
        this.dano = 0;
        // contador de fotogramas de invincibilidad
        this.invincibilidad = 0;
        //ancho de frente
        this.ancho = 23.05;
        //alto de frente
        this.alto = 40;
        // determina cuanto se tarda recargando
        this.contadorRecarga = 180;
        // muestra la animacion de muerte
        this.contadorMuerte = 0;
        // determina si se esta moviendo
        this.moviendose = false;

    }

    // determina si esta disparando

    disparar() {
        this.contadorRecarga--;
        if (this.contadorRecarga === 0) {
            //generalmente estado 1 es atacar
            this.estado = 1;
        }
    }

    // mueve el actor dependiendo de su velocidad y direccion
    // distancia solo lo deja mover cuando termina de desplazarse

    mover() {
        if (this.estado != 0 || this.vida > 0) {
            if (this.distancia === 0) {
                this.moviendose = false;
            }
            if (this.moviendose === true && this.distancia > 0) {
                this.distancia -= this.vel;
                switch (this.dir) {
                    case 1:
                        this.y -= this.vel;
                        break;

                    case 2:
                        this.y += this.vel;
                        break;

                    case 3:
                        this.x -= this.vel;
                        break;

                    case 4:
                        this.x += this.vel;
                        break;

                    default:
                        break;
                }
            }
        }
        if (this.vida <= 0) {
            this.muerte();
        }
    }

    invincibilidadFrame() {
        if (this.invincibilidad > 0) {
            this.invincibilidad--;
        }
        return this.invincibilidad;
    }

    // aplica daño general de los actores al jugador. entre mas daño, mas fotogramas de invincibilidad le da al jugador

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
                this.getY() < ent.getInf()) && ent.tipo === "jugador" &&
            ent.invincibilidadFrame() === 0) {
            ent.vida -= this.dano;
            ent.invincibilidad = this.dano * 30;
        }

    }

    // animacion basica de muerte

    muerte() {
        if (this.vida <= 0) {
            this.contadorMuerte++;
            if (this.contadorMuerte > 0 &&
                this.contadorMuerte < 19) {
                image(imghumo1_1, this.x - 20, this.y - 20, 40, 40)
            }
            if (this.contadorMuerte >= 19 &&
                this.contadorMuerte < 39) {
                image(imghumo1_2, this.x - 20, this.y - 20, 40, 40)
            }
            if (this.contadorMuerte > 39 &&
                this.contadorMuerte < 60) {
                image(imghumo1_3, this.x - 20, this.y - 20, 40, 40)
            }
        }
    }

    // retorna la direccion actual    
    getDir() {
        return this.dir;
    }

    // retorna la posicion anterior en

    getPastX() {
        if (this.moviendose === false) {
            return this.x;
        }
    }

    getPastY() {
        if (this.moviendose === false) {
            return this.y;
        }
    }

}