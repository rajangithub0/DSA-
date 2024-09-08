function reverseArray(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var rev = reverseArray(arr1);
console.log(rev);
