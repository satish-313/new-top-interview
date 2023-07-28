function removeDuplicates(nums: number[]): number {
    let idx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[idx++] = nums[i];
        }
    }

    return idx;
}
