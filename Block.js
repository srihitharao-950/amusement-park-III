  
class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 225;
      this.image = loadImage("baloon.png");
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.diametre);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
      
    }
  }
}