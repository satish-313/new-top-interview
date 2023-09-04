function merge(intervals: [number, number][]): number[][] {
    if (intervals.length === 1) return intervals;

    intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
    const res: [number, number][] = [];

    let j = 1;
    let min: number = intervals[0][0];
    let max: number = intervals[0][1];

    while (j < intervals.length) {
        let next = intervals[j];

        while (next && max >= next[0]) {
            j += 1;
            max = Math.max(max, next[1]);
            next = intervals[j];
        }
        j -= 1;
        res.push([min, max]);
        // console.log(res);
        if (!next) break;
        min = next[0];
        max = next[1];
        // console.log(min, max);
        j += 1;
    }
    return res;
}

console.log(
    merge([
        [1, 4],
        [2, 6],
        [8, 16],
        [15, 18],
    ])
);
console.log(
    merge([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ])
);
