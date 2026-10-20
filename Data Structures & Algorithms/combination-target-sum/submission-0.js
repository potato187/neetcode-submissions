class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(candidates, target) {
        const N = candidates.length - 1;
        const subsets = [];
        /**
         * @params {number} index
         * @params {number} prefixSum
         * @params {number[]} combination
         * @return {void}
         */

        const dfs = (index, prefixSum = 0, combination = []) => {
            if (index > N) return;

            const candidate = candidates[index];
            const K = Math.floor((target - prefixSum) / candidate);
            const repeat = [];
            let idx = 0;

            while (idx <= K) {
                const sum = prefixSum + candidate * idx;
                if (sum === target) {
                    subsets.push([...combination, ...repeat]);
                } else {
                    dfs(index + 1, sum, [...combination, ...repeat]);
                }

                repeat.push(candidate);
                idx++;
            }
        };

        dfs(0);

        return subsets;
    }
}
