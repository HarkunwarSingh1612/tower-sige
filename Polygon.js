class Polygon{

    constructor(){
        var options={
            isStatic : true
          }
        
          this.polygon = Bodies.circle(90,200,10,options)

          this.image=loadImage("polygon.png");
          World.add(world,this.polygon);
    }
    display(){
        noStroke();
        fill(188,67,67);
        imageMode(CENTER);
        image(polygon_img,this.polygon.position.x, this.polygon.position.y, 40,  40);
    }
}