var canvasSize = 800;
var cellNumber = 30;
var cellGrid;

function setup() {
	createCanvas(canvasSize, canvasSize);
	cellGrid = new CellGrid(canvasSize, cellNumber);
	cellGrid.createGrid();
}

function draw() {
	background(150);
	stroke(0);
	cellGrid.display();
	cellGrid.update();
}

