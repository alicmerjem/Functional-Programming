// implement filter for Maybe
// return nothing if predicate fails

// this is a classic .filter(predicate) method for Maybe
// goals:
// 1 - if its a Just(value) and the predicate is true, keep it
// 2 - if its a Just(value) and the predicate is false, return Nothing
// 3 - If it is already Nothing, keep it at that

class Just extends Maybe {
    constructor(x) {
        super();
        this.value = x;
    }

    filter(predicate) {
        return predicate(this.value)
            ? this
            : Maybe.nothing();
    }
}

class Nothing extends Maybe {
    filter(predicate) {
        return this; // nothing stays nothing
    }
}

// example usage
const maybeAge = Maybe.just(20);

const filtered = maybeAge.filter(age => age >= 18);

if (filtered instanceof Just) {
    console.log("Accepted age:", filtered.value);
} else {
    console.log("Age not acceptable.");
}