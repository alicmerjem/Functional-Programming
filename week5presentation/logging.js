// we are using the function addLogging(fn) as a wrapper for the original function
// logging is handled externally
// this makes it modular and reusable

// we are starting w/ the logging function

function addLogging3(fn, logger = console.log.bind(console)) {
    // fn - the function we want to add logging to (in our case, subtract)
    // logger - logging function, set to console.log by default
    return function(...args) { // this does the logging and the function calling
        // this logs when the original function is being called
        logger(`entering ${fn.name}(${args})`);

        try {
            // call the function fn with the arguments args
            const valueToReturn = fn(...args);

            // log when the function is exited, and the returned value
            logger(`exiting ${fn.name} => ${valueToReturn}`);
            return valueToReturn;
        }

        catch (thrownError) {
            // if the function throws an error, log it
            logger(`exiting ${fn.name} => threw ${thrownError}`);
            throw thrownError;
        }
    };
}

// here is the main function
function subtract(a, b) {
    return a - b;
}

// let changeSign = ...; this is used to store the wrapped function

subtract = addLogging3(subtract, myLogger);

subtract(8, 3);