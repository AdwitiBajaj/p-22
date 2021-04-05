const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var fairyBody;



function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 ,{isStatic:false});
	World.add(world, starBody);
	fairyBody = Bodies.circle(650 , 510 ,20, {isStatic:true});
	World.add(world, fairyBody);
	Engine.run(engine);

}



	// fairyVoice.play();



function draw() {
  background(bgImg);

  if(keyDown("left")){
	fairy.x =fairy.x+ 15;
}

if(keyDown("right")){
	fairy.x = fairy.x-3;
}
star.x=starBody.position.x
star.y=starBody.position.y

  


drawSprites();
}

function keyPressed() {
	//write code here
}
