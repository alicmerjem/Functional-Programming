// we are defining the general structure of an algorithm
// but we are also letting some parts of it be customizable

// we can think of it as a recpie
// the steps are mostly the same (the structure is fixed)
// but some steps (like adding toppings on a pizza) are left open for the user to define

// in fp this means:
// 1 - write a main function that calls smaller functions
// 2 - some of these functions are passed in as arguments


// example - processing user input
function processingInput(input, validateFn, transformFn) {
    if(!validateFn(input)) {
        throw new Error("Invalid input");
    }
    const result = transformFn(input);
    return result;
}

// so first we validate the input
// then we transformed it

// example usage
const isNotEmpty = str => str.trim().length > 0;
const toUpperCase = str => str.toUpperCase();

console.log(processingInput(" hello ", isNotEmpty, toUpperCase)); // HELLO
