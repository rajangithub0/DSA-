function reverse(arr: number[][]) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

let arr1 = reverse([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
console.log(arr1);
