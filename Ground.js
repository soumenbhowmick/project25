class Ground{
    constructor(x,y,width,height,options) {
        var options = {
            isStatic : true,
            
        }

        this.x = 800;
        this.y = 700;
        this.width = 1600;
        this.height = 50;

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);

        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        pop();
      }
}