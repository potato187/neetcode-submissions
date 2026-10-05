/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root, depth = 0) {
    if (!root) return depth;
    if (root.left !== null && root.right === null) return this.maxDepth(root.left, depth + 1);
    else if (root.left === null && root.right !== null) return this.maxDepth(root.right, depth + 1);
    else return Math.max(this.maxDepth(root.left, depth + 1), this.maxDepth(root.right, depth + 1));
  }
}
