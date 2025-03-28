// mutating arguments causes impurity


// impure function
const maxStrings = arr => arr.sort().pop();
let countries = ["Argentina", "Uruguay", "Brasil", "Paraguay"];

console.log(maxStrings(countries)); // uruguay
console.log(countries); // argentina, brasil, paraguay


// solution - create a copy of arguments
const maxStringsPure = a => [...a].sort().pop();

console.log(maxStringsPure(countries)); // uruguay
console.log(countries); // original array unchanged