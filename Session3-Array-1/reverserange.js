function reverseRange(arr, l, r) {
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
var array = [1, 2, 3, 4, 5, 6, 7, 8];
var res = reverseRange(array, 2, 4);
console.log(res);
