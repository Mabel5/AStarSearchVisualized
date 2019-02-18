class TileMap
{

    constructor(canvasSize, tileSize)
    {
        this.canvasSize = canvasSize;
        this.tileSize = tileSize;
        this.tiles = [];
    }

    populateTileMap()
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

    updateTiles()
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

}
