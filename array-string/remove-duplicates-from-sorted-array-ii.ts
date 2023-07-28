function removeDuplicates(nums: number[]): number {
    let idx = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i - 1] === nums[i]) {
            let count = 1;
            while (i < n && nums[i - 1] === nums[i]) {
                count += 1;
                if (count < 3) nums[idx++] = nums[i];
                i += 1;
            }
            i -= 1;
        } else {
            nums[idx++] = nums[i];
        }
    }

    console.log(nums.slice(0, idx));
    return idx;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 1, 2, 3, 3]));
