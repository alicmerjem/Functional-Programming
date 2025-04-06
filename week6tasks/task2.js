// write a function curry(fn) that:
// accepts a function fn
// returns a curried version of fn using fn.bind(null, x)
// when all arguments are provided, evaluate the original function
// use curry() on make3 function from task 1
// asign each step of the fuctoin call to a variable for clarity

// original function, no currying
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
}

// curry function using bind()
function curry(fn) {
    // the recursive inner function
    return function curried(...args) {
        // is the number of provided arguments is enough to call the original function
        if (args.length >= fn.length) {
            return fn(...args) // call the original function
        } else {
            // otherwise return a new function with the first argument bound
            return curry(fn.bind(null, ...args));
        }
    };
}

const f1 = curry(make3);
const f2 = f1("A");
const f3 = f2(2);
const result = f3("Z");
console.log(result); 