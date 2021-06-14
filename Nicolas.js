// un actor del cuadruple de dimensiones que lanza proyectil piedra

class Nicolas extends Actor {
    constructor(x, y) {
        super(x, y);
        this.ancho = 24.21;
        this.alto = 40;
        
    }

    draw() {
        image(imgabejaolasatras,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasderecha,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasderechamano,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasizquierda,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasizquierdamano,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imagnicolasmuerte,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imagnicolasnormal,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasfrente,this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
         
    }

}