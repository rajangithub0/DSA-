function sort(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
}
var a = sort([3, 5, 6, 8, 12, 56, 77, 98], 12);
console.log(a);
