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
  rectMode(CENTER);
  player = new Jogador(); // Make sure Jogador class is defined
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
  }

  for (let p of coeiopequebrado) {
    p.show();
    p.move();
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
  if (frameCount % 300 == 0) { 
    coeiopequebrado.push(new Inimigo2());
  }
}
