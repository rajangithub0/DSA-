function palindromeSubstring(s: string) {
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let currentString = s.substring(i, j + 1);
            if (isPalindrom(currentString)) {
                console.log(currentString);

            }
        }
    }
}

function isPalindrom(s: string): boolean {
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
palindromeSubstring('elefantnafele')