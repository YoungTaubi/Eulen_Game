class Tonangel {
    constructor(image) {
		this.image = image
		this.x = width
		this.y = 700
		this.width = 300
		this.height = 100
	}

	position() {
		console.log(this.y)
	}

	draw() {
		this.x -=2
		image(this.image, this.x, this.y, this.width, this.height)
	}
}