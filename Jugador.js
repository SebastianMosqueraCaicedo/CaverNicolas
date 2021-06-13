// un actor que es controlado por el usuario. Puede ser herido por otros actores, recolecta recogibles y puede entrar a puertas

class Jugador extends Actor {
    constructor(x, y) {
        super(x, y);
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

    }

    // devuelve las pocimas

    getPocimas() {

    }

    // devuelve las Llaves

    getLlaves() {

    }

}