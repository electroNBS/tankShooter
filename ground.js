class Ground{
    constructor(x, y, width, height){
        var ground_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(20, 200, 20);
        rect(pos.x, pos.y, this.width, this.height);
    }
}