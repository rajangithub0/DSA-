function MaxEle1(arr) {
    var maxi = -Infinity;
    var idx = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
            idx = i;
        }
    }
    return maxi;
}
function barGraph(arr) {
    var maxi = MaxEle1(arr);
    var n = arr.length;
    for (var floor = maxi; floor >= 1; floor--) {
        var s_1 = "";
        for (var i = 0; i < n; i++) {
            if (arr[i] >= floor) {
                s_1 += "*\t";
            }
            else {
                s_1 += "\t";
            }
        }
        console.log(s_1);
    }
    var s = '';
    for (var i = 0; i < n; i++) {
        s += arr[i] + '\t';
    }
    console.log(s);
}
barGraph([1, 2, 3, 4, 5, 4, 3, 2, 1]);
