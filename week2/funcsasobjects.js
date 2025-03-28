// functions in JS are first-class citizens
// can be stored in variables
// can be passed as arguments
// can be returned from functions

const sayHello = () => "Hello!";
const executeFunction = fn => fn();
console.log(executeFunction(sayHello)); // output: "Hello!"
