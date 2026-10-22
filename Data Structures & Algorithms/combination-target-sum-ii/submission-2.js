class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates = candidates.sort((a, b) => a - b);
        const result = [];
        const subsets = [];
        const N = candidates.length;

        const dfs = (index, remainingSum = target) => {
            if (remainingSum === 0) {
                result.push([...subsets]);
                return;
            }

            if (index > N || candidates[index] > remainingSum) {
                return;
            }

            for (let curIdx = index; curIdx < N; curIdx++) {
                if (curIdx > index && candidates[curIdx] == candidates[curIdx - 1]) {
                    continue;
                }
                subsets.push(candidates[curIdx]);
                dfs(curIdx + 1, remainingSum - candidates[curIdx]);
                subsets.pop();
            }
        };

        dfs(0);

        return result;
    }
}
