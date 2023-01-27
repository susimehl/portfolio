class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.backgroundImage
        this.playerImage
        this.obstacles = []
        this.sunflowerImage
    }


preload(){
    this.backgroundImage = loadImage("assets/background/lila1.gif")
    this.playerImage = loadImage("assets/player/waechter-20.png")
    this.sunflowerImage = loadImage("assets/sunflower/SunflowerFlowerHead.png")
}

draw(){
    clear()
    image(this.backgroundImage,0 , 0, width, height)
    this.player.draw()

    if(frameCount % 300=== 0 ){
        this.obstacles.push(new Obstacle(this.sunflowerImage))
    }
    this.obstacles.forEach(function (obstacle){
        obstacle.draw()
    })

    this.obstacles = this.obstacles.filter(obstacle => {
      console.log(this)

        if(obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width){
            return false
        }
        else{  
            return true
        }
    })
  }
}
