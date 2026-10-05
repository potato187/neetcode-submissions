class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];

    for (const c of s) {
      if (stack.length === 0) {
        stack.push(c);
      } else {
        const pair = stack[stack.length - 1];
        if (pair === '(' && c === ')' ||
          pair === '{' && c === '}' ||
          pair === '[' && c === ']') {
          stack.pop();
        } else {
          stack.push(c);
        }
      }
    }

    return stack.length === 0;
    }
}
