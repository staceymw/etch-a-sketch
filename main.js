let color = "black";
let click = "true"

function compileBoard(size) {
    const board = document.querySelector(".board");
    const squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const amount = size * size;
    for (i=0; i < amount; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
        square.addEventListener("mouseover", (colorSquare));
    }
}

 compileBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
    compileBoard(input);
    } else {
        console.log("Number too high or low");
    }
}

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}
