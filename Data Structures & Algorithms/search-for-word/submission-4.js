class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const M = board.length;
        const N = board[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const dfs = (i, j, index) => {
            if (board[i][j] != word[index]) return false;

            if (index === word.length - 1) {
                return board[i][j] == word[index];
            }

            const originalChar = board[i][j];
            board[i][j] = "x";

            for (let [x, y] of directions) {
                const nextRow = i + x;
                const nextCol = j + y;

                if (
                    nextRow < 0 ||
                    nextRow == M ||
                    nextCol < 0 ||
                    nextCol == N ||
                    board[nextRow][nextCol] === "x"
                )
                    continue;
                if (dfs(nextRow, nextCol, index + 1)) return true;
            }

            board[i][j] = originalChar;

            return false;
        };

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (dfs(i, j, 0, 0)) return true;
            }
        }

        return false;
    }
}
