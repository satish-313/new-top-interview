import { ListNode } from "./add-two-numbers.ts";
import { createListNode, showListNode } from "./merge-two-sorted-list.ts";

function deleteDuplicate(head: ListNode | null): ListNode | null {
    if (!head) return head;

    let res = new ListNode(0);
    let cur = res;

    while (head) {
        if (head && head.next && head.val === head.next.val) {
            while (head && head.next && head.val === head.next.val) {
                head = head.next;
            }
        } else if (head) {
            cur.next = head;
            cur = cur.next;
        }
        head = head.next;
    }
    cur.next = null;
    return res.next;
}

// let arr = [
//     [1, 2, 3, 3, 4, 4, 5],

// ]
let h1 = createListNode([1, 2, 3, 3, 4, 4, 5]);

console.log(showListNode(deleteDuplicate(h1)));
