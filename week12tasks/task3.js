// chain multiple Either operations for a mock logic system

// goal:
// getUser(username), either left("user not found") or right(user object)
// checkPasswrod(user, password), again, either left or right
// login(user), either right("Welcome user")

// mock database
const users = {
    alice: {username: "alice", password: "1234"},
    bob: {username: "bob", password: "pass"}
};

// now we implement the three functions
function getUser(username) {
    return users[username]
        ? Either.right(users[username])
        : Either.left("User not found");
}

function checkPasswrod(user, password) {
    return user.password === password
        ? Either.right(user)
        : Either.left("Invalid password");
}

function login(user) {
    return Either.right(`Welcome, ${user.username}`);
}

// now we will add flatMap() or chain() to our Either implementation
// this is so we can chain operations that return an Either themselves
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

    map(fn) {
        return Either.right(fn(this.value));
    }

    flatMap(fn) {
        return fn(this.value);
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

    map(fn) {
        return this; // skip mapping on left
    }

    flatMap(fn) {
        return this; // skip chaining on left
    }
}