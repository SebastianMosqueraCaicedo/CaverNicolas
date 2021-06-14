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
        super.parametros();
        if (this.estado === 1) {
            image(imginterfaz, 0, 0,700, 550);
           
            fill (255);
            textSize(30);
            text(this.contaPociones, 643, 412);
            text(this.contaLlaves, 643, 453);
            text(this.contaCarriles, 643, 495);
            fill (0);
            text(this.contaPuntaje, 24, 22); 
            switch (this.contaVida) {
                case 6:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 60, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 105, 410, this.ancho, this.alto);
                    break;
                case 5:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 60, 410, this.ancho, this.alto);
                    image(imgcorazonmediavida, 105, 410, this.ancho, this.alto);
                    break;
                case 4:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazontodavida, 60, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 3:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazonmediavida, 60, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 2:
                    image(imgcorazontodavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 60, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 1:
                    image(imgcorazonmediavida, 12, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 60, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                case 0:
                    image(imgcorazon0vida, 12, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 60, 410, this.ancho, this.alto);
                    image(imgcorazon0vida, 105, 410, this.ancho, this.alto);
                    break;
                default:
                    break;
            }
            if (jugador.getLatigo() != 0) {
                image(imglatigo, 95, 472, 36, 36);
            }
            if (jugador.getPistola() != 0) {
                image(imgpistola, 30, 483, 42, 23);
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