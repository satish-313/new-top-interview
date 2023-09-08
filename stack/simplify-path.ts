function simplifyPath(path: string): string {
    let stack: string[] = [];
    let arr = path.split("/");

    for (let p of arr) {
        if (p === "" || p === ".") continue;
        if (p === "..") {
            stack.pop();
        } else stack.push(p);
    }

    return "/" + stack.join("/");
}

console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/home/../bar/food//eat/../"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/"))
