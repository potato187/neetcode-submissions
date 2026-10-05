class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = nums[0];
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            min = Math.min(min, nums[mid]);

            if (nums[left] <= nums[mid]) {
                min = Math.min(min, nums[left]);
                left = mid + 1;
            } else {
                min = Math.min(min, nums[mid + 1]);
                right = mid - 1;
            }
        }

        return min;
    }
}
