class CasinoLevel {
    constructor() {
        this.backgroundImage  
        this.button
        this.buttonX = 300
        this.buttonY = 150
        this.buttonWidth = 300
        this.buttonHight = 300
        this.gambleStatus = 0
        this.buttonStatus = 0
        //this.gambleScore = game.score

        //this.button

    }


    setup() {     
         
    }

    preload() {
        this.backgroundImage = loadImage('Assets/BackGround.jpg')
        this.gambleButton01 = loadImage('Assets/gambleButton_01.png')
        this.gambleButton02 = loadImage('Assets/gambleButton_02.png')
        this.gambleResult01 = loadImage('Assets/gambleResult_01.png')
        this.gambleResult02 = loadImage('Assets/gambleResult_02.png')

    }

    draw() { 
        if (level === 'casino') {                        
            background(this.backgroundImage, 0, 0, width, height)
            game.casino.enterCasion.innerHTML = ''            
            if (this.buttonStatus === 0) {
                this.button = image(this.gambleButton01,this.buttonX,this.buttonY,this.buttonWidth,this.buttonHight)
            } else if (this.buttonStatus === 1) {
                this.button = image(this.gambleButton02,this.buttonX,this.buttonY,this.buttonWidth,this.buttonHight) 
            }
            console.log(game.score)
            if (this.gambleStatus === 1) {
                image(this.gambleResult01, 325, 133,500,333)
                
            } else if (this.gambleStatus === 2) {
                image(this.gambleResult02, 200, 133,500,333)
                
            }             
            //this.button = createButton('Test')
            //this.button.position(450, 300)
            //this.button.parent('P5Container')
            //this.button.mousePressed(game.casino.drawCircle)
            //console.log(level)             
        }          
    }

    gamble () {
        if (this.gambleStatus === 1) {
            game.score = game.score * 2
            this.buttonX = 75
            this.buttonY = 200
            this.buttonWidth = 200
            this.buttonHight = 200
            this.buttonStatus = 1            
            game.player.playerScore.innerHTML = 'Score: ' + game.score + ' €'
        }
        if (this.gambleStatus === 2) {
            game.score = 0
            this.buttonStatus = 2
            game.player.playerScore.innerHTML = 'Score: ' + game.score + ' €'
        }

    }

    
}