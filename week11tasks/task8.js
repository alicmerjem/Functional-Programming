// extends your functor into a monad
// implement chain(fn) to flatten nested monads
// add unwrap() to get the raw inner value

class Monad {
    constructor(value) {
        this.value = value;
    }

    // map returns a new moand with the function applies
    map(fn) {
        return new Monad(fn(this.value));
    }

    // chain falttens the nested monads
    chain(fn) {
        const result = fn(this.value);
        return result instanceof Monad ? result : new Monad(result);
    }

    // unwrap returns the innermost raw value
    unwrap() {
        let current = this;
        while(current instanceof Monad) {
            if(!(current.value instanceof Monad)) break;
            current = current.value;
        }
        return current.value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `Monad${this.value}`;
    }

    static of(x) {
        return new Monad(x);
    }
}

const m = Monad.of(5)
    .map(x => x + 2)
    .chain(x => Monad.of(x * 3));

console.log(m.toString());
console.log(m.unwrap);

const nested = Monad.of(Monad.of(24));
console.log(nested.unwrap());