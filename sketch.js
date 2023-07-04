var tela=1;
var x = 150 
var y = 100 
var l = 150 
var h = 35

function setup() {
  createCanvas(700,700);
}
function preload (){
  
 img = loadImage ('terra.gif');
   
 }
function draw() {
  //inicializando tela 1
  if(tela==1){
    tela1();
    }
  //inicializando tela 2
  if(tela==2){
    tela2()
  }
}