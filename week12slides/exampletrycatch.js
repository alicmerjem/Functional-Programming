// functional try catch equivalent of the previous task
// wrap unsafe code in functions that return either or result
// and use map and flatmap to compose logic safely

function parseJSON(input) {
    try {
        return JSON.parse(unput);
    } catch (e) {
        return null;
    }
}

function tryCatch(fn) {
    try {
        return new Right(fn());
    } catch (e) {
        return new Left(e);
    }
}

const safeParse = (str) => tryCatch(() => JSON.parse(str));
const result = safeParse('{"x": 42}')
  .map(obj => obj.x)
  .map(x => x + 1);
console.log(result); // Right(43)
