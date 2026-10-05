class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
            const square = new Map();
    let count_zero = 0;
    for (let x = 0; x < 9; x++) {
      const row_set = new Set();
      const column_set = new Set();

      for (let y = 0; y < 9; y++) {
        const square_key = Math.floor(x / 3) * 3 + Math.floor(y / 3);

        if (!square.has(square_key)) {
          square.set(square_key, new Set());
        }

        const row_value = board[x][y];

        if (square.get(square_key).has(row_value) || row_set.has(row_value)) {
          return false;
        } else if (row_value !== '.') {
          square.get(square_key).add(row_value);
          row_set.add(row_value);
        }

        const column_value = board[y][x];
        if (column_set.has(column_value)) return false;
        else if (column_value !== '.') {
          column_set.add(column_value);
        }
      }



      if (column_set.size === 0 && row_set.size === 0) {
        count_zero++;
      }
    }


    return count_zero <= 9;
    }
}
