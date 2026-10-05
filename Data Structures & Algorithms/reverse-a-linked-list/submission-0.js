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
     * @return {ListNode}
     */
    reverseList(head) {
           if (!head || !head.next) return head;
    let tail = head.next;
    let reverseList = new ListNode(head.val);


    while (tail) {
      const node = new ListNode(tail.val, reverseList);
      reverseList = node;
      tail = tail.next;
    }

    return reverseList;
    }
}
