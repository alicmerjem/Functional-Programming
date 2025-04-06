function once2(f) {
    let done = false; // keeps track of whether the function has been called
    let result; // stores result for the function call

    return function (...args) {
        if(!done) {
            done = true; // set done to true to mark that function has been called once
            result = f(...args); // call function f and store the result
        }
        return result; // return result from the first call
    };
}

const initialize = once2(() => {
    console.log("Initializing...");
    return 42;
});