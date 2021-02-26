var monster1;
var monster2;
var monster3 ;
var monster4 ;
var cup;
var hero;


function preload()
{

mario = loadImage("mario.png");
cup = loadImage("cup.png");
panda = loadImage("panda.png");
}
monster1.addImage("mario",mario);
monster2.addImage("mario",mario);
monster3.addImage("mario",mario);
monster4.addImage("mario",mario);


monster1.velocityX =-3;
monster2.velocityX = 4;
monster3.velocityX = -6;
monster4.velocityX = 6;
//hero.velocityY = -4; 

var count = 0;

function draw() {
  background("white");
  text("cup", 200, 30);
  text("DEATHS:"+count, 10, 10);
  
  if(hero.isTouching(monster1)||
  hero.isTouching(monster2)||
  hero.isTouching(monster3)||
  hero.isTouching(monster4))
  {
    hero.x = 200;
    hero.y = 390;
    count = count+1;
  }
 
 if(hero.isTouching(cup)){
   
   text("GAMEOVER",207, 160);
 }
 
createEdgeSprites();
 
 monster1.bounceOff(rightEdge);
 
 monster1.bounceOff(leftEdge);
 
 monster2.bounceOff(rightEdge);
 
 monster2.bounceOff(leftEdge);
 
 monster3.bounceOff(rightEdge);
 
 monster3.bounceOff(leftEdge);
 
 monster4.bounceOff(rightEdge);
 
 monster4.bounceOff(leftEdge);
 
    if(keyDown("up")){
      hero.y=hero.y -1.5;
    }
  
   if(keyDown("down")){
      hero.y=hero.y +1.5;
      
      
}
 drawSprites();
}
