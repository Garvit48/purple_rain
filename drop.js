class Drop{
    constructor(w , h){
        this.w = w;
        this.h = h;
        this.position = {
            x: Math.floor(Math.random() * w),
            y: -Math.floor(Math.random() * 3000)
        }
        this.dropLength = Math.floor(10 + Math.random() * 20);
        this.yspeed = 8.2;
        this.gravity = 0.16;
        this.thickness = 0.05 * this.dropLength;
    }

    move(){
        this.position.y += this.yspeed;
        this.yspeed += this.gravity;
    }
    reset(){
        if(this.position.y > this.w){
            this.position = {
            x: Math.floor(Math.random() * this.w),
            y: -Math.floor(Math.random() * 500)
            }
            this.yspeed = 8;
        }
    }
    show(ctx){
        ctx.beginPath();

        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = "#f3f3f3";
        ctx.moveTo(this.position.x , this.position.y);
        ctx.lineTo(this.position.x, this.position.y + this.dropLength);
        ctx.stroke();
    }

}
