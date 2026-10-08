// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return head;

        const orgHashMap = new Map();
        const mapOrgToClone = new Map();

        let node = head;

        while (node) {
            orgHashMap.set(node, {
                next: node.next,
                random: node.random,
            });
            node = node.next;
        }

        node = head;
        while (node) {
            const copyNode = mapOrgToClone.has(node)
                ? mapOrgToClone.get(node)
                : new Node(node.val);
            const { next, random } = orgHashMap.get(node);

            mapOrgToClone.set(node, copyNode);

            if (next && mapOrgToClone.has(next)) {
                copyNode.next = mapOrgToClone.get(next);
            } else {
                if (!next) {
                    copyNode.next = next;
                } else {
                    const copyNext = new Node(next.val);
                    mapOrgToClone.set(next, copyNext);
                    copyNode.next = copyNext;
                }
            }

            if (random && mapOrgToClone.has(random)) {
                copyNode.random = mapOrgToClone.get(random);
            } else {
                if (!random) {
                    copyNode.random = random;
                } else {
                    const copyRandom = new Node(random.val);
                    mapOrgToClone.set(random, copyRandom);
                    copyNode.random = copyRandom;
                }
            }

            node = node.next;
        }

        return mapOrgToClone.get(head);
    }
}
