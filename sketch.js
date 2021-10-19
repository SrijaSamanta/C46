var ground, backgroundImg;
var spaceCraft, spaceCraftImg;
var bullets, bulletsImg, specialBullets, specialBulletsImg;
var alien, alienImg; 
function preload(){
  backgroundImg=loadImage("Images/spacebg.png");
  spaceCraftImg=loadImage("Images/spacecraft.png");
  bulletsImg=loadImage("Images/Pinkbullet.png");
  specialBulletsImg=loadImage("Images/Specialbullet.png");
  alienImg=loadImage("Images/alien.png");
}
function setup() {
  createCanvas(1400,600);
  ground=createSprite(600,300,1400,600);
  ground.addImage(backgroundImg);
  ground.scale=1.2;
  ground.velocityX= -7;
  

  spaceCraft=createSprite(100, 300, 50, 50);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale= 0.5;


  
}

function draw() {
  background("black");
  console.log(ground.x);
  if(ground.x<100){
    ground.x=1200;
  }

  if(keyDown(UP_ARROW)){
    spaceCraft.y=spaceCraft.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    spaceCraft.y=spaceCraft.y+10;
  }
  
  spawnObstracles();

  drawSprites();
   
}

function spawnObstracles(){
  if(frameCount%80===0){
  var x= random(500,1200);
  var y= random(50, 550);
  alien=createSprite(x, y, 50, 50);
  alien.addImage(alienImg);
  alien.scale=0.4;
  alien.velocityX= -10;
  }
}