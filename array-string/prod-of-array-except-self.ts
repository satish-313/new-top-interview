function productExceptSelf(nums: number[]): number[] {
    let prod = 1;
    let noZeros = 0;
    for (let num of nums) {
        if (num != 0) {
            prod *= num;
        } else noZeros += 1;
    }

    let ans: number[] = [];

    for (let num of nums) {
        if (noZeros === 0) ans.push(prod / num);
        else if (num === 0 && noZeros === 1) ans.push(prod);
        else ans.push(0);
    }

    return ans;
}
