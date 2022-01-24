class Background {
	draw() {
		console.log('this is the background')
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, 4500, height)
			image(img.src, img.x + 4500, 0, 4500, height)
			if (img.x <= -4500) {
				img.x = 0
			}
		})
		
}
}