// choosing behavior at runtime
// instead of hardcoding a specific behavior into the function
// we pass the behavior in as a function
// thats why its called strategy

// example: a text editor w/ a sort button
// we want to:
// 1 - sort alphabetically
// 2 - by length
// 3 - reverse

// step 1 - define strategies (aka functions)
const sortAlphabetically = arr => arr.sort();
const sortByLength = arr => arr.sort((a, b) => a.length - b.length);
const sortReverse = arr => arr.sort().reverse();

// step 2 - create a context function (the part that uses the strategy)
function sortWords(words, strategy) {
    return strategy([...words]); // using the passed-in strategy
}

// step 3 - use it w/ different strategies
const words = ["apple", "banana", "cherry"];

console.log(sortWords(words, sortAlphabetically));
console.log(sortWords(words, sortByLength));
console.log(sortWords(words, sortReverse));