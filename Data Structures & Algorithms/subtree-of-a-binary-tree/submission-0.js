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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const dfs = (p, s) => {
            if (!p && !s) return true;
            if ((!p && s) || (p && !s)) return false;
            if (p.val != s.val) return false;
            return dfs(p.left, s.left) && dfs(p.right, s.right);
        };

        const queue = [root];

        while (queue.length > 0) {
            const node = queue.shift();
            const result = dfs(node, subRoot);
            if (result) return true;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return false;
    }
}
