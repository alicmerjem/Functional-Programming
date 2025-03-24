// creates a new array, removes all subarray to a specified level
// flattening nested arrays

const a = [[1, 2], [3, 4, [5, 6]], 8, [[[9]]]];

console.log(a.flat(2));