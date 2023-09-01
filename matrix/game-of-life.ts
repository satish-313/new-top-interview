function gameOfLife(board: number[][]): void {
    const row = board.length;
    const col = board[0].length;

    let dir: [number, number][] = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
    ];

    let dead: [number, number][] = [];
    let alive: [number, number][] = [];

    function aliveNeighbors(r: number, c: number): number {
        let count = 0;
        for (let [x, y] of dir) {
            let rx = r + x;
            let cy = c + y;

            if (rx < 0 || cy < 0 || rx >= row || cy >= col) continue;
            if (board[rx][cy] === 1) count += 1;
        }

        return count;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let n = aliveNeighbors(i, j);
            if (board[i][j] === 1) {
                if (n === 1 || n === 0) dead.push([i, j]);
                else if (n > 3) dead.push([i, j]);
            } else {
                if (n === 3) alive.push([i, j]);
            }
        }
    }

    for (let [r, c] of dead) {
        board[r][c] = 0;
    }

    for (let [r, c] of alive) {
        board[r][c] = 1;
    }
}

gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
]);
