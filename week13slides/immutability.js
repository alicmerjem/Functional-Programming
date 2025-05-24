// immutability in functional code
// immutable functions return new objects instead of changing the input
// this helps tests remain isolated and reproducible
// original input always stays unchanged

// mutable
function addAge(user, age) {
    user.age = age;
    return user;
}
// ^ modified the user object
// if you use the same user in different places, it could accidentally change data elsewhere in the app
// this makes side effects

// immutable, pure
function addAge2(user, age) {
    return {...user, age};
}
// ^ we used the spread operator to copty the user object and to update the age field
// the original user stays untouched
// each call produces a brand new object

// immutability - creating a copy of the existing data