// strategy pattern
// refactor the following to use the needed pattern:

function calculate(a, b, method) {{
    switch(method) {
        case "add": return a + b;
        case "subtract": return a - b;
        default: throw "Unknown method";
    }
}}

// make calculate() take a function as the third argument

// ok lessgo

export const calculate = (a, b, strategyFn) => {
    return strategyFn(a, b);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// example usage
console.log(calculate(5, 3, add));