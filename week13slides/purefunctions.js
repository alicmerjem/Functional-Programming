// pure functions
// always return the same output for the same input 
// no side effects
// benefits for testing:
// 1 - predictable
// 2 - easy to assert
// 3 - no external dependencies
// very easy to test
// just check: input -> expected output

function square(x) {
    return x * x;
}

console.assert(square(5) === 25); // input 5, output 25
// ^ this is a basic unit test
// will run silently if the test passes
// otherwise, throws an error
// 