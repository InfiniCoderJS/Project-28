class GroundAsWallImg {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(0)
      fill("white");
      image(this.image,pos.x,pos.y,150,200)
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };