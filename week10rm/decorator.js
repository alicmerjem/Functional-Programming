// a decorator adds functionality to an object without changing its original state

// we have a basic function that just returns a message
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Merjem")); // output: Hello, Merjem!

// now we want to add more behaviour to this function
// but we don't want to change the original function
// we will add another greeting

function addGreeting(greetFunction) {
    return function(name) {
        return `Hi there, ${name}! ${greetFunction(name)}`;
    };
}

const decoratedGreet = addGreeting(greet);

console.log(decoratedGreet("Merjem")); // output Hi there, Merjem! Hello, Merjem!


// so in a nutshell: 
// a decorator is just a function that will:
// 1 - take a function as an input
// 2 - return a new function
// 3 - the new function calls the original function and adds something new