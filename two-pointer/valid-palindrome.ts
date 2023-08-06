function isPalindrome(s: string): boolean {
    let arr: string[] = [];
    let str = s.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57))
            arr.push(str[i]);
    }

    let l = 0;
    let r = arr.length - 1;
    console.log(arr);

    while (l <= r) {
        if (arr[l++] !== arr[r--]) return false;
    }
    return true;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
