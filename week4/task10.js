// Find first number divisible by x
const array = [10, 15, 20, 13, 25];

const findDivisibeBy = (arr, x) => arr.find(num => num%x===0);

console.log(findDivisibeBy(array, 2));