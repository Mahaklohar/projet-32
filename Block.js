class Block{
    constructor(x, y, color){
        this.fill = color;
        var option={
            restitution:0.8,
            friction: 0.1,
            density: 0.1
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, 30, 40, option);
        this.width = 30;
        this.height = 40;

        World.add(world, this.body);
    }

    display(){
        //console.log(this.body.speed);

        if(this.body.speed<3){
        var pos = this.body.position;
    
        push();
        rectMode(CENTER);
        fill(this.fill)
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }
        else{
            World.remove(world, this.body)
            push();
            this.visibility = this.visibility - 5
            tint(255, this.visibility);
            pop();
        }
      }

      Score(){
          //console.log(this.visibility)
        if(this.visibility<0 && this.visibility> -200){
            score++
        }  
    }

}
