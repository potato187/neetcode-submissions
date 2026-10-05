class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    const charMap = new Map();
    for (let char of s1) {
      charMap.set(char, (charMap.get(char) ?? 0) + 1);
    }

    const keys = [...charMap.keys()];

    for (let L = 0, len = s2.length; L < len; L++) {
      const matches = new Map();

      for (let R = L; R < L + s1.length; R++) {
        const char = s2[R];
        matches.set(char, (matches.get(char) ?? 0) + 1);
      }

      if (keys.every((key) => charMap.get(key) === matches.get(key))) {
        return true;
      }
    }

    return false;
  }
}
