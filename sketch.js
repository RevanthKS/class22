const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ground;

var ball;

function setup() {

  myengine=Engine.create();
  myworld=myengine.world;

  var options={
    isStatic:true
  }
  ground= Bodies.rectangle(200,390,400,20,options);

  World.add(myworld,ground);

  createCanvas(400,400);
  
  var ballOption={
    restitution:1.0
  }

  ball=Bodies.circle(200,100,20,ballOption);
  World.add(myworld,ball);
}

function draw() {
  
  background(0); 
  Engine.update(myengine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);
}