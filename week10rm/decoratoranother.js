// another example cause why not
function add(a, b) {
    return a + b;
}

// decorated version to add logging as well

const loggedAdd = withLogging(add);

loggedAdd(2, 3);

// yipee