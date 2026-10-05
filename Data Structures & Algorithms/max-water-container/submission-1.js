class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
      let left = i;
      let right = heights.length - 1;

      while (left < right) {
        max = Math.max((right - left) * Math.min(heights[left], heights[right]), max);
        right--;
      }
    }
    return max;
    }
}
