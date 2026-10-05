class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const db = new Set();
        for(const num of nums){
            if(db.has(num)) return true;
            else db.add(num);
        }
        return false;
    }
}
