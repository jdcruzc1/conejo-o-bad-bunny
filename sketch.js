let imgConejo;
let imgBadbunny;
let imgBola

let salioDelCascaron = false;
let enMovimiento = false;
let clicOprimido = false;

let criaturaX;
let criaturaY;
let criaturaAncho = 80;
let criaturaAlto = 80;

function setup() {
  createCanvas(600, 400);

  criaturaX = 20;
  criaturaY = height / 2 - 80;

  image (imgBola, 300, 0);
}

function draw() {
  background(66, 0, 255 );
  noStroke();
  image (imgBola, 250, -50, 100, 200);
  fill(151, 0, 255);
  rect(0, height / 2, width, height / 2);
  if (salioDelCascaron == false) {
    image(imgConejo, criaturaX, criaturaY, criaturaAncho, criaturaAlto);
  }

  if (salioDelCascaron == true) {
    image(imgBadbunny,criaturaX,criaturaY,criaturaAncho,criaturaAlto);
  }

  if (enMovimiento == true) {
    criaturaX++;
  }
}

function preload() {
  imgConejo = loadImage('imagenes/conejo.png');
  imgBadbunny = loadImage('imagenes/badbunny.png');
  imgBola = loadImage ('imagenes/bola.gif')
}

function mousePressed() {
  if (mouseX > criaturaX && mouseX < criaturaX + criaturaAncho && mouseY > criaturaY && mouseY < criaturaY + criaturaAlto) {
    if (salioDelCascaron == false) {
      salioDelCascaron = true;
      clicOprimido = true;
    }
    if (salioDelCascaron == true && clicOprimido == false) {
      enMovimiento = true;
    }
  }
}

function mouseReleased() {
  clicOprimido = false;
}
