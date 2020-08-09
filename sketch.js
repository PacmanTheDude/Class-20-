var moving, fixed;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "blue";
  moving = createSprite(400,300,50,50);
  moving.shapeColor = "blue";
}

function draw() {
  background("black"); 

  moving.y = mouseY;
  moving.x = mouseX;

  if(moving.x - fixed.x < moving.width/2 + fixed.width/2  && fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.y - fixed.y < moving.height/2 + fixed.height/2 && fixed.y - moving.y < moving.width/2 + fixed.width/2) {
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }

  else {
    fixed.shapeColor = "blue";
    moving.shapeColor = "blue";
  }
  
  



  drawSprites();
}