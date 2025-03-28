// working with arguments

function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // output: 10

// we have a callback function (acc, val) => acc + val that accumulates the sum