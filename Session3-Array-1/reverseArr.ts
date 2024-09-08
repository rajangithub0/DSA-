function reverseArray(arr: number[]): number[] {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let rev = reverseArray(arr1);
console.log(rev);
