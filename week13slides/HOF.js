// higher order functions aid testability
// HOFs are functions that accept or return other functions
// HOFs allow us to inject behavior, making our functions flexible and mockable tests
// swap formatters easily

function makeGreet(formatter) {
    return name => "Hello" + formatter(name);
}

const shout = name => name.toUpperCase();
const greet = makeGreet(shout);

console.assert(greet("alice") === "Hello, ALICE"); 