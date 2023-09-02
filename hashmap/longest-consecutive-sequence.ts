function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let max = 0;

    for (let num of nums) {
        let len = 1;
        if (!set.has(num - 1)) {
            while (set.has(num + len)) {
                len += 1;
            }
        }
        max = Math.max(len, max);
    }

    return max;
}
