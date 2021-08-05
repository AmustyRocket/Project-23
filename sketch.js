const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerbase;
var player;
var computerBase;
var computerplayer;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and player
   playerbase = new playerBase(300,random(450,height-300),180,150);
   player = new Player(285,playerbase.body.position.y-153,50,180);

   //Create Computerbase and Computerplayer
   computerBase = new ComputerBase(800,random(450,height+300),180,150);
   computerplayer = new Computerplayer(285,computerBase.body.position.y+153,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and player 
   player.display();
    player.display();
   

   //display Computerbase and computerplayer
   computerplayer.display();
   computerBase.display();


}
