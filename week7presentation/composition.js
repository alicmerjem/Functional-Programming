// applying functions in right to left order
// so that f(g(x)) is written as compose(f, g)(x)

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const getUniqueWords = compose(
    setToList, 
    arrayToSet,
    splitinWords,
    toUpperCase,
    removeNonAlpha
);

// ^
// extracting and cleaning unique words
// declarative and clean
// easy to test and reuse