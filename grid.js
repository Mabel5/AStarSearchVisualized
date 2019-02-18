class Grid {

  constructor(canvasWidth, canvasHeight, tileWidth, tileHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.tiles = [];
  }

  populateGrid() {
    for(x = 0; x < this.canvasWidth; x += this.tileWidth) {
      for(y = 0; y < this.canvasHeight; y += this.tileHeight) {
        var tile = new Tile(x, y, this.tileWidth, this.tileHeight)
        this.tiles.push(tile);
      }
    }
  }

  update() {
    this.tiles.forEach( tile => {
      tile.show();
    });
  }

  getKey(x, y) {

  }

  show() {

  }
}
