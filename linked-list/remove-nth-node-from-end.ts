class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null;
    let len = 0;
    let cur: ListNode | null = head;

    while (cur !== null) {
        len += 1;
        cur = cur.next;
    }
    if (len === n) return head.next;
    if (len === 1) return null;

    len = len - n - 1;
    cur = head;

    for (let i = 0; i < len && cur; i++) cur = cur.next;

    if (cur && cur.next && cur.next.next) {
        cur.next = cur.next.next;
    } else {
        if (cur && cur.next) cur.next = null;
    }
    return head;
}
