function minWindow(s: string, t: string): string {
    if (t.length > s.length) return "";

    let tkeys = new Array(52).fill(0);
    let window = new Array(52).fill(0);
    let sum = 0;
    let l = 0;
    let r = 0;
    let k = 0;

    for (let i = 0; i < t.length; i++) {
        let val = t.charCodeAt(i);
        if (val > 90) tkeys[val + 26 - 97]++;
        else tkeys[val - 65]++;
        let sVal = s.charCodeAt(i);
        if (sVal > 90) window[sVal + 26 - 97]++;
        else window[sVal - 65]++;
    }

    for (let i = 0; i < tkeys.length; i++) {
        sum += tkeys[i];
    }

    function isEqual(): boolean {
        let tsum = 0;
        for (let i = 0; i < 52; i++) {
            if (tkeys[i] === 0) continue;
            else if (tkeys[i] <= window[i]) tsum += tkeys[i];
            else false;
        }
        return tsum === sum;
    }

    let min = Infinity;

    for (let i = t.length; i <= s.length; i++) {
        while (isEqual()) {
            console.log(s.substring(k, i));
            if (i - k + 1 < min) {
                min = i - k + 1;
                r = i;
                l = k;
            }
            console.log("after ", l, r, min, " = ", s.substring(l, r));
            let tVal = s.charCodeAt(k);
            if (tVal > 90) window[tVal + 26 - 97]--;
            else window[tVal - 65]--;
            k += 1;
        }
        let val = s.charCodeAt(i);
        if (val > 90) window[val + 26 - 97]++;
        else window[val - 65]++;
    }

    return s.substring(l, r);
}

// console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("cabwefgewcwaefgcf", "cae"));
