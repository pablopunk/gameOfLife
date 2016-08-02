function Cell(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.state = setRandomState();
		
	this.display = function() {
		if(this.state==1) {
			fill(255); //ALIVE WHITE
		}
		else {
			fill(100); //DEAD BLACK
		}
	
		rect(x*size, y*size, size, size);
	}
	
	function setRandomState() {
		var r = random(1);
		if(r<0.5) {
			return 0;
		}
		else {
			return 1;
		}
	}
	
	this.isAlive = function() {
		if(this.state==0) {
			return false;
		}
		else {
			return true;
		}
	}
	
	this.updateState = function(aliveNeighbours) {
		if(this.state == 0 && aliveNeighbours == 3) { //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
			this.state = 1;
		}
		else if(this.state == 1 && aliveNeighbours < 2) { //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
			this.state = 0;
		}
		else if(this.state == 1 && aliveNeighbours > 3) { //Any live cell with more than three live neighbours dies, as if by over-population.
			this.state = 0;
		}		
		
		//Any live cell with two or three live neighbours lives on to the next generation.		
	}
}

