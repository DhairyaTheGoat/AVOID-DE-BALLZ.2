class Obstacle {
    constructor() {
      this.x = random(width);
      this.y = 0;
      this.speed = random(1, 4);
      this.r = random(20, 40);
    }
    
    show() {
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.r * 2);
    }
    
    move() {
      this.y += this.speed;
    }
    
    offscreen() {
      return this.y > height + this.r;
    }
  }
  