import { ListNode } from "./add-two-numbers.ts";
import { createListNode, showListNode } from "./merge-two-sorted-list.ts";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let len = 0;
    let cur = head;
    let res: ListNode | null = null;
    let nextC: ListNode;

    while (cur) {
        len += 1;
        cur = cur.next;
    }
    if (k === len) return head;
    cur = head;

    for (let i = 0; i < Math.floor(len / k); i++) {
        let [h, n, c] = reverse(cur, k);
        if (res === null) {
            res = h;
        } else {
            nextC!.next = h;
        }
        nextC = c;
        cur = n;
    }
    nextC!.next = cur;
    return res;
}

function reverse(
    h: ListNode | null,
    n: number
): [ListNode, ListNode, ListNode] {
    let p: ListNode | null = null;
    let next: ListNode | null = null;
    let cur: ListNode = h!;

    while (h != null && n--) {
        next = h.next;
        h.next = p;
        p = h;
        h = next;
    }

    return [p!, next!, cur];
}

let h = createListNode([1, 2, 3, 4, 5]);
console.log(showListNode(reverseKGroup(h, 2)));
