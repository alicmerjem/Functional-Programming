function promiseMemoize(fn) {
    const cache = {};

    return function(...args) {
        const strX = JSON.stringify(args);
        if(strX in cache) {
            return cache[strX];
        }
        cache[strX] = fn(...args).catch((err) => {
            delete cache[strX];
            throw err;
        });
        return cache[strX];
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