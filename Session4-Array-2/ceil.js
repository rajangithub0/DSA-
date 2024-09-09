function findCeil(arr, target) {
    var r = arr.length - 1;
    var l = 0;
    // let r = n - 1;
    var ceil = -Infinity;
    while (l < r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return arr[mid];
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
            ceil = arr[mid];
        }
    }
    return ceil;
}
var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 134, 145, 167];
var target = 65;
var ele = findCeil(array, target);
console.log(ele);
