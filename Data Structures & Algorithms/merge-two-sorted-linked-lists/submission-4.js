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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
      mergeTwoLists(list1, list2) {
    if (!list1 && !list2) return list2;
    if (!list1 && list2) return list2;
    if (list1 && !list2) return list1;

    let pA = list1;
    let pB = list2;

    let head = new ListNode();
    let tail = new ListNode();

    head.next = tail;



    while (pA || pB) {
      if (pA && pB) {
        if (pA.val > pB.val) {
          tail.next = new ListNode(pB.val);
          tail = tail.next;
          pB = pB.next;
        } else {
          tail.next = new ListNode(pA.val);
          tail = tail.next;
          pA = pA.next;
        }
      } else if (pA) {
        tail.next = new ListNode(pA.val);
        tail = tail.next;
        pA = pA.next;
      } else {
        tail.next = new ListNode(pB.val);
        tail = tail.next;
        pB = pB.next;
      }
    }


    return head.next.next;
  }
}
