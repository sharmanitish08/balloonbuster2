var gameBackground,gameBackgroundimage,edges;
var bow,bow_shooting;
var arrow,arrow_busting;
var ballon1,ballon1_blue;
var ballon2,ballon2_green;
var ballon3,ballon3_pink;
var ballon4,ballon4_red;



function preload(){
 //load your images here 
 bow_shooting=
   loadAnimation("bow0.png");
 arrow_busting=loadAnimation("arrow0.png"); 
 ballon1_blue =loadAnimation("blue_balloon0.png"); 
 ballon2_green=loadAnimation("green_balloon0.png"); 
 ballon3_pink=loadAnimation("pink_balloon0.png");
 ballon4_red=loadAnimation("red_balloon0.png");
 gameBackgroundimage=loadAnimation("background0.png");
}

function setup() {
     gameBackground= createSprite(0,0,300,300);
  gameBackground.addAnimation("background20.png",gameBackgroundimage);
  gameBackground.scale = 1.5
  createCanvas(600, 600);
  
  //add code here
 
  bow = createSprite(500,300,50,50);
  bow.addAnimation("bow0.png", bow_shooting);

  
  for (var i = 90; i < 400; i=i+50) {
  ballon1 = createSprite(50,i,50,50);
   ballon1.addAnimation("blue_balloon0.png",ballon1_blue);
  ballon1.scale = 0.1;
  }
  for (var i = 150; i < 400; i=i+50) {
  ballon2 = createSprite(100,i,50,50);
 ballon2.addAnimation("green_balloon0.png",ballon2_green);
  ballon2.scale = 0.08;
  }
  for (var i = 220; i < 300; i=i+60) {
   ballon3= createSprite(200,i,50,50);
  ballon3.addAnimation("pink_balloon0.png", ballon3_pink);
  }
  for (var i = 170; i < 350; i=i+50) {
   ballon4 = createSprite(150,i,50,50);
  ballon4.addAnimation("red_balloon0.png", ballon4_red);
   ballon4.scale = 0.08;

}
  
  
}

function draw() {

  //add code here
 background("white");
   gameBackground.velocityX = -4;
  gameBackground.scale = 3;
  if(gameBackground.x < 0) { 
  gameBackground.x = gameBackground.width/2; 
  }
  
 bow.y = World.mouseY;
  
  if(keyDown("space")) {
     arrow = createSprite(470,250,50,50);
     arrow.addAnimation("arrow0.png", arrow_busting); 
     arrow.velocityX = -6;
     arrow.y = bow.y;
     arrow.scale = 0.3;
    
    
  }
  drawSprites()
}

