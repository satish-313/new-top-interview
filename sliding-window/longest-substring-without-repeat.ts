function longest(s: string): number {
    let set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l++]);
        }
        set.add(s[r]);
        max = Math.max(max, r - l + 1);
    }

    return max;
}
