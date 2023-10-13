import { TreeNode } from "../binary-tree-general/max-depth-binary-tree.ts";

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [0];
    let ans: number[] = [];
    let level: TreeNode[] = [root];
    let sum = 0;
    while (level.length > 0) {
        let len = level.length;
        sum = 0;
        for (let i = 0; i < len; i++) {
            let node = level[i];
            sum += node.val;

            if (node.left) level.push(node.left);
            if (node.right) level.push(node.right);
        }
        ans.push(sum / len);
        level = level.slice(len);
    }

    return ans;
}
