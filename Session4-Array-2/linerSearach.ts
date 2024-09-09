function sort(arr: number[], target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
}

let a = sort([3, 5, 6, 8, 12, 56, 77, 98], 12);
console.log(a);
