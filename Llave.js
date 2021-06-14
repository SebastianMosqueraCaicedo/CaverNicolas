// un recogible que aumenta el contador de llaves

class Llave extends Recogible{
    constructor(x,y){
        super(x,y);    
    }

    draw() {
        image(imgllaver, this.x, this.y, this.ancho, this.alto);
    }

}