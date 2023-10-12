import { TreeNode } from "./max-depth-binary-tree.ts";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }
    [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
    return root;
}

function myInvertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    let temp = root.left;

    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
}
