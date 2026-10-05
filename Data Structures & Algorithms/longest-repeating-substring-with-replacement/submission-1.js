class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {let max_f = 0;
    let L = 0;
    let len = s.length;
    const charMap = new Map();

    for (let R = 0; R < len; R++) {

      const size = (charMap.get(s[R]) ?? 0) + 1;
      charMap.set(s[R], size);
      const window_size = R - L + 1;

      max_f = Math.max(size, max_f);

      if (window_size - max_f > k) {
        charMap.set(s[L], charMap.get(s[L]) - 1);
        L++;
      }

    }



    return len - L;}
}
