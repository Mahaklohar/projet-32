class Ground {
    constructor(x, y, width, height){
        var option={
            isStatic: true,
            friction: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
         push();
         rectMode(CENTER);
         stroke("Black");
         strokeWeight(2);
         fill("Brown");
         rect(pos.x, pos.y, this.width, this.height);
         pop();
    }
}