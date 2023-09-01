function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    let sa = new Array(26).fill(0);
    let ta = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        sa[s.charCodeAt(i) - 97]++;
        ta[t.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (sa[i] != ta[i]) return false;
    }

    return true;
}
