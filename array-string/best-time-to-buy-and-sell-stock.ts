function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let r = 0;

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[r];

        if (profit < 0) r = i;
        maxProfit = Math.max(profit,maxProfit)
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 5, 4, 3, 2, 1])); // 0
