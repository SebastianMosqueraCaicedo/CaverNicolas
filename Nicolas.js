// un actor del cuadruple de dimensiones que lanza proyectil piedra

class Nicolas extends Actor {
    constructor(x, y) {
        super(x, y);
        this.ancho = 24.21;
        this.alto = 40;
        this.tipo = "jefe";
        this.nombre = "nicolas";

    }

    draw() {
        image(imgabejaolasatras, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasderecha, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasderechamano, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasizquierda, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasizquierdamano, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imagnicolasmuerte, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imagnicolasnormal, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        image(imgnicolasfrente, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
        
        switch (this.estado) {

            case 1:
                this.ancho = 48.42;
                this.alto = 80;
                image(imgnicolasfrente, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 2:
                this.ancho = 47 ;
                this.alto = 80;
                image(imgnicolasatras, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 3:
                this.ancho = 28.36 ;
                this.alto = 80;
                image(imgnicolasizquierda, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 4:
                this.ancho = 28.36;
                this.alto = 80;
                image(imgnicolasderecha, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 5:
                this.ancho = 33.51;
                this.alto = 80;
                image(imgnicolasderechamano, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 6:
                this.ancho = 33.51;
                this.alto = 80;
                image(imgnicolasizquierdamano, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 7:
                this.ancho = 50 ;
                this.alto = 80;
                image(imagnicolasmuerte, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            case 8:
                this.ancho = 24.21;
                this.alto = 40;
                image(imagnicolasnormal, this.x - (this.ancho / 2), this.y - (this.alto / 2), this.ancho, this.alto);
                break;
            default:
        }
    }

}