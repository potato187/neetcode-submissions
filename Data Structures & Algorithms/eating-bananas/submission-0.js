class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxPile = Math.max(...piles);
        let left = 1;
        let right = maxPile;
        let firstTrueIndex = -1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            const totalHours = piles.reduce((prev, cur) => prev + Math.floor((cur + mid - 1) / mid), 0);

            if (totalHours <= h) {
                firstTrueIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        };

        return firstTrueIndex;
    }
}
