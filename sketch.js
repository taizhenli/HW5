var car;

function setup() {
  createCanvas(300, 300);
  car = new Car();
  rectMode(CENTER);
}

function draw() {
  background(170);
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
