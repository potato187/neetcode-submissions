class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const len = Math.round((str.length) / 2);

  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) return false
  }
  
  return true;
    }
}
