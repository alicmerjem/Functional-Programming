// Check if any number is negative
const array1 = [1, 2, 3];
const array2 = [-1, 2, 3];

const hasNegativeNumber = (arr) => arr.some(num => num<0);

console.log(hasNegativeNumber(array1));
console.log(hasNegativeNumber(array2));