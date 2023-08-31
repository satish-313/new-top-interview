function intRoman(num: number): string {
    let map = new Map<number, string>([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"],
    ]);
    let arr: number[] = [];

    while (num) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    let ans = "";
    console.log(arr);

    return ans;
}

// console.log(intRoman(3));
// console.log(intRoman(58));
console.log(intRoman(1994));
