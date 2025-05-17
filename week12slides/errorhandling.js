// we avoid throwing exceptions because they are side effects
// fp is all about avoiding those
// that is why we treat errors as values

// Maybe 
// representes the presence or absence of values
// Just(value) - there is a value
// Nothing - no value, lookup failed

class Maybe {
    static just(value) {
        return new Just(value);
    }

    static nothing() {
        return new Nothing();
    }
} 

class Just extends Maybe {
    constructor(value) {
        super();
        this.value = value;
    }

    isJust() {
        return true;
    }

    isNothing() {
        return false;
    }
}

class Nothing extends Maybe {
    isJust() {
        return false;
    }

    isNothing() {
        return true;
    }
}

// Either
// a computation that may fail, but lets you attach a reson to the failure
// Right(value) - success
// Left(error) - failure (with an error message, code, etc.)

class Either {
    static right(value) {
        return new Right(value);
    }

    static left(error) {
        return new Left(error);
    }
}

class Right extends Either {
    constructor(value) {
        super();
        this.value = value;
    }

    isRight() {
        return true;
    }

    isLeft() {
        return false;
    }
}

class Left extends Either {
    constructor(error) {
        super();
        this.error = error;
    }

    isRight() {
        return false;
    }

    isLeft() {
        return true;
    }
}

// Result
// like either, just more semantically named
// Ok(value) or Success(value) - means success
// Err(error) - means failure

class Result {
    static ok(value) {
        return new Ok(value);
    }

    static err(error) {
        return new Err(error);
    }
}

class Ok extends Result {
    constructor(value) {
        super();
        this.value = value;
    }

    isOk() {
        return true;
    }

    isErr() {
        return false;
    }
}

class Err extends Result {
    constructor(error){
        super();
        this.error = error;
    }

    isOk() {
        return false;
    }

    isErr() {
        return true;
    }
}