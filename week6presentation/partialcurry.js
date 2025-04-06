// mix of currying and partial application
// take function. fix some of its arguments and return a new function for the rest
// if the new function gets fewer arguments, it keeps returing new functions
// until all arguments are provided and the final result is computed

function partialCurry(fn) {
    return fn.length === 0 
    ? fn()
    : (...x) => partialCurry(fn.bind(null, ...x));
}