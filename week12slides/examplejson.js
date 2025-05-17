// example: safe json parsing - chaining with map
// handle json parsing as a value based operation

function safeParse(json) {
    try {
        return Either.right(JSON.parse(json));
    } catch (e) {
        return Either.left(e.message);
    }
}

safeParse('{"x":42}')
  .map(obj => obj.x)
  .map(x => x + 1);

// map(f) - apply f to success value
// flatMap(f) - chain computations that return either/maybe