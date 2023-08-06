function jump(nums: number[]): number {
    if (nums.length === 1) return 0;
    let n = nums.length - 1;
    let dp = new Array(nums.length).fill(0);

    for (let i = n; i >= 0; i--) {
        if (nums[i] + i >= n) {
            dp[i] = 1;
        } else {
            let min = Infinity;
            for (let j = i + 1; j < nums.length && j <= nums[i] + i; j++) {
                min = Math.min(min, dp[j]);
            }

            dp[i] = 1 + min;
            console.log(i, dp, min);
        }
    }
    console.log(dp);
    return dp[0];
}

// console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));

function bestJump(nums: number[]): number {
    let len = nums.length - 1;
    let step = 0;
    let maxIdx = nums[0];
    let count = 0;

    for (let i = 0; i <= len; i++) {
        let num = nums[i];
        if (step >= len) return count;
        if (i + num > maxIdx) maxIdx = i + num;
        if (i === step) {
            count += 1;
            step = maxIdx;
        }
    }

    return count;
}
