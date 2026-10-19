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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const queue = [root];
        const result = [];

        while (queue.length > 0) {
            const size = queue.length;
            if (size > 0) {
                result.push(queue[size - 1].val);
            }

            for (let idx = 0; idx < size; idx++) {
                const node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return result;
    }
}
