function isPalindrom(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrom("naman"));
console.log(isPalindrom("rajan"));
console.log(isPalindrom('mom'));
