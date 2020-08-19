class Paper {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(0)
      fill("white");
      image(this.image,pos.x,pos.y,50,50)
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };