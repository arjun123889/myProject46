var bg,key,submarine,sd,jf,whale;
var bgImg,keyImg,submarineImg,sdImg,jfImg,wImg;
var score = 0;
var gameState = "play";
var keyGroup, submarineGroup, jfGroup,wGroup;
var edges;


function preload(){
  bgImg = loadImage("Images/bg.png");
  keyImg = loadImage("Images/key.png");
  submarineImg = loadImage("Images/submarine.png");
  sdImg = loadAnimation("Images/sd1.png","Images/sd2.png","Images/sd3.png","Images/sd4.png","Images/sd5.png","Images/sd6.png","Images/sd8.png","Images/sd9.png","Images/sd10.png");
  jfImg = loadAnimation("Images/jf1.png","Images/jf2.png","Images/jf3.png","Images/jf4.png","Images/jf5.png","Images/jf6.png");
  wImg = loadAnimation("Images/w1.png","Images/w2.png","Images/w3.png","Images/w4.png","Images/w5.png","Images/w6.png","Images/w7.png");
}

function setup() {
  createCanvas(1000, 500);
  bg = createSprite(500,250,1000,500);
  bg.addImage(bgImg); 
  bg.scale = 2;

  sd = createSprite(100,300,20,50);
  sd.addAnimation("swimming",sdImg);
  keyGroup = new Group();
  submarineGroup = new Group();
  wGroup = new Group();
  jfGroup = new Group();
  sd.scale = 0.7;

  edges = createEdgeSprites();

}

function draw() {
  background(0);
  drawSprites();
  textSize(30);
  fill("black");
  text("Score: " + score, 800, 50);

  if(gameState === "play"){
    bg.velocityX = -3;
    if(bg.x < 500){
      bg.x = 1000;
      }
      if(keyDown(UP_ARROW)){
      sd.y -= 5;
      }
      if(keyDown(DOWN_ARROW)){
        sd.y += 5;
        }
        sd.collide(edges[2]);
        sd.collide(edges[3]);
      
        spawnKeys();
        spawnSubmarine();
        spawnWhale();
        spawnJellyfish();
        keyGroup.isTouching(sd,destroyKey)
  }

 
}
function spawnKeys(){
if(frameCount%100 === 0){
key = createSprite(1000,250,10,10);
key.y = Math.round(random(50,450))
key.velocityX = -3;
key.addImage(keyImg);
key.scale = 0.25;
keyGroup.add(key);
keyGroup.lifetime = 333;
}

}
function spawnSubmarine(){
  if(frameCount%200 === 0){
    submarine = createSprite(1000,250,10,10);
    submarine.y = Math.round(random(50,450))
    submarine.velocityX = -6;
    submarine.addImage(submarineImg);
    submarine.scale = 0.7;
    submarineGroup.add(submarine);
    submarineGroup.lifetime = 167;
    }


}
function spawnWhale(){
  if(frameCount%175 === 0){
    whale = createSprite(1000,250,10,10);
    whale.y = Math.round(random(50,450))
    whale.velocityX = -5;
    whale.addAnimation("whale",wImg);
    whale.scale = 1.5;
    wGroup.add(whale);
    wGroup.lifetime = 200;
    }

}
function spawnJellyfish(){
  if(frameCount%75 === 0){
    jf = createSprite(1000,250,10,10);
    jf.y = Math.round(random(50,450))
    jf.velocityX = -5;
    jf.addAnimation("jelly",jfImg);
    jf.scale = 1.5;
    jfGroup.add(jf);
    jfGroup.lifetime = 200;
    }


}
function destroyKey(sd,key){
key.destroy();
score += 10;
}