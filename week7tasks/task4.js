// write a pipeline to process an array of numbers from 1 to 6
// the pipeline should: 
// filter even numbers
// multiply ech filtered number by 10
// calculate the sum of resulting numbers
// insert a debug utility (tee or tap) to log intermediate steps
// clearly log the intermediate array
// execute the pipeline and show logs


// helper functions, you know the drill
const isEven = x => x % 2 === 0;
const multiplyByTen = x => x * 10;
const sum = arr => arr.reduce((acc, val) => acc + val, 0);


// tee function for debugging
const tee = label => value => {
    console.log(`${label}:`, value);
    return value;
}

// pipeline function
const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);


// define specific array processing function
const filterEvens = arr => arr.filter(isEven);
const multiplyAllByTen = arr => arr.map(multiplyByTen);


// create a pipeline w/ debug steps
const debugPipeline = pipeline(
    filterEvens,
    tee("Filtered"),
    multiplyAllByTen,
    tee("Multipled by 10"),
    sum
);


// executed pipeline
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Sum: ", debugPipeline(numbers));

// OUTPUT:
// filtered - 2, 4, 6
// multiplied by 10 - 20, 40, 60
// sum - 120
