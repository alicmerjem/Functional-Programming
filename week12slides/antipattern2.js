// another try catch example
// here we have input validation, parsing and a use case

function parseAndDivide (inputA, inputB) {
    try {
        const a = parseFloat(inputA);
        const b = parseFloat(inputB);

        if (isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input, both values must be numbers.");
        }

        if (b === 0) {
            throw new Error("Division by 0.");
        }

        return a / b;
    }

    catch (error) {
        console.log("An error occured.", error.message);
        return null; // or some other default or fallback value
    }
}

// example usage
console.log(parseAndDivide("10", "2")); // output: 5
console.log(parseAndDivide("10", "0")); // logs error, returns null
console.log(parseAndDivide("ten", "2")); // logs error, returns null