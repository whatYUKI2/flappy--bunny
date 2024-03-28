class Jogador {
    constructor() {
        this.h = 30;
        this.w = 30;
        this.x = 50;
        this.y = height / 2;
        this.vy = 0;
        this.gravity = 0.1;
    }
    
    show() {
        rect(this.x, this.y, this.w, this.h);
    }

    jump() {
        this.vy -= 3;
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
    }

    colidir(inimigo){
        let x1 = this.x + this.w/2;
        let y1 = this.y + this.h/2;
        let x2 = inimigo.x + inimigo.w/2;
        let y2 = inimigo.y + inimigo.h/2;
        return collideRectRect(x1, y1, this.w, this.h,x2, y2, inimigo.w, inimigo.h);
    }


}