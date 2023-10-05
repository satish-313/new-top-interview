function calculate(s: string): number {
    function isNumber(char: string): boolean {
        let val = char.charCodeAt(0);
        if (val >= 48 && val <= 58) {
            return true;
        }
        return false;
    }

    function getNumber(i: number): string {
        let str = "";
        for (let j = i; j < s.length; j++) {
            if (isNumber(s[j])) str += s[j];
            else break;
        }
        return str;
    }

    type outT = {
        jump: number;
        val: number;
    };

    function rec(idx: number): outT {
        let stack: number[] = [];
        let sign: string[] = [];

        for (let i = idx; i < s.length; i++) {
            if (s[i] === " ") continue;

            if (isNumber(s[i])) {
                let str = getNumber(i);
                stack.push(Number(str));
                i += str.length;

                if (stack.length > 1) {
                    let a = stack.pop()!;
                    let b = stack.pop()!;
                    stack.push(sign.pop() === "+" ? a + b : b - a);
                } else {
                    if (sign.length > 0) {
                        let a = stack.pop()!;
                        stack.push(sign.pop() === "+" ? +a : -a);
                    }
                }
            }

            if (s[i] === "+" || s[i] === "-") sign.push(s[i]);

            if (s[i] === ")") {
                return { jump: i, val: stack[0] };
            }
            if (s[i] === "(") {
                let r = rec(i + 1);
                i = r.jump;
                let op = sign.pop();
                if (op) {
                    if (op === "+") {
                        if (stack.length > 0) {
                            let a = stack.pop()!;
                            stack.push(a + r.val);
                        } else stack.push(r.val);
                    } else {
                        if (stack.length > 0) {
                            stack.push(stack.pop()! - r.val);
                        } else stack.push(-r.val);
                    }
                } else stack.push(r.val);
            }
        }
        return { jump: 0, val: stack[0] };
    }

    return rec(0).val;
}

const test: string[] = [
    "1 + 1",
    " 2-1 + 2",
    "(1+(4+5+2)-3)+(6+8)",
    "1-(     -2)",
];
//
test.forEach((t) => console.log(calculate(t)));
