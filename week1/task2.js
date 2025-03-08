// higher order functions - calculator
function operate(operation, a, b) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log(operate(add, 5, 3));
console.log(operate(subtract, 5, 3));
console.log(operate(multiply, 5, 3));
console.log(operate(divide, 5, 3));