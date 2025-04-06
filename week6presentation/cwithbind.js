// bind() is used to fix one argument at a time

function curry(fn) {
    return fn.length === 0
    ? fn()
    : (x) => curry(fn.bind(null, x));
}