function ImageParser() {	
	this.getPixels = function(imageRoute, canvasSize, cellNumber) {
		var img = new Image(canvasSize, canvasSize);
		img.src = imageRoute;
		
		temporaryCanvas = document.createElement('canvas');
		temporaryCanvas.width = img.width;
		temporaryCanvas.height = img.height;
		
		var context = temporaryCanvas.getContext('2d');
		context.drawImage(img, 0, 0, temporaryCanvas.width, temporaryCanvas.height);
		var pixels = context.getImageData(0, 0, temporaryCanvas.width, temporaryCanvas.height);
		
		console.log('Loading pixels...');
		
		//Get the sum of RGB to calculate the greyscale
		var pixelMatrix = new Array();
		for(var x=0; x<img.height; x++) {
			pixelMatrix[x] = new Array();
			for(y=0; y<img.width*4;y++) {
				pixelMatrix[x][y] = pixels.data[x*img.width*4+y];			
			}
		}	
		
		var rgbValues = new Array();
		for (var x=0; x<pixelMatrix.length; x++) {
			rgbValues[x] = new Array();
			for (var y=0; y<pixelMatrix[0].length; y+=4) {
				var Y = parseInt(y/4);
				rgbValues[x][Y] = pixelMatrix[x][y];
				rgbValues[x][Y] += pixelMatrix[x][y];
				rgbValues[x][Y] += pixelMatrix[x][y];
				rgbValues[x][Y] = rgbValues[x][Y] / 3;
			}
		}	
		
		//Average the values into each cell
		var pixelsPerSquare = canvasSize/cellNumber;
		
		var rgbAverageValues = new Array();		
		for(var x=0; x<cellNumber; x++) {
			rgbAverageValues[x] = new Array();
			for(var y=0; y<cellNumber; y++) {
				rgbAverageValues[x][y] = 0;
			}
		}
				
		for(var x=0; x<rgbValues.length; x++) {
			for(var y=0; y<rgbValues[x].length; y++) {
				rgbAverageValues[parseInt(x/pixelsPerSquare)][parseInt(y/pixelsPerSquare)] += rgbValues[x][y];
			}
		}
		
		for(var x=0; x<rgbAverageValues.length; x++)  {
			for(var y=0; y<rgbAverageValues.length; y++) {
				rgbAverageValues[x][y] = rgbAverageValues[x][y] / (pixelsPerSquare*pixelsPerSquare); 
			}
		}
		
		return rgbAverageValues;
	}	
}
