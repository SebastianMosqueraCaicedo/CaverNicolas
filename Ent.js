// la clase padre principal, contiene generalidades como la posicion, hitbox, tamaño, tipo, estado y valor ( Actor, Ambiente, Recogible, Pantalla)

class Ent {
    constructor(x, y) {
        // coordenadas
        this.x = x;
        this.y = y;
        // posicion en cuadricula
        this.col = 0;
        this.fil = 0;
        // un string estatando el tipo del ente
        this.tipo = "nada";
        // un string estatando el nombre del ente
        this.nombre = "nadie";
        // la anchura del ente / imagen
        this.ancho = 40;
        // la altura
        this.alto = 40;
        // la variacion en la que se encuentra el ente: esta atacando? moviendose?
        this.estado = 0;
        // el valor en puntos del ente
        this.valor = 0;

    }

    // pinta dependiendo del estado

    draw() {

        //switch estado 1 imagen x, 2 imagen y...

    }

    // generalidades: los rectangulos y el texto siempre seran centrados

    parametros() {

        rectMode(CENTER);
        textAlign(CENTER, TOP);
    }

    // verifica si la entidad fue tocada por otra, y si es cierto, retorna el nombre de ente

    tocado(ent) {



        if (this.getSup() > ent.getSup() &&
            this.getSup() < ent.getInf() &&
            this.getX() > ent.getIzq() &&
            this.getX() < ent.getDer() || this.getInf() > ent.getSup() &&
            this.getInf() < ent.getInf() &&
            this.getX() > ent.getIzq() &&
            this.getX() < ent.getDer() || this.getDer() > ent.getIzq() &&
            this.getDer() < ent.getDer() &&
            this.getY() > ent.getSup() &&
            this.getY() < ent.getInf() || this.getIzq() > ent.getIzq() &&
            this.getIzq() < ent.getDer() &&
            this.getY() > ent.getSup() &&
            this.getY() < ent.getInf()) {
            return ent.nombre;
        } else {
            return null;
        }
    }

    // le diria al ente en que mapa esta

    setMapa(pantalla) {

    }

    // retorna informacion basica del ente

    getEstado() {
        return this.estado;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    // retorna cuatro puntos exteriores del ente: izquierdo, derecho, superior e inferior

    getIzq() {
        return (this.x - (this.ancho / 2));
    }

    getDer() {
        return (this.x + (this.ancho / 2));
    }

    getSup() {
        return (this.y - (this.alto / 2));
    }

    getInf() {
        return (this.y + (this.alto / 2));
    }

    // retorna posicion en cuadricula

    getCol() {
        return this.col;
    }

    getFil() {
        return this.fil;
    }

}