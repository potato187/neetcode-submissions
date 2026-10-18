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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const orderTravel = [];
        const queue = [root];
        let depth = 0;

        while (queue.length > 0) {
            const size = queue.length;

            for (let idx = 0; idx < size; idx++) {
                const node = queue.shift();
                if (orderTravel[depth]) {
                    orderTravel[depth].push(node.val);
                } else {
                   orderTravel[depth] = [node.val]
                }
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            depth++;
        }

        return orderTravel;
    }
}
