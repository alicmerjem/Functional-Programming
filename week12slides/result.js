// explicit success/error result values

class Result {
    static ok(x) {
        return new Ok(x);
    }

    static err(e) {
        return new Err(e);
    }
}

class Ok extends Result {
    constructor(x) {
        super();
        this.value = x;
    }
}

class Err extends Result {
    constructor(e) {
        super();
        this.error = e;
    }
}