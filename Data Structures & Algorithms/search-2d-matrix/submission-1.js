class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let t = 0;
    let b = matrix.length - 1;

    while (t <= b) {
      const m = t + Math.floor((b - t) / 2);
      if (matrix[m][0] === target) return true;
      else if (matrix[m][0] < target) {
        t = m + 1;
      } else {
        b = m - 1;
      }
    }

    if (b < 0) return false;

    let L = 0, R = matrix[b].length;
    while (L <= R) {
      const m = L + Math.floor((R - L) / 2);

      if (matrix[b][m] === target) return true;
      else if (matrix[b][m] < target) {
        L = m + 1;
      } else {
        R = m - 1;
      }
    }

    return false;
  }
}