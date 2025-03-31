/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sellPrice = 0;
    let buyPrice = prices[0]
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < buyPrice) {
            buyPrice = prices[i];
        }
        else {
            sellPrice = Math.max(sellPrice, prices[i] -buyPrice);
        }
    }
    return sellPrice;
};