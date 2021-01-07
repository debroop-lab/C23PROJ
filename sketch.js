const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(200,100,50,50);
    
    
}

function draw(){
    background(0);
    Engine.update(myEngine);
    
    box1.display();
    
}
