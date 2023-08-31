function reverseWords(s: string): string {
    let arr = s.trim().split(" ").filter((w) => w != "")
    return arr.reverse().join(" ")
 };