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
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  ball2 = new Ball(width / 2 + 150, height / 2 - 120, 30, 30);
  ball3 = new Ball(width / 2 + 10, height / 2 - 120, 30, 30);

  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 80, height / 2 + 20, 200, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  fill("red")
  ball.show();
  fill("blue")
  ball2.show();
  fill("green")
  ball3.show()
  blowerMouth.show();
}

function blow() {

Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.05})
Matter.Body.applyForce(ball2.body,{x:0,y:0},{x:0,y:-0.02})
Matter.Body.applyForce(ball3.body,{x:0,y:0},{x:0,y:-0.03})
}

