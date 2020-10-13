var helicopterimg, helicopter, package,packageimg,leftside,rightside,bottomside;
var packagebody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterimg=loadImage("helicopter.png");
	packageimg=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageimg);
	package.scale=0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterimg);
	helicopter.scale=0.6;

	bottomside = createSprite(width/2,height-45,200,20);
	bottomside.shapeColor="red";

	leftside = createSprite(width/2-90,610,20,70);
	leftside.shapeColor="red";

	rightside = createSprite(width/2+90,610,20,70);
	rightside.shapeColor="red";

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packagebody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packagebody);
	

	//Create a Ground
	bottomside = Bodies.rectangle(width/2,height-45,200,20 , {isStatic:true} );
 	World.add(world, bottomside);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packagebody.position.x;
  package.y= packagebody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packagebody,false);
  }
}