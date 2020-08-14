class Ola {


    constructor() {
        
        this.imagen = new Image();
        this.imagen.src = "./img/agua_quieta.png";
        this.w = 70;
        this.h = 105;
        this.x = 0;
        this.y = 395;
        this.cd_desplazar = 0;
    }

    getCd_Desplazar () {
        return this.cd_desplazar;
    }

    setCd_Desplazar (cd) {
        this.cd_desplazar = cd;
    }
   

    getImagen(){
      
        return this.imagen;
        
    }

    deplazar(pos_ola_clicked) {

        // if (olas[pos_ola_clicked].cd_desplazar == 0) {

        //     olas[pos_ola_clicked].setCd_Desplazar(115);
        // }

        let tiempo_ondeando = 365;
        let diferencia = 0;
        olas[pos_ola_clicked].imagen.src = "./img/agua_onda.png";

        setTimeout(function(){
            olas[pos_ola_clicked].imagen.src = "./img/agua_quieta.png";
         }, 100 + tiempo_ondeando);

         setTimeout(function(){
            olas[pos_ola_clicked].imagen.src = "./img/agua_onda.png";
         }, 100 + tiempo_ondeando + 40);

         setTimeout(function(){
            olas[pos_ola_clicked].imagen.src = "./img/agua_quieta.png";
         }, 100 + tiempo_ondeando + tiempo_ondeando + 40 );



        for (let i = 0 ; i < olas.length; i++) {
            diferencia = i - pos_ola_clicked;

            if (i < pos_ola_clicked) {
                let tiempo_desplazamiento = 100 * -1 * diferencia;  
                setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_onda.png";
                 }, tiempo_desplazamiento);

                 setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_quieta.png";
                 }, tiempo_desplazamiento + tiempo_ondeando);

                 setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_onda.png";
                 }, tiempo_desplazamiento + tiempo_ondeando + 40);

                 setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_quieta.png";
                 }, tiempo_desplazamiento + tiempo_ondeando + tiempo_ondeando + 40);


            }

            if (i > pos_ola_clicked) {
                let tiempo_desplazamiento = 100 * diferencia;  
                setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_onda.png";
                 }, tiempo_desplazamiento);

                 setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_quieta.png";
                 }, tiempo_desplazamiento + tiempo_ondeando);  
                 
                 setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_onda.png";
                 }, tiempo_desplazamiento + tiempo_ondeando + 40); 

                 setTimeout(function(){
                    olas[i].imagen.src = "./img/agua_quieta.png";
                 }, tiempo_desplazamiento + tiempo_ondeando + tiempo_ondeando + 40); 
            }



        }

    }

    cooldownDesplazar(){

        for (let i = 0 ; i < olas.length; i++) {
            if (olas[i].cd_desplazar > 100) {
                if (i> 0) {
                    olas[i-1].cd_desplazar = 115;
                }
                if (i < olas.length - 1) {
                    olas[i+1].cd_desplazar = 115;
                }    
               
            
            }

            if (olas[i].cd_desplazar > 0) {
                olas[i].cd_desplazar -= 15
    
            }
    
            if (olas[i].cd_desplazar <= 0) {
    
                olas[i].imagen.src = "./img/agua_quieta.png";
                olas[i].cd_desplazar = 0;
            }
        }
    }

    agregarOlas() {
        const CANTIDAD_DE_OLAS_QUE_ENTRAN_EN_PANTALLA = 15;
        for (let k = 0 ; k < CANTIDAD_DE_OLAS_QUE_ENTRAN_EN_PANTALLA ; k ++) {
            let wave = new Ola();
            olas.push(wave);
        }
    }


    run (context ,p) {
        return context.drawImage(olas[p].imagen, p * 70, this.y);
    }


}