function minSubArrayLen(target: number, nums: number[]): number {
    let min = Infinity;
    let l = 0;
    let sum = 0;

    for (let r = 0; r < nums.length && l <= r; r++) {
        sum += nums[r];
        if (sum < target) continue;
        while (sum >= target) {
            min = Math.min(min, r - l + 1);
            sum -= nums[l++];
        }
    }

    return min === Infinity ? 0 : min;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1]));
