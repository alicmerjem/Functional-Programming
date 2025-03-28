// transforms a function with multiple arguments into a sequence of functions

const curriedAdd = x => y => z => x + y + z;
console.log(curriedAdd(1)(2)(3)); // 6

// used in FP to allow partial application of functions
