// impure functions
// hard to test
// depends on external state
// test must reset global state
// test order matters - it is not isolated

let total = 0;

function addToTotal(x) {
    total += x;
    return total;
}

// this depends on external state, which is total
// every time we call the function, it modifies the external state
// that is a side effect, we dont want that

// if we want repeatable tests, we must menually reset total = 0 before each test:

total = 0;
console.assert(addToTotal(5) === 5);
console.assert(addToTotal(3) === 8); 

// without reseting the total, the result will change each time
// if we change the order of the tests, result will also change
// that breaks the rule that unit tests should be independent of each other