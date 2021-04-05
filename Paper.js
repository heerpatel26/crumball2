class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius/2;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,this.radius,options);

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
        angleMode(RADIANS);

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //circleMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        //actual display image takes radius and Matter.Bodies.circle takes diameter
        pop();
    }
};