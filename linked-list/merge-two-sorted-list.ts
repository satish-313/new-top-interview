import { ListNode } from "./add-two-numbers.ts";

function createListNode(nums: number[]): ListNode | null {
    let h = new ListNode(0);
    let r = h;

    for (let num of nums) {
        h.next = new ListNode(num);
        h = h.next;
    }

    return r.next;
}

function showListNode(h: ListNode | null): number[] {
    let arr: number[] = [];

    while (h) {
        arr.push(h.val);
        h = h.next;
    }

    return arr;
}

function mergeTwoListsbest(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    let res = new ListNode(0);
    let t = res;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            t.next = list1;
            list1 = list1.next;
        } else {
            t.next = list2;
            list2 = list2.next;
        }
        t = t.next;
    }
    if (list1) t.next = list1;
    if (list2) t.next = list2;

    return res.next;
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list2;

    if (list1.val <= list2.val) {
        return merge(list1, list2);
    }

    return merge(list2, list1);
}

function merge(h1: ListNode | null, h2: ListNode | null): ListNode {
    let r = h1!;
    let prev = h1!;
    h1 = h1!.next;

    while (h1 || h2) {
        if (h2 === null) break;
        if (h1 === null) {
            prev.next = h2;
            break;
        }
        if (h1.val <= h2.val) {
            prev = h1;
            h1 = h1.next;
        } else {
            let next = h2.next;
            prev.next = h2;
            prev = prev.next;
            prev.next = h1;
            h2 = next;
        }
    }

    return r;
}

let h1 = createListNode([-10, -9, -6, -4, 1, 9, 9]);
let h2 = createListNode([-5, -3, 0, 7, 8, 8]);

export { createListNode, showListNode };
