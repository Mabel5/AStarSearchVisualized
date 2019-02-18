class Tile {

  constructor(x, y, tileWidth, tileHeight)
  {
    this.x = x;
    this.y = y;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.pos = createVector(x, y);
  }

  show() {
    noFill();
    console.log("show");
    stroke(0);
    rect(this.pos.x, this.pos.y, this.tileWidth, this.tileHeight);
  }

}
