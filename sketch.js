var paperBall
var ground, groundAsWallImg, groundAsWall2, groundAsWall3
var slingSupport
var slingshot
var gameState = "onSling";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall = new Paper(50,200,80,80)
	ground = new Ground(500,370,1000,15)
	groundAsWallImg = new GroundAsWallImg(725,170,150,15)
	groundAsWall2 = new GroundAsWall(742,310,15,70)
	groundAsWall3 = new GroundAsWall(858,310,15,70)
	slingSupport = new Ground(100,280,300,170)
	
	slingshot = new Sling(paperBall.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  
   
   ground.display()
   slingshot.display()
   slingSupport.display()
   paperBall.display()
   groundAsWallImg.display()
  



	
   

  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(paperBall.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}



