// creates a chain of unary functions

// normal version
const make3 = (a, b, c) => `${a}:${b}:${c}`;

// curried version
const make3Curried = (a) => (b) => (c) => `${a}:${b}:${c}`;

make3("a", 2, "z"); // a:2:z
make3Curried("a")(2)("z"); // a:2:z