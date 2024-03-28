let player;
let pegacoeio = [];
let comecoeio = [];
let coeiopequebrado = [];
let vidas = 3;
let pontos = 0;
let canvas;
let imgplayer, imgpegacoeio, imgcomecoeio, imgcoeiopequebrado;


function setup() {
  createCanvas(800, 450);
  player = new Jogador();
}

function draw() {
  background("black");
  player.show();
  player.move();
  nascercomecueio();
  nascercoeiopequebrado();

  for (let c of comecoeio) {
    c.show();
    c.move();
    if(player.colidir(c)){
      console.log("perdeu troxa")
      noLoop();
    }
  }




  for (let come of coeiopequebrado) {
    come.show();
    come.move();
  }

}

function keyPressed() {
  if (key == " ") {
    player.jump();
  }
}
function nascercomecueio() {
  if (frameCount % 200 == 0) {
    comecoeio.push(new Inimigo());
  }
}

function nascercoeiopequebrado() {
  if (frameCount % 200 == 0) {
    coeiopequebrado.push(new Inimigo2());
  }



}