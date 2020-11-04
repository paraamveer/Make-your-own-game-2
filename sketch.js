
function preload(){
  boss=loadImage("Aliensboss.png");
  back=loadImage("background.png");
  coment=loadImage("comet.png");
  Gaurdian=loadImage("gaurdianaliens.png");
  Solider=loadImage("solider.png");
  SpaceShip=loadImage("spaceship.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2);
  bg.addImage(back);
  ship=createSprite(1000, 900, 50, 50);
  ship.addImage(SpaceShip);
  ship.scale=0.5;
}
function draw(){
  background(0);  
  ship.x = World.mouseX;
  bg.velocityY=1;
  if(bg.y > 400){
    bg.y = 200;
  }
  spawncomets();
  soliders();
  Gaurdians();
  Boss();
  drawSprites(); 
}

function spawncomets(){
  if(World.frameCount % 90===0){
  var comets = createSprite(random(100,1500),random(100,1800),10,10);
  comets.addImage(coment);
  comets.velocityY = 4;
  comets.velocityX = 2;
  }
}

function soliders(){
  if(World.frameCount % 90===0){
    var solider = createSprite(random(400,1000),random(500,1200));
    solider.addImage(Solider);
    solider.scale = 0.1;
    solider.velocityX = 1;
    solider.velocityY = 1;
  }
}

function Gaurdians(){
  if(World.frameCount % 90===0){
    var gaurdian = createSprite(random(450,900),random(550,1100));
    gaurdian.addImage(Gaurdian);
    gaurdian.scale = 0.1;
    gaurdian.velocityX = 3;
    gaurdian.velocityY = 3;
  }
}

function Boss(){
  if(World.frameCount % 600===0){
    var iboss = createSprite(200,200);
    iboss.addImage(boss);
    iboss.scale = 0.4;
    iboss.velocityX = 1;
    iboss.velocityY = 1;
  }
}