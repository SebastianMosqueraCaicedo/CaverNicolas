// un recogible que aumenta el contador de llaves

class Llave extends Recogible{
    constructor(x,y){
        super(x,y);
        this.ancho = 38;
        this.alto = 12.29;    
    }

    draw() {
        image(imgllaver, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
    }

}