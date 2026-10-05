class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;

    const prefix = Array(len);
    prefix[0] = 1;

    for (let i = 1; i < len; i++) {
      prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    const subfix = Array(len);
    subfix[len - 1] = 1;

    for (let i = len - 2; i >= 0; i--) {
      subfix[i] = nums[i + 1] * subfix[i + 1];
    }


    const res = Array(len);

    for (let i = 0; i < len; i++) {
      res[i] = (prefix[i]) * (subfix[i]);
    }

    return res;
    }
}
