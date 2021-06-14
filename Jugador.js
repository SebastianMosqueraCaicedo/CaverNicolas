// un actor que es controlado por el usuario. Puede ser herido por otros actores, recolecta recogibles y puede entrar a puertas

class Jugador extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 6;
        this.vidaTotal = 6
        this.vel = 4;
        // determina si puede usar la pistola
        // 0 no tiene, 1 no puede usarla, 2 puede usarla , 3 puede usarla y esta mejorada
        this.estadoPistola = 0;
        // determina si puede usar el latigo
        // 0 no tiene, 1 no puede usarlo, 2 puede usarlo , 3 puede usarlo y esta mejorado
        this.estadoLatigo = 0;
        // cuenta la cantidad de carriles
        this.cantidadCarriles = 0;
        // cuenta la cantidad de pocimas
        this.cantidadPocimas = 0;
        // cuenta la cantidad de Llaves
        this.cantidadLlaves = 0;
        // cuenta la cantidad de Puntos
        this.cantidadPuntaje = 0;
        // determina si y que esta disparando
        this.disparando = 0;
        // recarga de pistola y latigo
        this.contadorRecargaL = 20;
        this.contadorRecargaP = 40;
        this.tipo = "jugador";
        this.nombre = "jonh";
    }

    // no le permite al jugador "espamear" los ataques e incita a que los intercale

    disparar() {
        if (this.contadorRecargaL < 20) {
            this.contadorRecargaL++
        }
        if (this.contadorRecargaP < 40) {
            this.contadorRecargaP++
        }
        if (((this.estado >= 6 && this.estado <= 8) &&
                this.contadorRecargaP === 40) && this.contadorRecargaL > 15) {
            this.disparando = 1;
            this.contadorRecargaP = 0;
        }
        if (((this.estado === 9 || this.estado === 10) &&
                this.contadorRecargaL === 20 && this.contadorRecargaP > 10)) {
            this.disparando = 2;
            this.contadorRecargaP = 0;
        }
    }

    draw() {
        if (this.vida > 0) {
            this.disparar();
            switch (this.dir) {
                case 1:
                    this.estado = 2;
                    if (this.disparando > 0) {
                        this.estado = 6;
                    }
                    break;

                case 2:
                    this.estado = 1;
                    if (this.disparando === 1) {
                        this.estado = 5;
                    }
                    break;

                case 3:
                    this.estado = 3;
                    if (this.disparando === 1) {
                        this.estado = 7;
                    }
                    if (this.disparando === 2) {
                        this.estado = 9;
                    }
                    break;

                case 4:
                    this.estado = 4;
                    if (this.disparando > 0) {
                        this.estado = 8;
                    }
                    if (this.disparando === 2) {
                        this.estado = 10;
                    }
                    break;

                default:
                    break;
            }

            switch (this.estado) {

                case 1:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorfrente, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 2:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorartras, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 3:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorizquierda, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 4:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorderecha, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 5:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorfrentepistola, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 6:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorartraspistola, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 7:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorizquierdapistola, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 8:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorderechapistola, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 9:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorizquierdalatigo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
                case 10:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorderechalatigo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;


                default:
                    this.ancho = 24.51;
                    this.alto = 40;
                    image(imgactorfrente, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                    break;
            }
        }
    }

    // devuelve la cantidad de monedas que tiene el jugador

    getMonedas() {
        return this.monedas;
    }

    // devuelve la vida actual del jugador

    getVida() {
        return this.vida;
    }

    // devuelve los carriles

    getCarriles() {
        return this.cantidadCarriles
    }

    // devuelve las pocimas

    getPocimas() {
        return this.cantidadPocimas
    }

    // devuelve las Llaves

    getLlaves() {
        return this.cantidadLlaves
    }
    // devuelve el puntaje
    getPuntaje() {
        return this.cantidadPuntaje
    }
    getLatigo() {
        return this.estadoLatigo
    }
    getPistola() {
        return this.estadoPistola
    }
}