function lengthOfLongestSubstring(s: string): number {
    const lastIndex = new Map<string, number>();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        if (lastIndex.has(c) && lastIndex.get(c)! >= left) {
            left = lastIndex.get(c)! + 1;
        }
        lastIndex.set(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;

    // const n = s.length;
    // let maxLen = 0;

    // for (let i = 0; i < n; i++) {
    //     const seen = new Set<string>();
    //     for (let j = i; j < n; j++) {
    //         if (seen.has(s[j])) break;
    //         seen.add(s[j]);
    //         maxLen = Math.max(maxLen, j-i+1);
    //     }
    // }
    // return maxLen;
};
