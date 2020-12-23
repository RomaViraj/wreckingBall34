class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:400
        };
        this.rope = Constraint.create(options);
        this.image=loadImage("chain1.png");
        World.add(myWorld,this.rope);
    }
    display(){
       var pointA= this.rope.bodyA.position;
       var pointB= this.rope.pointB;
       push ();
       stroke (37,37,37);
       strokeWeight(8);
       line (pointA.x,pointA.y,pointB.x,pointB.y); 
    //    imageMode(CENTER)
    //         image(this.image,this.rope.pointB.x+70,this.rope.pointB.y+365,200,800); 
       pop (); 
    }
}