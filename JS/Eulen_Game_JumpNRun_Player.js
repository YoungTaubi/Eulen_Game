class Player {
    constructor() {
        this.width = 265
		this.height = 344
		this.x = 100
		this.y = 800
		this.gravity = 0.5
		this.velocity = 0;
		this.playerColliding = false
		this.playerAbleToJump = false
    }

    jump() {
		
		
		if (this.y >= 800 || this.playerColliding ) {
			this.velocity = - 22
		}
		
		
	} 

	draw() {
		this.velocity += this.gravity // 0.2
		this.y += this.velocity
		// if the player moves out of the screen at the bottom then we reposition him
		if (this.playerColliding) {
			this.y = game.tonangel.y - this.height +5
		} else if (this.y >= 800) {
			this.y = 800		
		} 
			
		
		if (this.y < 800 && this.playerColliding === false) {
			image(game.playerImageJumping, this.x, this.y, this.width, this.height)
		} else {
			image(game.playerImage, this.x, this.y, this.width, this.height)
		}

		//game.tonangel.collision()

		
	 
		
		//console.log('this is the player drawing')
		
	}
}