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
        if (!p && !q) return true;
        if (!p && q || p && !q) return false;


        const p_queue = [p];
        const q_queue = [q];

        while (p_queue.length > 0 || q_queue.length > 0) {
            const p_node = p_queue.shift();
            const q_node = q_queue.shift();

            if (p_node.val !== q_node.val) return false;
            if (p_node.left && !q_node.left || !p_node.left && q_node.left || p_node.left && q_node.left && p_node.left.val !== q_node.left.val) return false;
            if (p_node.right && !q_node.right || !p_node.right && q_node.right || p_node.right && q_node.right && p_node.right.val !== q_node.right.val) return false;

            if (p_node.left) p_queue.push(p_node.left);
            if (p_node.right) p_queue.push(p_node.right);

            if (q_node.left) q_queue.push(q_node.left);
            if (q_node.right) q_queue.push(q_node.right);
        }


        return p_queue.length == 0 && p_queue.length == q_queue.length;
    }
}
