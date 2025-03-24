// Find first string longer than x characters
const array = ["apple", "banana", "cherry"];

const findLongWords = (words, minLength) => words.find(word => word.length > minLength);

console.log(findLongWords(array, 5));