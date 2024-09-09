function findCeil(arr: number[], target: number): number {
    let r = arr.length - 1;
    let l = 0;
    // let r = n - 1;
    let ceil = -Infinity;
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] == target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
            ceil = arr[mid]
        }
    }
    return ceil;
}

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 134, 145, 167];
let target = 65;
let ele = findCeil(array, target);
console.log(ele);
