let grid;

let cSize = 800;

let allow = false;

var start;
var end;

var here = false;

let ns = 50;

function setup() {
    createCanvas(cSize + 40, cSize + 40);
    grid = new Grid(cSize, ns);
    start = grid.nodes[floor(random(0, ns - 1))][floor(random(0, ns - 1))];
    end = grid.nodes[floor(random(0, ns - 1))][floor(random(0, ns - 1))];

    start.isStart = true;
    end.isEnd = true;

    // frameRate(1);
}

function mousePressed() {

    if (mouseX > 0 && mouseY > 0 && mouseX < cSize && mouseY < cSize)
        if (grid.createWall(mouseX, mouseY, true))
            allow = true;
        else if (grid.createWall(mouseX, mouseY, false))
        allow = false;
    // grid.h(mouseX, mouseY);

}

function mouseDragged() {
    if (here) {
        console.log("er")
        grid.res();
        grid.nodes[floor(mouseX / grid.width)][floor(mouseY / grid.width)].isStart = true;
        // grid.nodes[floor(pmouseX / grid.width)][floor(pmouseY / grid.width)].isStart = false;
    }
    if (mouseX > 0 && mouseY > 0 && mouseX < cSize && mouseY < cSize)
        grid.createWall(mouseX, mouseY, allow);

    // grid.h(mouseX, mouseY);
}

function mouseClicked() {
    if (grid.nodes[floor(mouseX / grid.width)][floor(mouseY / grid.width)] == start) {
        here = true;
        console.log("Here")
    }
    /* else {
           here = false;
       } */
    if (mouseX > cSize - 120 && mouseY > cSize && mouseX < cSize + 40 && mouseY < cSize + 40) {
        grid.res();

        BFS(grid, start, end);
    }
    if (mouseX > cSize - 40 && mouseY > cSize && mouseX < cSize + 40 && mouseY < cSize + 40)
        grid.clear();

    if (mouseX > 0 && mouseY > 0 && mouseX < cSize && mouseY < cSize)
        grid.h(mouseX, mouseY);
}

function mouseReleased() {
    allow = true;
}

function draw() {
    background(0);
    grid.drawGrid();
    // grid.BFS(start, end);
    // grid.res();
    BFS(grid, start, end);


    fill(255);
    rect(cSize - 40, cSize, 80, 40);

    fill(0);
    textSize(18);
    text("Clear", cSize - 20, cSize + 25);

    fill(255);
    rect(cSize - 120, cSize, 80, 40);

    fill(0);
    textSize(18);
    text("Start", cSize - 100, cSize + 25);
}