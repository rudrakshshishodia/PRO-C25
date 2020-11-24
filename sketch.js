
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobj,groundobj,dustbinobj,dustbin1obj,dustbin2obj,paperimg,dustbinimg,dustbinagainobg;

function preload()
{
	paperimg=loadImage("paper.png");
	dustbinimg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(2500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobj=new Paper(300,450,70);
	groundobj=new Ground(width/2,690,width,20);
	dustbinobj=new Dustbin(1040,520,30,170);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(239);
  
  
  
  
  paperobj.display();
  groundobj.display();
  dustbinobj.display();
  

  drawSprites();
 
}

	
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:170,y:-350});
		
	}
   }

