// write transducers to optimize the following chain of operations on the array [15, 22, 7, 34, 3]
// filter numbers greater than 10
// square each number
// filter results that are less than 500
// iplement this using a generalized transducing fnuctions as described in the RM
// print the resulting array after applying your transducers


// inital data array
const myArray = [15, 22, 7, 34, 3];


// step 1 - define simple predicate and transformation functions
const greaterThan10 = x => x > 10;
const square = x => x * x;
const lessThan500 = x => x < 500;


// step 2 - create transducer functions
// mapping transducer - applies a function before reducing
const mapTR = fn => reducer => (accumulator, value) => reducer(accumulator, fn(value));

// filtering transducer - includes values based on predicates
const filterTR = predicate => reducer => (accumulator, value) => predicate(value) ? reducer(accumulator, value) : accumulator;


// Step 3 - define the final reducer function
const addToArray = (arr, value) => {
    arr.push(value);
    return arr;
}


// step 4 - compose multiple transducers into a single transducer
const compose = (...fns) => inital => fns.reduceRight((acc, fn) => fn(acc), initial);


// step 5 - generalized transduce function 

const transduce = (
    arr,
    transducers,
    reducer = addToArray,
    initial = []
) => {
    // create a single composed reducer from multiple transducers
    const composedReducer = compose(...transducers)(reducer);
    return arr.reduce(composedReducer, initial);
};


// step 6 - apply transudcer to the input data
const result = transduce(myArray, [
    filter(greaterThan10),
    mapTR(square),
    filterTR(lessThan500)
]);


// final result
console.log(result); // OUTPUT: 225, 484