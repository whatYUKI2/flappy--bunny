class Inimigo {
  constructor() {
    this.h = 30;
    this.w = 30;
    this.x = width;
    this.y = height / 3;
    this.vy = 0;
    this.gravity = 0.1;
  }

  show() {
    rectMode(CENTER); // Set rectMode to CENTER
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x -= 2;
  }
}
