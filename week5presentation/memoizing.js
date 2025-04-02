function memoize3(fn) {
    const cache = {}; // object to store the computed values
    const PRIMITIVES = ["number", "string"]; // allowed primitive data types

    return function(...args) {
        // convert args into a unique ket for the cache
        const strX = args.length === 1 && PRIMITIVES.includes(typeof args[0]) ? args[0] : JSON.stringify(args);
        // ^ use raw value for numbers and strings
        // convert arrays/objects to string

        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
}

const memoize = (fn) => {
    const cache = {};
    return (x) => x in cache ? cache[x] : (cache[x] = fn(x));
};

// ^ we use an arrow function 
// supports only one argument (x)
// stores result in cache using x as a key
// if x exists in cache, return the stored result
// otherwirse, call fn(x), store the result and return it