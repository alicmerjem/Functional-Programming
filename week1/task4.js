// implementing a counter function
// using closures

function createCounter() {
    let count = 1;
    return function() {
        return count++; // updates and returns the count
    };
}

const counter = createCounter();
console.log(counter()); // output: 1
console.log(counter()); // output: 2
console.log(counter()); // output: 3