class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);


            if (nums[mid] === target) return mid;

            const isLeftSorted = nums[left] <= nums[mid];

            if (isLeftSorted) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                    console.log('xx');
                } else {
                    right = mid - 1;
                }
            }
        }


        return -1;
    }
}
