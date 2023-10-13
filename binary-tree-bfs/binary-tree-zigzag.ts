import { TreeNode } from "../binary-tree-general/max-depth-binary-tree";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let ans: number[][] = [];
    let lev: TreeNode[] = [root];
    let count = 0;

    while (lev.length > 0) {
        let len = lev.length;
        let arr: number[] = [];

        for (let i = 0; i < len; i++) {
            let node = lev[i];
            arr.push(node.val);
            if (node.left) lev.push(node.left);
            if (node.right) lev.push(node.right);
        }

        if (count % 2 === 0) ans.push(arr);
        else ans.push(arr.reverse());
        lev = lev.slice(len);
        count += 1;
    }

    return ans;
}
