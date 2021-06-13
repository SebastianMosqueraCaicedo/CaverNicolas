// una clase padre conteniendo a los ataques a distancia (latigo, acido, bala, roca)

class Proyectil extends Actor {
    constructor(x, y) {
        super(x, y);
        // determina cual es la distancia maxima que recorrera el proyectil    
        this.distanciaTotal = 1;
        // reemplaza a velocidad y cambia dependiendo de esta y la distancia recorrida
        this.accel = this.vel - (this.vel / (this.distanciaTotal - (this.distancia - 1)));

    }
}