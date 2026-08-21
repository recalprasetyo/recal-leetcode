function longestPalindrome(s: string): string {
    let a = 0, b = 0;

    for (let i = 0; i < s.length; i++) {
        const [l1, r1] = expand(s, i, i);
        const [l2, r2] = expand(s, i, i + 1);

        if (r1 - l1 > b - a) {
            a = l1;
            b = r1;
        }
        if (r2 - l2 > b - a) {
            a = l2;
            b = r2;
        }
    }
    return s.substring(a, b+1)
};

function expand(s: string, l: number, r: number): [number, number] {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return [l + 1, r - 1];
}
