const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var divisionHeight = 300;
var particle;
var plinkos = [];
var divisions = [];
var variableTurn = 0;
var gameState = "play";
var count = 0;


function setup() {
  createCanvas(800,800);

  
  
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    
    for (var k = 0; k<=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
    }

  for (var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j,75, 5));
  }
  for (var j = 80; j <= width - 10; j = j + 50)
  {
    plinkos.push(new Plinko(j,175, 5));
  }
  for (var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j,275, 5));
  }
  for (var j = 80; j <= width - 10; j = j + 50)
  {
    plinkos.push(new Plinko(j,375, 5));
  }
  for (var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j,475, 5));
  }
  



}

function draw() {
  background(0);  
  
  fill("white");
  text("score = " + count, 100, 100);
  text("500", 10, 550);
  text("400", 90, 550);
  text("700", 170, 550);
  text("300", 250, 550);
  text("100", 330, 550);
  text("500", 410, 550);
  text("100", 490, 550);
  text("1000", 570, 550);
  text("600", 650, 550);

  Engine.update(engine);

  ground.display();
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  

  
  
  for (var k = 0; k < divisions.length; k = k + 1) {
    divisions[k].display();
  }
  
  
if(frameCount % 90 === 0){
  if(gameState === "play"){
    count++;
    particle = new Particle(mouseX, 10, 10);
    
    
  }
}
if(particle !== null){  
    particle.display();
  
  if(particle.body.position.y > 760){
    if(particle.body.position.x < 300){
      
      score = score + 500;
      particle = null;
      if(count >= 5){
        gameState = "end";
      }
    }
  }
}
  

}

function mousePressed(){
  if(gameState === "play"){
    count++;
    particle = new Particle(mouseX, 10, 10);
    
    
  }
}
