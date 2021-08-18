
var ball
var ground
//Objects should have a different name from the classes
var rightside
var leftside

 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 backgroundImg = loadImage("15321_havt_forest-background.jpg")
 treeImg = loadImage("tree1.png")
 sqruImg = loadImage("squ.png")
}

function setup() {
	createCanvas(900, 700);

    tree = createSprite(700,390,20,500)
	tree.addImage(treeImg)
	// tree.scale = 0.5

	sqru = createSprite(200,100,20,20)
	sqru.addImage(sqruImg)
	sqru.scale = 0.5

	engine = Engine.create();
	world = engine.world;

	//Created the objects Here
	//You can also create them with a single ground class 
	ground = new Ground(400,690,800,20);
	leftside = new left(700,650,20,100);
	rightside = new right(800,650,20,100)
    var ball_options ={
		restitution:0.3,
		friction:0,
		density:0.1
	}

	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  //Displayed the bodies
  ground.display()
  leftside.display()
  rightside.display()
 
  //Displayed the ball

  fill("white")
  ellipse(ball.position.x, ball.position.y, 20,20)
  
  drawSprites();
 
}

function keyPressed() {
	(keyCode === 32)
	Matter.Body.applyForce(ball,{x:0,y:0},{x:7,y:9})
}

