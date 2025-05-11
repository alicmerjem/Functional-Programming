// create a container class that:
// 1 - stores a value
// 2 - has a map(fn) function that applies the function to the stored value
// 3 - has valueOf() and toString() methods

class Container{
    constructor(value) {
        this.value = value;
    }

    // applies a function to the stored value and returns a new container
    map(fn) {
        return new Container(fn(this.value));
    }

    // returns the raw value
    valueOf() {
        return this.value;
    }

    // returns a string representation
    toString() {
        return `Container(${this.value})`;
    }
}

const c = new Container(10);
const c2 = c.map(x => x * 2);

console.log(c.toString());
console.log(c2.toString());
console.log(c2.valueOf());