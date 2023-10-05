function findMinArrowShots(points: [number, number][]): number {
    type pointT = [number, number];

    points.sort((a: pointT, b: pointT) => a[1] - b[1]);
    let arrow = 1;
    let shoot = points[0][1];

    for (let point of points) {
        if (point[0] > shoot) {
            arrow += 1;
            shoot = point[1];
        }
    }
    return arrow;
}

const test: [number, number][][] = [
    [
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ],
    [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
    ],
    [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
    ],
];

test.forEach((t) => {
    console.log(findMinArrowShots(t));
});
