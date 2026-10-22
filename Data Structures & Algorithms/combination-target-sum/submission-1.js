class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const path = [];
        const result = [];

        const dfs = (index, remainingSum) => {
            if (remainingSum === 0) {
                result.push([...path]);
                return;
            }

            for (let curIdx = index; curIdx < nums.length; curIdx++) {
                const num = nums[curIdx];
                if (num > remainingSum) continue;
                path.push(num);
                dfs(curIdx, remainingSum - nums[curIdx]);
                path.pop();
            }
        };

        dfs(0, target);

        return result;
    }
}
