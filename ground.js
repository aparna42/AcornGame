class Ground {
    constructor(x, y, w, h) {
        var ground_options = { isStatic: true }

        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h, ground_options)
        World.add(world, this.body)

    }
    //Made changes to the function name 
    display() {
        //Modified this.body.ground_pos to this.body.position
        var ground_pos = this.body.position
        push()
        translate(ground_pos.x, ground_pos.y)
        //Changed this to rectMode
        rectMode(CENTER)
        strokeWeight(4);
        fill(255, 255, 0)
        rect(0, 0, this.w, this.h);
        pop()
    }
}