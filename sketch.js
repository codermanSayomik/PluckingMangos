
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var stone
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(1000,460,23);
	
	

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,125,35);
	mango3=new mango(970,260,35);
	mango4=new mango(1130,200,35);
	mango5=new mango(910,120,36);
	mango6=new mango(1050,250,35);
	mango7=new mango(1100,170,33);
	mango8=new mango(1180,260,35);
	mango9=new mango(940,120,35);
	mango10=new mango(1200,105,35);

	catapult=new Catapult(stone.body,{x:235,y:420});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  fill("black");
  textSize(18);
  text("- Press spacebar for more chances -",50,50);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  image(boy ,200,340,200,300);
  

  treeObj.display();

  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
	catapult.fly();
}



function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		catapult.Launch(stone.body);
	}
}

