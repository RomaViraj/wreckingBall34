class Box{
    constructor(x,y,color){
        var opt = {
            restitution :0.8,
            density : 0.04,
            friction :0.5
        }
        this.body = Bodies.rectangle(x,y,70,70,opt);
        this.width=70;
        this.height=100;
        this.color=color;
        this.image=loadImage("brick3.jpg");
        World.add(myWorld,this.body);
        }

        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            strokeWeight(6);
            stroke("white");
            fill(this.color);
            translate(pos.x,pos.y);
            rotate(angle); 
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height)
            //rect(0,0,this.width,this.height); 
            pop();  
        }
}