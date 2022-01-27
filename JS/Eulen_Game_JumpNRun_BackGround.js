class Background {
	draw() {
		//console.log('this is the background')
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, (2250), height)
			image(img.src, img.x + 2250, 0, (2250), height)
			if (img.x <= -(2250 ) ) {
				img.x = 0
			}
		})
		
}
}