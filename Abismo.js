// un ambiente por donde no se puede caminar pero los proyectiles y entes voladores pueden pasar por ello. Si el personaje esta en la misma posicion de un abismo, muere

class Abismo extends Ambiente {
    constructor(x, y) {
        super(x, y);
        this.tipo = "ambiente";
        this.nombre = "abismo";
    }
}