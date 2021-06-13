// una clase padre conteniendo a los ataques a distancia (latigo, acido, bala, roca)

class Proyectil extends Actor {
    constructor(x, y) {
        super(x, y);
        // determina cual es la distancia maxima que recorrera el proyectil    
        this.distanciaTotal = 1;
        // reemplaza a velocidad y cambia dependiendo de esta y la distancia recorrida
        this.accel = 1

    }
    
        mover() {
        if (this.estado != 0) {
            switch (this.dir) {
                case 1:
                    this.y -= this.accel;
                    break;

                case 2:
                    this.y += this.accel;
                    break;

                case 3:
                    this.x -= this.accel;
                    break;

                case 4:
                    this.x += this.accel;
                    break;

                default:
                    break;
            }
        }
    }

    acelerar(){
        this.accel = this.vel - (this.vel / (this.distanciaTotal - (this.distancia - 1)));
    }
}