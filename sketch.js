let player;
let pegacoeio = [];
let comecoeio = [];
let coeiopequebrado = []; 
let vidas = 3;
let pontos = 0;
let canvas;
let imgplayer, imgpegacoeio , imgcomecoeio, imgcoeiopequebrado;


function setup() {
createCanvas(800,450);
 player=new Jogador();
}

function draw() {
  background("black");
  player.show();
  player.move();
  nascercomecueio();

for (let c of comecoeio){
  c.show();
  c.move();
}

}

function keyPressed(){
 if (key==" ") {
  player.jump();
 }
}
function nascercomecueio(){
  if(frameCount%200==0){
    comecoeio.push(new Inimigo());
  }
}

function coeiopequebrado(){
  if(frameCount%200==0){
    coeiopequebrado.push(new Inimigo());
  }
}