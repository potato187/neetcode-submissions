class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        const targeCharCount = {};
        const windowCharCount = {};
        let minLengthWindow = s.length + 1;
        let minWindowStart = -1;

        for (let c of t) {
            if (targeCharCount[c] === undefined) {
                targeCharCount[c] = 1;
            } else {
                targeCharCount[c]++;
            }
        }

        let left = 0,
            right = 0,
            matchedChars = 0;

        while (right < s.length) {
            const char = s[right];

            if (windowCharCount[char] === undefined) {
                windowCharCount[char] = 1;
            } else {
                windowCharCount[char]++;
            }

            if (windowCharCount[char] <= targeCharCount[char]) {
                matchedChars++;
            }

            while (matchedChars == t.length) {
                if (right - left + 1 < minLengthWindow) {
                    minWindowStart = left;
                    minLengthWindow = right - left + 1;
                }
                const char = s[left];
                windowCharCount[char]--;
                if (windowCharCount[char] < targeCharCount[char]) {
                    matchedChars--;
                }
                left++;
            }
            right++;
        }

        return minWindowStart >= 0
            ? s.substring(minWindowStart, minWindowStart + minLengthWindow)
            : "";
    }
}
