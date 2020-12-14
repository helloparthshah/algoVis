class Grid {
    constructor(tsize, size) {
        this.tsize = tsize;
        this.size = size;
        this.width = tsize / size;
        this.nodes = [];

        this.init();

    }

    createWall(x, y, val) {
        if (this.nodes[floor(x / this.width)][floor(y / this.width)].isWall == val)
            return false;

        this.nodes[floor(x / this.width)][floor(y / this.width)].isWall = val;
        return true;
    }

    h(x, y) {
        if (this.nodes[floor(x / this.width)][floor(y / this.width)].isWall == true)
            this.nodes[floor(x / this.width)][floor(y / this.width)].isWall = false;
        else
            this.nodes[floor(x / this.width)][floor(y / this.width)].isWall = true;
    }

    clear() {
        for (let i of this.nodes) {
            for (let j of i) {
                j.isWall = false;
                j.visited = false;
                j.isPath = false;

            }
        }
    }

    res() {
        for (let i of this.nodes) {
            for (let j of i) {
                // j.isWall = false;
                j.visited = false;
                // j.isPath = false;
            }
        }
    }

    init() {
        for (let i = 0; i < this.size; i++) {
            this.nodes[i] = [];
            for (let j = 0; j < this.size; j++) {
                let sq = new Node(i * this.width, j * this.width, this.width);
                this.nodes[i][j] = sq;
            }
        }
    }

    drawGrid() {
        for (let i of this.nodes) {
            for (let j of i) {
                j.drawNode();
            }
        }
    }
}