// connecting multiple functions together
// the output of one becomes the input of the next
// flows from left to right

const pipeline = (...fns) => input =>
    fns.reduce((acc, fn) => fn(acc), input);

// we give pipeline multiple functions as arguments
// the input is passed to the first function pipeline
// the output of that function is passed as an input to the next function and so on
// the final result of the last function is returned


// NOTE:
// reduce - processes array fns one by one
// acc - accumulator, stores results as we go trough each fn
// fn - current function being processed
