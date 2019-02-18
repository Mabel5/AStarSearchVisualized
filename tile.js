class Tile
{

    constructor(x, y, tileSize)
    {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.pos = createVector(x, y);
    }

    show()
    {
        noFill();
        stroke(0);
        rect(this.pos.x, this.pos.y, this.tileSize, this.tileSize);
    }

}
