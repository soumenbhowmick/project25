
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;
var ground,paperObject;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//paperObject.shapeColor=("white")

	Engine.run(engine);

	paperObject  = new Paper(200,450,40);

	ground = new Ground(800,700,1600,50);

	dust1 = new Dustbin(1000,400,300,20);

	dust2 = new Dustbin(1400,400,300,20);

	dust3 = new Dustbin(1200,450,20,300);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  paperObject.display();
  ground.display();
  dust1.display();
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}

}

