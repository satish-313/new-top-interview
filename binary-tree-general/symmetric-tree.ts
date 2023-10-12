import { TreeNode } from "./max-depth-binary-tree.ts";

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;

    function isOk(l: TreeNode | null, r: TreeNode | null): boolean {
        if (!l && !r) return true;
        if (!l || !r) return false;
        if (l.val != r.val) return false;

        return isOk(l.right, r.left) && isOk(l.left, r.right);
    }

    return isOk(root.left, root.right);
}
