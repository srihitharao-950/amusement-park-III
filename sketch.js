const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground, miniG, miniG2, miniG3 ,miniG4 , miniG5 , miniG6 , miniG7, miniG8  , miniG9 
var block1,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16
var bg
var block17,block18,block19,block20,block21,block22,block23,block24,block25
var hexa_image, hexa
var boy,boyIMG
var chain

function preload() {
  bg = loadImage("ap.PNG")
  hexa_image=loadImage("dart.png")
  boyIMG=loadImage("boy.png")
}



function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
 

    boy = createSprite(650,480,1,1)
    boy.addImage(boyIMG)

    ground= new Ground(400,580,1000,20)
    miniG= new Ground(50,300,50,10)
    miniG2= new Ground(150,300,50,10)
    miniG3 = new Ground(250,300,50,10)
    miniG4 = new Ground(50,400,50,10)
    miniG5 = new Ground(150,400,50,10)
    miniG6 = new Ground(250,400,50,10)
    miniG7 = new Ground(50,500,50,10)
    miniG8 = new Ground(150,500,50,10)
    miniG9 = new Ground(250,500,50,10)

    block1=new Block(50,295,30,30)
    block2=new Block2(150,295,30,30)
    block3=new Block(250,295,30,30)
    block4=new Block2(50,395,30,30)
    block5=new Block(150,395,30,30)
    block6=new Block2(250,395,30,30)
    block7=new Block(50,495,30,30)
    block8=new Block2(150,495,30,30)
    block9=new Block(250,495,30,30)


  

    hexa=Bodies.circle(480,420,20)
    World.add(world,hexa)

    chain=new Slingshot(hexa,{x:580,y:420})

    


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bg);
  fill("brown");
  ground.display()
  fill("pink");
  miniG.display()
  miniG2.display()
  miniG3.display()
  miniG4.display()
  miniG5.display()
  miniG6.display()
  miniG7.display()
  miniG8.display()
  miniG9.display()


  fill("skyblue")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  fill("pink")
  block8.display()
  block9.display()





  chain.display()

  

  
    imageMode(CENTER)
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)
  

 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode===32){
   chain.attach(hexa)
  }
  
  }