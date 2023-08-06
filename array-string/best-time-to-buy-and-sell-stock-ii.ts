function maxProfit(prices: number[]): number {
    let maxp = 0;

    for (let i = 1; i < prices.length; i++)
        if (prices[i] > prices[i - 1]) maxp += prices[i] - prices[i - 1];

    return maxp;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
