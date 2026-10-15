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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (k <= 1) return head;

        let count = 0;
        let point = head;

        while (point) {
            count++;
            point = point.next;
        }

        const steps = Math.floor(count / k);
        let prev = null;
        let cur = head;
        let step = 0;
        let prevTail = null,
            tail = null;

        while (step < steps) {
            let count = k;
            prev = undefined;
            tail = cur;

            while (count > 0) {
                const next = cur.next;
                cur.next = prev;
                prev = cur;
                cur = next;
                count--;
            }

            if (step === 0) {
                head = prev;
            }

            if (prevTail) {
                prevTail.next = prev;
            }

            prevTail = tail;

            step++;
        }

        tail.next = cur;

        return head;
    }
}
