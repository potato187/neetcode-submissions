class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const stack = [];
        const left = Array.from({ length: n }, (_) => -1);
        const right = Array.from({ length: n }, (_) => n);

        for (let idx = 0; idx < n; idx++) {
            const height = heights[idx];

            while (stack.length > 0 && heights[stack[stack.length - 1]] >= height) {
                const lastIndex = stack.pop();
                right[lastIndex] = idx;
            }

            if (stack.length > 0) {
                left[idx] = stack[stack.length - 1];
            }

            stack.push(idx);
        }

        let maxArea = heights[0];
        for (let idx = 0; idx < heights.length; idx++) {
            maxArea = Math.max(maxArea, heights[idx] * (right[idx] - left[idx] - 1));
        }

        return maxArea;
    }
}
