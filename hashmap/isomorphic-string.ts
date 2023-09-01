function isIsomorphic(s: string, t: string): boolean {
    let mapS: string[] = [];
    let mapT: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];

        if (mapS[c1] == undefined && mapT[c2] == undefined) {
            mapS[c1] = c2;
            mapT[c2] = c1;
        } else if (mapS[c1] != c2 || mapT[c2] != c1) {
            return false;
        }
    }

    return true;
}

function isIsomorphicMy(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    let map1 = new Map<string, string>();
    let map2 = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i])) {
            if (map1.get(s[i]) != t[i]) return false;
        } else map1.set(s[i], t[i]);

        if (map2.has(t[i])) {
            if (map2.get(t[i]) != s[i]) return false;
        } else map2.set(t[i], s[i]);
    }

    return true;
}

console.log(isIsomorphic("egg", "add"));
