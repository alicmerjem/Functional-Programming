function promiseMemoize(fn) {
    const cache = {};

    return function(...args) {
        const strX = JSON.stringify(args); // converts arguments to a unique string key

        // if result exists in cache, return cached promise
        if(strX in cache) {
            return cache[strX];
        }

        // call function and store promise in cache
        cache[strX] = fn(...args).catch((err) => {
            delete cache[strX]; // remove failed promise from cache
            throw err; // rethrow error so caller knows it failed
        });
        return cache[strX]; // return the promise
    };
}

const fetchData = promiseMemoize(async (id) => {
    console.log(`Fetching for id: ${id}`);
    const res = await
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.json();
});

fetchData(1).then(console.log);
fetchData(1).then(console.log); // the second call uses the cached promise