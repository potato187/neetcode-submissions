class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const path = [];

        const checkWellFormatParenthesis = (parenthesis) => {
            if (parenthesis.length === 0) return true;

            const stack = [];
            for (let i = 0; i < parenthesis.length; i++) {
                const char = parenthesis[i];
                if (!stack.length) {
                    stack.push(char);
                    continue;
                }

                if (stack[stack.length - 1] === "(" && char === ")") {
                    stack.pop();
                } else {
                    stack.push(char);
                }
            }
            return stack.length === 0;
        };

        const backtracking = (startIndex) => {
            if (startIndex === 2 * n) {
                const str = path.join("");
                if (checkWellFormatParenthesis(str)) {
                    result.push(str);
                }
                return;
            }

            path.push("(");
            backtracking(startIndex + 1);
            path.pop();
            path.push(")");
            backtracking(startIndex + 1);
            path.pop();
        };

        backtracking(0);

        return result;
    }
}
