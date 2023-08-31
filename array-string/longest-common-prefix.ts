function longestCommonPrefix(strs: string[]): string {
    let p = strs[0];

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p[j] != strs[i][j]) {
                p = p.slice(0, j);
                break;
            }
        }
    }
    return p
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
