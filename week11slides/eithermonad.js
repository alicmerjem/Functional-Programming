// useful with:
// 1 -  API responses
// 2 - file reads
// 3 - user input validation
// basically where a computation might either produce a valid answer or an error

// we have 2 types of either monads:
// Left(error) - for failure
// Right(value) - for success

// a clean way to avoid throwing exceptions

// example: 

const either = Either.of(null, "Success"); // Right(Success)
const eitherError = Either.of("Error", null); // Left(Error)

// implementation
class Either{
    static of(error, value) {
        return error ? new Left(error) : new Right(value);
    }
}

class Left {
    constructor(error) {
        this.error = error;
    }
    
    map(_) {
        return this;
    }

    toString() {
        return `Left(${this.error})`;
    }
}

class Right {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return new Right(fn(this.value));
    }

    toString() {
        return `Right(${this.value})`;
    }
}

// example in practice
Either.of(null, 5).map(x => x + 1);
Either.of("Invalid input", null).map(x => x + 1);