// every returns true if all elements match a condition
// some returns true if at least one elements matches a condition

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.every(n => n > 0));
console.log(numbers.some(n => n < 0));