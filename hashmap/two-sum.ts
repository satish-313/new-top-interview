function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i];

        if (map.has(nums[i])) {
            return [map.get(nums[i])!, i];
        }

        map.set(dif, i);
    }

    return [];
}
