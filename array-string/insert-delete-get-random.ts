class RandomizedSet {
    map: Map<number, number>;
    arr: number[];

    constructor() {
        this.map = new Map<number, number>();
        this.arr = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;
        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;
        let idx = this.map.get(val)!;
        if (idx === this.arr.length - 1) {
            this.arr.pop();
            this.map.delete(val);
        } else {
            let temp = this.arr.pop()!;
            this.arr[idx] = temp;
            this.map.delete(val);
            this.map.set(temp, idx);
        }
        return true;
    }

    getRandom(): number {
        if (this.arr.length === 0) return -1;
        let randomIdx = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIdx];
    }
}
