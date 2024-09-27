let str: string = "ekaansh";

// let strArr = str.split("");
function printAllSubstring(str: string): void {
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            console.log(str.substring(i, j + 1));

        }
    }
}

printAllSubstring(str)