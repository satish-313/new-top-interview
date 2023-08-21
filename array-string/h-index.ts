function hIndex(citations: number[]): number {
    citations.sort((a,b) => b-a);
    let i = 0;

    while(citations[i] > i) i++

    return i
}

console.log(hIndex([3, 0, 6, 1, 5]));
