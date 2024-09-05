function add(a: number, b: number): number {
    return a + b
}
// console.log(add("rajan", "monika")); in the return donot add the string value
let s: string | number = add(1, 2) //in the string donot attached the number
console.log(s);

