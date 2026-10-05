class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const stack = [];
    const result = Array.from({ length: temperatures.length }, () => 0);

    for (let index = 0; index < temperatures.length; index++) {
      if (stack.length === 0) {
        stack.push(index);
        continue;
      }
      const temperature = temperatures[index];

      if (temperatures[stack[stack.length - 1]] >= temperature) {
        stack.push(index);
      } else {
        while (stack.length > 0) {
          const lastIdx = stack[stack.length - 1];
          const lastVal = temperatures[lastIdx];

          if (lastVal >= temperature) {
            break;
          }

          result[lastIdx] = index - lastIdx;
          stack.pop();
        }

        stack.push(index);
      }
    }
    
    return result;
  }
}