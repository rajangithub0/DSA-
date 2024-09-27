function isPalindrom1(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] != s[j]) {
            return false
        }
        i++;
        j--;
    }
    return true
}

console.log(isPalindrom1("naman"));
console.log(isPalindrom1("rajan"));
console.log(isPalindrom1('mom'));

