// another HOF that: 
// 1 - takes function fn as input
// 2 - returns a new function that when called, calls fn(...args) and multiplies the result by -1
// this is often used to reverse the order of a comparison function
const invert = (fn) => (...args) => -fn(...args);

const spanishComparison = (a, b) => a.localeCompare(b, "es");

palabras.sort(invert(spanishComparison));