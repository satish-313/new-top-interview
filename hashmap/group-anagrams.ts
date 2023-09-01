function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 1) return [[strs[0]]];

    const map = new Map<string, number>();
    const ans: string[][] = [];

    for (let str of strs) {
        let a = str.split("").sort().join("");

        if (map.has(a)) {
            let idx = map.get(a)!;
            ans[idx].push(str);
        } else {
            ans.push([]);
            let idx = ans.length - 1;
            ans[idx].push(str);
            map.set(a, idx);
        }
    }

    return ans;
}
