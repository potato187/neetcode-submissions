class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  trap(heights) {
    let left = 0;
    let right = heights.length - 1;
    let max_left = heights[left];
    let max_right = heights[right];
    let total = 0;

    while (left <= right) {
      if (max_left <= max_right) {
        const sub = max_left - heights[left];
        total += (sub > 0 ? sub : 0);
        left++;
        max_left = Math.max(max_left, heights[left]);
      } else {
        const sub = max_right - heights[right];
        total += (sub > 0 ? sub : 0);
        right--;
        max_right = Math.max(max_right, heights[right]);
      }
    }


    return total;
  }
}
