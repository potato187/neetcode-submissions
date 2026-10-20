class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const N = nums.length;
        if (N < 1) return [];

        const subsets = Array.from({ length: N }, (_, index) => [[nums[index]]]);

        for (let i = N - 1; i >= 0; i--) {
            for (let j = i + 1; j < N; j++) {
                for (let k = 0; k < subsets[j].length; k++) {
                    subsets[i].push(subsets[i][0].concat(subsets[j][k]));
                }
            }
        }

        const result = subsets.reduce((prev, subsets) => {
            return prev.concat(subsets);
        }, []);

        result.unshift([]);

        return result;
    }
}
