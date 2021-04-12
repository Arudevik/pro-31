class createDrop{
    constructor(x,y){
        var options = {
          friction:0.001,
            restitution:0.1
        }
        this.image = loadImage("images/walking_1.png")
        this.Umbrella = Bodies.circle(x,y,50,options)
        this.radius = 50
        World.add(world,this.Umbrella)
    }
    display(){
        var pos = this.Umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}