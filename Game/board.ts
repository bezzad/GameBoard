export class Board {
    boardMatrix: string[][];
    startPointX: number;
    startPointY: number;
    groups: any[];
    pointsGroupIndex: any[][];

    constructor(matrix: string[][]) {
        this.boardMatrix = this.cloneMatrix(matrix);
        this.groups = this.getGroups();
        this.pointsGroupIndex = this.getMatrix(this.boardMatrix.length);
    }

    getMatrix(n: number): any[][] {
        var matrix: any[][];
        for (var i = 0; i < n; i++) {
            matrix[i] = new Array(n);
        }

        return matrix;
    }

    play(x: number, y: number) {
        this.startPointX = x;
        this.startPointY = y;
        var result = [];
        while (Object.keys(this.groups).length > 1) {

            var currentGroup = this.getGroup(x, y);
            var gs = this.getGroupNeighbors(currentGroup);
            var longestGroupIndex = gs.map(function (a) { return a.length; }).indexOf(Math.max.apply(Math, gs.map(function (a) { return a.length; })));
            currentGroup = this.groupBygroup(currentGroup, gs[longestGroupIndex]);
        }
    }

    getGroups(): any {
        for (let i = 0; i < this.boardMatrix.length; i++) {
            for (let j = 0; j < this.boardMatrix[i].length; j++) {
                var group = this.getGroup(i, j);
                if (this.boardMatrix[i + 1][j] === this.boardMatrix[i][j]) { // right
                    group = this.groupBy(i + 1, j, group);
                }
                if (this.boardMatrix[i][j + 1] === this.boardMatrix[i][j]) { // down
                    group = this.groupBy(i, j + 1, group);
                }
            }
        }

        return this.groups;
    }

    groupBy(i, j, group: any[]): any[] {
        group.push([i, j])
        return group;
    }

    groupBygroup(group1: any[], group2: any[]): any[] {
        group2.forEach(g2el => {
            group1.push(g2el)
        });
        return group1;
    }

    getGroup(i, j): any[] {
        let index = this.pointsGroupIndex[i][j];
        if (index == null) {
            index = this.pointsGroupIndex[i][j] = this.groups.push([[i, j]]) - 1;
        }
        return this.groups[index];
    }

    //       ___
    //   ___|_1_|___         --------> x+
    //  |_0_|_P_|_2_|       |         
    //      |_3_|           |
    //                      V
    //                      Y+
    //      
    getNeighborsColor(pointX: number, pointY: number): string[] {
        let result = new Array(4);
        let hasUpRow = pointY - 1 >= 0;
        let hasDownRow = pointY + 1 < this.boardMatrix.length;
        let hasLeftCol = pointX - 1 >= 0;
        let hasRightCol = pointX + 1 < this.boardMatrix.length;

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
    }

    getGroupNeighbors(group): any[] {

    }

    cloneMatrix(matrix: any[][]): any[][] {
        var clonedMatrix = matrix.map(function (arr) {
            return arr.slice();
        });

        return clonedMatrix;
    }
}