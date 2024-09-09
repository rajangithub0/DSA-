function firstOcc(arr, tar) {
    var l = 0;
    var r = arr.length - 1;
    var ans = -Infinity;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == tar) {
            ans = mid;
            r = mid - 1;
        }
        else if (arr[mid] < tar) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return ans;
}
var arr1 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
var tar1 = 7;
var fOc = firstOcc(arr1, tar1);
console.log(fOc);
