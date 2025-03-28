// write a function findFirstNegativeIndex(arr)
// that returns the index of the first negative
// number in the array. if none exist
// return -1

const findFirstNegativeIndex = (arr) => arr.findIndex(num => num < 0);