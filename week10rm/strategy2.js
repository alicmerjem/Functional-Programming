const calculate = (a, b, strategyFn) => strategyFn(a, b);

// calculate is a generic function - it doesnt do anything specific by itself
// it delegates the behavior to strategyFn, which is passed in
// this makes calculate super flexible, which means that we can pass in any behavior that we want


// here is another small example
// calculator

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x - y;

// now we use this with calculate
console.log(calculate(10, 5, add)); 