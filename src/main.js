const game = new Game ()
//sound//
let soundFile;
let soundIsPlaying = false

// let mySound = new Audio("assets/music/Spinningout.wav")
function preload(){
    game.preload()
    soundFile = loadSound('assets/music/Spinningout.wav')

}

function setup (){
    let cnv = createCanvas (900, 600);
    cnv.mousePressed(canvasPressed)
}

function draw (){
    game.draw()
}

function canvasPressed(){
  // mySound.play();
  soundFile.loop();
  background(0,200,50);
}

function keyPressed(){
    if (keyCode === 32){
        game.player.jump()
    }

     if (keyCode === 39) {
        game.player.moveRight()
      }
      
      if (keyCode === 37) {
        game.player.moveLeft()
      }
      
      if (keyCode === 38) {
        game.player.moveUp()
      }
      
      if (keyCode === 40) {
        game.player.moveDown()
      }
      if (keyCode === 13)  {
        location.reload()
      }
}
