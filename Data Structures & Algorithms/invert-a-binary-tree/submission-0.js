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
   * @return {TreeNode}
   */
  invertTree(root) {
    const recursion = (root) => {
      if (root === null) return root;
      const node_tmp = root.right;
      root.right = root.left;
      root.left = node_tmp;
      recursion(root.right);
      recursion(root.left);
    }

    recursion(root);

    return  root;
  }
}
