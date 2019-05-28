"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game = require("./board");
var red = "red", orange = "orange", blue = "blue";
var gBoard = [
    [red, orange, red, blue, red, orange],
    [blue, red, blue, orange, blue, orange],
    [blue, blue, orange, blue, blue, blue],
    [blue, orange, red, blue, red, orange],
    [blue, orange, red, orange, orange, orange],
    [red, blue, red, orange, blue, red]
];
var board = new game.Board(gBoard);
var result = board.play(0, 0);
console.log("result:", result);
//# sourceMappingURL=index.js.map