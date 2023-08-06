function canJump(nums: number[]): boolean {
    let destination = nums.length - 1;

    for (let i = destination; i >= 0; i--) {
        if (nums[i] + i >= destination) {
            console.log(destination, nums[i]+i);
            destination = i;
        }
    }

    console.log(destination);
    return destination === 0;
}

// console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 0, 0]));
