class right {
    constructor(x,y,w,h){
        var right_options = {isStatic:true}

        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,right_options)
             World.add(world,this.body)

    }
    //Made the same changes here as ground.js
    display(){
        var right_pos = this.body.position
        push ()
        translate(right_pos.x,right_pos.y)
        rectMode(CENTER) 
        strokeWeight(4); 
        fill(255,255,0) 
        rect(0,0,this.w, this.h);
        pop ()
       }
}