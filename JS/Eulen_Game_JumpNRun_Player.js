class Player {
    constructor() {
        this.width = 265
		this.height = 344
		this.x = 100
		this.y = 800
		this.gravity = 0.5
		this.velocity = 0;
    }

    jump() {
		if (this.y >= 800) {
			this.velocity = - 20
		}
		
	} 

	draw() {
		this.velocity += this.gravity // 0.2
		this.y += this.velocity
		// if the player moves out of the screen at the bottom then we reposition him
		if (this.y >= 800) {
			this.y = 800		
		}
		if (this.y <   800) {
			image(game.playerImageJumping, this.x, this.y, this.width, this.height)
		} else {
			image(game.playerImage, this.x, this.y, this.width, this.height)
		}

		
		if (this.y <= game.tonangel.y) {
			console.log('Test')
		}
		
		//console.log('this is the player drawing')
		
	}
}