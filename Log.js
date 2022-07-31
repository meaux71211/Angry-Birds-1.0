class Log {
    constructor(x,y,h,angle) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1.0,
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        this.w = 20;
        this.h = h;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}