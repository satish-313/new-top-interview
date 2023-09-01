function isHappy(n: number): boolean {
    const set = new Set<number>();
    let sum = 0;

    while (n) {
        if (set.has(n)) break;
        set.add(n);

        while (n) {
            let r = n % 10;
            sum += r * r;
            n = Math.floor(n / 10);
        }
        n = sum;
        sum = 0;
        console.log(n)
        if (n === 1) return true;
    }

    return false;
}

console.log(isHappy(7));
