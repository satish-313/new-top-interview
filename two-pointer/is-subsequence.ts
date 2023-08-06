function isSubsequence(s: string, t: string): boolean {
    if (s.length > t.length) return false;
    let i = 0;
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[j]) j++;
    }

    return j === s.length;
}
