// implement Try.of(() => riskyOperation(), msg):
// catch errors and wrap them in left
// on success, return right

// Base either class
class Either {
    static of(left, right) {
        return right === null || right === undefined
        ? new Left(left)
        : new Right(right);
    }

    map(_) {
        throw new Error("map() must be implemented by subclasses");
    }

    isLeft() {
        throw new Error("isLeft() must be implemented by subclasses");
    }

    valueOf() {
        return this.valueOf;
    }

    toString() {
        return `${this.constructor.name}(${this.value})`;
    }
}

// left class for failure
class Left extends Either {
    constructor(error) {
        super();
        this.value = error;
    }

    map(_) {
        return this;
    }

    isLeft() {
        return true;
    }
}

// right for success
class Right extends Either {
    constructor(value) {
        super();
        this.value = value;
    }

    map(fn) {
        return Either.of(null, fn(this.value));
    }

    isLeft() {
        return false;
    }
}

// try class for safe execution
class Try {
    static of(fn, msg) {
        try {
            const result = fn();
            return new Right(result);
        } catch (e) {
            return new Left(msg || e.message);
        }
    }
}

// a risky function that sometimes throws
const riskyOperation = () => {
    if (Math.random() < 0.5) {
        throw new Error("Random failure");
    }
    return "It worked :D";
};

// try running safely
const result = Try.of(riskyOperation, "Default failure message");

// output result
console.log(result.toString());