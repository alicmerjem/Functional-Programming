// performance optimization technique
// combines multiple transgformations into one single pass reducer
// this avoids intermediate arrays

// TASK:
// keep only odd numbers
// duplicate them
// filter those undre 50
// add 3 to the result
// TRADITIONAL METHOD

const result = myArray 
    .filter(x => x % 2 === 1)
    .map(x => x + x)
    .filter(x => x < 50)
    .map(x => x + 3)