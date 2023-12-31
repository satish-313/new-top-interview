class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function hasCycle(head: ListNode | null): boolean {
    let cur = head;
    let next = cur?.next?.next;
    while (cur && next) {
        if (cur === next) return true;
        cur = cur?.next;
        next = next?.next?.next;
    }

    return false;
}
