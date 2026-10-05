class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let left = 0;
	let right = left + 1;
	const len = nums.length;

	while (left < len) {
		let sub = target - nums[left];
		if (sub == nums[right]) {
			return [left, right];
		}

		if (left === len - 1) {
			return [];
		} else if (right == len - 1) {
			left++;
			right = left + 1;
		} else {
			right++;
		}
	}
	return [];
    }
}
