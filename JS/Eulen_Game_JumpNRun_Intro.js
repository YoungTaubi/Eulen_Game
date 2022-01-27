class Intro {
    constructor() {
        this.backgroundImages
        this.welcomeImage

    }

    setup() {
        //this.background = new Background()

    }

    preload() {
        //this.testImage = loadImage()
        this.backgroundImages = [
        { src: loadImage('Assets/20220124_Berlin_City_Skyline_00_blured.jpg'), x: (-1400 /2), speed: 0 },
        { src: loadImage('Assets/20220124_Berlin_City_Skyline_01_blured.png'), x: 0, speed: .5 },
        { src: loadImage('Assets/20220124_Berlin_City_Skyline_02_blured.png'), x: 0, speed: 1 },
        { src: loadImage('Assets/20220124_Berlin_City_Skyline_03_blured.png'), x: 0, speed: 1.5 },
        { src: loadImage('Assets/20220124_Berlin_City_Skyline_04_blured.png'), x: 0, speed: 2 },
        ]
        this.welcomeImage = loadImage('Assets/Welcome.png')


    }

    draw() {
        //circle(450, 300, 200)
        //image(this.backgroundImages[0].src, 0, 0, 2250, height)
        this.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, (2250), height)
			image(img.src, img.x + 2250, 0, (2250), height)
			if (img.x <= -(2250 ) ) {
				img.x = 0
			}
		})
        image(this.welcomeImage, 100,100, 700, 400)
        

    }
}