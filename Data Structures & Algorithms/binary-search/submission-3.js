class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
const recursive = (nums, left, right, target) => {
      if (left > right) return -1;
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] > target) return recursive(nums, left, mid - 1, target)
      else return recursive(nums, mid + 1, right, target);
    }

    return recursive(nums, 0, nums.length, target);
    }
}
