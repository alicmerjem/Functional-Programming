// represents computation that may fail

class Either {
    static left(x) {
        return new Left(x);
    }

    static right(x) {
        return new Right(x);
    }
}

class Left extends Either {
    constructor(x) {
        super();
        this.value = x;
    }
}

class Right extends Either {
    constructor(x) {
        super();
        this.value = x;
    }
}