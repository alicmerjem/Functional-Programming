// example

function divide(a, b) {
    return b === 0 ? Either.left("division by 0") : Either.right(a / b);
}

const result = divide(10, 0)
    .map(x => x + 1) // will not run in left
    .map(x => x * 2); // will not run in left