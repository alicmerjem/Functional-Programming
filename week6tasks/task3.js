// create a function nonsense(a, b, c, d, e) that 
// returns a string formatted as a/b/c/d/e
// create a new function called fix2and5
// using arrow functions, where the second
// parameter b always 22 and fifth e is always 1960
// call fix2and5("x","y","z") to fill in a c and d

// Original function taking 5 parameters
const nonsense = (a, b, c, d, e) => {
    return `${a}/${b}/${c}/${d}/${e}`;
  };

const fix2and5 = (a, c, d) => {
    return nonsense(a, 22, c, d, 1960);
}

const result = fix2nd5("x", "y", "z");
console.log(result);