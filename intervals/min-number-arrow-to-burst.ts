function findMinArrowShots(points: [number, number][]): number {
    type pointT = [number, number];

    points.sort((a: pointT, b: pointT) => a[0] - b[0]);
    let arrow = 1;

    for (let i=1; i<points.length; i++) {
        let point = points[i]
    }

    return arrow;
}

console.log(
    findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ])
);
