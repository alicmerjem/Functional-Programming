// applies the map function first and then the flat function
// extracting last names

const names = ["Winston Churchill", "Plato", "Abraham Lincoln"];

const lastNames = names.flatMap(x => {
    const s = x.split(" ");
    return s.length === 1 ? [] : s.splice(1);
});

console.log(lastNames);