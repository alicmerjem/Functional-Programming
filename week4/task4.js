// Find the maximum number
const array = [66, 2, 1000, 17, 8];

const findMax = (arr) => arr.reduce((max, num) => num>max ? num : max, arr[0]);

console.log(findMax(array));