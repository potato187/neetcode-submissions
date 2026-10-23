class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const path = [];
        const result = [];
        const cached = new Set();

        const dfs = (idx) => {
            if (idx >= nums.length) return;

            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }

            for (let curIdx = 0; curIdx < nums.length; curIdx++) {
                const num = nums[curIdx];
                if (cached.has(num)) continue;
                path.push(num);
                cached.add(num);
                dfs(curIdx);
                path.pop();
                cached.delete(num);
            }
        };

        dfs(0);

        return result;
    }
}
