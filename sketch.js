var canvasSize = 800;
var cellNumber = 50;
var cellGrid;

function setup() {
	//INTERFACE
	buttonStart = createButton("Start");
	buttonStop = createButton("Stop");
	buttonNext = createButton("Next");
	buttonEmpty = createButton("Empty");
	buttonRandom = createButton("Random");
	createP('');
	createCanvas(canvasSize, canvasSize);
	
	noLoop();	
	buttonStart.mouseClicked(startLoop);
	buttonStop.mouseClicked(stopLoop);
	buttonNext.mouseClicked(draw);
	buttonEmpty.mouseClicked(emptyGrid);
	buttonRandom.mouseClicked(randomGrid);
	cellGrid = new CellGrid(canvasSize, cellNumber);
	cellGrid.createGrid();
}

function startLoop() {
	loop();
}

function stopLoop() {
	noLoop();
}

function mouseClicked() {
	cellGrid.cellPressed(mouseX, mouseY);
	display();
}

function emptyGrid() {
	cellGrid.setEmpty();
	display();
}

function randomGrid() {
	cellGrid.setRandom();
	display();
}

function draw() {
	cellGrid.update();
	display();
}

function display() {
	background(150);
	stroke(0);
	cellGrid.display();
}

