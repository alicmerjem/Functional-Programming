// write three js functions:
// trimSpaces(str) removes leading and trailing spaces from a string
// toUpper(str) converts a string to uppercase
// addExclamation(str) appends a ! to the end of the string
// use function composition to create a new function that performs these operations in order:
// 1) trim, 2) toupper, 3) !
// apply your composed functoin to the input hello world and print the result


// function definitions
const trimSpaces = str => str.trim();
const toUpper = str => str.toUpperCase();
const addExclamation = str => `${str}!`;

// compose utility (right-to-left)
const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);

// compose setup 
const excitedGreeting = compose(addExclamation, toUpper, trimSpaces);

// testing the composition
console.log(excitedGreeting("   hello world   "));