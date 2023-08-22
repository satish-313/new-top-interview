function findSubstring(s: string, words: string[]): number[] {
    const res: number[] = [];
    const map = new Map<string, number>();
    const len = words[0].length;
    const arr = new Array(words.length).fill(0);

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (map.has(word)) {
            let idx = map.get(word)!;
            arr[idx]++;
        } else {
            map.set(word, i);
            arr[i]++;
        }
    }
    console.log(s.length, words.length * len);
    for (let i = 0; i < s.length - len * words.length + 1; i++) {
        let word = "";
        for (let j = 0; j < len; j++) word += s[j + i];

        if (map.has(word)) {
            let count = 1;
            let idx = map.get(word)!;
            let temp = new Array(words.length).fill(0);
            console.log("i ", i);

            while (temp[idx] < arr[idx]) {
                temp[idx]++;
                console.log("before ", word, count);
                word = "";
                for (let j = 0; j < len; j++) {
                    word += s[count * len + j + i];
                }
                console.log("after ", word, count);
                if (map.has(word)) idx = map.get(word)!;
                else break;
                if (temp[idx] >= arr[idx]) {
                    break;
                }
                count += 1;
                console.log("after count ", word, count);
            }

            if (count === words.length) res.push(i);
        }
    }

    return res;
}

// console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
// console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
console.log(
    findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
);
function bestfindSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    if (!s || !words || words.length === 0) return result;

    const wordCount: Map<string, number> = new Map();
    const wordLen: number = words[0].length;

    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) ?? 0) + 1);
    }

    for (let i = 0; i < wordLen; i++) {
        let left: number = i;
        let right: number = i;
        const windowCount: Map<string, number> = new Map();

        while (right + wordLen <= s.length) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (!wordCount.has(word)) {
                windowCount.clear();
                left = right;
            } else {
                windowCount.set(word, (windowCount.get(word) ?? 0) + 1);
                while (windowCount.get(word)! > wordCount.get(word)!) {
                    const leftWord = s.substring(left, left + wordLen);
                    windowCount.set(leftWord, windowCount.get(leftWord)! - 1);
                    left += wordLen;
                }

                if (right - left === wordLen * words.length) {
                    result.push(left);
                }
            }
        }
    }
    return result;
}