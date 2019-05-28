"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = (function () {
    function Board(matrix) {
        this.boardMatrix = this.cloneMatrix(matrix);
        this.groups = this.getGroups();
        this.pointsGroupIndex = this.getMatrix(this.boardMatrix.length);
    }
    Board.prototype.getMatrix = function (n) {
        var matrix;
        for (var i = 0; i < n; i++) {
            matrix[i] = new Array(n);
        }
        return matrix;
    };
    Board.prototype.play = function (x, y) {
        this.startPointX = x;
        this.startPointY = y;
        var result = [];
        while (Object.keys(this.groups).length > 1) {
            var neighbors = this.getNeighborsColor(x, y);
            neighbors.forEach(function (n) {
            });
        }
    };
    Board.prototype.getGroups = function () {
        for (var i = 0; i < this.boardMatrix.length; i++) {
            for (var j = 0; j < this.boardMatrix[i].length; j++) {
                var group = this.getGroup(i, j);
                if (this.boardMatrix[i + 1][j] === this.boardMatrix[i][j]) {
                    group = this.groupBy(i + 1, j, group);
                }
                if (this.boardMatrix[i][j + 1] === this.boardMatrix[i][j]) {
                    group = this.groupBy(i, j + 1, group);
                }
            }
        }
        return this.groups;
    };
    Board.prototype.groupBy = function (i, j, group) {
        group.push([i, j]);
        return group;
    };
    Board.prototype.getGroup = function (i, j) {
        var index = this.pointsGroupIndex[i][j];
        if (index == null) {
            index = this.pointsGroupIndex[i][j] = this.groups.push([i, j]) - 1;
        }
        return this.groups[index];
    };
    Board.prototype.getNeighborsColor = function (pointX, pointY) {
        var result = new Array(4);
        var hasUpRow = pointY - 1 >= 0;
        var hasDownRow = pointY + 1 < this.boardMatrix.length;
        var hasLeftCol = pointX - 1 >= 0;
        var hasRightCol = pointX + 1 < this.boardMatrix.length;
        if (hasLeftCol) {
            result[0] = this.boardMatrix[pointX - 1][pointY];
        }
        if (hasUpRow) {
            result[1] = this.boardMatrix[pointX][pointY - 1];
        }
        if (hasRightCol) {
            result[2] = this.boardMatrix[pointX + 1][pointY];
        }
        if (hasDownRow) {
            result[3] = this.boardMatrix[pointX][pointY + 1];
        }
        return result;
    };
    Board.prototype.cloneMatrix = function (matrix) {
        var clonedMatrix = matrix.map(function (arr) {
            return arr.slice();
        });
        return clonedMatrix;
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.js.map