function sprial(arr: number[][]) {
    let tw = 0;
    let lw = 0;
    let rw = arr[0].length - 1;
    let bw = arr.length - 1;
    let ans: number[][] = []
    let total = arr.length * arr[0].length;
    while (total > 0) {
        for (let j = lw; j <= rw && total > 0; j++) {
            ans.push(arr[tw], [j]);
            total--;
        } tw++;
        for (let i = tw; i <= bw && total > 0; i++) {
            ans.push(arr[i], [rw]);
            total--;
        } rw--;
        for (let j = rw; j >= lw && total > 0; j--) {
            ans.push(arr[bw], [j]);
            total--;
        } bw--;
        for (let i = bw; i >= tw && total > 0; i--) {
            ans.push(arr[i], [lw]);
            total--;
        } lw++;
    }
    console.log(ans);

}
