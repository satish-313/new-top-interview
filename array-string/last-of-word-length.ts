function lengthOfLastWord(s: string): number {
    let len = 0;
    let word = true;

    for (let i = s.length - 1; i >= 0 && word; i--) {
        while (i >= 0 && s[i] !== " ") {
            word = false;
            len += 1;
            i -= 1;
        }
    }

    return len;
}
