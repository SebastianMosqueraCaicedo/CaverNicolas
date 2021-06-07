class Ent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tipo = "nada";
        this.ancho = 0;
        this.alto = 0;
        this.estado = 0;
        this.valor = 0;
    }
    draw() {
        console.log("test");
        fill(255);
        rect(this.x,this.y,30,30);
    }
    parametros() {

    }

    tocado(ent) {

    }

    getMonedas() {

    }

    getEstado() {

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