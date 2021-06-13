// la clase padre principal, contiene generalidades como la posicion, hitbox, tamaño, tipo, estado y valor ( Actor, Ambiente, Recogible, Pantalla)

class Ent {
    constructor(x, y) {
        // coordenadas
        this.x = x;
        this.y = y;
        // un string estatando el nombre del ente
        this.tipo = "nada";
        // la anchura del ente / imagen
        this.ancho = 40;
        // la altura
        this.alto = 40;
        // la variacion en la que se encuentra el ente: esta atacando? moviendose?
        this.estado = 0;
        // el valor en puntos del ente
        this.valor = 0;
        // determina si el ente ignora los proyectiles
        this.disparable = false

    }

    draw() {

    }

    parametros() {
        //funcion con generalidades: los rectangulos y el texto siempre seran centrados
        rectMode(CENTER);
        textAlign(CENTER, TOP);
    }

    tocado(ent) {

        // esta funcion verifica si la entidad fue tocada por otra, y si es cierto, retorna el tipo de ente

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
            return ent.tipo;
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

}