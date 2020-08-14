class Fish {

    constructor () {
     
        this.nombre = "Beta";
        this.fuerza = 0;
        this.resistencia = 0;
        this.largo = 0;
        this.medida_largo = "cm";
        this.peso = 25.4;
        this.medida_peso = "kg";
        this.imagen = new Image();
        this.imagen.src = "./img/desktop_responsive/fish/fish_normal.png";
   
    }



    dibujarFish(context){

        context.drawImage(this.imagen, 100, 100);
    }


    run (context) {





    }




}