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

var height = (root) => {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;
        const left = height(root.left);
        const right = height(root.right);

        if (Math.abs(left - right) > 1) return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
