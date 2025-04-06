// Original function: takes 3 parameters and returns a formatted string
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
  }
  
  // Partial application function using closures
  function partial(fn) {
    return function partiallyApplied(...presetArgs) {
      // Return a new function that will accept the remaining args
      return function (...laterArgs) {
        // Keep track of the final list of arguments to call fn with
        let finalArgs = [];
  
        // Index to track how many laterArgs we've used
        let laterIndex = 0;
  
        // Fill in finalArgs: use presetArgs if defined, otherwise pull from laterArgs
        for (let i = 0; i < presetArgs.length; i++) {
          if (presetArgs[i] === undefined) {
            // Take from laterArgs when preset is undefined
            finalArgs.push(laterArgs[laterIndex++]);
          } else {
            // Use the preset argument
            finalArgs.push(presetArgs[i]);
          }
        }
  
        // If there are any leftover args (e.g. presetArgs was shorter than fn.length)
        // append them
        finalArgs.push(...laterArgs.slice(laterIndex));
  
        // Call the original function with the constructed final argument list
        return fn(...finalArgs);
      };
    };
  }
  
  // Apply partial to make3
  const f0 = partial(make3);       // Returns a function expecting some of a, b, c
  const f1 = f0(undefined, 2);     // Fix b = 2, leave a and c undefined
  const result = f1("X", "Y");     // Fill in a = "X", c = "Y"
  
  console.log(result);             // Output: "X:2:Y"
  