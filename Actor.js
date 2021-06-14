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
        // determina cuantos proyectiles ha creado el actor
        this.proyectiles = [];
        // dice cuanta distacia ha recorrido el actor
        this.distancia = 0;
        // determina cuanto daño hace el actor
        this.dano = 0;
        // contador de fotogramas de invincibilidad
        this.invincibilidad = 0;
    }


    draw() {
        image(imgactorderecha, this.x, this.y, this.ancho, this.alto);
        image(imgactorizquierda, this.x, this.y, this.ancho, this.alto);
        image(imgactorderechapistola, this.x, this.y, this.ancho, this.alto);
        image(imgactorizquierdapistola, this.x, this.y, this.ancho, this.alto);
        image(imgactorfrentepistola, this.x, this.y, this.ancho, this.alto);
        image(imgactorfrente, this.x, this.y, this.ancho, this.alto);
        image(imgactorartras, this.x, this.y, this.ancho, this.alto);
        image(imgactorartraspistola, this.x, this.y, this.ancho, this.alto);
    
    }


    
    // mueve el actor dependiendo de su velocidad y direccion

    mover() {
        if (this.estado != 0) {
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
                this.getY() < ent.getInf()) && ent.tipo === "jugador" && ent.invincibilidad === 0) {
            ent.vida -= this.dano;
            ent.invincibilidad = this.dano * 30;
        }

    }

    // retorna la direccion actual    
    getDir() {
        return this.dir;
    }

    // retorna las casillas consecuentes

    //superior
    getCasillaSupY() {
        return (this.fil - 1);
    }

    getCasillaSupX() {
        return this.col;
    }

    //inferior
    getCasillaInf() {
        return (this.fil + 1);
    }

    getCasillaSupX() {
        return this.col;
    }

    getCasillaIzq() {
        return (this.fil - 1);
    }

    getcasillaDer() {
        return (this.fil + 1);
    }

}