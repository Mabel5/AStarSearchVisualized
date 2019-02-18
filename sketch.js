const CANVAS_SIZE = 800;
const TILE_SIZE = 40;
const BACKGROUND_COLOUR = 200;

var tileMap;

function setup() {
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	tileMap = new TileMap(CANVAS_SIZE, TILE_SIZE);
	tileMap.populateTileMap();
}

function draw() {
	background(BACKGROUND_COLOUR);
	tileMap.updateTiles();
}
