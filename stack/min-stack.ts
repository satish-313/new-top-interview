class MinStack {
    stack: number[];
    min: number[];

    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
            this.min.push(val);
        }
    }

    pop(): void {
        let val = this.stack.pop();
        if (val === this.min[this.min.length - 1]) {
            this.min.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}
