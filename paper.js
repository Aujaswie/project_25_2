class Paper {
  constructor(x, y, radius) {
    var options = {
        'restitution':1,
        'friction':3,
        'density':0.9
    }
   
    this.body = Bodies.circle(x, y, radius/3, options);
    this.radius = radius;
    this.image = loadImage("paperimg.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("lightpink");
    image(this.image,0,0,this.radius,this.radius)
    pop();
  };
}
  