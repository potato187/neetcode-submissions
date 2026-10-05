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
   * @return {void}
   */
  reorderList(head) {

    let tail = head;
    let length = 0;
    while (tail) {
      length++;
      tail = tail.next;
    }

    let left_size = Math.round(length / 2);


    tail = head;
    let prev_tail = head;
    while (left_size > 0) {
      left_size--;
      prev_tail = tail;
      tail = tail.next;
    }

    prev_tail.next = null;


    let reverser = null;
    while (tail) {
      const nodeNext = tail.next;
      tail.next = reverser;
      reverser = tail;
      tail = nodeNext;
    }



    let pointer = head;
    while (reverser) {
      const pointer_next = pointer.next;
      const reverser_next = reverser.next;

      pointer.next = reverser;
      reverser.next = pointer_next;

      pointer = pointer_next
      reverser = reverser_next;
    }


    return length;
  }
}

