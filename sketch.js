var player;
var obstacles = [];
var score = 0;

function setup() {
  createCanvas(400, 400);
  player = new Player();
  setInterval(() => {
    obstacles.push(new Obstacle());
  }, 1000);
}

function draw() {
  background(220);

  player.show();
  player.move();
  
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].show();
    obstacles[i].move();
    
    if (player.collide(obstacles[i])) {
      gameOver();
    }
    
    if (obstacles[i].offscreen()) {
      score++;
      obstacles.splice(i, 1);
    }
  }
  
  fill(0);
  textSize(32);
  text("Score: " + score, 10, 30);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.setDir(-1);
  } else if (keyCode === RIGHT_ARROW) {
    player.setDir(1);
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    player.setDir(0);
  }
}

function gameOver() {
  noLoop();
  background(255, 0, 0);
  textSize(64);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  textSize(32);
  text("Final Score: " + score, width / 2, height / 2 + 50);
}