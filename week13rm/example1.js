// suppose we have a function that adds a new item to an array of users

// an impure function, mutates the array
function addUserImpure(userList, newUser) {
    userList.push(newUser);
    return userList;
}

// a pure function, immutable
function addUserPure(userList, newUser) {
    return [...userList, newUser]; // returns a new array, original stays unchanged
}

// test
const baseUsers = ["Alice", "Bob"];

// test1 impure
let users = [...baseUsers];
addUserImpure(users, "Carol");
console.assert(users.includes("Carol"), "Carol should be added, impure");
// new array ["alice", "bob", "carol"]

// test2, accidentaly reused
addUserImpure(users, "Dave");
console.assert(users.includes("Dave"), "Dave should be added, impure");

// using the pure version in tests
const baseUsers2 = ["alice", "bob"];

// test 1
let result1 = addUserPure(baseUsers2, "carol");
console.assert(result1.includes("carol"), "carol should be added - pure");
console.assert(baseUsers2.length === 2, "original list should remain the same length");

// another test
let result2 = addUserPure(baseUsers2, "dave");
console.assert(result2.includes("dave"), "dave should be added - pure");
console.assert(baseUsers2.length === 2, "original list should remain unchanged");
