function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set = new Set();
    let l = 0;
    let r = 0;

    while (r < nums.length && r >= l) {
        while (r < nums.length && r - l <= k) {
            let num = nums[r];
            // console.log("enter ",num);
            if (set.has(num)) return true;
            set.add(num);
            r += 1;
        }
        r -= 1;
        // console.log("enter ",set , l , r)
        
        while (r - l + 1 > k) {
            let num = nums[l++];
            console.log("return ", num);
            set.delete(num);
        }
        // console.log("return ",set, l , r)
        r += 1;
        // console.log("r ",r)
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1, 3], 2));
