class FiftyEuro {
    constructor(image) {
		this.image = image
		this.x = width
		this.y = random(100,500)
		this.width = 100
		this.height = 100
		
		 
	}

	collision(playerInfo) {
        let fiftyEuroX = this.x + this.width / 2
		let fiftyEuroY = this.y + this.height / 2
		// the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
		if (dist(fiftyEuroX, fiftyEuroY, playerX, playerY) > 150) {
			
			return false			
		} else {
			// change the score
			game.score += 50
			console.log(game.score)
			return true
		}		
		
	}

	draw() {
		this.x -=4
		image(this.image, this.x, this.y, this.width, this.height)
		
		 
	}
}