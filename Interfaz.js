class Interfaz extends Ent {
    constructor(x, y) {
        super(x, y);
        this.contaMonedas = 0;
        this.contaPociones = 0;
        this.contaCarriles = 0;
        this.contaLlaves = 0;
        this.puntaje = 0;
        this.contaVida = 0;
    }




draw(){   
if (this.estado === 1) {
    image(imginterfaz, this.x, this.y, this.ancho, this.alto);

    
}   

}

    contar(jugador){
        this.contaMonedas = jugador.getMonedas();
        this.contaPociones = jugador.getPocimas();
        this.contaCarriles = jugador.getCarriles();
        this.contaLlaves = jugador.getLlaves();
        this.contaVida = jugador.getVida();
        
    }
}