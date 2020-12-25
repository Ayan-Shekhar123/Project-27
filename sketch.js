
var paperObject
var groundObject
var dustbinObject
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var dustbinImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
	dustbinImage=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
paperObject=new bob(200,450,40);
groundObject=new roof(width/2,670,width,20)
dustbinObject=new dustbin(1200,650);
bobObject1=new bob(500,300);
bobObject2=new bob(600,300);
bobObject3=new bob(700,300);
bobObject4=new bob(800,300);
bobObject5=new bob(900,300);


	//Create the Bodies Here


Engine.run(engine)}


function draw() {
  rectMode(CENTER);
  background(255);


 paperObject.display();
 groundObject.display();
 dustbinObject.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}

