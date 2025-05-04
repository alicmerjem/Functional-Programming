export const mockDatabase = {
    findUser: (userId) => {
        // simulate a find user method for testing
        if (userId === 1) {
            return { id: 1, name: "John Doe" };
        } else {
            return null; // simulate no user found
        }
    }
};