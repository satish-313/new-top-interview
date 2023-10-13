import { TreeNode } from "../binary-tree-general/max-depth-binary-tree.ts";

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];
    let ans: number[] = [];
    let level: TreeNode[] = [root];

    while (level.length > 0) {
        let len = level.length;
        ans.push(level[len - 1].val);

        for (let i = 0; i < len; i++) {
            let node = level[i]
            if (node.left != null) level.push(node.left);
            if (node.right != null) level.push(node.right);
        }
        level = level.slice(len);
    }

    return ans;
}
