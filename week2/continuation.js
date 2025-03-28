// instead of returning values, functions pass results to another function

function add(x, y, continuation) {
    continuation(x, y);
}
add(2, 3, continuation);

// this allows stacking, easier functions composition and is foundation for callback based progamming
