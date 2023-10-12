import { TreeNode } from "./max-depth-binary-tree";

function hasPathSum(r: TreeNode | null, t: number): boolean {
    if (!r) return false;
    t -= r.val;
    if (t === 0 && !r.left && !r.right) return true;
    return hasPathSum(r.left, t) || hasPathSum(r.right, t);
}
