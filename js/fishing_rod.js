class FishingRod {

    constructor () {
        this.x = 420;
        this.y = 290;
        this.imagen = new Image();
        this.imagen.src = "./img/desktop_responsive/fishing_rod.png";
        this.cd_tirar = 0;
        this.esta_tirando = false;
        this.imagen_boya = new Image();
        this.imagen_boya.src = "./img/desktop_responsive/boya_2.png";
        this.boya_visible = false;
        this.cd_boya_caida = 0;
        this.boya_x = this.x;
        this.boya_y = 104;
        this.boya_posicion_caida_x = 0;
        this.pescando = false;
        this.direccion = "izquierda";
        this.boya_estado = "invisible";
        this.boya_direccion_flote = "abajo";
    }

    setCd_Boya_caida (cd) {
        this.cd_boya_caida = cd;
    }

    getCd_Boya_caida () {
        return this.cd_boya_caida;
    }
    

    cooldowns() {


        if (this.cd_tirar > 0 ) {
            this.esta_tirando = true;
            this.cd_tirar -= 15;
        }

        if (this.cd_tirar <= 0) {
            this.cd_tirar = 0;
            this.esta_tirando = false;


        }

        if (this.cd_boya_caida > 0) {
            this.cd_boya_caida -=15;
        }

        if (this.cd_boya_caida <= 0) {
            
            this.cd_boya_caida = 0;
        }

    }


    animacionTirar(){
        //console.log(this.cd_tirar);

        if (this.direccion == "izquierda") {
            if (this.cd_tirar < 600 && this.cd_tirar > 500) {
                this.imagen.src = "./img/desktop_responsive/tirando_1.png";
               this.boya_visible = false;
            }
            if (this.cd_tirar < 500 && this.cd_tirar > 400) {
                this.imagen.src = "./img/desktop_responsive/tirando_2.png";
            }
            if (this.cd_tirar < 400 && this.cd_tirar > 300) {
                this.imagen.src = "./img/desktop_responsive/tirando_3.png";
            }
            if (this.cd_tirar < 300 && this.cd_tirar > 200) {
                this.imagen.src = "./img/desktop_responsive/tirando_4.png";
            }
            if (this.cd_tirar < 200 && this.cd_tirar > 100) {
                this.imagen.src = "./img/desktop_responsive/tirando_5.png";
            } 
            
            if (this.cd_tirar < 100 && this.cd_tirar > 0) {
                
                this.boya_visible = true;

                if (this.cd_tirar < 30) {
                    this.setCd_Boya_caida(605);
                }
            }
        }

        else if (this.direccion == "derecha") {
            if (this.cd_tirar < 600 && this.cd_tirar > 500) {
                this.imagen.src = "./img/desktop_responsive/tirando_1_derecha.png";
               this.boya_visible = false;
            }
            if (this.cd_tirar < 500 && this.cd_tirar > 400) {
                this.imagen.src = "./img/desktop_responsive/tirando_2_derecha.png";
            }
            if (this.cd_tirar < 400 && this.cd_tirar > 300) {
                this.imagen.src = "./img/desktop_responsive/tirando_3_derecha.png";
            }
            if (this.cd_tirar < 300 && this.cd_tirar > 200) {
                this.imagen.src = "./img/desktop_responsive/tirando_4_derecha.png";
            }
            if (this.cd_tirar < 200 && this.cd_tirar > 100) {
                this.imagen.src = "./img/desktop_responsive/tirando_5_derecha.png";
            } 
            
            if (this.cd_tirar < 100 && this.cd_tirar > 0) {
                
                this.boya_visible = true;

                if (this.cd_tirar < 30) {
                    this.setCd_Boya_caida(605);
                }
            }
        }

       
           
        

        
       

    }

    getCdTirar() {
        return this.cd_tirar;
    }

    setCdTirar(cd) {
        this.cd_tirar = cd;
    }

    dibujar (context) {


       



      
        context.drawImage(this.imagen, this.x, this.y, this.imagen.naturalWidth /3 , this.imagen.naturalHeight / 3);
    
       
    }




    dibujarBoya(context) {
        if (this.boya_visible == true && (this.boya_estado == "aire" || this.boya_estado == "flotando")) {

           

            if (this.boya_estado == "flotando") {
               
 

                if (this.boya_y >= 204 && this.boya_y < 206) {
                        this.boya_direccion_flote = "abajo";
                        this.boya_y += 1;
                    }

               


                if (this.boya_y >= 205  && this.boya_y < 226 && this.boya_direccion_flote == "abajo") {
                    
                    this.boya_y += 0.2;
                   
                   

                    
                }

                else if (this.boya_y >= 226) {
                    this.boya_direccion_flote = "arriba";
                   
                }

                 if (this.boya_y < 230 && this.boya_direccion_flote == "arriba") {
                    


                    this.boya_y -= 0.2;

                  

                    
                }

             
               
            }







            if (this.direccion == "izquierda") {
                if (this.cd_boya_caida < 600 && this.cd_boya_caida > 500) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_1.png";
                }
                if (this.cd_boya_caida < 500 && this.cd_boya_caida > 400) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_2.png";
                }
                if (this.cd_boya_caida < 400 && this.cd_boya_caida > 300) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_3.png";
                }
                if (this.cd_boya_caida < 300 && this.cd_boya_caida > 200) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_4.png";
                }
                if (this.cd_boya_caida < 200 && this.cd_boya_caida > 100) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_5.png";
                }
                
            }


            else if (this.direccion == "derecha"){
                if (this.cd_boya_caida < 600 && this.cd_boya_caida > 500) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_1_derecha.png";
                }
                if (this.cd_boya_caida < 500 && this.cd_boya_caida > 400) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_2_derecha.png";
                }
                if (this.cd_boya_caida < 400 && this.cd_boya_caida > 300) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_3_derecha.png";
                }
                if (this.cd_boya_caida < 300 && this.cd_boya_caida > 200) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_4_derecha.png";
                }
                if (this.cd_boya_caida < 200 && this.cd_boya_caida > 100) {
                    this.imagen_boya.src = "./img/desktop_responsive/boya_5_derecha.png";
                }

            }

           




            // this.x - 140
            context.drawImage(this.imagen_boya, this.boya_x - 160 , this.boya_y , this.imagen_boya.naturalWidth /2, this.imagen_boya.naturalHeight/ 2);
        }
       
    }

    
moverBoya(){
   
    //console.log("se ejecuta moverBoya");
    //console.log("this.boya_x" + this.boya_x , + ","  + this.boya_posicion_caida_x);
    if (this.boya_x < this.boya_posicion_caida_x) {
        this.boya_x += 3;
    }

    if (this.boya_x >= this.boya_posicion_caida_x) {
        this.boya_x -= 3;
    }
    
    if (this.boya_y < 204 && this.boya_estado == "aire") {
        if (this.boya_y > 202) {
            
            //desplazar

            for (let s = 0 ; s < olas.length ; s ++) {

                if (this.boya_x >= s * 70 && this.boya_x <  ((s * 70) + 70)
                   ) {
                    // && mousePos.y >= 395 && mousePos.y < 500




                    // console.log("Ola: "+ s);
                    
                    
                        olas[s].deplazar(s);
            
                        // y le dice a la boya a que X ir
            
                       
                        
                   
                    
            
            
                }
            }













            this.imagen_boya.src = "./img/desktop_responsive/boya_6.png";
            this.boya_estado = "flotando";
            
        }

        // if (this.boya_direccion_flote !== "arriba") {
            this.boya_y += 1;
        // }
      
    }
    


}
    run (context) {
      
        this.cooldowns();
        
        this.animacionTirar();
        this.dibujar(context);
        this.dibujarBoya(context);
       // console.log("boya_y",this.boya_y);
        if (this.boya_visible == true && this.boya_y < 204 ) {
            this.moverBoya(this.boya_posicion_caida_x);
        }
    }

   


}