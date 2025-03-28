// write a function flattenAndSum(arr) that flattens a nested array (depth 2) and returns the sum of all numbers

const flattenAndSum = (arr) => arr.flat(2).reduce((x, y) => x + y, 0);