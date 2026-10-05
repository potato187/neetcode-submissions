class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    let left = 0;
    let right = left + 1;
    let sub = target - numbers[left];
    let length = numbers.length;

    while (left < length - 2) {
      if (sub === numbers[right]) {
        return [left + 1, right + 1];
      } else {
        right++;
      }

      if (right === length - 1) {
        if (numbers[right] === sub) {
          return [left + 1, right + 1];
        } else {
          left++;
          sub = target - numbers[left];
          right = left + 1;
        }
      }
    }

    return [left + 1, right + 1];
    }
}
