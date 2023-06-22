const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground
var rope
var fruit
var link
var bunny
var button
var backgroundImg
var bunnyImg
var fruitImg
var buttonImg


function preload () 
{
  backgroundImg = loadImage("background.png")
  bunnyImg = loadImage("Rabbit-01.png")
  fruitImg = loadImage ("melon.png")
  //buttonImg = loadImage ("cut_button.png")
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground (200,690,600,20)
  rope = new Rope (6,{x:245, y:30})

  var options = {
    density: 0.001
  }

  bunny = createSprite(250,650,100,100)
  bunny.addImage (bunnyImg)
  bunny.scale = 0.2

  button = createImg ("cut_button.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)

  fruit = Bodies.circle(300,50,15,options)
  Matter.Composite.add(rope.body,fruit)

  link = new Link (rope,fruit)
  rectMode(CENTER)
  ellipseMode(RADIUS)
  textSize = 50

  imageMode(CENTER)
  
  

}

function draw() 
{
  background(51);
  Engine.update(engine);

  image (backgroundImg, width/2, height/2, 500, 700) 

  ground.show()
  rope.show()

  image(fruitImg, fruit.position.x, fruit.position.y, 60,60)
  //ellipse (fruit.position.x,fruit.position.y,15,15)


  drawSprites() 
}

function drop () {
  rope.break()
  link.detach()
  link = null
}





