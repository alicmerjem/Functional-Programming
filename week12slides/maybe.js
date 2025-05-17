// model optional/nullable values

class Maybe {
    static just(x) {
        return new Just(x);
    }

    static nothing() {
        return new Nothing(x);
    }
}

class Just extends Maybe {
    constructor(x) {
        super();
        this.value = x;
    }
}

class Nothing extends Maybe {};