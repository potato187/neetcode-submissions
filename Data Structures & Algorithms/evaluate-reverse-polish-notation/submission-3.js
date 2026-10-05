class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
     const operators = {
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  const stack = [];

  for (const token of tokens) {
    if (!operators[token]) {
      stack.push(+token);
    } else {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(operators[token](b, a));
    }
  }
  return stack.pop();
    }
}
