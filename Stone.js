class Stone{
    constructor(x, y, r ) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        
        this.x=x;
		    this.y=y;
        this.r = r
        this.image = loadImage("images/stone_1.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
		    image(this.image, 0,0,this.r*2, this.r*2)
        stone.scale=0.125
        pop();
      }
}