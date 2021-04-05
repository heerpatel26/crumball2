
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,608,60);
  gr = new Ground(600,610,1200,20);

  log1 = new Dustbin(1000,590,100,20);
	log2 = new Dustbin(1050,560,20,80);
  log3 = new Dustbin(950,560,20,80);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  gr.display();
  
  log1.display();
  log2.display();
  log3.display();

  paper.display();
  
  image(dustbin,910,450,170,150);

  //drawSprites();
 
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:182,y:-182});
  }
}

