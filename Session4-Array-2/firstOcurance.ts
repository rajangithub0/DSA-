function firstOcc(arr: number[], tar: number): number {
    let l = 0;
    let r = arr.length - 1;
    let ans = -Infinity;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == tar) {
            ans = mid
            r = mid - 1;
        } else if (arr[mid] < tar) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans
}

let arr1 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
let tar1 = 7;
let fOc = firstOcc(arr1, tar1);
console.log(fOc);


