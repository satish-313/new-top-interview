function strStr(haystack: string, needle: string): number {
    function isSubStr(idx: number): boolean {
        for (let char of needle) {
            if (char !== haystack[idx]) return false;
            idx += 1;
        }

        return true;
    }

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (isSubStr(i)) return i;
    }

    return -1;
}
