function datchnationalflag(arr: number[]) {
    let i = 0;
    let j = 0;
    let k = arr.length - 1;
    while (i <= k) {
        if (arr[i] == 0) {
            //swap i j
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        } else if (arr[i] == 1) {
            i++
        } else if (arr[i] == 2) {
            //swap i k
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = arr[i];
            k--;
        }
    }
}