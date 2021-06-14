// un actor que puede moverse sobre abismos e ignora las balas del jugador

class Murcielago extends Actor {
    constructor(x, y) {
        super(x, y);
        this.vida = 1;
        this.vidaTotal = 1;
        this.dano = 1;
        this.vel = 3;
        this.monedas = 1;
        this.valor = 15;
        this.ancho = 20;
        this.alto = 7.78;
        this.tipo = "volador";
        this.nombre = "murcilago";
        
    }

    draw() {
        image(imgmurcielago, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}