let x = 800;
let y = 800;
let tileWidth = 40;
var grid;

function setup() {
	createCanvas(x, y);
	grid = new Grid(x, y, tileWidth, tileWidth);
	grid.populateGrid();
}

function draw() {
	background(255, 255, 0);
	grid.update();
}
