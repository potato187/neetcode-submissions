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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
         const p_queue = [p];
  const q_queue = [q];

  while (p_queue.length > 0 || q_queue.length > 0) {
    const p_node = p_queue.shift();
    const q_node = q_queue.shift();

    if (!p_node && !q_node) continue;
    if (p_node && !q_node || !p_node && q_node || p_node && q_node && p_node.val !== q_node.val) return false;

    p_queue.push(p_node.left, p_node.right);
    q_queue.push(q_node.left, q_node.right);
  }


  return true;
    }
}
