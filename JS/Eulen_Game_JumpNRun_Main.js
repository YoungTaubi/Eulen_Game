const game = new Game();
const intro = new Intro();
const casinoLevel = new CasinoLevel()
const jumpNRunLevel = 'jumpNRun'
const introLevel = 'intro'
const casino = 'casino'
let level = 'intro'
console.log(level)



function preload() {
	game.preload()
	intro.preload()
	casinoLevel.preload()
	//soundFormats('mp3')
	
}

function setup() {	
	let myCanvas = createCanvas(900, 600)
	myCanvas.parent('P5Container')
	intro.setup()	
	game.setup()
	casinoLevel.setup()
	
	
}

function draw() {
	if (level === 'jumpNRun') {
		
		game.draw()
		
	} else if (level === 'intro') {
		
		intro.draw()
		//clear()
	} else if (level === 'casino') {
		
		casinoLevel.draw()
		
	}
		
}


function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
	if (keyCode === 13) {
		level = 'jumpNRun'
	}
	if (game.casino.ableToGoToCasino) {
		if (keyCode === 67) {
			level = 'casino'
		}
	}
	
}

function mousePressed() {
	if (dist(casinoLevel.buttonX, casinoLevel.buttonY, mouseX, mouseY) < 10) {
		game.casino.drawCircle()
	}
	
}