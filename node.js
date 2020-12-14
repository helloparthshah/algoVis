class Node {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.ix = x / size;
        this.iy = y / size;
        this.size = size;
        this.visited = false;
        this.parent;
        this.isPath = false;

        this.isWall = false;
        this.isEnd = false;
        this.isStart = false;

    }

    drawNode() {
        fill(255);
        if (this.visited)
            fill(0, 255, 0);
        if (this.isPath)
            fill(255, 0, 0);
        if (this.isWall == true)
            fill(100);
        if (this.isEnd)
            fill(0, 255, 255);
        if (this.isStart)
            fill(0, 0, 255)



        stroke(0);
        rect(this.x, this.y, this.size, this.size);
    }
}