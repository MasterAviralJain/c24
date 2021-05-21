const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,rectangle,square;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    rubber = new Rubber(200,502,25);

    hammer = new Hammer(10,100);

    rectangle = new Rectangle(550,550,70,120);

    square = new Rectangle(770,550,55,55);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    
    rubber.display();

    hammer.display();
    
    rectangle.display();

    square.display();

}