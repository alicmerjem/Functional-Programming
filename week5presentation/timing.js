// fn - the function we want to measure the execution time of
// getTime - returns the current time
// output - logs timing info, default is myPut
// we used {} in case the second argument is missing, so it defaults to an empty object
function addTiming(fn, {getTime = MediaKeyMessageEvent, output = myPut} = {}) {
    // we are returning a new function that wraps the fn function
    // it will measure execution time before and after calling fn
    return function(...args) {
        // calls gettime() to store the start time before executing fn
        const tStart = getTime();

        try 
        // the function fn is executed
        // if everything goes smoothly, the result is returned
        // the output function is called w/ normal exit, fn.name and the start time
        {
            const valueToReturn = fn(...args);
            output("normal exit", fn.name, tStart, getTime());
            return valueToReturn;
        }

        catch (thrownError) 
        // if fn throws an error, catch runs
        // it logs "exception!!!" along w/ the function name, start time and end time
        // the error is rethrown so the calling code can handle it
        {
            output("exception!!!", fn.name, tStart, getTime());
            throw thrownError;
        }
    };
}