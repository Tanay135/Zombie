class Base{
constructor(x,y,w,h)
{
  var base_options = {
  
   isStatic: true,
   density: 1

  }
   // Making the Base!
   this.body = Bodies.rectangle(x,y,w,h,base_options);
   World.add(world,this.body);
   this.w = w;
   this.h = h;

}

  show(){
  var pos = this.body.position;
  push();
  fill("red");
  rectMode(CENTER);
  rect(pos.x,pos.y,this.w,this.h);
  pop();
    
  }




}