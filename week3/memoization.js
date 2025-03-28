// fibonacci w/o memoization 
const fib = n => (n < 2) ? n : fib(n-1) + fib(n-2)

// finbonacci w/ memoization
const cache = [];
const fibMemoized = n => {
    if (cache[n] !== undefined) return cache[n];
    if (n < 2) cache[n] = n;
    else cache[n] = fibMemoized(n-1) + fibMemoized(n-2);
    return cache[n];
}