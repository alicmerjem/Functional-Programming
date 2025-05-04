import UserService from "./task4";
import UserService  from "./task4";
import { mockDatabase } from "./task4database";

// inject mock db into userservice
const userService = new UserService(mockDatabase);

// get a user that exists
const user = userService.getUser(1);
console.log(user);

// get a user that does not exist
const noUser = userService.getUser(2);
console.log(noUser);