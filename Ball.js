class Ball{
    constructor(x,y,w,h){
        var opt = {
           
            density : 0.5,
            frictionAir :0.005
        }
        this.body = Bodies.circle(x,y,w,opt);
        //this.body = Bodies.rectangle(x,y,w,h,opt);
        this.radius=w;
        //this.width=w;
        //this.height=h;
        this.image=loadImage("ball1.png");
        World.add(myWorld,this.body);
        }

        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            strokeWeight(4);
            stroke("blue");
            fill("red");
            translate(pos.x,pos.y);
            rotate(angle); 
            //ellipseMode(RADIUS);
            //ellipse(0,0,this.radius,this.radius);
            imageMode(CENTER)
            image(this.image,0+28,60,this.radius*4,this.radius*4); 
            pop();  
        }
}