class PriorityQueue {

    constructor() {

        this.nodes = [];

    }

    enqueue(node, priority) {
        var QNode = new QNode(node, priority);
        for(var i = 0; i < this.nodes.length; i++) {
            //if the new nodes priority is less than the current node
            if (this.nodes[i].priority > QNode.priority)
            {
                //splice in the value before that current node
                this.nodes.splice(i, 0, QNode);
                break;
            }
        }
    }

    dequeue() {
        if(!isEmpty)
        {
            this.nodes.shift();
        }
        else
        {
            return null;
        }
    }

    front() {
        if(!isEmpty())
        {
            return this.nodes[0];
        }
        else
        {
            return null;
        }
    }

    isEmpty() {
        return this.nodes.isEmpty();
    }
}
