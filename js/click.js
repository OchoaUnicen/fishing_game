// class Click {


//     constructor(canvas) {
//         canvas.addEventListener("click", )
//     }




// }    
    
    
    
    
    
canvas.addEventListener("click", function (evt) {
var mousePos = getMousePos(canvas, evt);

console.log(mousePos.x," ", mousePos.y);


    //SI HACE CLICK EN START GAME Y gameState == INTERFAZ ()  => 
    if (mousePos.x >= 434 && mousePos.x <= 560
        && mousePos.y >= 309 && mousePos.y <=341
        && gameState =="interfaz") {

    //boton.src = boton apretado
    interfaz.contenedor_start_game.src = "./img/desktop_responsive/interfaz/start_game_presionado.png";
    setTimeout(function(){interfaz.contenedor_start_game.src = "./img/desktop_responsive/interfaz/start_game.png";}, 150);
    //gamemode = "playing";
    
    setTimeout(function(){gameState = "pescando"; console.log("gamestate cambio a pescando");  }, 500);
    
    //interfaz = invisible
    

    }
   









// SI HACE CLICK EN EL AGUA Y GAMESTATE == JUGANDO () => EMPIEZA LA ANIMACION DE TIRAR LA BOYA 
if ( mousePos.y >= 395 && mousePos.y < 500 && gameState == "pescando") {

    //SI HIZO CLICK EN MENOS DE LA MITAD DE LA PANTALLA ENTONCES () => DIRECCION = IZQUIERDA ? DERECHA;
    if (mousePos.x < canvas.width / 2) {

        fishing_rod.direccion = "izquierda";
        fishing_rod.boya_x = fishing_rod.x;

    }
    else if (mousePos.x >= canvas.width / 2) {
        fishing_rod.direccion = "derecha";
        fishing_rod.boya_x = fishing_rod.x +170;
       
    }
    fishing_rod.boya_y = 104;
    fishing_rod.boya_estado = "aire";
    fishing_rod.setCdTirar(605);
    fishing_rod.boya_posicion_caida_x = mousePos.x; 
    
    //fishing_rod.cd_boya_aire = 605;



    // for (let s = 0 ; s < olas.length ; s ++) {

    //     if (mousePos.x >= s * 70 && mousePos.x <  ((s * 70) + 70)
    //         && mousePos.y >= 395 && mousePos.y < 500) {
    
    //         console.log("Ola: "+ s);
            
            
    //             olas[s].deplazar(s);
    
    //             // y le dice a la boya a que X ir
    
               
                
           
            
    
    
    //     }
    // }





}








//Si se hace click en alguna ola



    
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


