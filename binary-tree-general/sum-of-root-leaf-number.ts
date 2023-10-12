import { TreeNode } from "./max-depth-binary-tree.ts";

function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0;
    let sum = 0;

    function rec(r: TreeNode, s: string) {
        s = s + r.val;
        if (!r.left && !r.right) {
            sum += Number(s);
            return;
        }

        if (r.left) {
            rec(r.left, s);
        }
        if (r.right) {
            rec(r.right, s);
        }
    }

    rec(root, "");

    return sum;
}
