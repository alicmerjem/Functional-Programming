// Remove empty strings
const array = ["Hello", "", "world", "", "!"];

const removeEmptyStrings = (arr) => arr.filter(word => word!=="");

console.log(removeEmptyStrings(array));