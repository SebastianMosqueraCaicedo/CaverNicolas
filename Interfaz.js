class Interfaz extends Ent {
    constructor(x, y) {
        super(x, y);
        this.contaMonedas = 0;
        this.contaPociones = 0;
        this.contaCarriles = 0;
        this.contaLlaves = 0;
        this.contaPuntaje = 0;
        this.contaVida = 6;
    }




    draw(jugador) {
        if (this.estado === 1) {
            //traer imagen
            image(imginterfaz, 0, 0, 700, 550);
            //la fuente
            textFont(fuente);
            fill(255);
            textSize(30);
            //texto con los contadores
            text(this.contaPociones, 643, 435);
            text(this.contaLlaves, 643, 475);
            text(this.contaCarriles, 643, 518);
            fill(0);
            text(this.contaPuntaje, 12, 30);
            text(this.contaMonedas, 599, 30);
            textSize(20);
            text('x', 579, 30);
            image(imgmonedar, 555, 10, 20, 20);
           //casos de vida de 6 al 0 (6toda la vida, 0ninguna vida)
           if (this.contaVida < 0) {
            image(imgcorazon0vida, 12, 410, this.ancho, this.alto);
            image(imgcorazon0vida, 59, 410, this.ancho, this.alto);
            image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
               
           }
           switch (this.contaVida) {
                case 6:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 59, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 105, 410, this.ancho, this.alto);
                    break;
                case 5:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 59, 410, this.ancho, this.alto);
                    image(imgcorazonmediavida, 105, 410, this.ancho, this.alto);
                    break;
                case 4:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 59, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 3:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazonmediavida, 59, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 2:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 59, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 1:
                    image(imgcorazonmediavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 59, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 0:
                    image(imgcorazon0vida, 12, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 59, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                default:
                    break;
            }
            //cargar las armas
            if (jugador.getLatigo() != 0) {
                image(imglatigo, 95, 472, 36, 36);
            }
            if (jugador.getPistola() != 0) {
                image(imgpistola, 30, 483, 42, 23);
            }

        }

    }
    //contadores de la clase jugador
    contar(jugador) {
        this.contaMonedas = jugador.getMonedas();
        this.contaPociones = jugador.getPocimas();
        this.contaCarriles = jugador.getCarriles();
        this.contaLlaves = jugador.getLlaves();
        this.contaVida = jugador.getVida();
        this.puntaje = jugador.getPuntaje();
    }
}