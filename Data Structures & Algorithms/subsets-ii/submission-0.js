class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a, b) => a - b);
        const uniquePath = new Set();
        const result = [];
        const path = [];

        const backtracing = (startIndex, mask = "") => {
            if (startIndex >= nums.length) return;
            if (!uniquePath.has(mask)) {
                result.push([...path]);
                uniquePath.add(mask);
            }

            for (let curIndex = startIndex + 1; curIndex < nums.length; curIndex++) {
                path.push(nums[curIndex]);
                backtracing(curIndex, mask + "," + nums[curIndex].toString());
                path.pop();
            }
        };

        backtracing(-1);

        return result;
    }
}
