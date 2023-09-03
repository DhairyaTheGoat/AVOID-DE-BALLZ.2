class Player {
    constructor() {
      this.x = width / 2;
      this.y = height - 20;
      this.speed = 3;
      this.dir = 0;
      this.width = 40;
      this.height = 10;
    }
    
    show() {
      fill(0);
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }
    
    move() {
      this.x += this.speed * this.dir;
      this.x = constrain(this.x, this.width / 2, width - this.width / 2);
    }
    
    setDir(dir) {
      this.dir = dir;
    }
    
    collide(obstacle) {
      let playerLeft = this.x - this.width / 2;
      let playerRight = this.x + this.width / 2;
      let playerTop = this.y - this.height / 2;
      let playerBottom = this.y + this.height / 2;
      
      let obstacleLeft = obstacle.x - obstacle.r;
      let obstacleRight = obstacle.x + obstacle.r;
      let obstacleTop = obstacle.y - obstacle.r;
      let obstacleBottom = obstacle.y + obstacle.r;
      
      if (
        playerRight >= obstacleLeft &&
        playerLeft <= obstacleRight &&
        playerBottom >= obstacleTop &&
        playerTop <= obstacleBottom
      ) {
        return true;
      }
      
      return false;
    }
  }