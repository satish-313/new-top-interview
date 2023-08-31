function converts(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let arr: string[] = [];

    let d = 2 + (numRows - 2) * 2;
    console.log(d);
    for (let i = 0; i < numRows; i++) {
        let j = i;
        let c = 0;
        while (j < s.length) {
            arr.push(s[j]);
            if (i === 0 || i === numRows - 1) j += d;
            else {
                if (c%2 ===0 ) j += d - i * 2;
                else j += i * 2
            }

            c += 1;
        }   
    }

    return arr.join("");
}

console.log(converts("PAYPALISHIRING", 3));
