function rotate(matrix: number[][]): void {
    let n = matrix.length;
    let count = Math.floor(n / 2);
    let jump = n - 1;
    let rMax = n - 1;
    let rMin = 0;
    let cMax = n - 1;
    let cMin = 0;

    for (let i = 0; i < count; i++) {
        let r = i;
        let c = i;

        for (let j = 0; j < jump; j++) {
            let cur = matrix[r][c];
            let next = matrix[r][c];
            do {
                /* right */
                if (c + jump <= cMax) {
                    c = c + jump;
                } else {
                    let t = c + jump - cMax;
                    r = r + t;
                    c = cMax;
                }
                next = matrix[r][c];
                matrix[r][c] = cur;
                cur = next;
                // console.log("right", cur);
                /* down */
                if (r + jump <= rMax) {
                    r = r + jump;
                } else {
                    let t = r + jump - rMax;
                    r = rMax;
                    c = c - t;
                }
                next = matrix[r][c];
                matrix[r][c] = cur;
                cur = next;
                // console.log("down", cur);
                /* left */
                if (c - jump >= cMin) {
                    c = c - jump;
                } else {
                    let t = cMin - (c - jump);
                    r = r - t;
                    c = cMin;
                }
                next = matrix[r][c];
                matrix[r][c] = cur;
                cur = next;
                // console.log("left", cur);
                /* up */
                if (r - jump >= rMin) {
                    r = r - jump;
                } else {
                    let t = cMin - (r - jump);
                    r = rMin;
                    c = c + t;
                }
                next = matrix[r][c];
                matrix[r][c] = cur;
                cur = next;
                // console.log("up", cur);
                // console.log("mat ", matrix);
            } while (r !== i && c !== j);
            c += 1;
        }

        jump -= 2;
        cMax -= 1;
        rMax -= 1;
        cMin += 1;
        rMin += 1;
    }
    // console.log(matrix);
}

function rotateBest(matrix: number[][]): void {
    const length = matrix.length;
    // Horizontal reflect the matrix
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    // Reflect the matrix along diagonal
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[length - 1 - j][length - 1 - i];
            matrix[length - 1 - j][length - 1 - i] = temp;
        }
    }
}

rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
]);
