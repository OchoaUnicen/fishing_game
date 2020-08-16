let frame = window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame;
let canvas = document.getElementById("lienzo");
let context = canvas.getContext('2d');
// cargarTeclas();
let gameState = "interfaz";

let background = new Background();
let interfaz = new Interfaz();
let fishing_rod = new FishingRod();
fishing_rod.cargarImagenes();
let fish1 = new Fish();

let ola = new Ola();
let olas = [];
ola.agregarOlas();
function tiempo() {
    frame(tiempo);
    context.clearRect(0, 0, canvas.width, canvas.heigh);
    
    background.dibujar(context);
  
    for (let p = 0 ; p < olas.length; p++) {
        olas[p].run(context, p);
    }

    fishing_rod.run(context);

    interfaz.run(context);

    //fish1.dibujarFish(context);
    
}
tiempo();

