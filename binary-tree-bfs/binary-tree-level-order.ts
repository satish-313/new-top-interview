import { TreeNode } from "../binary-tree-general/max-depth-binary-tree.ts";

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let ans:number[][] = [];
    let lev: TreeNode[] = [root]

    while(lev.length > 0) {
        let len = lev.length;
        let arr:number[] = []
        for (let i=0; i<len; i++) {
            let node = lev[i]
            arr.push(node.val)
            if (node.left) lev.push(node.left)
            if (node.right) lev.push(node.right)
        }
        ans.push(arr)
        lev = lev.slice(len)
    }

    return ans
};