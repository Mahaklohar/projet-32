
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var hour;

var color

function preload()
{  

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800, 680, 1600, 15);

	// Tower 1: 
	platform1 = new Ground(690, 480, 250, 10);
	// Layer 1:
	box1 = new Block(600, 475, "pink");
	box2 = new Block(630, 475, "pink");
	box3 = new Block(660, 475, "pink");
	box4 = new Block(690, 475, "pink");
	box5 = new Block(720, 475, "pink");
	box6 = new Block(750, 475, "pink");
	box7 = new Block(780, 475, "pink");
	// Layer 2: 
	box8 = new Block(630, 435, "SkyBlue");
	box9 = new Block(660, 435, "SkyBlue");
	box10 = new Block(690, 435, "SkyBlue");
	box11 = new Block(720, 435, "SkyBlue");
	box12 = new Block(750, 435, "SkyBlue");
	// Layer 3: 
	box13 = new Block(660, 400, "LightGreen");
	box14 = new Block(690, 400, "LightGreen");
	box15 = new Block(720, 400, "LightGreen");
	// Layer 4: 
	
	box16 = new Block(690, 360, "yellow");

	// Tower 2: 
	platform2 = new Ground(1090, 380, 200, 10);
	// Layer 1: 
	box17 = new Block(1030, 340, "SkyBlue");
	box18 = new Block(1060, 335, "SkyBlue");
	box19 = new Block(1090, 335, "SkyBlue");
	box20 = new Block(1120, 335, "SkyBlue");
	box21 = new Block(1150, 340, "SkyBlue");
	// Layer 2: 
	box22 = new Block(1060, 300, "LightGreen");
	box23 = new Block(1090, 300, "LightGreen");
	box24 = new Block(1120, 300, "LightGreen");
	// Layer 3: 
    box25 = new Block(1090, 260, "yellow");
    
    poly1 = new Polygon(200, 450, 25);

    chain1 = new Slingshot(poly1.body, {x: 200, y: 450})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  if (hour>6 && hour<18){

    color = "SkyBlue"
    }
  else{
    color = "Black"
  }

  
  background(color);
  //console.log(score) 




  ground.display();
  platform1.display();
  platform2.display();

  // Tower 1: 
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  // Tower 2: 
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();
  // Score: 
  box1.Score();
  box2.Score();
  box3.Score();
  box4.Score();
  box5.Score();
  box6.Score();
  box7.Score();

  box8.Score();
  box9.Score();
  box10.Score();
  box11.Score();
  box12.Score();

  box13.Score();
  box14.Score();
  box15.Score();

  box16.Score();

  // Tower 2: 
  box17.Score();
  box18.Score();
  box19.Score();
  box20.Score();
  box21.Score();

  box22.Score();
  box23.Score();
  box24.Score();

  box25.Score();
  

  poly1.display();
  chain1.display();
  
  push()
  fill("yellow");
  stroke("black");
  textSize(20);
  text("Score: "+ score, 750, 40)

  getTime()
  


}

function keyPressed(){
	if(keyCode === 32){
		poly1.body.position.x = 200;
		poly1.body.position.y = 450;

		chain1.attach(poly1.body); 		
	}
}

function mouseDragged()
{
    poly1.body.position.x = mouseX;
    poly1.body.position.y = mouseY;
}

function mouseReleased()
{
	chain1.fly();
}

async function getTime()
{
var response = await fetch(" http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJson = await response.json();
var dateTime = responseJson.datetime;
hour = dateTime.slice(11, 13);
console.log(hour);
}




