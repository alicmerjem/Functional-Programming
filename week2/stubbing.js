// used w/ testing and debugging to replace real function calls w/ simplifed versions
// it allows us to have a function do different work depending on the environment

const myLog = DEVELOPMENT 
? (someText) => console.log(someText)
: (someText) => {};

myLog("Hello world"); 
// so DEVELOPMENT is likely a boolean
// if it is true, "Hello world" is logged to the console
// otherwise, the function does nothing