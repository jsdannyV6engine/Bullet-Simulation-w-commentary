//global variables
//it's possible to change the variable's name, make sure it won't cause errors.
var wall, thickness;
var bullet, speed, weight;

//setup function(gives canvas, speed, weight, thinkness, etc...)
function setup() {
  createCanvas(1600,400); //creates a canvas size by length and width (l,w)


speed=random(55,90); //gives a random speed number ranging from 55 to 90. possible to change.
weight=random(400,1500); //gives a random weight number ranging from 400 to 1500. possible to change weight.
thickness=random(22,83); //gives a random thickness number ranging from 22 to 83. possible to change thickness.

bullet=createSprite(50,200,50,20); //create the bulletsprite
bullet.velocityX=speed; //sets the bullet velocity going diagonally by speed. setting velocityX to velocityY will make it go vertical.
bullet.shapeColor=(209,197,0); //wall shape color can be customized. how to do it: bullet.shapeColor = (r,g,b)

wall=createSprite(1200, 200, thickness, height / 2) //creates the wall sprite; sets length,width,thickness,height then divides it by 2
wall.shapeColor=(255,255,255); //wall shapecolor can be customized. how to do it: wall.shapeColor = (r,g,b)

bullet.collide(wall);
}

//draw function(draws sprites making it visible, set a background color)
function draw() {
  background("black");
  drawSprites();
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509; //local variable
  if(deformation>100) //if the deformation less than 100, bullet is red (meaning bad)
  {
    bullet.shapeColor=color(255,0,0); //shapeColor for bullet. how to change it: bullet.shapeColor=color(r,g,b)
  }

  if(deformation<180) //if the deformation less than 180, bullet is green (meaning good)
  {
    bullet.shapeColor=color(0,255,0); //shapeColor for bullet. how to change it: bullet.shapeColor=color(r,g,b)
  }
}
}