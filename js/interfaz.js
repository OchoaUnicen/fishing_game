class Interfaz {


    constructor () {

        this.contenedor_titulo = new Image();
        this.contenedor_titulo.src = "./img/desktop_responsive/interfaz/titulo.png";
        this.titulo_x = canvas.width / 2 - 100;
        this.titulo_y = canvas.height / 2 ;


        this.contenedor_gris = new Image();
        this.contenedor_gris.src = "./img/desktop_responsive/interfaz/grey_panel.png";



        this.contenedor_start_game = new Image();
        this.contenedor_start_game.src = "./img/desktop_responsive/interfaz/start_game.png";
        this.start_x = canvas.width / 2 - 70;
        this.start_y = canvas.height / 2 + 55;


    
    }
    dibujarTitulo (context) {

        
        context.drawImage(this.contenedor_titulo, this.titulo_x, this.titulo_y);
        context.font = "20px Georgia";
        context.fillText("Fishing Experts", this.titulo_x+ 25, this.titulo_y + 30 );
    }

    dibujarContenedor (context) {

        
        context.drawImage(this.contenedor_gris, this.titulo_x, this.titulo_y, this.contenedor_gris.naturalWidth *2 - 9 , this.contenedor_gris.naturalHeight);
    }

    dibujarContenedorStart (context) {


        context.drawImage(this.contenedor_start_game, this.start_x, this.start_y, this.contenedor_start_game.naturalWidth/1.5, this.contenedor_start_game.naturalHeight/1.5);
        context.font = "15px Georgia";
        context.fillText("Start Game", this.titulo_x+ 60, this.titulo_y + 75 );

    }



    run (context) {

        if (gameState == "interfaz") {
            this.dibujarContenedor(context);
            this.dibujarTitulo(context);
            this.dibujarContenedorStart(context);
        }



       
       
       
    }


  
}

