// also known as imperative error handling
// relies on try catch
// hard to compose
// breaks referential transparency

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by 0.");
    }
    return a / b;
}