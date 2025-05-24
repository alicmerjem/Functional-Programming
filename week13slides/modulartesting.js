// function composition - modular testing
// composing small pure functions results in modular code
// this means that we can test something in isolation, as a part of a pipeline

const double = x => x * x;
const addOne = x => x + 1;

const transformArray = arr => arr.map(x => addOne(double(x)));

// you can test double, addOne, and transformArrat independently