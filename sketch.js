const CANVAS_SIZE = 800;
const TILE_SIZE = 40;
const BACKGROUND_COLOUR = 210;

var tileMap;
var startingTile;
var targetTile;
var aStar;

function setup()
{
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	tileMap = new TileMap(CANVAS_SIZE, TILE_SIZE);
	tileMap.populate();

	startingTile = tileMap.getTileFromCoord(3, 4);
	targetTile = tileMap.getTileFromCoord(14, 10);

	startingTile.setFill([154, 205, 50]);
	targetTile.setFill([230, 45, 0]);

	aStar = new AStar(startingTile, targetTile, tileMap);

}

function draw()
{
	background(BACKGROUND_COLOUR);
	tileMap.update();
}
