class Stone{
    constructor(x,y,r){
     
    var stone_Options = {
     isStatic: false,
     restitution:0.1,
     friction:0.05,
     density:0.8,

    }
     this.stone = Bodies.circle(x,y,r,stone_Options);
     World.add(world,this.stone);
     this.r = r;
    }
    show(){
    var pos = this.stone.position;
    push();
    fill("white");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.r,this.r);
    pop();

    }

    
}


