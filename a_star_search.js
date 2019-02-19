class AStar
{
    constructor(startingNode, targetNode, tileMap)
    {
        this.startingNode = startingNode; // starting node of the search
        this.targetNode = targetNode; // target node of the search
        this.tileMap = tileMap; // the tile map for the game
    }

    search() {
        //TODO implement priority queue

        // add starting node to priority queue (frontier)

        //while frontier is not empty
            //take the node off the front of the queue
            //if node is goal
                //goal reached, stop search
            //for each node successor of current node
                //add to the frontier sorted by FCost
        //repeat until goal is reached and return goal
        //if frontier is empty before goal is reached return failure
    }

    getNeighbors(node) {
        var neighbors = [];
        var edge = tileMap.isEdgeCase(node);

        if(!edge) {
            neighbors.push(tileMap.getTileFromCoord(node.getX() + 1, node.getY()));
            neighbors.push(tileMap.getTileFromCoord(node.getX() - 1, node.getY()));
            neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() + 1));
            neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() - 1));
            return;
        }

        switch(edge) {
            case "LEFT":
                neighbors.push(tileMap.getTileFromCoord(node.getX() + 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() + 1));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() - 1));
                break;
            case "RIGHT":
                neighbors.push(tileMap.getTileFromCoord(node.getX() - 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() + 1));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() - 1));
                break;
            case "UP":
                neighbors.push(tileMap.getTileFromCoord(node.getX() + 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX() - 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() - 1));
                break;
            case "DOWN":
                neighbors.push(tileMap.getTileFromCoord(node.getX() + 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() + 1));
                neighbors.push(tileMap.getTileFromCoord(node.getX() - 1, node.getY()));
                break;
            case "LEFT_UP":
                neighbors.push(tileMap.getTileFromCoord(node.getX() + 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() - 1));
                break;
            case "RIGHT_UP":
                neighbors.push(tileMap.getTileFromCoord(node.getX() - 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() - 1));
                break;
            case "LEFT_DOWN":
                neighbors.push(tileMap.getTileFromCoord(node.getX() + 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() + 1));
                break;
            case "RIGHT_DOWN":
                neighbors.push(tileMap.getTileFromCoord(node.getX() + 1, node.getY()));
                neighbors.push(tileMap.getTileFromCoord(node.getX(), node.getY() + 1));
                break;
        }

    }

    getFCost(node) {
        return getGCost(node) + getHCost(node);
    }

    // the manhattan distance between the start and end nodes, this is our pathfinding heuristic
    getHCost(node)
    {
        return (abs(node.getX() - this.targetNode.getX()) + abs(node.getY() - this.targetNode.getY()));
    }

    getGCost(node) {
        return (abs(node.getX() - this.startingNode.getX()) + abs(node.getY() - this.startingNode.getY()));
    }
}
