// test driver development example - formatUser
// functional TDD encourages writing simple, testable logic
// this is done b starting with a falling test and iteratively building a solution

// step 1 - write test
// except "john doe"

// step 2 - implement 

const capitalize = s => s[0].toUpperCase() + s.slice(1).toLowerCase();

function formatUser(user) {
    return [user.firstName, user.lastName].map(capitalize).join("");
}

// small functions
// easy to test and reuse