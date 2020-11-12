class Dustbin{
    constructor(x,y,width,height,options) {
        var options = {
            isStatic : true,
            
        }

        this.image = loadImage("sprites/dustbingreen.png")
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);

        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        pop();
      }
}