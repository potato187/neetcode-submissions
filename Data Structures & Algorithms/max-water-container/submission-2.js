class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
   const length = heights.length - 1;
    let max = 0;
    let left = 0;
    let right = length;
    while (left < length) {
      max = Math.max((right - left) * Math.min(heights[left], heights[right]), max);
      if (right - left === 1) {
        left++;
        right = length;
      } else {
        right--;
      }
    }
    return max;
    }
}
