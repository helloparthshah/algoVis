function BFS(grid, start, end) {

    // Put the start node in the queue
    start.visited = true;
    let queue = new Queue();
    queue.enqueue(start);

    // While there is node to be handled in the queue
    while (queue.size() != 0) {
        // Handle the node in the front of the lineand get unvisited neighbors
        let curNode = queue.dequeue();

        // Terminate if the goal is reached
        if (curNode[0] == end) {
            break;
        }


        // Take neighbors, set its parent, mark as visited, and add to the queue
        let neighbours = GetUnvisitedNeighbors(grid, curNode[0].ix, curNode[0].iy);
        // console.log(neighbours)
        for (let i of neighbours) {
            i.visited = true;
            i.parent = curNode[0];
            queue.enqueue(i);
        }
    }
    // Done ! At this point we just have to walk back from the end using the parent
    // If end does not have a parent, it means that it has not been found.
    var curNode = end;
    if (!end.parent) {
        grid.res();
        return false;
    }
    while (curNode != start) {
        sleep(1000);
        curNode.isPath = true;

        curNode = curNode.parent;
        // console.log(curNode);
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function GetUnvisitedNeighbors(grid, x, y) {
    var list = [];

    if (x < grid.size - 1)
        if (!grid.nodes[x + 1][y].isWall && !grid.nodes[x + 1][y].visited)
            list.push(grid.nodes[x + 1][y]);
    if (y < grid.size - 1)
        if (!grid.nodes[x][y + 1].isWall && !grid.nodes[x][y + 1].visited)
            list.push(grid.nodes[x][y + 1]);
    if (x > 0 && !grid.nodes[x - 1][y].isWall && !grid.nodes[x - 1][y].visited)
        list.push(grid.nodes[x - 1][y]);
    if (y > 0 && !grid.nodes[x][y - 1].isWall && !grid.nodes[x][y - 1].visited)
        list.push(grid.nodes[x][y - 1]);

    return list;
}