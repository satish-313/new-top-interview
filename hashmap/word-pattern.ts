function wordPattern(pattern: string, s: string): boolean {
    let map = new Map<string, string>();
    let map2 = new Map<string, string>();

    let arr = s.split(" ");

    if (pattern.length !== arr.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];

        if (map.has(char)) {
            if (map.get(char) != arr[i]) return false;
        } else map.set(char, arr[i]);

        if (map2.has(arr[i])) {
            if (map2.get(arr[i]) !== char) return false;
        } else map2.set(arr[i], char);
    }

    return true;
}
