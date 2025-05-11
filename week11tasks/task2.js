// write a hindley-milner style type signature for each of the following:
// 1 - a function that reverses a string
// 2 - a function that adds three curried arguments
// 3 - a function that checks if a number is positive

// reverseString :: String -> String
const reverseString = (str) => str.split('').reverse().join('');

// addThree :: Number -> Number -> Number -> Number
const addThree = x => y => z => x + y + z;

// isPositive :: Number -> Boolean
const isPositive = num => num > 0