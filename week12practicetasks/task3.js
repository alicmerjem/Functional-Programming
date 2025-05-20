// chain multiple Either operations for a mock login system

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

    fold(fLeft, _) {
        return fLeft(this.x);
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

    fold(_, fRight) {
        return fRight(this.x);
    }

    toString() {
        return `Right(${this.x})`;
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

    static Right(x) {
        return new Right(x);
    }
}

// login
const USERS = {
    "john@example.com": {password: "password123"},
    "alice@example.com": {password: "wonderland"}
};

