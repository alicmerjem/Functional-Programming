// whatever this is

const mapTR = fn => reducer => (acc, val) => reducer(acc, fn(val));
const filterTR = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc;

const testOdd = x => x % 2 === 1;
const duplicate = x => x + x;
const testUnderFifty = x => x < 50;
const addThree = x => x + 3;
const transducer = compose (
    mapTR(addThree),
    filterTR(testUnderFifty),
    mapTR(duplicate),
    filterTR(testOdd)
);

const addToArray = (a, v) => (a.push(v), a);
const result = myArrat.reduce(transducer(addToArray), []);
console.log(result); // [21, 25]