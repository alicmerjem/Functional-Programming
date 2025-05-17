// in js, a traditional error throwing function might look like this:

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero.");
    } 
    return a / b;
}

// this can be modeled functionally with:

// divide :: Number -> NUmber -> Either String number
const divide = (a, b) => b === 0 ? Either.of("Division by 0", null) : Either.of(null, a / b);