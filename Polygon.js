class Polygon{
    constructor(x, y, radius){
        var option={
            restitution:1,
		    friction: 0,
		    denstiy: 3.0
        }

        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;
        this.img = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.img, pos.x, pos.y, this.radius*2, this.radius*2);
        pop();

    }
}
