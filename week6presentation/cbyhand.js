// we can buod currying into the function definition itself
// but handling all special cases of each function can be messy

const sum = (x, y) => {
    if (x!== undefined && y!== undefined) {
        return x + y;
    }
    else if (x!== undefined && y== undefined) {
        return (z) => sum(x, z);
    }
    else { // both x and y are undefined
        return sum;
    }
};

sum(3, 5); // 8
const add3 = sum(3); 
add3(5); // 8
sum(3)(5); // 8