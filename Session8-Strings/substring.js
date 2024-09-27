var str = "ekaansh";
// let strArr = str.split("");
function printAllSubstring(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            console.log(str.substring(i, j + 1));
        }
    }
}
printAllSubstring(str);
