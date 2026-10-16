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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const dfs = (node, target) => {
            if (!node) return false;
            if (node == target) return true;
            return dfs(node?.left, target) || dfs(node?.right, target);
        };

        const queue = [root];
        let result = root;

        while (queue.length > 0) {
            const node = queue.shift();

            if (dfs(node, q) && dfs(node, p)) {
                result = node;
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }
}
