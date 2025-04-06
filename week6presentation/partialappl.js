// partial application
// for fixing soe of the function's paramters
// creates a new function that will receive the rest of them

const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;

const fix2and5 = (a, c, d) => nonsense(a, 22, c, d, 1960);