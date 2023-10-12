import { TreeNode } from "./max-depth-binary-tree.ts";

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return 1 + countNodes(root.right) + countNodes(root.left);
}
