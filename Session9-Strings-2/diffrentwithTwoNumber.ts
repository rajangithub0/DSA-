function diffrentWithTwoChar(s: string): string {
    let ans = "";
    ans += s[0];
    for (let i = 0; i + 1 < s.length; i++) {
        let asciiPrev = s.charCodeAt(i);
        let asciiNext = s.charCodeAt(i + 1);
        let diff = asciiNext - asciiPrev;
        ans += diff;
        ans += s[i + 1];
    }
    return ans;
}

let q1 = diffrentWithTwoChar('abcCDF')
console.log(q1);
