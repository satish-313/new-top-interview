function summaryRange(nums: number[]): string[] {
    let ans: string[] = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];

        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) i += 1;

        ans.push(start === nums[i] ? `${nums[i]}` : `${start}->${nums[i]}`);

        i += 1;
    }

    return ans;
}
