class Acorn{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
        }

        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.image = loadImage("acorn.jpg")
        this.trajectory = [];
        World.add(world, this.body);
    }
    display() {
        
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        pop();
    }
}