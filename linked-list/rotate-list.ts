import { ListNode } from "./add-two-numbers.ts";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) return head;
    let len = 0;

    let cur: ListNode | null = head;

    while (cur) {
        len += 1;
        cur = cur.next;
    }

    k = k % len;

    if (k === 0) return head;

    cur = head;

    k = len - k;
    let prev = cur;

    while (k--) {
        prev = cur;
        cur = cur.next!;
    }
    prev.next = null;
    let h = cur;
    while (cur.next) {
        cur = cur.next;
    }
    cur.next = head;
    return h;
}
