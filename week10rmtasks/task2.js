// decorator function
// create a HOF function withLogging()
// wrap any function and log:
// 1 - input arguments
// 2 - output results

const add = (x, y) => x + y;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);

// this is how we do it
export const withLogging = (fn) => {
    return (...args) => {
        console.log("Input arguments: ", args); // log the args
        const result = fn(...args); // call the original function
        console.log("Output result ", result); // log the result
        return result;
    };
};


