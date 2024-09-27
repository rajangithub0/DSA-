//using ascii code solve toggle case

function togglecase(s: string): string {
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i); // find the ascii code for i number


        if (ascii >= 97) {// we are lower case
            ascii -= 32;// change upper case 
        } else {
            ascii += 32;//change lower case
        }

        let char = String.fromCharCode(ascii);
        ans += char;
    }
    return ans;
}

console.log(togglecase("aBcDefg"));
