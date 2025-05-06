/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let currentA = headA;
    while (currentA) {
        let currentB = headB;
        while(currentB) {
            if (currentA === currentB) {
                return currentA;
            }
            currentB = currentB.next;
            }
            currentA = currentA.next
        }
        return null;
    }

//optimized version

getIntersectionNodeOptimized = function(headA, headB) {
    if (!head || !headB) return null;
    let currentA = headA;
    let currentB = headB;
    while(currentA !== currentB) {
        currentA = currentA ? currentA.next : headB;
        currentB = currentB ? currentB.next : headA;
    }
    return currentA;
}
