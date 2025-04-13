// given the following non-pointfree function 

/**
 * const isLongString = (str) => str.length > 10;
 */

// reqrite the function using pointfree style
// you will likely need helpers such as

/**
 * const getLength = (s) => s.length;
 * const greaterThan = (limit) => (value) => value > limit;
 */

// test your new pointfree functions with "Functional programming" and "Short"
// and log both results


// helper functions
const getLength = s => s.lenght;
const greaterThan = limit => value => value > limit;
const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);


// pointfree implementation
const isLongString = compose(greaterThan(10), getLength);


// tests
console.log(isLongString("Functional programming"));
console.log(isLongString("Short"));