function reverseRange(arr: number[], l: number, r: number): number[] {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let res = reverseRange(array, 2, 4);
console.log(res);
