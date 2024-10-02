

function longestCommonPrefix(arr: string[]): string {
    let ans = '';
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j].length == i) return ans;
            if (arr[0][i] != arr[j][i]) return ans;
        }
        ans += arr[0][i];
    }
    return ans;
}

let res = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(res);


