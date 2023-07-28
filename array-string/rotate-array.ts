function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;
    if (k === 0) return;

    function gcd(a: number, b: number): number {
        if (a === 0) return b;
        return gcd(b % a, a);
    }

    let g = gcd(k, n);

    for (let i = 0; i < g; i++) {
        let idx = i;
        let cur = nums[idx];

        while (true) {
            let nIdx = (idx + k) % n;
            let next = nums[nIdx];
            nums[nIdx] = cur;
            idx = nIdx;
            cur = next;
            if (idx === i) break;
            console.log(nums)
        }
    }

    console.log(nums);
}

// rotate([1, 2, 3, 4, 5, 6, 7], 2);
// rotate([-1, -1, 3, 99], 2);
rotate([1, 2, 3, 4, 5, 6], 2);
