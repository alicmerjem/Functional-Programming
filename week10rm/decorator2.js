const withLogging = fn => (...args) => {
    console.log("Args: ", args);
    const result = fn(...args); // the original function we want to decorate takes any number of arguments
    console.log("Result: ", result);
    return result;
}

