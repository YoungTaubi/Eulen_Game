class Casino {
    constructor(image) {
		this.image = image
		this.x = 1800
		this.y = 530
		this.width = 500
		this.height = 500
		this.enterCasion = document.querySelector('#EnterCasino')
		this.ableToGoToCasino = false

		
		 
	}

	collision(currentCasino) {
		if (game.player.x + game.player.width > currentCasino.x
			&& game.player.x + game.player.width < currentCasino.x + currentCasino.width ) {
				return true
			} else {
				return false
			}
	}

	drawCircle () {
        circle(100,100, 50)
    }

	draw() {
		this.x -=0.8
		image(this.image, this.x, this.y, this.width, this.height)
		
		 
	}
}

