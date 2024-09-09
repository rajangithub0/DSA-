function binarySeacrh(arr, tar) {
    var n = arr.length;
    var l = 0;
    var r = n - 1;
    while (l < r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == tar) {
            return mid;
        }
        else if (arr[mid] < tar) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 123, 134, 145, 156];
var tar = 70;
var res = binarySeacrh(arr, tar);
console.log(res);
