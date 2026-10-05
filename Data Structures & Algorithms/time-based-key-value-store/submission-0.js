class TimeMap {
    constructor() {
        this.times = [];
        this.stored = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.times.push(timestamp);
        if (this.stored.has(timestamp)) {
            this.stored.get(timestamp)[key] = value;
        } else {
            this.stored.set(timestamp, { [key]: value });
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let leftIdx = 0, rightIdx = this.times.length - 1;

        while (leftIdx <= rightIdx) {
            const mid = Math.floor((rightIdx + leftIdx) / 2);
            if (this.times[mid] == timestamp) {
                rightIdx = mid;
                break;
            }

            if (this.times[mid] <= timestamp) {
                leftIdx = mid + 1;
            } else {
                rightIdx = mid - 1;
            }
        }


        while (rightIdx >= 0) {
            const time = this.times[rightIdx];
            if (this.stored.has(time) && this.stored.get(time)[key] !== undefined) return this.stored.get(time)[key];
            rightIdx--;
        }

        return "";
    }
}
