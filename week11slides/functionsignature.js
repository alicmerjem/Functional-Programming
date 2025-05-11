// its like a label or a blueprint for a function
// it tells us:
// what the function takes in (input)
// what the function gives back (output)

// firstToUpper :: String -> String
const firstToUpper = (s) => s[0].toUpperCase() + s.substring(1).toLowerCase();

// it follows the format:
// functionName :: InputType -> OutputType