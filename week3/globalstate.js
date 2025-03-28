// variables accessible throughout the entire program
// using it leads to impure functions

// way 1 - impure
const limitYear = 2004; // only good for 2022
const isOldEnough = function(birthYear) {
    return birthYear <= limitYear;
}

console.log(isOldEnough(1960)); // true
console.log(isOldEnough(2010)); // false

// way 2 - better approach
const isOldEnough2 = (birthYr, currentYear) => birthYr <= currentYear - 18;

// and we also have expections, for example const PI
const PI = 3.13159265358979;
const circleArea = r => PI * r ** 2;

console.log(circleArea(5)); // 78.5398163....