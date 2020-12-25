class dustbin {
    constructor(x, y) {
        this.thickness = 20;
        this.width = 200;
        this.height = 213;
        this.angle = 0;
        this.bottom = Bodies.rectangle(x, y, this.width, this.thickness, { isStatic: true })
        this.left = Bodies.rectangle(x - this.width / 2, y - this.height / 2, this.thickness, this.height, { isStatic: true })
        this.right = Bodies.rectangle(x + this.width / 2, y - this.height / 2, this.thickness, this.height, { isStatic: true })
        Matter.Body.setAngle(this.left, this.angle)
        Matter.Body.setAngle(this.right, -1 * this.angle)
        World.add(world, this.bottom)
        World.add(world, this.left)
        World.add(world, this.right)
        this.image=loadImage("dustbingreen.png");
    }
    display() {
var posb=this.bottom.position
var posl=this.left.position
var posr=this.right.position

push()
translate(posl.x,posl.y)
rectMode(CENTER);
fill("red");
rotate(this.angle)
rect(0,0,this.thickness,this.height)
pop()
push()
translate(posr.x,posr.y)
rectMode(CENTER);
fill("red");
rotate(-1*this.angle)
rect(0,0,this.thickness,this.height)
pop()
push()
translate(posb.x,posb.y)
imageMode(CENTER);
fill("red");
rotate(this.angle)
image(this.image,0,-this.height/2,this.width+40,this.height)
pop()

    }
}
