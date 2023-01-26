class Obstacle {
    constructor(image){
        this.image = image
        this.x = width
        this.y = (Math.random() * height) / 2.5
        this.width = 70
        this.height = 70
        this.velocity = random(2,5)
    }

    draw(){
        this.x -= this.velocity
        //translate(width / 2, height / 2);
        //rotate(6/ 3.0)
        //rect(-6, -52, -6, 52)

        image(this.image, this.x, this.y,this.width,this.height)    
    }
    collision(playerInfo){
        
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height / 2

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.heigth / 2
        console.log(obstacleX, obstacleY, playerX, playerY)
        if(dist(obstacleX, obstacleY, playerX, playerY) < 50){
            playerInfo.score += 100
            console.log("collision")
            return true
        } 

        else {

            document.querySelector("#score span").innerText = playerInfo.score
            return false
        }
    }
}