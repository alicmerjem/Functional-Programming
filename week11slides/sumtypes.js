// holds one of multiple possible types, but only one at a time
// think of it as OR

// Sortable :: Number | String | Boolean

// so a sortable value can be either one of these 3 types: 
// 1 - a number
// 2 - a string
// 3 - a boolean
// it is like a choice between types, and thats why its a sum
// you can add up the possibilities

// example
let value = 42; // valid sortable
value = "hello"; // still valid
value = true; // still valid
value = [1, 2, 3]; // nuh uh