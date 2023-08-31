function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                let n = board[i][j];
                for (let row = 0; row < 9; row++) {
                    if (i != row) {
                        if (n === board[row][j]) return false;
                    }
                }

                for (let col = 0; col < 9; col++) {
                    if (j != col) {
                        if (n === board[i][col]) return false;
                    }
                }

                let r = Math.floor(i / 3);
                let c = Math.floor(j / 3);

                for (let m = r * 3; m < r * 3 + 3; m++) {
                    for (let k = c * 3; k < c * 3 + 3; k++) {
                        if (i === m && j === k) continue;
                        if (board[m][k] === n) return false;
                    }
                }
            }
        }
    }

    return true;
}
