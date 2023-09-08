function isValid(s: string): boolean {
    const map = new Map<string, string>([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);

    const stack: string[] = [];

    for (let char of s) {
        if (!map.has(char)) stack.push(char);
        else {
            if (stack.pop() !== map.get(char)) return false;
        }
    }

    return true;
}
