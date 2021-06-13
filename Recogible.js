// una clase padre que contiene a los entes que pueden ser coleccionados por el jugador

class Recogible extends Ent {
    constructor(x, y) {
        super(x, y);
        // determina si fue recogido
        this.recogido = false;
    }

    // cambia el estado de recogido

    recoger() {
        if (this.tocado() === "jugador") {
            this.recogido = true;
        }
    }
}