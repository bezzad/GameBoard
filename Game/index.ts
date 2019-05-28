import * as game from "./board";

// define RGB color board
let red = "red", orange = "orange", blue = "blue";

let gBoard = [
    [red, orange, red, blue, red, orange],
    [blue, red, blue, orange, blue, orange],
    [blue, blue, orange, blue, blue, blue],
    [blue, orange, red, blue, red, orange],
    [blue, orange, red, orange, orange, orange],
    [red, blue, red, orange, blue, red]
];

let board = new game.Board(gBoard);
var result = board.play(0, 0);
console.log("result:", result);