function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let sum = numbers[l] + numbers[r];
        console.log(sum);
        if (target === sum) break;
        else if (target < sum) r -= 1;
        else l += 1;
    }

    return [l + 1, r + 1];
}

console.log(twoSum([2, 7, 11, 15], 9));
