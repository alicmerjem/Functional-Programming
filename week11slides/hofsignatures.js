// generic types - mentioned it in oop
// they provide is with flexibility

// map :: [a] -> (a -> b) -> [b]
const map = curry((arr, fn) => arr.map(fn));