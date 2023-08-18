function maxArea(heights: number[]): number {
    let max = 0;
    let l = 0,
        r = heights.length - 1;

    while (l < r) {
        max = Math.max(max, (r - l) * Math.min(heights[l], heights[r]));
        if (heights[l] === heights[r]) {
            l++;
            r--;
        } else if (heights[l] > heights[r]) {
            r--;
        } else l++;
    }
    return max;
}
