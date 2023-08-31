// time complexity O(n*n) space complexity O(1)
function canCompleteCircuitBF(gas: number[], cost: number[]): number {
    const n = cost.length;

    for (let i = 0; i < n; i++) {
        let f = gas[i];
        let j = i + 1;

        while (f > 0) {
            f -= cost[j - 1 < 0 ? n - 1 : j - 1];
            if (f < 0) break;
            f += gas[j % n];
            if (i === j) return i;
            j = (j + 1) % n;
        }
    }

    return -1;
}

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let tGas = 0;
    let tCost = 0;
    let cGas = 0;
    let sp = 0;

    for (let i = 0; i < n; i++) {
        tGas += gas[i];
        tCost += cost[i];

        cGas += gas[i] - cost[i];
        if (cGas < 0) {
            sp = i + 1;
            cGas = 0;
        }
    }

    return tGas < tCost ? -1 : sp;
}

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1
// console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])); // 4
// console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])); // 4
// console.log(canCompleteCircuit([3, 3, 4], [3, 4, 4])); // -1
// console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
console.log(canCompleteCircuit([1, 2, 3, 4, 5, 5, 70], [2, 3, 4, 3, 9, 6, 2]));
