class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const sorted = Array(position.length)
            .fill(0)
            .map((_, index) => index)
            .sort((indexA, indexB) => position[indexB] - position[indexA]);
        let fleetCount = 0;
        let previousArriveTime = 0;

        for (let carIndex of sorted) {
            const timeToReachTarget = (target - position[carIndex]) / speed[carIndex];

            if (timeToReachTarget > previousArriveTime) {
                fleetCount++;
                previousArriveTime = timeToReachTarget;
            }
        }

        return fleetCount;
    }
}
