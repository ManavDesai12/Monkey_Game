
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(100, 300, 20, 20);
  monkey.addAnimation("monkey running", monkey_running);
  monkey.scale = 0.25;
  
  ground = createSprite(600, 350, 1200, 10);
  ground.velocityX = -5
score =0;
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
score = Math.round(score + (getFrameRate()/60));

    monkey.collide(ground);
background("white");
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
   
  if (keyDown("space") && monkey.y >= 260 ){
    monkey.velocityY = -15;
      
  }
monkey.velocityY = monkey.velocityY +1;
  
  text("Survival Time: " + score, 300, 10)
  fruits();
  obstacles();
  drawSprites();
  
}

function fruits(){
if(frameCount%60 === 0){
  var banana = createSprite(600, Math.round(random(210, 280)), 20, 20);
  banana.scale = 0.1;
  banana.addImage("banana", bananaImage);
  banana.velocityX = -10;
  banana.lifetime = 300;
  FoodGroup.add(banana);
}
  
}

function obstacles(){
  if(frameCount%100 === 0){
  var obstacle = createSprite(600, 300, 20, 20);
  obstacle.scale = 0.25;
  obstacle.addImage("obstacle", obstacleImage);
  obstacle.velocityX = -10;
  obstacle.lifetime = 300;
    obstacleGroup.add(obstacle)
}
}



