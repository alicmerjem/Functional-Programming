// write a func double(x), square(x)
// and subtractFive(x) 
// create a pipeline using these funcs
// (double, then square and then subtract5)
// apply this pipeline to the input number 3, and print the result


// first we gotta define the functions
const double = x => x * 2;
const square = x => x * x;
const subbtracFive = x => x - 5;


// then we make the pipeline
const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);


// now we do the pipeline setup
const processNumber = pipeline(double, square, subbtracFive);

// and finally, we test
console.log(processNumber(3)); // output: 31
