// un actor que es controlado por el usuario. Puede ser herido por otros actores, recolecta recogibles y puede entrar a puertas

class Jugador extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 6;
        this.vidaTotal = 6
        this.vel = 4;
        this.tipo = "jugador";
        this.nombre = "john";
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
    }

    draw() {
        image(imgactorderecha, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgactorizquierda, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgactorfrente, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgactorartras, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgactorderechapistola, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgactorizquierdapistola, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgactorartraspistola, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);

        image(imgactorizquierdalatigo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgactorderechalatigo, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);


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