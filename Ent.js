// la clase padre principal, contiene generalidades como la posicion, hitbox, tamaño, tipo, estado y valor ( Actor, Ambiente, Recogible, Pantalla)

class Ent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tipo = "nada";
        this.ancho = 40;
        this.alto = 40;
        this.estado = 0;
        this.valor = 0;

    }

    draw() {

    }

    parametros() {
        rectMode(CENTER);
        textAlign(CENTER, TOP);
    }

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
            return ent.tipo;
        } else {
            return null;
        }
    }

    getEstado() {
        return this.estado;
    }

    setMapa(pantalla) {

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

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