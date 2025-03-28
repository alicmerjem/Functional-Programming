// write a pure function doubleArray that takes an array of numbers and returns an array where each number is doubled

const doubleArray = (arr) => {
    let result = [...arr];
    for (let i = 0; i < result.length; i++) {
        result[i] *= 2;
    }
    return result;
}