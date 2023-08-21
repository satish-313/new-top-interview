function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;
    let ran = new Array(26).fill(0);
    let dp = new Array(26).fill(0);

    for (let i = 0; i < ransomNote.length; i++) {
        ran[ransomNote.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < magazine.length; i++) {
        dp[magazine.charCodeAt(i) - 97]++;
    }

    function check(): boolean {
        for (let i = 0; i < 26; i++) {
            if (ran[i] > dp[i]) return false;
        }
        return true;
    }

    return check();
}
