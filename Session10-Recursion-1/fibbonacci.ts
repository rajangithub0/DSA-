function fibonacci(n: number): number {
    if (n == 1) return 0;
    if (n == 2) return 1;
    let fib1 = fibonacci(n - 1);
    let fib2 = fibonacci(n - 2);
    return fib1 + fib2;
}

let ans = fibonacci(14);
console.log(ans);
