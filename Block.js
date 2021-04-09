class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
            
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
      this.Visiblity=255
    }
    display(){

      if(this.body.speed>3){
        this.body.display()
      }
      else{
        World.remove(world,this.body)
        push()
        this.Visiblity=this.Visiblity-5
       tint(255,this.Visiblity)
       image(this.image,this.body.position.x,this.body.position.y,20,20)
       pop()
 
      }





      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}