class Tile
{

    constructor(xPixel, yPixel, tileSize)
    {
        this.xPixel = xPixel;
        this.yPixel = yPixel;
        this.tileSize = tileSize;
        this.xTile = this.xPixel / this.tileSize;
        this.yTile = this.yPixel / this.tileSize;
        this.pos = createVector(xPixel, yPixel);
        this.strokeColour = 0;
        this.fillColour = null;
    }

    getX() { return this.xTile; }
    getY() { return this.yTile; }
    getPos() { return this.pos; }

    show()
    {
        if(this.fillColour)
        {
            fill(this.fillColour);
        }
        else
        {
            noFill();
        }

        stroke(this.strokeColour);
        rect(this.pos.x, this.pos.y, this.tileSize, this.tileSize);
    }

    setFill(color) {
        this.fillColour = color;
    }

    setStroke(stroke) {
        this.strokeColour = stroke;
    }





}
