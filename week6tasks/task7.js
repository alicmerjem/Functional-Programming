// make3 from earlier tasks
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
  }
  
  // Closure-based curry function
  function partialCurryByClosure(fn) {
    // Inner recursive function to accumulate args
    return function curried(...args) {
      // If enough arguments are provided, call the original function
      if (args.length >= fn.length) {
        return fn(...args);
      }
  
      // Otherwise, return a new function that keeps accepting arguments
      return (...nextArgs) => curried(...args, ...nextArgs);
    };
  }
  
  // Use it with make3
  const curried = partialCurryByClosure(make3);
  
  // Test different ways of calling the curried function
  console.log(curried("A")(2)("Z"));       // A:2:Z
  console.log(curried("X", 1)("Y"));       // X:1:Y
  console.log(curried("Q", 3, "W"));       // Q:3:W
  