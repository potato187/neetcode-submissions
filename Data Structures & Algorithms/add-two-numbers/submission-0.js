/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sum = new ListNode();

        let remind = 0;

        let node = sum;
        let node1 = l1;
        let node2 = l2;

        while (node1 && node2) {
            const total = node1.val + node2.val + remind;
            const mod = total % 10;
            remind = (total - mod) / 10;

            node.next = new ListNode(mod);

            node = node.next;
            node1 = node1?.next;
            node2 = node2?.next;
        }

        while (node1) {
            const total = node1.val + remind;
            const mod = total % 10;
            remind = (total - mod) / 10;

            node.next = new ListNode(mod);
            node = node.next;
            node1 = node1.next;
        }

        while (node2) {
            const total = node2.val + remind;
            const mod = total % 10;
            remind = (total - mod) / 10;

            node.next = new ListNode(mod);
            node = node.next;
            node2 = node2.next;
        }

        if (remind > 0) {
            node.next = new ListNode(remind);
            node = node.next;
        }

        sum = sum.next;

        return sum;
    }
}
