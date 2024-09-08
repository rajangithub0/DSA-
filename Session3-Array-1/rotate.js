function reverse(arr, l, r) {
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
function rotate(arr, k) {
    var n = arr.length;
    k = k % n; //102%5=2
    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - k - 1);
    reverse(arr, 0, n - 1);
}
var print1 = rotate([1, 2, 3, 4, 5], 3);
console.log(print1);
