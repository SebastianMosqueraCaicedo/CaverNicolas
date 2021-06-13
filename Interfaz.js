class Interfaz extends Ent {
    constructor(x, y) {
        super(x, y);

        this.contaMonedas = 0;
        this.contaPociones = 0;
        this.contaCarriles = 0;
        this.contaLlaves = 0;
        this.puntaje = 0;
        this.contaVida = 6;
    }




    draw() {
        parametros();
        if (this.estado === 1) {
            image(imginterfaz, this.x, this.y, this.ancho, this.alto);
            image(imglatigo, this.x, this.y, this.ancho, this.alto);
            image(imgpistola, this.x, this.y, this.ancho, this.alto);
            switch (this.contaVida) {
                case 6:
                    image(imgcorazontodavida, 24, 416, this.ancho, this.alto);
                    image(imgcorazontodavida, 73, 416, this.ancho, this.alto);
                    image(imgcorazontodavida, 122, 416, this.ancho, this.alto);
                    break;
                case 5:
                    image(imgcorazontodavida, 24, 416, this.ancho, this.alto);
                    image(imgcorazontodavida, 73, 416, this.ancho, this.alto);
                    image(imgcorazonmediavida, 122, 416, this.ancho, this.alto);
                    break;
                case 4:
                    image(imgcorazontodavida, 24, 416, this.ancho, this.alto);
                    image(imgcorazontodavida, 73, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 122, 416, this.ancho, this.alto);
                    break;
                case 3:
                    image(imgcorazontodavida, 24, 416, this.ancho, this.alto);
                    image(imgcorazonmediavida, 73, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 122, 416, this.ancho, this.alto);
                    break;
                case 2:
                    image(imgcorazontodavida, 24, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 73, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 122, 416, this.ancho, this.alto);
                    break;
                case 1:
                    image(imgcorazonmediavida, 24, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 73, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 122, 416, this.ancho, this.alto);
                    break;
                case 0:
                    image(imgcorazon0vida, 24, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 73, 416, this.ancho, this.alto);
                    image(imgcorazon0vida, 122, 416, this.ancho, this.alto);
                    break;
                default:
                    break;
            }
        }

    }

    contar(jugador) {
        this.contaMonedas = jugador.getMonedas();
        this.contaPociones = jugador.getPocimas();
        this.contaCarriles = jugador.getCarriles();
        this.contaLlaves = jugador.getLlaves();
        this.contaVida = jugador.getVida();
        this.puntaje = jugador.getPuntaje();
    }
}