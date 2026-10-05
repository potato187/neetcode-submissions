class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
	if (s.length != t.length) return false;
	const dp = Array(26).fill(0);

	for (let i = 0, l = s.length; i < l; i++) {
		let s_index = s[i].charCodeAt(0) - 97;
		let t_index = t[i].charCodeAt(0) - 97;
		dp[s_index]++;
		dp[t_index]--;
	}

	return dp.every((i) => i === 0);
    }
}
