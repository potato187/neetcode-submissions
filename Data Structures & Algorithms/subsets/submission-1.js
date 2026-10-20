class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const N = nums.length - 1;

        const dfs = (index, t = []) => {
            if (index > N) {
                result.push(t);
                return;
            }
            dfs(index + 1, t);
            dfs(index + 1, [...t, nums[index]]);
        };

        dfs(0);

        return result;
    }
}
