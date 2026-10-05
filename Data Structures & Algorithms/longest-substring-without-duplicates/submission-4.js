class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    if (!s.length) return 0;
    if (s.length === 1) return 1;

    let left = 0;
    let right = 0;
    let dup = new Set();
    let count = 0;
    let isFull = true;


    while (right < s.length) {
      const char = s[right];

      if (dup.has(char)) {
        count = Math.max(right - left, count);
        dup.clear();
        left++;
        right = left;
        isFull = false;
      } else {
        dup.add(char)
        right++;
      }
    }
    return Math.max(count, dup.size);
  }
}
