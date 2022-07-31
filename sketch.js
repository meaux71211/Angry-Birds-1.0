const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function setup(){
  var canvas=createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20)
  Box1 = new Box(700,320,70,70);
  Box2 = new Box(920,320,70,70);
  Log1 = new Log(810,260,300,PI/2);
  Box3 = new Box(700,240,70,70);
  Box4 = new Box(920,240,70,70);
  Log2 = new Log(810,180,300,PI/2);
  Box5 = new Box(810,160,70,70);
  Log3 = new Log(760,120,150,PI/7);
  Log4 = new Log(860,120,150,-PI/7);
}
function draw()
{
  background(0);
  Engine.update(engine);
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Log1.display();
  Log2.display();
  Log3.display();
  Log4.display();
}
