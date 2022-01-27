class CasinoLevel {
    constructor() {
        this.backgroundImage  
        this.button
        this.buttonX = 100
        this.buttonY = 100

        //this.button

    }


    setup() {
         
        
        
        
         
        
        
        

    }

    preload() {
        this.backgroundImage = loadImage('Assets/BackGround.jpg')

    }

    draw() { 
        if (level === 'casino') {
            
            let bg = background(this.backgroundImage, 0, 0, width, height)
            //bg.style('z-index', '-1')
            game.casino.enterCasion.innerHTML = ''            
            //this.button = rect(this.buttonX,this.buttonY,100,100)
             
            //this.button = createButton('Test')
            //this.button.position(450, 300)
            //this.button.parent('P5Container')
            //this.button.mousePressed(game.casino.drawCircle)
            //console.log(level)     
            

        }
        
        
             
        //game.background.draw()      
        //circle(450, 300, 300)        
        

        
    }

    howYouLikeToPlay () {

    }

    
}