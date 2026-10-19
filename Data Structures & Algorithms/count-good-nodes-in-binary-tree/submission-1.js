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
    goodNodes(root) {
        if (!root) return 0;
        let count = 0;
        const dfs = (node, good) => {
            if (node && node.val >= good) {
                count++;
                good = node.val;
            }
            if (node?.left) dfs(node.left, good);
            if (node?.right) dfs(node.right, good);
        };

        dfs(root, root.val);

        return count;
    }
}
