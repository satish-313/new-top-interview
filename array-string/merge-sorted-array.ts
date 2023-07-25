function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) {
        console.log(nums1);
        return;
    }
    if (m === 0) {
        for (let i = 0; i < n; i++) nums1[i] = nums2[i];
        console.log(nums1);
        return;
    }

    let nums = nums1.slice(0, m);
    let a = 0;
    let b = 0;

    for (let i = 0; i < n + m; i++) {
        if (a >= m) {
            nums1[i] = nums2[b++];
            continue;
        }

        if (b >= n) {
            nums1[i] = nums[a++];
            continue;
        }

        if (nums[a] > nums2[b]) {
            nums1[i] = nums2[b++];
        } else {
            nums1[i] = nums[a++];
        }
    }
    console.log(nums1);
}

merge([2, 0], 1, [1], 1);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);

function best(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
        else nums1[k--] = nums1[i--];
    }

    while (i >= 0) nums1[k--] = nums1[i--];
    while (j >= 0) nums1[k--] = nums2[j--];
}
