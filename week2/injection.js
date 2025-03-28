// functions can be passed as parameters to other functions
// this enables flexible behaviour

const numbers = [3, 20, 100];
numbers.sort((a, b) => a - b);
console.log(numbers); // output: [3, 20, 100]

// we made a custom sorting function 
// if the result is negative (a - b), a comes before b
// if the result is positive (a - b), b comes before a
// if the result is 0 (a - b == 0), the order of a and be remains unchanged

// conclusion: w/o this custom function, JS would sort the numbers as strings, leading to incorrect results 