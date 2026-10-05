class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    groupAnagrams(strs) {
        const primes = [
	2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
] 
	const db = {};

	for (let str of strs) {
		let prime = 1;
		for (let char of str) {
			prime *= primes[char.charCodeAt(0) - 97];
		}

		const key = prime.toString();
		if (db[key]) {
			db[key].push(str);
		} else {
			db[key] = [str];
		}
	}

	return Object.values(db);
    }
}
