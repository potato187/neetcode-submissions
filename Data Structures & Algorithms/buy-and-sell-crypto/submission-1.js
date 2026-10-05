class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    if (prices.length === 0) return 0;
    let profit = 0;

    for (let i = 0, l = prices.length; i < l - 1; i++) {
      for (let j = i + 1; j < l; j++) {
        profit = Math.max(prices[j] - prices[i], profit);
      }
    }

    return profit;
  }
}