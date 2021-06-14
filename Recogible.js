// una clase padre que contiene a los entes que pueden ser coleccionados por el jugador

class Recogible extends Ent {
    constructor(x, y) {
        super(x, y);
        // determina si fue recogido
        this.recogido = false;
        this.vida = 1;
    }

    // cambia el estado de recogido

    recoger(jugador) {
        if (this.tocado(jugador) === "jugador" && this.recogido === false) {
            this.recogido = true;
            switch (this.nombre) {
                case "pocima":
                    jugador.cantidadPocimas += 1;
                    break;

                case "llave":
                    jugador.cantidadLlaves += 1;
                    break;

                case "carrilR":
                    jugador.cantidadCarriles += 1;
                    break;

                case "pocima":
                    jugador.cantidadPocimas += this.cantidad;
                    break;

                default:
                    break;
            }
        }
    }

    getRecogido() {
        return this.recogido;
    }
}