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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        const dfs = (node) => {
            if (!node) return 0;

            let lHeight = dfs(node.left);
            let rHeight = dfs(node.right);

            maxDiameter = Math.max(lHeight + rHeight, maxDiameter);

            return 1 + Math.max(lHeight, rHeight);
        };
        dfs(root);

        return maxDiameter;
    }
}
