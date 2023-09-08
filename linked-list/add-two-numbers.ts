class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let result: ListNode = new ListNode(0);
    let ans = result;
    let carry = 0;

    while (l1 || l2 || carry) {
        let a = l1 !== null ? l1.val : 0;
        let b = l2 !== null ? l2.val : 0;
        let sum = a + b + carry;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        result.next = newNode;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        result = result.next;
    }

    return ans.next;
}
