class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];

        let maxNum = nums[0], maxNumIdx = -1;
        let idx = 0;

        while (idx + k <= nums.length) {
            if (maxNumIdx < idx) {
                maxNum = nums[idx];
                maxNumIdx = idx;
                for (let i = idx; i < idx + k; i++) {
                    if (nums[i] >= maxNum) {
                        maxNum = nums[i];
                        maxNumIdx = i;
                    }
                }
            } else {
                if (nums[idx + k - 1] >= maxNum) {
                    maxNum = nums[idx + k - 1];
                    maxNumIdx = idx + k - 1;
                }
            }
            result.push(maxNum);
            idx++;
        }


        return result;
    }
}
