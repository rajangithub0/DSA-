function palindromeSubstring(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            var currentString = s.substring(i, j + 1);
            if (isPalindrom(currentString)) {
                console.log(currentString);
            }
        }
    }
}
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
palindromeSubstring('elefantnafele');
