class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       	const record = {};
	const bucket = Array.from({ length: nums.length + 1 }, () => []);

	for (const num of nums) {
		record[num] = (record[num] ?? 0) + 1;
	}

	for (const count in record) {
		bucket[record[count]].push(+count);
	}

	const rest = [];
	for (let i = bucket.length - 1; i > 0; i--) {
		if (bucket[i].length > 0) {
			rest.push(...bucket[i]);
			if (rest.length === k) {
				return rest;
			}
		}
	}

	return rest;
}}
