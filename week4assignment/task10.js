// write a function extractLastName(names)
// that extract last names from an array of full
// names
// if a name has multiple words, return all but the first
// if a name has only one word, exclude it

const extractLastName = (names) => names
    .map(name => name.split(" "))
    .filter(parts => parts.length > 1)
    .map(parts => parts.slice(1).join(" "));