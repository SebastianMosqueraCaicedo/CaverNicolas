// contiene la informacion de donde van a ir los ambientes y la imagen de fondo, dependiendo del estado

class Pantalla extends Ent {
    constructor(x, y) {
        super(x, y);
        //contara fotogramas
        this.contador = 0;
    }

    draw() {
        if (this.contador > 14) {
            contador--;
        }
        if (this.contador != 0) {
            contador++;
        }
        super.parametros();
        switch (this.estado) {

            case -1:
                //mapa de testeado
                image(imgfondotest, this.x, this.y, 400, 400)
                break;
            case 0:
                //menu de inicio
                image(imginicio, this.x, this.y, 700, 550)
                break;
            case 1:
                // menu istrucciones
                image(imgistrucciones, this.x, this.y, 700, 550)
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:

                break;
            case 8:

                break;
            case 9:

                break;
            case 10:

                break;
            case 11:

                break;
            case 12:

                break;
            case 14:

                break;
            case 15:

                break;
            case 20:

                break;
            case 21:

                break;

            default:
                break;
        }
    }

    cambiarPantalla(puerta, jugador) {
        if (jugador.getFil() === puerta.getFil() && jugador.getCol() === puerta.getCol()) {
            this.contador = 1;
            if (this.contador != 0) {
                // transicion basica
                fill(0, 100 - ((100 / 15) * (15 / this.contador)))
            }
            if (this.contador === 0) {
                // cambia el estado dependiendo de la puerta
                this.estado = puerta.identificador;
            }
        }
    }
}