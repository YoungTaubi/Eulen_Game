const game = new Game();

function preload() {
	game.preload()
}

function setup() {
	createCanvas(1800, 1200)
	game.setup()
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
}