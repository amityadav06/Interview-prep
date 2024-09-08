
function maxSell(prices) {
    if (prices.length === 0) return 0;
    
    let i = prices[0];
    let maxProfit = 0;
    
    for (let j = 1; j < prices.length; j++) {        
        // Update the minimum price seen so far
        i = Math.min(i, prices[j]);
        
        // Calculate profit if selling at the current price
        let profit = prices[j] - i;
        
        // Update the maximum profit if the current profit is greater
        maxProfit = Math.max(maxProfit, profit);
    }
    
    return maxProfit;
}

console.log(maxSell([7,1,5,3,6,4])); // Output should be 5
