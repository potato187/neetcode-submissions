class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(numbers) {
          const result = [];
    const sorted = numbers.sort((a, b) => a - b);
    for (let i = 0, l = sorted.length; i < l; i++) {
      if (sorted[i] > 0) break;
      if (i > 0 && sorted[i - 1] === sorted[i]) continue;

      let l = i + 1;
      let r = sorted.length - 1;

      while (l < r) {
        const sum = sorted[i] + sorted[l] + sorted[r];
        if (sum === 0) {
          result.push([sorted[i], sorted[l], sorted[r]]);
          l++;
          r--;
          while (l < r && sorted[l - 1] === sorted[l]) {
            l++;
          }
        } else if (sum > 0) {
          r--;
        } else {
          l++;
        }
      }
    }
    return result;
    }
}
