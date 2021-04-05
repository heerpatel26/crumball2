class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        //this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        //push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        //imageMode(CENTER);
        //image(this.image,pos.x,pos.y,this.width,this.height);
        //pop();
    }
};