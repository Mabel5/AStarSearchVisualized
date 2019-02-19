class TileMap
{

    constructor(canvasSize, tileSize)
    {
        this.canvasSize = canvasSize;
        this.tileSize = tileSize;
        this.tiles = [];
    }

    populate()
    {
        for(var x = 0; x < this.canvasSize; x += this.tileSize)
        {
            const row = [];
            for(var y = 0; y < this.canvasSize; y += this.tileSize)
            {
                row.push(new Tile(x, y, this.tileSize));
            }
            this.tiles.push(row);
        }
    }

    update()
    {
        var rowLength = this.tiles.length; // the number of rows
        var columnLength = this.tiles[0].length; // the number of columns

        for(var rows = 0; rows < rowLength; rows++)
        {
            for(var columns = 0; columns < columnLength; columns++)
            {
                this.tiles[rows][columns].show();
            }
        }
    }

    getTileFromCoord(x, y)
    {
        return this.tiles[x][y];
    }

    isEdgeCase(node)
    {
        var x = node.getX();
        var y = node.getY();
        var rowSize = this.tiles.length;
        var colSize = this.tiles[0].length;

        if (x === 0 && y === 0) { return "LEFT_UP"; }
        if (x === rowSize && y === 0) { return "RIGHT_UP" }
        if (x === 0 && y === colSize) { return "LEFT_DOWN" }
        if (x === rowSize && y === colSize) { return "RIGHT_DOWN"}
        if (x === 0) { return "LEFT"; }
        if (y === 0) { return "UP"; }
        if (x === rowSize) { return "RIGHT"; }
        if (y === colSize) { return "DOWN"}
        return null;
    }

}
