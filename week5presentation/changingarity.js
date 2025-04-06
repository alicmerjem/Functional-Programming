// takes fn as input, returns any number of arguments
// uses only the first two arguments and passes them to fn
const binary = fn => (...a) => fn(a[0], a[1]);

// same as binary, but restricts the function to 3 arguments
const ternary = fn => (...a) => fn(a[0], a[1], a[2]);

// this is a general case for changing arity
// takes two parameters - n (number of arguments that the function accepts) and fn (the function we want to apply the arity change to)
const arity = (n, fn) => (...a) => fn(...a.slice(0, n));


const unary = fn => arity(1, fn);
const binary1 = fn => arity(2, fn);
const ternary1 = fn => arity(3, fn);
