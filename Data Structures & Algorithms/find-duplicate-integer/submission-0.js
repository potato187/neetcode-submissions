class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let left = 0,
            right = nums.length - 1;
        let firstTrueIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let count = 0;
            for (let num of nums) {
                if (num <= mid) {
                    count++;
                }
            }

            if (count > mid) {
                right = mid - 1;
                firstTrueIndex = mid;
            } else {
                left = mid + 1;
            }
        }

        return firstTrueIndex;
    }
}
