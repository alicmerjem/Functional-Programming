//given an array of objects representing people, write a function extractNames(arr) that returns an array contianing only the names

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
];

const extractNames = (arr) => arr.map(person => person.name);