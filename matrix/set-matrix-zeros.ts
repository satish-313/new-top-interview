function setZeroes(matrix: number[][]): void {
    let hash: [number, number][] = [];
    let row = new Array(matrix.length).fill(false);
    let col = new Array(matrix[0].length).fill(false);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) hash.push([i, j]);
        }
    }

    for (let [r, c] of hash) {
        if (!row[r]) {
            matrix[r].fill(0);
            row[r] = true;
        }
        if (!col[c]) {
            for (let i = 0; i < matrix.length; i++) matrix[i][c] = 0;
            col[c] = true;
        }
    }
}
