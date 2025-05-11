// implement the either monad with left(error) and right(value)
// map(fn) runs only on right
// left skips mapping

class Either {
    static of(left, right) {
        return right === null || right === undefined
            ? new Left(left)
            : new Right(right);
    }

    map(_) {
        throw new Error("map() must be implemented in left or right");
    }

    isLeft() {
        throw new Error("isLeft() must be implemented in left or right")
    }

    toString() {
        return `${this.constructor.name}(${this.value})`;
    }

    valueOf() {
        return this.value;
    }
}

class Left extends Either {
    constructor(error) {
        super();
        this.value = error;
    }

    map(_) {
        return this; // skips mapping
    }

    isLeft() {
        return true;
    }
}

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

const success = Either.of(null, 10)
    .map(x => x + 1)
    .map(x => x * 2)

console.log(success, toString());

const failure = Either.of("Something went wrong :(")
    .map(x => x + 1);


console.log(failure, toString());