var canvasSize = 800;
var cellNumber = 150;
var cellGrid;
var isLoop = false;

function setup() {
	//INTERFACE
	buttonStart = createButton("Start");
	buttonStop = createButton("Stop");
	buttonNext = createButton("Next");
	buttonEmpty = createButton("Empty");
	buttonRandom = createButton("Random");
	buttonImage = createButton("Image");
	createP('');
	createCanvas(canvasSize, canvasSize);
	
	noLoop();	
	buttonStart.mouseClicked(startLoop);
	buttonStop.mouseClicked(stopLoop);
	buttonNext.mouseClicked(draw);
	buttonEmpty.mouseClicked(emptyGrid);
	buttonRandom.mouseClicked(randomGrid);
	buttonImage.mouseClicked(parseImage);
	cellGrid = new CellGrid(canvasSize, cellNumber);
	cellGrid.createGrid();
	
}

function startLoop() {
	if(isLoop==false) {
		loop();
		isLoop=true;
	}
}

function stopLoop() {
	if(isLoop==true) {
		noLoop();
		isLoop=false;
	}
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

function parseImage() {
	var imageParser = new ImageParser();
	var alpha = imageParser.getPixels("assets/image.jpg", canvasSize, cellNumber);
	cellGrid.loadImage(alpha);
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

