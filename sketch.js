var gunImage, Gun, backgroundImage, backSprite;
var Bullet, bulletImage;
var target1,target2,target3, targetImg1, targetImg2, targetImg3;
var target1Group, target2Group,target3Group,bulletGroup;
var score=0;
var life1, life2, life3, lifeImg;
var invisibleSprite;
function preload(){
  gunImage= loadImage("Images/gun.png");
  backgroundImage= loadImage("Images/Background.jpg");
  bulletImage= loadImage("Images/bullet.png");
  targetImg1= loadImage("Images/Target2.png");
  targetImg2= loadImage("Images/Target3.png");
  targetImg3= loadImage("Images/Target4.png");
  scoreImage= loadImage("Images/Score.jpg");
  lifeImg= loadImage("Images/heart.png");
}

function setup() {
  createCanvas(800,800);
  backSprite= createSprite(400,400);
  backSprite.addImage(backgroundImage);
  life1= createSprite(30,59);
  life1.addImage(lifeImg);
  life1.scale= 0.1;
  invisibleSprite= createSprite(799,400,8,800);
  life2= createSprite(60,59);
  life2.addImage(lifeImg);
  life2.scale= 0.1;
  life3= createSprite(90,59);
  life3.addImage(lifeImg);
  life3.scale= 0.1;
  Gun= createSprite(700,375);
  Gun.addImage(gunImage);
  Gun.scale= 0.2;
  scoreNo= createSprite(725,62);
  scoreNo.addImage(scoreImage);
  scoreNo.scale=0.7;
  backSprite.scale= 1.7;
  target1Group= createGroup();
  target2Group= createGroup();
  target3Group= createGroup();
  bulletGroup= createGroup();
}

function draw() {
  background(255,255,255);  
  Gun.y= mouseY;
  backSprite.velocityX= -2;
  if (backSprite.x<0){
    backSprite.x= backSprite.width/2;
  }
  if(keyDown("space")){
    TriggerBullet();
  }
  var tget= Math.round(random(1,3));
  if(tget=== 1){
    spawnTarget1();
}
if(tget=== 2){
  spawnTarget2();
}
if(tget=== 3){
  spawnTarget3();
}

if(bulletGroup.isTouching(target1Group)){
  target1Group.destroyEach();
  score= score+2;
}
if(bulletGroup.isTouching(target2Group)){
  target2Group.destroyEach();
  score= score+8;
}
if(bulletGroup.isTouching(target3Group)){
  target3Group.destroyEach();
  score= score+1;
}

  drawSprites();
  textSize(50);
  fill("black");
  text(score,713,58);
  
}

function TriggerBullet(){
  Bullet= createSprite(700,400);
  Bullet.addImage(bulletImage);
  Bullet.y= Gun.y;
  Bullet.velocityX= -15;
  Bullet.scale= 0.1;
  Bullet.lifetime= 200; 
  bulletGroup.add(Bullet);
}

function spawnTarget1(){
 if(frameCount% 100 === 0){
  target1= createSprite(0,20);
  target1.velocityX= 8;
  target1.y= Math.round(random(100,650));
  target1.addImage(targetImg1);
  target1.scale= 0.2;
  target1.lifetime= 100;
  target1Group.add(target1);
 }}
 function spawnTarget2(){
 if(frameCount% 100 === 0){
  target2= createSprite(0,20);
  target2.velocityX= 8;
  target2.y= Math.round(random(100,650));
  target2.addImage(targetImg2);
  target2.scale= 0.5;
  target2.lifetime= 100;
  target2Group.add(target2);
 }}

 function spawnTarget3(){
  if(frameCount% 100 === 0){
   target3= createSprite(0,20);
   target3.velocityX= 8;
   target3.y= Math.round(random(100,650));
   target3.addImage(targetImg3);
   target3.scale= 0.5;
   target3.lifetime= 100;
   target3Group.add(target3);
  }}




 










