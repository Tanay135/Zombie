const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,right_wall,left_wall;
var bridge;
var joint_Point;
var stones = [];

function setup() {
  createCanvas(1200, 600);
  background(0);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(600,580,1200,20);
  right_wall = new Base(1100,540,200,180);
  left_wall = new Base(100,540,200,180);

  bridge = new Bridge(19,{x:1100,y:470});
  joint_Point = new Base(200,470,40,20);

  Matter.Composite.add(bridge.body,joint_Point);
  jointLink = new Link(bridge,joint_Point);

  for(var i = 0;i <= 8 ; i++){
  var x = random(width/2 - 200,width/2 + 200);
  var y = random(-10,140);
  var stone = new Stone(x,y,40);
  stones.push(stone);

  }
}

function draw() {
  background(51);
  Engine.update(engine);


  ground.show();
  right_wall.show();
  left_wall.show();
  bridge.show();
  joint_Point.show();
  for(var i = 0;i <= 8 ; i++){
   stones[i].show();      };
}
