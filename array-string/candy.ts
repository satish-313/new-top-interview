function candy(ratings: number[]): number {
    let can = new Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++)
        if (ratings[i] > ratings[i - 1]) can[i] = can[i - 1] + 1;

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1])
            can[i] = Math.max(can[i], can[i + 1] + 1);
    }

    return can.reduce((sum, num) => sum + num, 0);
}
