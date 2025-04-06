// Function to be partially curried
function nonsense(a, b, c, d, e) {
    return `${a}/${b}/${c}/${d}/${e}`;
  }
  
  // partialCurry uses .bind() to fix multiple arguments in steps
  function partialCurry(fn, ...presetArgs) {
    // Return a function that accepts the next chunk of arguments
    return function (...newArgs) {
      // Combine preset and new arguments
      const allArgs = [...presetArgs, ...newArgs];
  
      // If enough arguments are collected, call the original function
      if (allArgs.length >= fn.length) {
        return fn(...allArgs);
      }
  
      // Otherwise, return a new bound function with combined arguments
      return partialCurry(fn, ...allArgs);
    };
  }
  
  // Example usage
  const pc = partialCurry(nonsense);   // returns a new function
  const f1 = pc(9, 22);                // a = 9, b = 22
  const f2 = f1(60);                   // c = 60
  const result = f2(12, 4);            // d = 12, e = 4
  
  console.log(result); // Output: "9/22/60/12/4"
  