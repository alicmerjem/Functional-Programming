// dependency injection
// make a class testable by injecting dependencies
// implement UserService to accept a database as a constructor argument
// provide mock database implementation
// demonstrate testability

class UserService {
    constructor(database) {
        this.database = database; // injecting the database
    }

    getUser(userId) {
        // simulate a db call
        return this.database.findUser(userId);
    }
}

export default UserService;