class Background {

    constructor () {
        this.imagen = new Image();
        this.imagen.src = "./img/desktop_responsive/background/fondo_castillo.png";
    }


    dibujar(context) {

        context.drawImage(this.imagen, 0,-360, this.imagen.naturalWidth , this.imagen.naturalHeight );
    }

}