function CellGrid(canvasSize, cellNumber) {
	this.cellSize = (canvasSize*0.999)/cellNumber;
	this.cellNumber = cellNumber; //per dimension	
	this.cells = new Array();
	this.oldStates;
	
	this.createGrid = function() {	
		for(var x=0; x<this.cellNumber; x++) {
			this.cells[x] = new Array(this.cellNumber);
			for(var y=0; y<this.cellNumber; y++) {
				this.cells[x][y] = new Cell(x,y,this.cellSize);
			}
		}	
	}
	
	this.display = function() {
		for(var x=0; x<this.cellNumber; x++) {
			for(var y=0; y<this.cellNumber; y++) {
				this.cells[x][y].display();
			}
		}	
	}
	
	this.update = function() {
		this.oldStates = new Array();
		for(var x=0; x<this.cellNumber; x++) {
			this.oldStates[x] = new Array();
			for(var y=0; y<this.cellNumber; y++) {
				this.oldStates[x][y] = this.cells[x][y].state;
			}
		}
		
		for(var x=0; x<this.cellNumber; x++) {
			for(var y=0; y<this.cellNumber; y++) {
				var xstart;
				var ystart;
				var aliveNeighbours = 0;
				
				if(x==0) {
					xstart=0;
				}
				else {
					xstart = x-1;
				}
				
				if(y==0) {
					ystart=0;
				}
				else {
					ystart = y-1;
				}
				
				for(var p=xstart; p<this.cellNumber && p<=x+1; p++) {
					for(var q=ystart; q<this.cellNumber && q<=y+1; q++) {
						if(this.oldStates[p][q] == 1) {
							aliveNeighbours++;
						}
					}
				}				
				
				this.cells[x][y].updateState(aliveNeighbours-this.oldStates[x][y]);
			}
		}
	}
}


































