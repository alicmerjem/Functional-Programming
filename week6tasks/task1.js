// define a function make3 that 
// takes three parameters a, b and c and 
// returns a string in the format 
// a:b:c
// rewrite this function using currying
// so that each function only takes one
// parameter and returns another function
// call your curried function using chaained calls
// like makerCurried("a")(2)("z")

// regular function version
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
}

console.log(make3("A", 2, "Z"));

// curried version
function make3Curried(a) {
    // first function takes a and returns another function
    return function(b) {
        // second function takes b and returns another function
        return function(c) {
            // third function takes c and finally returns the formatted output
            return `${a}:${b}:${c}`;
        };
    };
}

const result = make3Curried("A")(2)("Z");