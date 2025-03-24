// Extract ages from an array of people
const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
];

const extractAges = (arr) => arr.map(people => people.age);

console.log(extractAges(people));