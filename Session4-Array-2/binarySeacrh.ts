function binarySeacrh(arr: number[], tar: number): number {
    let n = arr.length;
    let l = 0;
    let r = n - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == tar) {
            return mid;
        } else if (arr[mid] < tar) {
            l = mid + 1;
        } else {
            r = mid - 1;
        };
    }
    return -1;
}

let arr = [10, 20, 30, 40, 50, 60, 70, 123, 134, 145, 156];
let tar = 70;
let res = binarySeacrh(arr, tar)
console.log(res)