function sort(n) {
    var i = 0;
    var j = 0;
    while (i < n.length) {
        if (n[i] == 0) {
            var temp = n[i];
            n[i] = n[j];
            n[j] = temp;
            i++;
            j++;
        }
        else {
            i++;
        }
    }
    console.log(i, j);
}
var ans = sort([0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0]);
console.log(ans);
