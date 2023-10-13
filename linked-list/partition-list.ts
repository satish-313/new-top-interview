import { ListNode } from "./add-two-numbers.ts";
import { createListNode, showListNode } from "./merge-two-sorted-list.ts";

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) return head;
    let small: ListNode | null = null;
    let great: ListNode | null = null;
    let cur: ListNode | null = head;
    let ans = head;
    let ghead = head;

    while (cur) {
        if (cur.val >= x) {
            if (great) {
                great.next = cur;
                great = great.next;
            } else {
                great = cur;
                ghead = great;
            }
        } else {
            if (small) {
                small.next = cur;
                small = small.next;
            } else {
                small = cur;
                ans = small;
            }
        }
        cur = cur.next;
    }

    if (!great) return head;
    if (!small) return head;
    great.next = null;
    small.next = ghead;

    return ans;
}

function partitionBest(head: ListNode | null, x: number): ListNode | null {
    if (!head) return head;
    let small = new ListNode(0);
    let great = new ListNode(0);
    let cur: ListNode | null = head;
    let ans = small;
    let ghead = great;

    while (cur) {
        if (cur.val >= x) {
            great.next = cur;
            great = great.next;
        } else {
            small.next = cur;
            small = small.next;
        }
        cur = cur.next;
    }
    if (!ans.next) return head;
    if (!ghead.next) return head;

    great.next = null;
    small.next = ghead.next;

    return ans.next;
}
let h = createListNode([1, 4, 3, 2, 5, 2]);
console.log(showListNode(partition(h, 3)));
