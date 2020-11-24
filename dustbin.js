class Dustbin{
    constructor(x,y,w,h)
    
    {
        var options={
            isStatic:true
        
        }
        
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("dustbingreen.png");

        World.add(world,this.body);
    }

    display(){
        var dustbinpos=this.body.position;
        push();
        translate(dustbinpos.x,dustbinpos.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
        
    }
}