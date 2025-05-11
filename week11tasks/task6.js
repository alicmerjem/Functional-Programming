// Demonstrate functor law compliance for your
// Maybe class using concrete values and transformations

class Maybe {
    static of(value) {
        return value === null || value === undefined
            ? new Nothing()
            : new Just(value);
    }

    // abstract method to override
    map(fn) {
        throw new Error("map() must be implemented in subclasses");
    }

    isNothing() {
        throw new Error("isNothing() must be implemented in subclasses");
    }

    toString() {
        return `${this.constructor.name}(${this.value})`;
    }

    valueOf() {
        return this.value;
    }
}

class Just extends Maybe {
    constructor(value) {
        super();
        this.value = value;
    }

    map(fn) {
        return Maybe.of(fn(this.value));
    }

    isNothing() {
        return false;
    }
}

class Nothing extends Maybe {
    constructor() {
        super();
        this.value = null;
    }

    map(_) {
        return this; // Returns itself
    }

    isNothing() {
        return true;
    }

    toString() {
        return "Nothing";
    }
}

// Test functions
const id = x => x;
const double = x => x * 2;
const addOne = x => x + 1;

// Identity law: m.map(id) === m
const m1 = Maybe.of(10);
const m1Mapped = m1.map(id);

console.log("Identity Law:");
console.log("Original:", m1.toString());
console.log("Mapped:", m1Mapped.toString());
console.log("Equal:", m1.valueOf() === m1Mapped.valueOf()); // true

// Composition law: m.map(f).map(g) === m.map(x => g(f(x)))
const f = addOne;
const g = double;

const m2 = Maybe.of(10);
const left = m2.map(f).map(g);
const right = m2.map(x => g(f(x)));

console.log("\nComposition Law:");
console.log("Left:", left.toString());
console.log("Right:", right.toString());
console.log("Equal:", left.valueOf() === right.valueOf()); // true
