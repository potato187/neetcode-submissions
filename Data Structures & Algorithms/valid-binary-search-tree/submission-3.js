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
     * @return {boolean}
     */
    isValidBST(root) {
        const dfs = (node, min = -Infinity, max = Infinity) => {
            if (!node) return true;
            const value = node.val;
            return (
                value > min &&
                value < max &&
                dfs(node.left, min, value) &&
                dfs(node.right, value, max)
            );
        };

        return dfs(root);
    }
}
