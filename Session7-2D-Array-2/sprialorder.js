function sprial(arr) {
    var tw = 0;
    var lw = 0;
    var rw = arr[0].length - 1;
    var bw = arr.length - 1;
    var ans = [];
    var total = arr.length * arr[0].length;
    while (total > 0) {
        for (var j = lw; j <= rw && total > 0; j++) {
            ans.push(arr[tw], [j]);
            total--;
        }
        tw++;
        for (var i = tw; i <= bw && total > 0; i++) {
            ans.push(arr[i], [rw]);
            total--;
        }
        rw--;
        for (var j = rw; j >= lw && total > 0; j--) {
            ans.push(arr[bw], [j]);
            total--;
        }
        bw--;
        for (var i = bw; i >= tw && total > 0; i--) {
            ans.push(arr[i], [lw]);
            total--;
        }
        lw++;
    }
    return ans;
}
