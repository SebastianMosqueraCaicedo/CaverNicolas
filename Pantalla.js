// contiene la informacion de donde van a ir los ambientes y la imagen de fondo, dependiendo del estado

class Pantalla extends Ent {
    constructor(x, y) {
        super(x, y);
        //contara fotogramas
        this.contador = 0;

    }

    draw() {
        console.log(this.estado);
        if (this.contador > 14) {
            contador--;
        }
        if (this.contador != 0) {
            contador++;
        }
        switch (this.estado) {

            case -1:
                //mapa de testeado
                super.parametros();
                image(imgfondotest, this.x, this.y, 400, 400)
                break;
            case 0:
                //menu de inicio
                super.parametros();
                image(imginicio, this.x, this.y, 700, 550)
                break;
            case 1:
                // menu istrucciones
                super.parametros();
                image(imgistrucciones, this.x, this.y, 700, 550)
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:
                super.parametros();
                image(imgpantalla4, this.x, this.y, 400, 400)
                break;
            case 5:
                super.parametros();
                image(imgpantalla5, this.x, this.y, 400, 400)
                break;
            case 6:
                super.parametros();
                image(imgpantalla6, this.x, this.y, 400, 400)
                break;
            case 7:
                super.parametros();
                image(imgpantalla7, this.x, this.y, 400, 400)
                break;
            case 8:
                super.parametros();
                image(imgpantalla8, this.x, this.y, 400, 400)
                break;
            case 9:
                super.parametros();
                image(imgpantalla9, this.x, this.y, 400, 400)
                break;
            case 10:
                super.parametros();
                image(imgpantalla10, this.x, this.y, 400, 400)
                break;
            case 11:
                super.parametros();
                image(imgpantalla11, this.x, this.y, 400, 400)
                break;
            case 12:
                super.parametros();
                image(imgpantalla12, this.x, this.y, 400, 400)
                break;
            case 14:
                super.parametros();
                image(imgpantalla14, this.x, this.y, 400, 400)
                break;
            case 15:
                super.parametros();
                image(imgpantalla15, this.x, this.y, 400, 400)
                break;
            case 20:
                super.parametros();
                image(imggameover, this.x, this.y, 700, 550)
                break;
            case 21:
                super.parametros();
                image(imgvictoria, this.x, this.y, 700, 550)
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