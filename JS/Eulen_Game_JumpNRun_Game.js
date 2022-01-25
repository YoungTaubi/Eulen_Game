class Game {
	constructor() {
		this.backgroundImages
		this.score = 0
		//
	}

	setup() {
		this.tonangel = new Tonangel()
		this.player = new Player()
		this.background = new Background()
		this.tonangeln = []
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('/Assets/20220124_Berlin_City_Skyline_00.jpg'), x: -1400, speed: 0 },
			{ src: loadImage('/Assets/20220124_Berlin_City_Skyline_01.png'), x: 0, speed: 1 },
			{ src: loadImage('/Assets/20220124_Berlin_City_Skyline_02.png'), x: 0, speed: 2 },
			{ src: loadImage('/Assets/20220124_Berlin_City_Skyline_03.png'), x: 0, speed: 3 },
			{ src: loadImage('/Assets/20220124_Berlin_City_Skyline_04.png'), x: 0, speed: 4 },
		]
		this.playerImage = loadImage('/Assets/Frank_Walking_Sketch.gif')
		this.playerImageJumping = loadImage('/Assets/Frank_Jumping_Sketch.png')
		this.tonangelImage = loadImage('/Assets/Tonangel_Placeholder.png')
	}

	draw() {
		clear()
		this.background.draw()
		circle(this.player.x, this.player.y, 20)
		circle(this.player.x + this.player.width, this.player.y, 20)
		circle(this.player.x , this.player.y + this.player.height, 20)
		circle(this.player.x + this.player.width, this.player.y + this.player.height, 20)
		
		// we want to do sth every x frames -> frameCount (set by P5)

		if (frameCount % 600 === 0) {			
			this.tonangeln.push(new Tonangel(this.tonangelImage))			
		}

		this.tonangeln.forEach((currentTonangel) => {
			//circle(currentTonangel.x, currentTonangel.y -5, 20)
			circle(currentTonangel.x, currentTonangel.y, 20)
			circle(currentTonangel.x + currentTonangel.width, currentTonangel.y, 20)
			circle(currentTonangel.x , currentTonangel.y + currentTonangel.height, 20)
			circle(currentTonangel.x + currentTonangel.width, currentTonangel.y + currentTonangel.height, 20)
			currentTonangel.draw()
			

			
			//console.log(currentTonangel.x)
			//console.log('Bin dahinter: ' + (game.player.x > (currentTonangel.x + currentTonangel.width)))
			//console.log('collision:' + game.tonangel.collision(currentTonangel))
			let aboveTonangel = false
			if (game.player.y + game.player.height < currentTonangel.y) {
				aboveTonangel = true
			}
			//console.log('above Tonangel: ' + aboveTonangel)

			if (game.tonangel.collision(currentTonangel)) {
				this.currentTonangel = currentTonangel

				return game.player.playerColliding = true, 
				//game.player.playerAbleToJump = true, 
				game.player.playerAboveObstacle = aboveTonangel
			} else if (game.player.x > (currentTonangel.x + currentTonangel.width)) {
				return game.player.playerColliding = false, 
				game.player.playerAbleToJump = false, 
				game.player.playerAboveObstacle = aboveTonangel
			} 
		})

		this.tonangeln = this.tonangeln.filter(function(tonangel) {
			if (tonangel.x + tonangel.width < 0) {
				return false 
			} else {
				return true
			}
		})

		this.player.draw()

		//console.log('Player colliding:'+ game.player.playerColliding)
		//console.log('Ich kann springen: ' + game.player.playerAbleToJump)
		


		
		

		

		

	
}
}