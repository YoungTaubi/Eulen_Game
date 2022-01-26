class Tonangel {
    constructor(image) {
		this.image = image
		this.x = width
		this.y = random(300,1000)
		this.width = 500
		this.height = 100
		
		 
	}

	collision(obstacle) {		
		if (
			(game.player.x + game.player.width) > obstacle.x &&
			//game.player.x > (obstacle.x + obstacle.width) &&
			game.player.y + game.player.height < obstacle.y 
			// && game.player.y + game.player.height > obstacle.y - 7
			
			) {
			console.log('Velocity :' + game.player.velocity)
			//console.log('Collide')
			return true		
		//} else if (Math.sign(game.player.velocity) === 0
		//			&& (game.player.x + game.player.width) > obstacle.x
		//			&& game.player.y + game.player.height > obstacle.y 
		//			) {
		//	return true	
		} else {
			//console.log(this.x)
			//console.log('No Collision')
			return false			
		}
	}

	draw() {
		this.x -=2
		image(this.image, this.x, this.y, this.width, this.height)
		//console.log(this.x)
		 
	}
}