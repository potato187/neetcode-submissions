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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let fast;
        let slow;

        let node = head;
        while (n > 0) {
            fast = node;
            node = node.next;
            n--;
        }

        node = head;
        while (fast !== undefined && fast?.next !== null) {
            fast = fast.next;
            slow = node;
            node = node.next;
        }

        if (slow !== undefined) {
            node = slow.next;
            slow.next = slow.next?.next;
        } else {
            node = head;
            head = head.next;
        }

        if (node !== undefined) {
            node.next = null;
        }

        return head;
    }
}
