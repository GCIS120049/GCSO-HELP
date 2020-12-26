var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

}

function draw() {
  background("black"); 
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  

  car.velocityX=speed;

  if(wall.x-car.x<=(wall.width+car.width)/2){

      car.velocityX=0;
      var deformation=(0.5*weight*speed*speed)/22500;

      fill("white");
      textSize(25);
      text("Weight="+weight,width/2-50,50);
      text("Speed="+speed,width/2+125,50);
      text("Deformation="+deformation,width/2+400,50);


       if(deformation>180){
         car.shapeColor=color(255,0,0);
         textSize(25);
         text("Rating=D-",width/2+260,50);
       }
       if(deformation<180 && deformation>100){
         car.shapeColor=color(230,230,0);
         textSize(25);
         text("Rating=B+",width/2+260,50);
       }
       if(deformation<100){
         car.shapeColor=color(0,255,0);
         textSize(25);
         text("Rating=A+",width/2+260,50);
       }

  }

  drawSprites();
}