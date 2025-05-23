// try monad for exception safety
// when you want to wrap risky code, use Try.of()

class Left {
    constructor(x) {
        this.x = x;
    }

    isLeft() {
        return true;
    }

    map(_) {
        return this;
    }

    flatMap(_) {
        return this;
    }

    fold(errFn, _successFn) {
        return errFn(this.x);
    }

    toString() {
        return `Left(${this.x})`;
    }
}

class Right {
    constructor(x) {
        this.x = x;
    }

    isLeft() {
        return false;
    }

    map(fn) {
        return new Right(fn(this.x));
    }

    flatMap(fn) {
        return fn(this.x);
    }

    fold(_errFn, successFn) {
        return successFn(this.x);
    }

    toString() {
        return `Right(${JSON.stringify(this.x)})`;
    }
}

class Either {
    static of(left, right) {
        return right === null || right === undefined
            ? new Left(left) 
            : new Right(right);
    }

    static Left(x) {
        return new Left(x);
    }

    static right(x) {
        return new Right(x);
    }
}

class Try {
    static of(fn, msg = "Unknown Error") {
        try {
            const result = fn();
            return Either.of(null, result);
        } catch (e) {
            return Either.of(msg || e.message, null);
        }
    }
}

const safeJSON = (json) => Try.of(() => JSON.parse(json), "Invalid JSON");

safeJSON('{"name": "John"}') // → Right({name: "John"})
safeJSON('{bad}')            // → Left("Invalid JSON")
