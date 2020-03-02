var car;
var song;
var picture;

function preload() {
song = loadSound("ending.mp3");
}

let img;

function setup() {
  createCanvas(550, 455);
  car = new Car();
  rectMode(CENTER);
  song.play();
  img = loadImage('maze.jpg')
}

function draw() {
  background(170);
  image(img,0,0);
  car.display();
  car.move();
  car.loop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    car.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    car.setDir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    car.setDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    car.setDir(-1, 0);
  } else if (keyCode === ENTER) {
    car.setDir(0, 0);
  }
}
