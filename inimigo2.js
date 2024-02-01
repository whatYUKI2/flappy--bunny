class Inimigo {
    constructor() {
        this.h = 30;
        this.w = 30;
        this.x = 50;
        this.y = height/2;
        this.vy=0;
        this.gravity=0.1;
    }
        show(){
            rect(this.x, this.y, this.w, this.h);
        }

jump(){
this.vy-=3;
}


move(){
    this.y += this.vy;
this.vy += this.gravity;}
    }