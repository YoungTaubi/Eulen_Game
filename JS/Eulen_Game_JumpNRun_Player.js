class Player {
    constructor() {
        this.width = 265
		this.height = 344
		this.x = 200
		this.y = 800
		this.gravity = 0.35
		this.velocity = 0;
		this.playerColliding = false
		this.playerAbleToJump = false
		this.playerAboveObstacle = false
    }

	changeColliding() {
		this.playerColliding = true
	}

    jump() {
		
		if (this.y >= 800 || this.playerAbleToJump) {
			this.playerColliding = false
			this.playerAbleToJump = false
			this.velocity = - 22
			
			// setTimeout(this.changeColliding, 100)
			
			// this.changeColliding
			//if (this.playerAboveObstacle) {
			//	setTimeout(this.changeColliding, 1000) 
			//}	 
			
		}
		//if (this.playerAbleToJump) {
		//	this.playerColliding = false
		//	this.velocity = - 22
		//}
		
		
	} 

	draw() {
		console.log(game.currentTonangel)
		this.velocity += this.gravity // 0.2
		this.y += this.velocity
		// if the player moves out of the screen at the bottom then we reposition him
		 
		if (this.y >= 800) {
			this.y = 800
			this.velocity = 0		
		} else if (this.playerColliding && this.y + this.height > game.currentTonangel.y 
					//|| this.playerColliding && this.y + this.height > game.currentTonangel.y
					) {
			 
			this.playerAbleToJump = true
			this.y = game.currentTonangel.y - this.height +5
			this.playerAbleToJump = true
			this.velocity = 0
		}
		
		//console.log(game.currentTonangel.height)
		//this.currentTonangel.x + this.currentTonangel.width < game.player.x
		//(game.currentTonangel && game.currentTonangel.currentTonangel.x + game.currentTonangel.currentTonangel.width < this.x)
		//if (game.currentTonangel) {
		//	console.log('Current Tonangel X: ' + game.currentTonangel.currentTonangel.x)
		//}

		//if (game.currentTonangel && this.x + (this.width / 2) > game.currentTonangel.currentTonangel.x 
		//	&& this.x + (this.width / 2) < game.currentTonangel.currentTonangel.x + game.currentTonangel.currentTonangel.width
		//	&& this.y < game.currentTonangel.currentTonangel.y + game.currentTonangel.currentTonangel.height
		//	) {
		//		console.log('Underneath')
		//		this.velocity = 0
		//	}
			
		
		//if (this.y < 800) {
		//	image(game.playerImageJumping, this.x, this.y, this.width, this.height)
		//} else {
		//	image(game.playerImage, this.x, this.y, this.width, this.height)
		//}

		if (this.y === 800 || this.y === game.currentTonangel.y - this.height +5) {
			image(game.playerImage, this.x, this.y, this.width, this.height)
		} else {
			image(game.playerImageJumping, this.x, this.y, this.width, this.height)
		}
		
		//game.tonangel.collision()

		
	 
		
		//console.log('Player colliding: ' + this.playerColliding)
		
	}
}