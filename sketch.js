var snake, food,
    scl = 20,
    paused = false;

function setup() {
  createCanvas(600, 600);

  snake = new Snake();
  food = new Food();
  frameRate(10);
  food.getLocation();
}

function draw() {
  background(51);

  snake.die();
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    food.getLocation();
  }

  fill(255, 0, 100);
  rect(food.location.x, food.location.y, scl, scl);
  setLevel();
}

function keyPressed() {
  if (keyCode === 32) {
    if (paused) {
      resume();
    } else {
      pause();
    }
  }

  if (!paused) {
    switch(keyCode) {
      case UP_ARROW:
          snake.dir(0, -1);
          break;
      case DOWN_ARROW:
          snake.dir(0, 1);
          break;
      case LEFT_ARROW:
          snake.dir(-1, 0);
          break;
      case RIGHT_ARROW:
          snake.dir(1, 0);
          break;
    }
  }  
}

function pause() {
  noLoop();
  paused = true;
}

function resume() {
  loop();
  paused = false;
}

function setLevel() {
  frameRate(ceil((snake.total + 1) / 10) * 10);
}
