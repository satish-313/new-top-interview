function majorityElement(nums: number[]): number {
    let map = new Map<number, number>();
    let max = [0, 0];

    for (let num of nums) {
        if (map.has(num)) {
            let t = map.get(num)!;
            t += 1;
            if (max[1] < t) {
                max[0] = num;
                max[1] = t;
            }
            map.set(num, t);
        } else {
            map.set(num, 1);
            if (max[1] < 1) {
                max[0] = num;
                max[1] = 1;
            }
        }
    }

    return max[0];
}
