function fibonacci(n) {
    if (n == 1)
        return 0;
    if (n == 2)
        return 1;
    var fib1 = fibonacci(n - 1);
    var fib2 = fibonacci(n - 2);
    return fib1 + fib2;
}
var ans = fibonacci(14);
console.log(ans);
