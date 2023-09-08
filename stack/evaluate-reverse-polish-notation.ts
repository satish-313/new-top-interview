function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (let t of tokens) {
        if (t === "+") {
            let a = stack.pop()!;
            let b = stack.pop()!;
            stack.push(a + b);
        } else if (t === "-") {
            let a = stack.pop()!;
            let b = stack.pop()!;
            stack.push(b - a);
        } else if (t === "*") {
            let a = stack.pop()!;
            let b = stack.pop()!;
            stack.push(a * b);
        } else if (t === "/") {
            let a = stack.pop()!;
            let b = stack.pop()!;
            stack.push(Math.floor(b / a));
        } else stack.push(Number(t));

        console.log(stack)
    }

    return stack[0];
}

// console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
// console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) // 22
