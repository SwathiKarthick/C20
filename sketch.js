var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200, 200, 50, 50);
  car.shapeColor = "blue";
  car.velocityX = 4;

  wall = createSprite(1000, 200, 50, 90);
  wall.shapeColor = "pink";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(car,wall)){
    text("it is touching",500,500);
    textSize(30);
    fill("green");
    //car.velocityX = 0;
    
  }
  collide(car,wall);
  
 
  drawSprites();
}
